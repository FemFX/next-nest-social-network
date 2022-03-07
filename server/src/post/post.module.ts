import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "src/auth/auth.module";
import { CommentModule } from "src/comment/comment.module";
import { Post } from "src/entity/Post";
import { FileModule } from "src/file/file.module";
import { PostController } from "./post.controller";
import { PostService } from "./post.service";

@Module({
  imports: [AuthModule, CommentModule, FileModule, TypeOrmModule.forFeature([Post])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
