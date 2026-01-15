import { fetchValRoute } from "@/val/val.rsc";
import pageVal from "./page.val";
import { notFound } from "next/navigation";
import { AnySection } from "../../components/sections/AnySection";

export default async function Home({ params }: { params: never }) {
  const pageContent = await fetchValRoute(pageVal, params);
  if (!pageContent) {
    return notFound();
  }
  return (
    <main className="max-w-5xl mx-auto p-4">
      {pageContent.sections.map((section, index) => (
        <AnySection key={`${section.type}-${index}`} section={section} />
      ))}
    </main>
  );
}
