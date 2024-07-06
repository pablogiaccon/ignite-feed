import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./avatar";

export const Comment = () => {
  return (
    <div className="flex gap-4">
      <Avatar src="https:github.com/pablogiaccon.png" highlight={false} />

      <div className="flex-1 flex gap-4 flex-col">
        <div className="bg-gray-700 p-4 rounded-lg flex gap-4 flex-col">
          <header className="flex items-start justify-between">
            <div className="flex flex-col">
              <strong className="text-gray-100 text-sm">Pablo Giaccon</strong>
              <time
                className="text-xs text-gray-400"
                title="05 of July at 16:00h"
                dateTime="2024-07-05 16:00:00"
              >
                Published 1 hour ago
              </time>
            </div>

            <button
              className="text-gray-400 cursor-pointer leading-[0] hover:text-red-500 transition"
              title="Delete comment"
              type="button"
            >
              <Trash size={24} />
            </button>
          </header>

          <p className="text-gray-300">Muito bom Devon, parabéns! 👏👏</p>
        </div>

        <footer>
          <button
            className="text-gray-400 cursor-pointer flex items-center hover:text-green-300 transition rounded-sm"
            type="button"
          >
            <ThumbsUp className="mr-2" size={20} />
            Claps{" "}
            <span className="before:px-1 before:content-['\2022']">20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
