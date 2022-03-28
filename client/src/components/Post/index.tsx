import { IPost } from "../../types/post";
import "./Post.scss";

const Post: React.FC<IPost> = ({
  comments,
  created_at,
  dislikes,
  likes,
  text,
  title,
  updated_at,
  user,
  views,
}): JSX.Element => {
  return (
    <div className="card">
      <div className="text-center">{title}</div>
      <span>{text}</span>
      <div className="params">
        <div>{likes}</div>
        <div>{dislikes}</div>
        <div>{views}</div>
        <div>{comments.length}</div>
      </div>
    </div>
  );
};

export default Post;
