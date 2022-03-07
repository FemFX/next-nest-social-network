import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { Post } from "./entity/Post";
import { User } from "./entity/User";
import { PostModule } from "./post/post.module";
import { FileModule } from "./file/file.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";
import { ConfigModule } from "@nestjs/config";
import { Comment } from "./entity/Comment";
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: path.resolve(__dirname, "static"),
    // }),
    ConfigModule.forRoot({
      envFilePath: ".env",
    }),
    AuthModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "reddit",
      synchronize: true,
      logging: true,
      entities: [User, Post, Comment],
      migrations: ["src/migration/**/*.ts"],
      subscribers: ["src/subscriber/**/*.ts"],
    }),
    PostModule,
    FileModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
