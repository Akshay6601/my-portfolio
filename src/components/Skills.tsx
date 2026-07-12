import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <SectionHeading eyebrow="Skills" title="What I work with" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              {group.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
