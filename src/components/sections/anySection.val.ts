import { t } from "@valbuild/next";
import { s } from "../../../val.config";
import { imageTextSection } from "./imageTextSection.val";
import { titleTextSection } from "./titleTextSection.val";
import { proseToString } from "../typography/prose.val";
import { ImageSource, SelectorOfSchema } from "@valbuild/core";

export const anySection = s.union("type", imageTextSection, titleTextSection);
export type AnySectionSchema = t.inferSchema<typeof anySection>;

export const sections = s.array(anySection);

/**
 * Make the Val Studio list UI of sections nicer
 */
export const sectionListRender = ({
  val,
}: {
  val: SelectorOfSchema<typeof anySection>;
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
