import { MouseEvent, ButtonHTMLAttributes } from "react";

import { useModalContext } from "./modal";

type TTriggerProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const ModalTrigger = (props: TTriggerProps) => {
  const { children, onClick, ...rest } = props;

  const { onOpen } = useModalContext();

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    onOpen();

    if (onClick) {
      onClick(e);
    }
  }

  return (
    <button type="button" onClick={handleClick} {...rest}>
      {children}
    </button>
  );
};
