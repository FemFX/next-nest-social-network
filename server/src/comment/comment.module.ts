import { Module } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Comment } from "src/entity/Comment";
import { AuthModule } from "src/auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([Comment]), AuthModule],
  providers: [CommentService],
  exports: [CommentService],
})
export class CommentModule {}
