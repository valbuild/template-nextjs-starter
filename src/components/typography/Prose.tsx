import { ValRichText } from "@valbuild/next";
import { ProseSchema } from "./prose.val";
import { LinkText } from "./LinkText";
import { Heading2 } from "./Heading2";
import { Heading3 } from "./Heading3";
import { Paragraph } from "./Paragraph";

export function Prose({
  value,
  className,
}: {
  value: ProseSchema;
  className?: string;
}) {
  return (
    <ValRichText
      className={className}
      theme={{
        bold: "font-medium",
        italic: "italic",
        ul: "list-disc ml-4",
        ol: "list-decimal ml-4",
        li: "mb-1",
        h2: null,
        h3: null,
      }}
      transform={(node, children, className, key) => {
        if (typeof node !== "string") {
          // Re-use Heading and LinkText components since we already have them
          if (node.tag === "h2") {
            return (
              <Heading2 className={className} key={key}>
                {children}
              </Heading2>
            );
          } else if (node.tag === "h3") {
            return (
              <Heading3 className={className} key={key}>
                {children}
              </Heading3>
            );
          } else if (node.tag === "p") {
            return (
              <Paragraph className={className} key={key}>
                {children}
              </Paragraph>
            );
          } else if (node.tag === "a") {
            return (
              <LinkText href={node.href} className={className} key={key}>
                {children}
              </LinkText>
            );
          }
        }
      }}
    >
      {value}
    </ValRichText>
  );
}
