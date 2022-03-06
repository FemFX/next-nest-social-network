import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Post } from "src/entity/Post";
import { FileService } from "src/file/file.service";
import { CreatePostDto } from "./dto/create-post.dto";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postService: typeof Post,
    private fileService: FileService
  ) {}
  async create(createPostDto: CreatePostDto, image: any): Promise<Post> {
    const { text, title, user } = createPostDto;
    const fileName = await this.fileService.createFile(image);
    const post = await this.postService.create({
      title,
      text,
      image: fileName,
    });
    post.user = user;
    post.save();
    return post;
  }
  async like(id: number): Promise<Post> {
    const post = await Post.findOne({ id });
    if (!post) {
      throw new HttpException("Произошла ошибка", HttpStatus.BAD_REQUEST);
    }
    post.likes += 1;
    post.save();
    return post;
  }
  async all(): Promise<Post[]> {
    const posts = await this.postService
      .createQueryBuilder("post")
      .leftJoinAndSelect("post.user", "user")
      .getMany();
    return posts;
  }
}
