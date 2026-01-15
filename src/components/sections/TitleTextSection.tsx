import { TitleTextSectionSchema } from "./titleTextSection.val";
import { Heading2 } from "../typography/Heading2";
import { Prose } from "../typography/Prose";
import { Section } from "../base/Section";
import { LinkButton } from "../atoms/LinkButton";
import { Grid } from "../base/Grid";

export function TitleTextSection({
  title,
  text,
  buttons,
}: TitleTextSectionSchema) {
  return (
    <Section className="gap-4">
      <Grid cols={2}>
        <Heading2>{title}</Heading2>
        <Prose value={text} />
      </Grid>
      <div className="flex justify-end gap-2">
        {buttons.map((button) => (
          <LinkButton
            key={button.label}
            href={button.href}
            variant={button.variant}
            className="w-fit"
          >
            {button.label}
          </LinkButton>
        ))}
      </div>
    </Section>
  );
}
