import { s, c } from "../../val.config";
import { sections } from "./sectionSchema.val";

const pageSchema = s.object({
  title: s.string().maxLength(100),
  description: s.string(),
  sections,
});

export default c.define("/src/app/page.val.ts", pageSchema, {
  title: "Val Build Page",
  description:
    "This page is built with Val Build - the lightweight CMS where content is code.",
  sections: [
    {
      type: "hero",
      title: "Val Example Content",
      description: [
        {
          tag: "p",
          children: [
            { tag: "span", styles: ["bold"], children: ["Val Build"] },
            " is a lightweight CMS where content is code. It's offline first, so you can work from anywhere - with or without an internet connection. Your content is yours, you host it so it is free to use. Below you'll find some convenient links to get you started.",
          ],
        },
      ],
    },
    {
      type: "docs",
      title: "Let's go!",
      cards: [
        {
          title: "Val Studio",
          description:
            "View all of your content in a structured way, and edit it with a visual editor - locally or in the cloud",
          href: "/val",
        },
        {
          title: "Val Admin",
          description:
            "Sign up, add editors and let them update content inside your production app",
          href: "https://admin.val.build",
        },
        {
          title: "Docs",
          description: "Read the documentation for Val Build",
          href: "https://val.build/docs",
        },
        {
          title: "VS Code Extension",
          description: "Set up Val Build in VS Code",
          href: "https://marketplace.visualstudio.com/items?itemName=valbuild.vscode-val-build",
        },
      ],
    },
  ],
});
