import { Link } from "react-router-dom";
import { IPost } from "../../types/post";
import PostPage from "../../pages/Post";
import { axios } from "../../utils/axios";
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
  id,
}): JSX.Element => {
  const like = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    axios.get(`http://localhost:4000/post/${id}/like`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };
  return (
    <Link to={`/post/${id}`}>
      <div className="card">
        <div>{user.name}</div>
        <div className="text-center" style={{ fontWeight: "bold" }}>
          {title}
        </div>
        <span>{text}</span>
        <div className="params">
          <div onClick={like}>
            <img
              src="https://image.similarpng.com/very-thumbnail/2020/11/Black-Like-icon-design-illustration-on-transparent-background-PNG.png"
              alt="Like"
              width={18}
              height={18}
            />
            {likes}
          </div>
          <div>
            <img
              src="https://www.freeiconspng.com/thumbs/youtube-dislike-png/black-and-white-youtube-dislike-png-icon-22.png"
              alt="Dislike"
              width={18}
              height={18}
            />
            {dislikes}
          </div>
          <div>
            <img
              src="https://toppng.com/uploads/preview/eye-icon-black-facebook-view-as-icon-11553490712vmdnzlp7ei.png  "
              alt="Dislike"
              width={18}
              height={18}
            />
            {views}
          </div>
          <div>
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_322817.png"
              alt="Dislike"
              width={18}
              height={18}
            />
            {comments.length}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
