import { projects } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <SectionHeading eyebrow="Projects" title="Selected work" />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{project.description}</p>
            {project.tech.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            ) : null}
            {project.href ? (
              <a href={project.href} className="mt-6 text-sm font-medium text-sky-600 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
                View project →
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
