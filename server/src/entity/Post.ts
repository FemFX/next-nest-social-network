import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Comment } from "./Comment";
import { Initial } from "./initial/Initial";
import { User } from "./User";

@Entity("posts")
export class Post extends Initial {
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
  @Column({
    default: 0,
  })
  views: number;
  // @Column({
  //   nullable: false,
  // })
  // image: string;
  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn()
  user: User;
  @OneToMany(() => Comment, (comment) => comment.post, { nullable: true })
  comments: Comment[];
}
