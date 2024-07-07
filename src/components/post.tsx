import { formatDistanceToNow } from "date-fns";

import { IPost, IPostContent } from "@models/index";
import { formatDate } from "@utils/format-date";

import { Avatar } from "./avatar";
import { Comment } from "./comment";

import styles from "../styles/post.module.css";
import { Claps } from "./claps";

export const Post = (props: IPost) => {
  const {
    publishedAt,
    author: { name, image },
    content,
    role,
    comments,
    claps,
    id,
  } = props;

  const publishedDateFormatted = formatDate(publishedAt);

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  function getContentElement(line: IPostContent) {
    try {
      switch (line.type) {
        case "paragraph": {
          return line.content;
        }
        case "link": {
          return (
            <a
              className="font-bold text-green-500 hover:text-green-300 transition"
              href="#"
            >
              {line.content}
            </a>
          );
        }
        default: {
          throw "Content type not mapped!";
        }
      }
    } catch (error) {
      console.log("error: ", error);
    }
  }

  return (
    <article className="bg-gray-800 rounded-lg p-10">
      <header className="flex gap-4 justify-between">
        <div className="flex gap-4">
          <Avatar src={image} />

          <div className="flex flex-col">
            <strong className="text-gray-100">{name}</strong>
            <span className="text-sm text-gray-400">{role}</span>
          </div>
        </div>

        <time
          className="text-sm text-gray-400"
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          Published {publishedDateRelativeToNow}
        </time>
      </header>

      <div className="text-sm text-gray-300 mt-6">
        {content.map((line, index) => (
          <p key={index} className="mt-4">
            {getContentElement(line)}
          </p>
        ))}
      </div>

      <div className="mt-6 mb-4 w-full border-t border-t-gray-600" />

      <Claps claps={claps} source="post" postId={id} />

      <form
        className={`w-full pt-6 focus-within:visible focus-within:max-h-none ${styles.formComment}`}
        action=""
      >
        <strong className="text-sm text-gray-100">Give your feedback</strong>

        <textarea
          className="w-full bg-gray-900 border-0 resize-none h-24 p-4 rounded-lg text-gray-100 text-sm mt-4"
          placeholder="Left a comment"
        />

        <footer>
          <button
            className="px-6 py-4 mt-4 border-0 bg-green-500 text-white font-bold cursor-pointer rounded-lg transition hover:bg-green-300"
            type="submit"
          >
            Submit
          </button>
        </footer>
      </form>

      {!!comments.length && (
        <div className="mt-8 flex flex-col gap-6">
          {comments.map((comment, index) => (
            <Comment
              key={`${index}-${comment.publishedAt.toISOString()}`}
              comment={comment}
              postId={id}
            />
          ))}
        </div>
      )}
    </article>
  );
};
