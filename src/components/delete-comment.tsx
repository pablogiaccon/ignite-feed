import { Trash } from "phosphor-react";

import { usePostsContext } from "@hooks/usePostsContext";

interface IProps {
  postId: string;
  commentId: string;
}

export const DeleteComment = (props: IProps) => {
  const {
    postsState: [_, setPosts],
  } = usePostsContext();

  const { commentId, postId } = props;

  function handleDeleteComment() {
    setPosts((prevState) => {
      return prevState.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: post.comments.filter(
              (comment) => comment.id !== commentId
            ),
          };
        } else {
          return post;
        }
      });
    });
  }

  return (
    <button
      onClick={handleDeleteComment}
      className="text-gray-400 cursor-pointer leading-[0] hover:text-red-500 transition"
      title="Delete comment"
      type="button"
    >
      <Trash size={24} />
    </button>
  );
};
