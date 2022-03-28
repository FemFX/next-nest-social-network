export interface IPost {
  id: any;
  created_at: any;
  updated_at: any;
  title: string;
  text: string;
  likes: number;
  dislikes: number;
  views: number;
  user: any;
  comments: any;
}
export interface IPostState {
  posts: IPost[];
  loading: boolean;
  error: string;
}
