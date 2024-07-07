import { IPost } from "@models/index";
import {
  getRandomContent,
  getRandomComments,
  getRandomClaps,
} from "@utils/index";
import { v4 as uuidv4 } from "uuid";

export const POSTS: IPost[] = [
  {
    id: uuidv4(),
    author: {
      name: "John Doe",
      id: uuidv4(),
      image: "https://robohash.org/JohnDoe.png?size=50x50&set=set5",
      role: "Senior Developer",
    },
    publishedAt: new Date("2024-06-15T10:00:00Z"),
    content: getRandomContent(),
    comments: getRandomComments(),
    claps: getRandomClaps(5),
  },
  {
    id: uuidv4(),
    author: {
      name: "Jane Smith",
      id: uuidv4(),
      image: "https://robohash.org/JaneSmith.png?size=50x50&set=set5",
      role: "Front-end Developer",
    },
    publishedAt: new Date("2024-06-20T14:30:00Z"),
    content: getRandomContent(),
    comments: getRandomComments(),
    claps: getRandomClaps(3),
  },
  {
    id: uuidv4(),
    author: {
      name: "Alice Johnson",
      id: uuidv4(),
      image: "https://robohash.org/AliceJohnson.png?size=50x50&set=set5",
      role: "Full-stack Developer",
    },
    publishedAt: new Date("2024-06-25T09:45:00Z"),
    content: getRandomContent(),
    comments: getRandomComments(),
    claps: getRandomClaps(4),
  },
  {
    id: uuidv4(),
    author: {
      name: "Bob Brown",
      id: uuidv4(),
      image: "https://robohash.org/BobBrown.png?size=50x50&set=set5",
      role: "QA Engineer",
    },
    publishedAt: new Date("2024-07-01T11:00:00Z"),
    content: getRandomContent(),
    comments: getRandomComments(),
    claps: getRandomClaps(2),
  },
  {
    id: uuidv4(),
    author: {
      name: "Catherine White",
      id: uuidv4(),
      image: "https://robohash.org/CatherineWhite.png?size=50x50&set=set5",
      role: "DevOps Engineer",
    },
    publishedAt: new Date("2024-07-05T16:00:00Z"),
    content: getRandomContent(),
    comments: getRandomComments(),
    claps: getRandomClaps(6),
  },
];
