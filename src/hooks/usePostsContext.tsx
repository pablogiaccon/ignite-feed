import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { isEmpty } from "lodash";
import { v4 as uuidv4 } from "uuid";

import { IPost } from "@models/index";
import { POSTS } from "../mocks/posts";

interface IContextData {
  postsState: [IPost[], Dispatch<SetStateAction<IPost[]>>];
  userId: string;
}

const userId = uuidv4();

const PostContext = createContext<IContextData>({} as IContextData);

interface IProps {
  children: ReactNode;
}

export function PostProvider(props: IProps) {
  const postsState = useState<IPost[]>(POSTS);

  return (
    <PostContext.Provider value={{ postsState, userId }}>
      {props.children}
    </PostContext.Provider>
  );
}

export function usePostsContext() {
  const context = useContext(PostContext);

  if (isEmpty(context)) {
    throw new Error("usePostContext must be used within a PostProvider");
  }

  return context;
}
