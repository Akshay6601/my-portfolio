import { resumeUrl, socialLinks } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const visibleLinks = socialLinks.filter((link) => link.href || link.label === "Resume");
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="rounded-3xl bg-slate-950 px-8 py-12 text-white sm:px-10 lg:px-12">
        <SectionHeading eyebrow="Contact" title="Let&apos;s build something meaningful." />
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I’m available for freelance work, full-time roles, and ambitious product ideas.
        </p>
        <ul className="mt-8 flex flex-wrap gap-4" aria-label="Social links">
          {visibleLinks.map((link) => {
            const isExternal = link.href.startsWith("http") || link.href.startsWith("mailto:");
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          {resumeUrl ? (
            <li>
              <a href={resumeUrl} target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-950">
                Resume
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </section>
  );
}
