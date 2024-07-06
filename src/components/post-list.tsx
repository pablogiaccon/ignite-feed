import { Post } from "@components/post";
import { usePostsContext } from "@hooks/usePostsContext";

export const PostList = () => {
  const {
    postsState: [posts],
  } = usePostsContext();

  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </>
  );
};
