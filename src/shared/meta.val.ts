import { SelectorOfSchema } from "@valbuild/core";
import { s, t } from "../../val.config";

export const metaSchema = s.object({
  title: s.string().maxLength(100),
  description: s.string().maxLength(160).render({ as: "textarea" }),
});

export type MetaSchema = t.inferSchema<typeof metaSchema>;

export const metaRender = (val: SelectorOfSchema<typeof metaSchema>) => {
  return {
    title: val.title,
    description: val.description,
  };
};
