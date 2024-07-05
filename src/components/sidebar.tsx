import { PencilSimpleLine } from "phosphor-react";
import { Avatar } from "./avatar";

export const Sidebar = () => {
  return (
    <aside className="bg-gray-800 rounded-lg overflow-hidden">
      <img
        className="w-full h-20 object-cover"
        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <div className="flex flex-col items-center -mt-6">
        <Avatar />
        <strong className="mt-4 text-gray-100">Pablo Giaccon</strong>
        <span className="text-sm text-gray-400">Senior Frontend Developer</span>
      </div>

      <footer className="border-t border-t-gray-600 mt-6 p-8 pt-6">
        <a
          className="bg-transparent text-green-500 border border-green-500 rounded-lg px-6 font-bold h-14 flex gap-2 items-center justify-center transition hover:bg-green-500 hover:text-white"
          href="#"
        >
          <PencilSimpleLine size={20} />
          Edit your profile
        </a>
      </footer>
    </aside>
  );
};
