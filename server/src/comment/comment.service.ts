import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Comment } from "src/entity/Comment";
import { CreateCommentDto } from "./dto/create-comment.dto";

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment) private commentService: typeof Comment
  ) {}
  async create(
    createCommentDto: CreateCommentDto,
    post,
    req
  ): Promise<Comment> {
    const comment = await this.commentService.create({ ...createCommentDto });
    comment.post = post;
    comment.user = req.user.id;
    comment.save();
    return comment;
  }
}
