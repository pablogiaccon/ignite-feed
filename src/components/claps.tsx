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
  const { claps, source, postId, commentId } = props;

  const clapsCount = claps.length;

  function handleClap() {}

  return (
    <button
      onClick={handleClap}
      className="text-gray-400 cursor-pointer flex items-center hover:text-green-300 transition rounded-sm"
      type="button"
    >
      <ThumbsUp className="mr-2" size={20} />
      Claps{" "}
      <span className="before:px-1 before:content-['\2022']">{clapsCount}</span>
    </button>
  );
};
