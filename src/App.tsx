import { PostProvider } from "./hooks";

import { Sidebar } from "@components/sidebar";
import { Header } from "@components/header";
import { PostList } from "@components/post-list";

import "./styles/global.css";

export const App = () => {
  return (
    <>
      <Header />

      <div className="max-w-5xl my-8 mx-auto px-4 grid grid-cols-['1fr'] gap-8 items-start md:grid-cols-main">
        <Sidebar />

        <main>
          <PostProvider>
            <PostList />
          </PostProvider>
        </main>
      </div>
    </>
  );
};
