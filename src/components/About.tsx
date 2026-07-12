import { aboutContent } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="grid gap-10 rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
        <div>
          <SectionHeading eyebrow="About" title={aboutContent.title} />
          <div className="mt-4 space-y-4 max-w-2xl text-lg leading-8 text-slate-600">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">Focus</p>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>• Product-minded development</li>
            <li>• Strong UI/UX implementation</li>
            <li>• Performance and maintainability</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
