import { createPortal } from "react-dom";

type TPortalProps = React.HTMLAttributes<HTMLDivElement> & {
  container?: Element;
};

export const ModalPortal = (props: TPortalProps) => {
  const { container = globalThis.document.body, ...rest } = props;

  if (!container) return null;

  return createPortal(<div {...rest} />, container);
};
