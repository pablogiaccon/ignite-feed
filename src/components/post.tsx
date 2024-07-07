import { formatDistanceToNow } from "date-fns";

import { IPost, IPostContent } from "@models/index";
import { formatDate } from "@utils/format-date";

import { Avatar } from "./avatar";

import { Claps } from "./claps";
import { NewComment } from "./new-comment";
import { CommentsList } from "./comments-list";

export const Post = (props: IPost) => {
  const {
    publishedAt,
    author: { name, image, role },
    content,
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

      <NewComment postId={id} />

      <CommentsList comments={comments} postId={id} />
    </article>
  );
};
