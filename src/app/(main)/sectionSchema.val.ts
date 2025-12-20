/**
 * This file contains the schema for the sections of the page.
 * It is used to define the structure of the sections and the types of the sections.
 * It is also used to define the schema for the page.
 *
 */
import { s, t } from "../../../val.config";

export const heroSection = s.object({
  type: s.literal("hero"),
  title: s.string(),
  description: s.richtext({ style: { bold: true } }),
});
export type HeroSection = t.inferSchema<typeof heroSection>;

export const docsSection = s.object({
  type: s.literal("docs"),
  title: s.string(),
  cards: s.array(
    s.object({
      title: s.string(),
      description: s.string(),
      href: s.string().raw(),
    }),
  ),
});
export type DocsSection = t.inferSchema<typeof docsSection>;

export const section = s.union("type", docsSection, heroSection);
export type Section = t.inferSchema<typeof section>;

export const sections = s.array(section);
