import content from "../content";
import { Reveal } from "../motion";

const NAVY = "text-[#1B3A6B]";

export default function Services() {
  const c = content.services;
  return (
    <section data-testid="services-section" className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-14">
      <Reveal>
        <p className={`eyebrow mb-4 ${NAVY}/60`}>{c.eyebrow}</p>
        <h2 className={`font-display max-w-3xl text-balance text-3xl font-bold leading-tight sm:text-5xl ${NAVY}`}>
          {c.heading}
        </h2>
        <ul className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {c.items.map((item, i) => (
            <li key={item.title} data-testid={`service-card-${i}`} className="border-l-4 border-gold pl-5">
              <h3 className={`font-display text-2xl font-bold ${NAVY}`}>{item.title}</h3>
              <p className="mt-2 text-lg leading-relaxed text-[#3A4A66]">{item.text}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
