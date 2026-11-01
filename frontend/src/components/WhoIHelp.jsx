import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import content from "../content";
import { EASE, Reveal } from "../motion";

function ProblemList({ group, testIdPrefix }) {
  return (
    <ol className="grid gap-x-12 sm:grid-cols-2">
      {group.items.map((item, i) => (
        <li
          key={item}
          data-testid={`${testIdPrefix}-problem-${i}`}
          className="flex items-start gap-5 border-t border-gold/25 py-6"
        >
          <span aria-hidden="true" className="font-display text-xl font-bold leading-none text-gold">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="font-display text-lg font-semibold leading-snug text-cream sm:text-xl">{item}</p>
        </li>
      ))}
    </ol>
  );
}

export default function WhoIHelp() {
  const c = content.whoIHelp;
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  const onTabKeyDown = (e, i) => {
    let next = null;
    if (e.key === "ArrowRight") next = (i + 1) % c.groups.length;
    if (e.key === "ArrowLeft") next = (i - 1 + c.groups.length) % c.groups.length;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      document.getElementById(`problem-tab-${next}`)?.focus();
    }
  };

  return (
    <>
      <section data-testid="who-i-help-section" className="py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <Reveal>
            <p className="eyebrow mb-6 text-plum/60">{c.eyebrow}</p>
            <h2 className="font-display max-w-3xl text-balance text-3xl font-bold leading-tight text-plum sm:text-5xl">
              {c.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-body sm:text-lg">{c.intro}</p>
          </Reveal>
        </div>
      </section>

      <section data-testid="problems-section" className="bg-plum py-12 text-cream sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <Reveal>
            <h2 className="font-display max-w-3xl text-balance text-3xl font-bold leading-tight sm:text-5xl">
              {c.problemsHeading}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/70 sm:text-lg">
              {c.problemsSubhead}
            </p>
          </Reveal>

          {/* Desktop: tabs */}
          <div className="mt-10 hidden md:block">
            <div role="tablist" aria-label={c.problemsHeading} className="flex flex-wrap gap-3">
              {c.groups.map((group, i) => (
                <button
                  key={group.name}
                  id={`problem-tab-${i}`}
                  role="tab"
                  aria-selected={active === i}
                  aria-controls={`problem-panel-${i}`}
                  tabIndex={active === i ? 0 : -1}
                  data-testid={`problem-tab-${i}`}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onTabKeyDown(e, i)}
                  className={`rounded-full px-6 py-3 text-sm font-semibold transition-[background-color,color] duration-300 ${
                    active === i
                      ? "bg-gold text-plum-ink"
                      : "bg-cream/5 text-cream/70 ring-1 ring-cream/20 hover:text-cream"
                  }`}
                >
                  {group.name}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                id={`problem-panel-${active}`}
                role="tabpanel"
                aria-labelledby={`problem-tab-${active}`}
                data-testid="problem-panel"
                className="mt-10"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <ProblemList group={c.groups[active]} testIdPrefix="desktop" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile: stacked groups */}
          <div className="mt-10 space-y-12 md:hidden">
            {c.groups.map((group, gi) => (
              <Reveal key={group.name} delay={gi * 0.08}>
                <h3
                  data-testid={`problem-group-mobile-${gi}`}
                  className="mb-2 text-sm font-bold uppercase tracking-[0.24em] text-gold"
                >
                  {group.name}
                </h3>
                <ProblemList group={group} testIdPrefix={`mobile-${gi}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
