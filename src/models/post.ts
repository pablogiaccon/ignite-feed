export interface IPost {
  id: string;
  author: IPostAuthor;
  publishedAt: Date;
  content: IPostContent[];
  comments: IPostComment[];
  claps: string[];
}

export interface IPostAuthor {
  name: string;
  id: string;
  image: string;
  role: string;
}

export interface IPostContent {
  type: "paragraph" | "link";
  content: string;
}

export interface IPostComment {
  id: string;
  author: IPostAuthor;
  publishedAt: Date;
  content: IPostContent;
  claps: string[];
}
