interface IProps {
  highlight?: boolean;
}

export const Avatar = (props: IProps) => {
  const { highlight = true } = props;
  return (
    <img
      className={`w-12 h-12 rounded-lg  ${
        highlight &&
        `border-4 border-gray-800 outline outline-2 outline-green-500 box-content`
      } `}
      src="https:github.com/pablogiaccon.png"
      alt=""
    />
  );
};
