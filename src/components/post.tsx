import { Avatar } from "./avatar";
import { Comment } from "./comment";

import styles from "../styles/post.module.css";

export const Post = () => {
  return (
    <article className="bg-gray-800 rounded-lg p-10">
      <header className="flex gap-4 justify-between">
        <div className="flex gap-4">
          <Avatar />

          <div className="flex flex-col">
            <strong className="text-gray-100">Pablo Giaccon</strong>
            <span className="text-sm text-gray-400">
              Senior Frontend Developer
            </span>
          </div>
        </div>

        <time
          className="text-sm text-gray-400"
          title="05 of July at 16:00h"
          dateTime="2024-07-05 16:00:00"
        >
          Published 1 hour ago
        </time>
      </header>

      <div className="text-sm text-gray-300 mt-6">
        <p className="mt-4">Fala galeraa 👋</p>

        <p className="mt-4">
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p className="mt-4">
          👉{" "}
          <a
            className="font-bold text-green-500 hover:text-green-300 transition"
            href="#"
          >
            jane.design/doctorcare
          </a>
        </p>

        <p className="mt-4">
          <a
            className="font-bold text-green-500 hover:text-green-300 transition"
            href="#"
          >
            #novoprojeto
          </a>{" "}
          <a
            className="font-bold text-green-500 hover:text-green-300 transition"
            href="#"
          >
            #nlw
          </a>{" "}
          <a
            className="font-bold text-green-500 hover:text-green-300 transition"
            href="#"
          >
            #rocketseat
          </a>
        </p>
      </div>

      <form
        className={`w-full mt-6 pt-6 border-t border-t-gray-600 focus-within:visible focus-within:max-h-none ${styles.formComment}`}
        action=""
      >
        <strong className="text-sm text-gray-100">Give your feedback</strong>

        <textarea
          className="w-full bg-gray-900 border-0 resize-none h-24 p-4 rounded-lg text-gray-100 text-sm mt-4"
          placeholder="Left a comment"
        />

        <footer>
          <button
            className="px-6 py-4 mt-4 border-0 bg-green-500 text-white font-bold cursor-pointer rounded-lg transition hover:bg-green-300"
            type="submit"
          >
            Submit
          </button>
        </footer>
      </form>

      <div className="mt-8 flex flex-col gap-6">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};
