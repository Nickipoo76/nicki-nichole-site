import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import content from "../content";
import { Reveal } from "../motion";

const NAVY = "text-[#1B3A6B]";

export default function MoreWays() {
  const c = content.moreWays;
  return (
    <section data-testid="more-ways-section" className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-14">
      <Reveal>
        <p className={`eyebrow mb-4 ${NAVY}/60`}>{c.eyebrow}</p>
        <h2 className={`font-display max-w-3xl text-balance text-3xl font-bold leading-tight sm:text-5xl ${NAVY}`}>
          {c.heading}
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#3A4A66]">{c.intro}</p>
        <ul className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {c.cards.map((card, i) => (
            <li key={card.title} data-testid={`more-ways-card-${i}`} className="border-l-4 border-gold pl-5">
              <h3 className={`font-display text-2xl font-bold ${NAVY}`}>{card.title}</h3>
              <p className="mt-2 text-lg leading-relaxed text-[#3A4A66]">{card.text}</p>
              <Link
                to={`/?topic=${card.topic}#contact`}
                data-testid={`more-ways-link-${card.topic}`}
                className={`mt-3 inline-flex items-center gap-2 font-semibold underline decoration-gold decoration-2 underline-offset-4 ${NAVY}`}
              >
                {card.linkText}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
        <p data-testid="more-ways-note" className={`font-display mt-12 max-w-3xl text-xl italic leading-relaxed sm:text-2xl ${NAVY}`}>
          {c.note}
        </p>
      </Reveal>
    </section>
  );
}
