import { usePostsContext } from "@hooks/usePostsContext";
import { ThumbsUp } from "phosphor-react";

interface ICommentClaps {
  claps: string[];
  source: "comment";
  postId: string;
  commentId: string;
}

interface IPostClaps {
  claps: string[];
  source: "post";
  postId: string;
  commentId?: never;
}

type TProps = ICommentClaps | IPostClaps;

export const Claps = (props: TProps) => {
  const {
    postsState: [, setPosts],
    userId,
  } = usePostsContext();
  const { claps, source, postId, commentId } = props;

  const clapsCount = claps.length;
  const hasUserClaps = claps.some((id) => id === userId);

  function handleClap() {
    setPosts((prevState) => {
      return prevState.map((post) => {
        if (post.id === postId) {
          if (source === "post") {
            return {
              ...post,
              claps: [...post.claps, userId],
            };
          } else {
            return {
              ...post,
              comments: post.comments.map((comment) => {
                if (comment.id === commentId) {
                  return {
                    ...comment,
                    claps: [...comment.claps, userId],
                  };
                } else {
                  return comment;
                }
              }),
            };
          }
        } else {
          return post;
        }
      });
    });
  }

  return (
    <button
      onClick={handleClap}
      className={`text-gray-400 cursor-pointer flex items-center hover:text-green-300 transition rounded-sm ${
        hasUserClaps && `text-green-300`
      }`}
      type="button"
    >
      <ThumbsUp className="mr-2" size={20} />
      Claps{" "}
      <span className="before:px-1 before:content-['\2022']">{clapsCount}</span>
    </button>
  );
};
