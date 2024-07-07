import { IPostAuthor } from "@models/index";
import { v4 as uuidv4 } from "uuid";

export const USER_DATA: IPostAuthor = {
  id: uuidv4(),
  name: "Lex Luthor",
  image: "https://robohash.org/JaneSmith.png?size=50x50&set=set5",
  role: "Principal Engineer",
};
