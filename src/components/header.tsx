import igniteLogo from "@assets/ignite-feed.svg";

export const Header = () => {
  return (
    <header className="bg-gray-800 py-5 flex justify-center">
      <img className="h-8" src={igniteLogo} alt="Ignite logo" />
    </header>
  );
};
