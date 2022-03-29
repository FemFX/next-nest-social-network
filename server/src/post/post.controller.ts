import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { JwtAuthGuard } from "src/auth/auth.guard";
import { CommentService } from "src/comment/comment.service";
import { CreateCommentDto } from "src/comment/dto/create-comment.dto";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostService } from "./post.service";

@Controller("post")
export class PostController {
  constructor(
    private postService: PostService,
    private commentService: CommentService
  ) {}
  @UseInterceptors(FileInterceptor("image"))
  @UseGuards(JwtAuthGuard)
  @Post("create")
  create(
    @Body() createPostDto: CreatePostDto,
    @UploadedFile() image: any,
    @Req() req
  ) {
    return this.postService.create(createPostDto, image, req);
  }
  @Get()
  fetchPosts() {
    return this.postService.all();
  }
  @UseGuards(JwtAuthGuard)
  @Get("/:id/like")
  like(@Param("id") id: number) {
    return this.postService.like(id);
  }
  @UseGuards(JwtAuthGuard)
  @Post("/:id/addComment")
  createComment(
    @Body() createCommentDto: CreateCommentDto,
    @Param("id") id,
    @Req() req
  ) {
    return this.commentService.create(createCommentDto, +id, req);
  }
  @Post("search")
  search(@Body("query") query: string) {
    return this.postService.search(query);
  }
  @Get("/:id")
  findById(@Param("id") id) {
    return this.postService.findPost(id);
  }
}
