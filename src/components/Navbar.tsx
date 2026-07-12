import { navLinks } from "@/data/portfolio";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/80 backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8"
      >
        <a href="#home" className="text-lg font-semibold tracking-tight text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2" aria-label="Go to the top of the page">
          Akshay
        </a>
        <ul className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="rounded-full px-2 py-1 transition hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
