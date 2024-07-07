import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

import { useModalContext } from "./modal";

type TContentProps = React.HTMLAttributes<HTMLDivElement>;

export const ModalContent = (props: TContentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { children, ...rest } = props;

  const { onClose, open } = useModalContext();

  useOnClickOutside(ref, onClose);

  if (!open) return null;

  return (
    <div
      ref={ref}
      role="dialog"
      className="bg-gray-800 rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6"
      {...rest}
    >
      {children}
    </div>
  );
};
