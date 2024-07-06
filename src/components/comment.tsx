import { formatDistanceToNow } from "date-fns";

import { IPostComment } from "@models/index";
import { formatDate } from "@utils/index";

import { Avatar } from "./avatar";
import { Claps } from "./claps";
import { DeleteComment } from "./delete-comment";

interface IProps {
  postId: string;
  comment: IPostComment;
}

export const Comment = (props: IProps) => {
  const {
    comment: {
      author: { image, name },
      claps,
      content,
      publishedAt,
      id,
    },
    postId,
  } = props;

  const publishedDateFormatted = formatDate(publishedAt);

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  return (
    <div className="flex gap-4">
      <Avatar src={image} highlight={false} />

      <div className="flex-1 flex gap-4 flex-col">
        <div className="bg-gray-700 p-4 rounded-lg flex gap-4 flex-col">
          <header className="flex items-start justify-between">
            <div className="flex flex-col">
              <strong className="text-gray-100 text-sm">{name}</strong>
              <time
                className="text-xs text-gray-400"
                title={publishedDateFormatted}
                dateTime={publishedAt.toISOString()}
              >
                Published {publishedDateRelativeToNow}
              </time>
            </div>

            <DeleteComment postId={postId} commentId={id} />
          </header>

          <p className="text-gray-300">{content.content}</p>
        </div>

        <footer>
          <Claps
            claps={claps}
            source="comment"
            postId={postId}
            commentId={id}
          />
        </footer>
      </div>
    </div>
  );
};
