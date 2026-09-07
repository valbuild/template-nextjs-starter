import { sectionListPreview } from "@/components/sections/anySection.val";
import { imageTextSection } from "@/components/sections/imageTextSection.val";
import { s, c, nextAppRouter } from "../../../../../val.config";
import { metaPreview, metaSchema } from "@/shared/meta.val";

const productPageSchema = s
  .object({
    meta: metaSchema,
    sections: s.array(
      s
        .union(
          "type",
          // Add other sections here
          imageTextSection,
        )
        // On the union, not the array: a container's `.preview()` describes the
        // container since 0.109, and rows come from the item.
        .preview(sectionListPreview),
    ),
  })
  /**
   * How one ROUTE reads in the Studio's list of pages. This used to hang off
   * `s.router(...)`, which is a RecordSchema — and a record's own `.preview()`
   * now describes the record, so `val` was the whole route map. `Record<string,
   * Page>` indexed by `.meta` still type-checks and hands back a Page, which is
   * why it surfaced as a type error rather than a wrong preview.
   */
  .preview(({ val }) => {
    return metaPreview(val.meta);
  });

export default c.define(
  "/src/app/(main)/products/[sku]/page.val.ts",
  s.router(nextAppRouter, productPageSchema),
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
