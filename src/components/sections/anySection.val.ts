import { t } from "@valbuild/next";
import { s } from "../../../val.config";
import { imageTextSection } from "./imageTextSection.val";
import { titleTextSection } from "./titleTextSection.val";
import { proseToString } from "../typography/prose.val";
import { ImageSource, SelectorOfSchema } from "@valbuild/core";

/**
 * Make the Val Studio list UI of sections nicer.
 *
 * Typed off the two member schemas rather than off `typeof anySection`: the
 * union now carries this closure, so naming the union here would be a cycle —
 * and at runtime a `const` read before its own declaration.
 */
export const sectionListPreview = ({
  val,
}: {
  val:
    | SelectorOfSchema<typeof imageTextSection>
    | SelectorOfSchema<typeof titleTextSection>;
}): {
  title: string;
  subtitle: string | null;
  image: ImageSource | null;
} => {
  if (val.type === "image-text") {
    return {
      title: val.title,
      subtitle: proseToString(val.text),
      image: val.image,
    };
  } else if (val.type === "title-text") {
    return {
      title: val.title,
      subtitle: proseToString(val.text),
      image: null,
    };
  } else {
    const exhaustiveCheck: never = val;
    console.error("Unhandled section type", exhaustiveCheck);
    return {
      title: "Unknown section type",
      subtitle: null,
      image: null,
    };
  }
};

/**
 * The row preview lives on the ITEM, not on the array around it.
 *
 * Since 0.109 a container's own `.preview()` describes the CONTAINER — one line
 * standing in for the whole list. What the Studio draws for each ROW comes from
 * the item's schema, so the union previews itself and every array of these gets
 * its rows for free.
 */
export const anySection = s
  .union("type", imageTextSection, titleTextSection)
  .preview(sectionListPreview);
export type AnySectionSchema = t.inferSchema<typeof anySection>;

export const sections = s.array(anySection);
