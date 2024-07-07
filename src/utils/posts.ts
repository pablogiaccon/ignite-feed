import { v4 as uuidv4 } from "uuid";

import { IPostComment, IPostContent } from "@models/index";

// Helper function to generate random content
export const getRandomContent = (): IPostContent[] => {
  const contentTypes = ["paragraph", "link"];
  const paragraphs = [
    "This is an example paragraph content.",
    "Another insightful paragraph to add value to the post.",
    "Sharing some more thoughts and insights here.",
    "Expanding on the topic with additional information.",
    "Concluding thoughts and reflections.",
  ];
  const links = [
    "https://example.com/resource1",
    "https://example.com/resource2",
    "https://example.com/resource3",
    "https://example.com/resource4",
    "https://example.com/resource5",
  ];

  const content: IPostContent[] = [];
  const numContents = Math.floor(Math.random() * 5) + 1;

  for (let i = 0; i < numContents; i++) {
    const type = contentTypes[Math.floor(Math.random() * contentTypes.length)];
    const contentItem: IPostContent = {
      type: type as "paragraph" | "link",
      content:
        type === "paragraph"
          ? paragraphs[Math.floor(Math.random() * paragraphs.length)]
          : links[Math.floor(Math.random() * links.length)],
    };
    content.push(contentItem);
  }

  return content;
};

// Helper function to generate random comments
export const getRandomComments = (): IPostComment[] => {
  const names = [
    "John Doe",
    "Jane Smith",
    "Alice Johnson",
    "Bob Brown",
    "Catherine White",
  ];
  const commentParagraphs = [
    "This is a great post!",
    "Thanks for sharing this information.",
    "I found this very helpful.",
    "Great insights, much appreciated.",
    "Interesting read, thank you!",
  ];
  const roles = [
    "Senior Developer",
    "Front-end Developer",
    "Full-stack Developer",
    "QA Engineer",
    "DevOps Engineer",
  ];

  const comments: IPostComment[] = [];
  const numComments = Math.floor(Math.random() * 5) + 1;

  for (let i = 0; i < numComments; i++) {
    const numClaps = Math.floor(Math.random() * 50) + 1;
    const name = names[Math.floor(Math.random() * names.length)];
    const role = roles[Math.floor(Math.random() * roles.length)];

    const comment: IPostComment = {
      id: uuidv4(),
      author: {
        name: name,
        id: uuidv4(),
        image: `https://robohash.org/${name.replace(
          " ",
          ""
        )}.png?size=50x50&set=set5`,
        role,
      },
      publishedAt: new Date(
        Date.now() - Math.floor(Math.random() * 1000000000)
      ),
      claps: getRandomClaps(numClaps),
      content: {
        type: "paragraph",
        content:
          commentParagraphs[
            Math.floor(Math.random() * commentParagraphs.length)
          ],
      },
    };
    comments.push(comment);
  }

  return comments;
};

// Helper function to generate random claps
export const getRandomClaps = (numAuthors: number): string[] => {
  const clapAuthors: string[] = [];
  for (let i = 0; i < numAuthors; i++) {
    clapAuthors.push(uuidv4());
  }
  return clapAuthors;
};
