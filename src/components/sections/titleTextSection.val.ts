import { s, t } from "../../../val.config";
import { linkButtonSchema } from "../atoms/linkButton.val";
import { proseSchema } from "../typography/prose.val";

export const titleTextSection = s.object({
  type: s.literal("title-text"),
  title: s.string(),
  text: proseSchema,
  buttons: s
    .array(linkButtonSchema)
    .validate((buttons) => {
      if (buttons.length < 1) {
        return "At least one button is required";
      } else if (buttons.length > 3) {
        return "You can only add up to 3 buttons";
      }
      return false;
    })
    .render({
      as: "list",
      select: ({ val }) => {
        return {
          title: val.label,
          subtitle: val.href,
        };
      },
    }),
});
export type TitleTextSectionSchema = t.inferSchema<typeof titleTextSection>;
