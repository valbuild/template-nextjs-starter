import { s } from "../../../val.config";
import { variantsSchema } from "../base/variants.val";

const commonFields = {
  label: s.string(),
  variant: variantsSchema,
};
export const linkButtonSchema = s
  .union(
    "type",
    s.object({
      type: s.literal("external"),
      href: s.string().validate((href) => {
        if (!href.startsWith("http") && !href.startsWith("/")) {
          return "External links must start with http or https or be a relative path";
        }
        return false;
      }),
      ...commonFields,
    }),
    s.object({
      type: s.literal("internal"),
      href: s.route(),
      ...commonFields,
    }),
  )
  /**
   * How one button reads as a ROW in the Studio. On the item, because since
   * 0.109 an array's own `.preview()` describes the whole array instead.
   */
  .preview(({ val }) => ({
    title: val.label,
    subtitle: val.href,
  }));
