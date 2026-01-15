import { sectionListRender } from "@/components/sections/anySection.val";
import { s, c, nextAppRouter } from "../../../val.config";
import { imageTextSection } from "../../components/sections/imageTextSection.val";
import { titleTextSection } from "../../components/sections/titleTextSection.val";
import { metaRender, metaSchema } from "@/shared/meta.val";

const mainPageSchema = s.object({
  meta: metaSchema,
  sections: s
    .array(
      s.union(
        "type",
        // Add other sections here
        titleTextSection,
        imageTextSection,
      ),
    )
    .render({
      as: "list",
      select: sectionListRender,
    }),
});

export default c.define(
  "/src/app/(main)/page.val.ts",
  s.router(nextAppRouter, mainPageSchema).render({
    as: "list",
    select: ({ val }) => {
      return metaRender(val.meta);
    },
  }),
  {
    "/": {
      meta: {
        title: "Home",
        description:
          "This page is built with Val Build - the lightweight CMS where content is code.",
      },
      sections: [
        {
          type: "title-text",
          title: "This page is built using Val",
          text: [
            {
              tag: "p",
              children: [
                "Val is a fully fledged CMS where you write ",
                {
                  tag: "span",
                  styles: ["bold"],
                  children: ["content as code"],
                },
                " in TypeScript or JavaScript files. It provides a clean separation of content, handling of routes, images and richtext.",
              ],
            },
            {
              tag: "h2",
              children: ["Key Features"],
            },
            {
              tag: "ul",
              children: [
                {
                  tag: "li",
                  children: [
                    {
                      tag: "p",
                      children: [
                        {
                          tag: "span",
                          styles: ["bold"],
                          children: ["Local-first"],
                        },
                        " — Work with your content locally with fast access and offline capabilities",
                      ],
                    },
                  ],
                },
                {
                  tag: "li",
                  children: [
                    {
                      tag: "p",
                      children: [
                        {
                          tag: "span",
                          styles: ["bold"],
                          children: ["No signup required"],
                        },
                        " — Get started immediately without creating an account",
                      ],
                    },
                  ],
                },
                {
                  tag: "li",
                  children: [
                    {
                      tag: "p",
                      children: [
                        {
                          tag: "span",
                          styles: ["bold"],
                          children: ["Visual editing"],
                        },
                        " — Edit content with a visual editor via Val Studio",
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          buttons: [
            {
              type: "external",
              label: "Open Val Studio",
              href: "/val",
              variant: "accent",
            },
            {
              type: "external",
              label: "Read the Docs",
              href: "https://val.build/docs",
              variant: "secondary",
            },
          ],
        },
        {
          type: "title-text",
          title: "How Val Works",
          text: [
            {
              tag: "p",
              children: [
                "Val operates in two modes: ",
                { tag: "span", styles: ["bold"], children: ["Developer Mode"] },
                " when running locally, and ",
                {
                  tag: "span",
                  styles: ["bold"],
                  children: ["Production Mode"],
                },
                " when deployed. Both use a patch-based system for previewing changes before they go live.",
              ],
            },
            {
              tag: "h3",
              children: ["Developer Mode"],
            },
            {
              tag: "p",
              children: [
                "Make changes in Val Studio at ",
                { tag: "span", styles: ["italic"], children: ["/val"] },
                ", preview in draft mode, then save to apply patches directly to your content files. Commit changes to Git like any other code change.",
              ],
            },
            {
              tag: "h3",
              children: ["Production Mode"],
            },
            {
              tag: "p",
              children: [
                "Connect your project to Val Build to enable non-technical team members to edit content in production. Changes are stored as patches, previewed in draft mode, then published as Git commits.",
              ],
            },
          ],
          buttons: [
            {
              type: "external",
              label: "Val Admin",
              href: "https://admin.val.build",
              variant: "primary",
            },
          ],
        },
        {
          type: "title-text",
          title: "Example Pages",
          text: [
            {
              tag: "p",
              children: [
                "This template includes example product pages to demonstrate Val's routing. These are defined in ",
                { tag: "span", styles: ["italic"], children: ["page.val.ts"] },
                " files using the TABS pattern: ",
                {
                  tag: "span",
                  styles: ["bold"],
                  children: ["Types, Atoms, Base, Sections"],
                },
                ". Feel free to delete them — they're just examples.",
              ],
            },
          ],
          buttons: [
            {
              type: "internal",
              href: "/products/product-1",
              label: "View example product",
              variant: "secondary",
            },
          ],
        },
      ],
    },
  },
);
