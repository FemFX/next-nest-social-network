import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPost } from "../types/post";

const Post = () => {
  const [post, setPost] = useState<IPost | undefined>(undefined);
  const param = useParams();
  useEffect(() => {
    getPost();
  }, []);
  const getPost = async () => {
    const { data } = await axios.get<IPost>(
      `http://localhost:4000/post/${param.id}`
    );
    setPost(data);
  };
  
  return <div>Post</div>;
};

export default Post;
