import { motion } from "framer-motion";
import { AlertTriangle, Clock, SearchX, Users } from "lucide-react";
import content from "../content";
import { Reveal, stagger, staggerItem } from "../motion";

const icons = [SearchX, Clock, Users, AlertTriangle];

export default function WhoIHelp() {
  const c = content.whoIHelp;
  return (
    <section data-testid="who-i-help-section" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-6 text-plum/60">{c.eyebrow}</p>
          <h2 className="font-display max-w-3xl text-balance text-3xl font-semibold leading-tight text-plum sm:text-5xl">
            {c.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-plum/80 sm:text-lg">{c.intro}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <h3 className="mt-16 text-sm font-semibold uppercase tracking-[0.28em] text-plum/60">{c.subheading}</h3>
        </Reveal>

        <motion.ul
          className="mt-8 grid gap-5 sm:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {c.problems.map((problem, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.li
                key={problem}
                variants={staggerItem}
                data-testid={`problem-card-${i}`}
                className="card-surface group flex items-start gap-5 p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-16px_rgba(59,31,58,0.25)]"
              >
                <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blush text-plum transition-colors duration-300 group-hover:bg-gold">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <p className="text-base font-medium leading-relaxed text-plum">{problem}</p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
