import { sectionListPreview } from "@/components/sections/anySection.val";
import { imageTextSection } from "@/components/sections/imageTextSection.val";
import { s, c, nextAppRouter } from "../../../../../val.config";
import { metaPreview, metaSchema } from "@/shared/meta.val";

const productPageSchema = s.object({
  meta: metaSchema,
  sections: s.array(
    s
      .union(
        "type",
        // Add other sections here
        imageTextSection,
      )
      // The preview lives on the SECTION, the value being previewed - not on
      // the array around it, which would preview the whole list as one value.
      .preview(sectionListPreview),
  ),
});

export default c.define(
  "/src/app/(main)/products/[sku]/page.val.ts",
  s.router(
    nextAppRouter,
    // The preview lives on the PAGE (the value being previewed), not on the
    // router: the router's rows, search and references all read it from there.
    productPageSchema.preview(({ val }) => {
      return metaPreview(val.meta);
    }),
  ),
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
