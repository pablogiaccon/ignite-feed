import { Trash } from "phosphor-react";

import * as Modal from "@components/modal/modal";
import { DeleteCommentModal } from "./delete-comment-modal";

interface IProps {
  postId: string;
  commentId: string;
}

export const DeleteComment = (props: IProps) => {
  return (
    <Modal.Root>
      <Modal.Trigger
        className="text-gray-400 cursor-pointer leading-[0] hover:text-red-500 transition"
        title="Delete comment"
      >
        <Trash size={24} />
      </Modal.Trigger>

      <Modal.Portal>
        <Modal.Content>
          <DeleteCommentModal {...props} />
        </Modal.Content>
      </Modal.Portal>
      <Modal.Overlay />
    </Modal.Root>
  );
};
