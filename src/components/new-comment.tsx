import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { isEmpty } from "lodash";

import { usePostsContext } from "@hooks/usePostsContext";
import { IPostComment } from "@models/index";
import { USER_DATA } from "../mocks/user";

import styles from "../styles/post.module.css";

interface IProps {
  postId: string;
}

export const NewComment = (props: IProps) => {
  const { postId } = props;

  const { id: userId, image, name, role } = USER_DATA;

  const {
    postsState: [, setPosts],
  } = usePostsContext();

  const [newComment, setNewComment] = useState("");

  function handleSubmitComment(e: FormEvent) {
    e.preventDefault();

    const newPostComment: IPostComment = {
      author: {
        id: userId,
        image,
        name,
        role,
      },
      claps: [],
      content: {
        content: newComment,
        type: "paragraph",
      },
      id: uuidv4(),
      publishedAt: new Date(),
    };
    setPosts((prevState) => {
      return prevState.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, newPostComment],
          };
        } else {
          return post;
        }
      });
    });
    setNewComment("");
  }

  const isNewCommentEmpty = isEmpty(newComment);

  return (
    <form
      className={`w-full pt-6 ${styles.formComment}`}
      onSubmit={handleSubmitComment}
    >
      <strong className="text-sm text-gray-100">Give your feedback</strong>

      <textarea
        className="w-full bg-gray-900 border-0 resize-none h-24 p-4 rounded-lg text-gray-100 text-sm mt-4"
        placeholder="Left a comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />

      <footer>
        <button
          className="px-6 py-3 mt-4 border-0 text-sm bg-green-500 text-white font-bold cursor-pointer rounded-lg transition hover:valid:bg-green-300 disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={isNewCommentEmpty}
        >
          Submit
        </button>
      </footer>
    </form>
  );
};
