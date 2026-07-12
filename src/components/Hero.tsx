import { heroContent } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 sm:py-28 lg:px-8 lg:py-32">
      <div className="max-w-3xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
          Available for new projects
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          {heroContent.tagline}
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-600">
          {heroContent.bio}
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <a href="#projects" className="rounded-full bg-slate-950 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
          View Projects
        </a>
        <a href="#contact" className="rounded-full border border-slate-300 px-5 py-3 text-center text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
          Let&apos;s Talk
        </a>
      </div>
    </section>
  );
}
