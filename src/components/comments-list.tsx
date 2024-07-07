import { isEmpty, orderBy } from "lodash";

import { IPostComment } from "@models/post";

import { Comment } from "./comment";
import { useMemo } from "react";

interface IProps {
  comments: IPostComment[];
  postId: string;
}

export const CommentsList = (props: IProps) => {
  const { comments, postId } = props;

  const orderedComments = useMemo(() => {
    return orderBy(comments, ["publishedAt"], ["desc"]);
  }, [comments]);

  if (isEmpty(orderedComments)) return null;

  return (
    <div className="mt-8 flex flex-col gap-6">
      {orderedComments.map((comment, index) => (
        <Comment
          key={`${index}-${comment.publishedAt.toISOString()}`}
          comment={comment}
          postId={postId}
        />
      ))}
    </div>
  );
};
