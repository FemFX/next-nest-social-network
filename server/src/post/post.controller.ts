import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { JwtAuthGuard } from "src/auth/auth.guard";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostService } from "./post.service";

@Controller("post")
export class PostController {
  constructor(private postService: PostService) {}
  @UseInterceptors(FileInterceptor("image"))
  @UseGuards(JwtAuthGuard)
  @Post("create")
  create(@Body() createPostDto: CreatePostDto, @UploadedFile() image: any) {
    return this.postService.create(createPostDto, image);
  }
  @Get()
  fetchPosts(){
    return this.postService.all()
  }
  @UseGuards(JwtAuthGuard)
  @Get("/:id/like")
  like(@Param("id") id: number) {
    return this.postService.like(id);
  }
}
