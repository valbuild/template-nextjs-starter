import { AnySectionSchema } from "./anySection.val";
import { ImageTextSection } from "./ImageTextSection";
import { TitleTextSection } from "./TitleTextSection";

export function AnySection({ section }: { section: AnySectionSchema }) {
  if (section.type === "image-text") {
    return <ImageTextSection {...section} />;
  } else if (section.type === "title-text") {
    return <TitleTextSection {...section} />;
  } else {
    const exhaustiveCheck: never = section;
    console.error("Unhandled section type", exhaustiveCheck);
    return null;
  }
}
