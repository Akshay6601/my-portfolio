interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  id?: string;
}

export function SectionHeading({ eyebrow, title, id }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
      >
        {title}
      </h2>
    </div>
  );
}
