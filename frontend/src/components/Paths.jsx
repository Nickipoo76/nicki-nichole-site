import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import content from "../content";
import { EASE, Reveal } from "../motion";

const NAVY = "text-[#1B3A6B]";

function PathBody({ path, prefix }) {
  return (
    <div>
      <ol className="grid gap-x-12 sm:grid-cols-2">
        {path.items.map((item, i) => (
          <li key={item} data-testid={`${prefix}-item-${i}`} className="flex items-start gap-4 border-t border-[#1B3A6B]/15 py-5">
            <span aria-hidden="true" className="font-display text-lg font-bold leading-tight text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className={`font-display text-lg font-semibold leading-snug ${NAVY}`}>{item}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 max-w-3xl border-l-4 border-gold pl-5 text-lg leading-relaxed text-[#3A4A66]">{path.note}</p>
      <Link
        to={`/?topic=${path.topic}#contact`}
        data-testid={`${prefix}-cta`}
        className={`mt-6 inline-flex items-center gap-2 font-semibold underline decoration-gold decoration-2 underline-offset-4 ${NAVY}`}
      >
        {content.paths.cta}
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </div>
  );
}

// One lane per visitor type. Tabs on desktop, stacked on mobile.
export default function Paths() {
  const c = content.paths;
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  const onKey = (e, i) => {
    let next = null;
    if (e.key === "ArrowRight") next = (i + 1) % c.items.length;
    if (e.key === "ArrowLeft") next = (i - 1 + c.items.length) % c.items.length;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      document.getElementById(`path-tab-${next}`)?.focus();
    }
  };

  return (
    <section id="paths" data-testid="paths-section" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-12 sm:px-8 sm:py-16">
      <Reveal>
        <h2 className={`font-display text-3xl font-bold sm:text-5xl ${NAVY}`}>{c.heading}</h2>
        <p className="mt-4 text-lg text-[#3A4A66]">{c.intro}</p>
      </Reveal>

      <div className="mt-10 hidden md:block">
        <div role="tablist" aria-label={c.heading} className="flex border-b-2 border-[#1B3A6B]/15">
          {c.items.map((p, i) => (
            <button
              key={p.name}
              id={`path-tab-${i}`}
              role="tab"
              aria-selected={active === i}
              aria-controls={`path-panel-${i}`}
              tabIndex={active === i ? 0 : -1}
              data-testid={`path-tab-${i}`}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
              className={`-mb-0.5 border-b-4 px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] transition-colors ${
                active === i ? `border-gold ${NAVY}` : "border-transparent text-[#3A4A66]/70 hover:text-[#1B3A6B]"
              }`}
            >
              {p.tab}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            id={`path-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`path-tab-${active}`}
            className="mt-8"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <h3 className={`font-display mb-4 text-3xl font-bold italic ${NAVY}`}>{c.items[active].name}</h3>
            <PathBody path={c.items[active]} prefix="desktop-path" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-10 space-y-14 md:hidden">
        {c.items.map((p, i) => (
          <Reveal key={p.name}>
            <h3 className={`font-display mb-3 text-2xl font-bold italic ${NAVY}`}>{p.name}</h3>
            <PathBody path={p} prefix={`mobile-path-${i}`} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
