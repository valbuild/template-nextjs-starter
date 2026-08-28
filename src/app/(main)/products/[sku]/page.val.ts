import { sectionListPreview } from "@/components/sections/anySection.val";
import { imageTextSection } from "@/components/sections/imageTextSection.val";
import { s, c, nextAppRouter } from "../../../../../val.config";
import { metaPreview, metaSchema } from "@/shared/meta.val";

const productPageSchema = s.object({
  meta: metaSchema,
  sections: s
    .array(
      s.union(
        "type",
        // Add other sections here
        imageTextSection,
      ),
    )
    .preview(sectionListPreview),
});

export default c.define(
  "/src/app/(main)/products/[sku]/page.val.ts",
  s.router(nextAppRouter, productPageSchema).preview(({ val }) => {
    return metaPreview(val.meta);
  }),
  {
    "/products/product-1": {
      meta: {
        title: "Product 1",
        description:
          "This page is built with Val Build - the lightweight CMS where content is code.",
      },
      sections: [
        {
          type: "image-text",
          title: "Product 1",
          text: [
            {
              tag: "p",
              children: [
                "This is a product page built with Val Build - the lightweight CMS where content is code.",
              ],
            },
          ],
          image: {
            path: "/public/val/globe.svg",
            width: 16,
            height: 16,
            mimeType: "image/svg+xml",
          },
        },
      ],
    },
  },
);
