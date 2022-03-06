import { Column, Entity, OneToMany } from "typeorm";
import { Initial } from "./initial/Initial";
import { Post } from "./Post";

@Entity("users")
export class User extends Initial {
  @Column({
    nullable: false,
  })
  name: string;
  @Column({
    unique: true,
    nullable: false,
  })
  email: string;
  @Column({
    nullable: false,
  })
  password: string;
  @Column({
    type: "simple-json",
    nullable: true,
  })
  additional_info: {
    status: string;
    age: number;
    description: string;
    hobby: string;
    city: string;
  };
  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
