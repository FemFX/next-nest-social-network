import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Post from "../components/Post";
import { fetchPostsAction } from "../features/posts/actionCreator";

const Home = () => {
  const { posts, error, loading } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPostsAction());
  }, [dispatch]);
  return (
    <div>
      <div>{error}</div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <span className="text-center" style={{ marginLeft: "-340px"  }}>
            New Posts
          </span>
          <div>
            {!loading && posts.map((post) => <Post key={post.id} {...post} />)}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
