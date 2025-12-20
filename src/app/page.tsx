import { fetchVal } from "@/val/val.rsc";
import pageVal from "./page.val";
import type { Section, DocsSection, HeroSection } from "./sectionSchema.val";
import { ValRichText } from "@valbuild/next";
import Link from "next/link";

export default async function Home() {
  const pageContent = await fetchVal(pageVal);
  return (
    <main className="max-w-screen-lg mx-auto p-4">
      {pageContent.sections.map((section) => (
        <Section key={section.type} section={section} />
      ))}
    </main>
  );
}

function Section({ section }: { section: Section }) {
  if (section.type === "hero") {
    return <HeroSection {...section} />;
  } else if (section.type === "docs") {
    return <DocsSection {...section} />;
  } else {
    const exhaustiveCheck: never = section;
    console.error("Unhandled section type", exhaustiveCheck);
    return null;
  }
}

function HeroSection({ title, description }: HeroSection) {
  return (
    <section className="py-10">
      <h1 className="text-4xl font-bold p-4 text-center">{title}</h1>
      <ValRichText
        className="text-lg p-4 max-w-screen-md mx-auto"
        theme={{
          bold: "font-bold",
        }}
      >
        {description}
      </ValRichText>
    </section>
  );
}

function DocsSection({ title, cards }: DocsSection) {
  return (
    <section className="max-w-screen-lg mx-auto">
      <h2 className="text-2xl font-bold py-4">{title}</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, i) => (
          <li key={i} className="p-4 rounded-md border border-gray-200">
            <Link href={card.href} target="_blank">
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="text-sm text-gray-500">{card.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
