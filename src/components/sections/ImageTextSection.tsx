import { ValImage } from "@valbuild/next";
import { ImageTextSectionSchema } from "./imageTextSection.val";
import { Heading2 } from "../typography/Heading2";
import { Prose } from "../typography/Prose";
import { Section } from "../base/Section";

export function ImageTextSection({
  image,
  title,
  text,
}: ImageTextSectionSchema) {
  return (
    <Section>
      <div className="flex flex-wrap gap-4">
        <ValImage src={image} className="w-1/3" />
        <div>
          <Heading2>{title}</Heading2>
          <Prose value={text} />
        </div>
      </div>
    </Section>
  );
}
