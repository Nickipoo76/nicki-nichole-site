import content from "../content";
import { Reveal } from "../motion";

const NAVY = "text-[#1B3A6B]";

// "One skill runs every business": ties the range together around lead generation.
export default function Pillars() {
  const c = content.pillars;
  return (
    <section data-testid="pillars-section" className="mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-16">
      <Reveal>
        <h2 className={`font-display max-w-3xl text-balance text-3xl font-bold leading-tight sm:text-5xl ${NAVY}`}>
          {c.heading} <span className="italic text-gold">{c.gold}</span>
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#3A4A66]">{c.intro}</p>
        <ul className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {c.items.map((p) => (
            <li key={p.name} className="border-t-4 border-gold pt-5">
              <p className="font-display text-4xl font-bold text-gold">{p.value}</p>
              <h3 className={`mt-2 text-sm font-bold uppercase tracking-[0.16em] ${NAVY}`}>{p.name}</h3>
              <p className="mt-3 leading-relaxed text-[#3A4A66]">{p.text}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
