import { s, t } from "../../../val.config";
import { proseSchema } from "../typography/prose.val";

export const imageTextSection = s.object({
  type: s.literal("image-text"),
  image: s.image(),
  title: s.string(),
  text: proseSchema,
});
export type ImageTextSectionSchema = t.inferSchema<typeof imageTextSection>;
