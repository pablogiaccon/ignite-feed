import { Post } from "@components/post";
import { usePostsContext } from "@hooks/usePostsContext";

export const PostList = () => {
  const {
    postsState: [posts],
  } = usePostsContext();

  return (
    <div className="flex flex-col gap-8">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};
