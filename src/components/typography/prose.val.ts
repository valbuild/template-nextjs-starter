import { RichTextNode, RichTextOptions } from "@valbuild/core";
import { s, t } from "../../../val.config";

// Flat since 0.109: options used to be grouped as `{ style: {...},
// block: {...} }`; every mark and block is now a top-level key.
const richTextOptions = {
  bold: true,
  italic: true,
  h2: true,
  h3: true,
  ul: true,
  ol: true,
} satisfies RichTextOptions;
export const proseSchema = s.richtext(richTextOptions);
export type ProseSchema = t.inferSchema<typeof proseSchema>;

export function proseToString(prose: ProseSchema): string {
  function traverse(node: RichTextNode<typeof richTextOptions>): string {
    if (typeof node === "string") {
      return node;
    } else if (node.tag === "br") {
      return "\n";
    }
    return node.children?.map(traverse).join("") || "";
  }
  return prose
    .map((node) => traverse(node as RichTextNode<typeof richTextOptions>))
    .join("");
}
