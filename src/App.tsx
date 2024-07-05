import { Sidebar } from "@components/sidebar";
import "./styles/global.css";

import { Header } from "@components/header";
import { Post } from "@components/post";

export const App = () => {
  return (
    <>
      <Header />

      <div className="max-w-5xl my-8 mx-auto px-4 grid grid-cols-main gap-8 items-start">
        <Sidebar />

        <main>
          <Post />
        </main>
      </div>
    </>
  );
};
