import { useModalContext } from "./modal";

type TOverlayProps = React.HTMLAttributes<HTMLDivElement>;

export const ModalOverlay = (props: TOverlayProps) => {
  const { open } = useModalContext();

  if (!open) return null;

  return (
    <div
      {...props}
      className="fixed w-screen h-screen top-0 bottom-0 left-0 right-0 bg-gray-900 opacity-75"
    />
  );
};
