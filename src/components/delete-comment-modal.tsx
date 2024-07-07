import { useModalContext } from "@components/modal/modal";
import { usePostsContext } from "@hooks/usePostsContext";

interface IProps {
  postId: string;
  commentId: string;
}

export const DeleteCommentModal = (props: IProps) => {
  const {
    postsState: [, setPosts],
  } = usePostsContext();
  const { onClose } = useModalContext();

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
    onClose();
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <h4 className="text-white text-2xl font-bold">Delete comment</h4>

      <p className="text-white text-base">
        Are you sure you want to delete this comment?
      </p>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={onClose}
          className="flex items-center justify-center py-3 px-8 rounded-lg text-white hover:bg-gray-600 transition"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleDeleteComment}
          className="flex items-center justify-center py-3 px-8 rounded-lg bg-gray-700 text-red-500 hover:text-green-300 hover:bg-gray-600 transition"
        >
          Yes, delete
        </button>
      </div>
    </div>
  );
};
