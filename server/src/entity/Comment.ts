import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Initial } from "./initial/Initial";
import { Post } from "./Post";
import { User } from "./User";

@Entity("comments")
export class Comment extends Initial {
  @Column({
    nullable: false,
  })
  title: string;
  @Column({
    nullable: false,
  })
  text: string;
  @Column({
    default: 0,
  })
  likes: number;
  @Column({
    default: 0,
  })
  dislikes: number;
  @ManyToOne(() => User, (user) => user.comments)
  user: User;
  @ManyToOne(() => Post, (post) => post.comments, {
    onDelete: "CASCADE",
  })
  post: Post;
}
