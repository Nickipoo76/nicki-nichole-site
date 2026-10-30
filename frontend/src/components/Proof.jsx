import { motion } from "framer-motion";
import { Award } from "lucide-react";
import content from "../content";
import { Reveal, stagger, staggerItem } from "../motion";

export default function Proof() {
  const c = content.proof;
  return (
    <section data-testid="proof-section" className="bg-plum py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-6 text-cream/60">{c.eyebrow}</p>
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight sm:text-5xl">{c.heading}</h2>
        </Reveal>

        <motion.dl
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {c.stats.map((stat, i) => (
            <motion.div
              key={stat.description}
              variants={staggerItem}
              data-testid={`stat-tile-${i}`}
              className="group rounded-3xl bg-plum-deep p-8 ring-1 ring-cream/10 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:ring-gold/50"
            >
              <dt className="order-2 mt-3 block text-sm leading-relaxed text-cream/75">
                <span className="font-display block text-5xl font-semibold text-gold sm:text-6xl">
                  {stat.value}
                  {stat.label && <span className="text-2xl text-cream/70 sm:text-3xl"> {stat.label}</span>}
                </span>
              </dt>
              <dd className="order-3 mt-4 text-sm leading-relaxed text-cream/75">{stat.description}</dd>
            </motion.div>
          ))}
        </motion.dl>

        <Reveal delay={0.1} className="mt-12 flex items-center justify-center gap-3 text-center">
          <Award size={20} aria-hidden="true" className="shrink-0 text-gold" />
          <p data-testid="proof-awards" className="text-base font-medium text-cream/85 sm:text-lg">
            {c.awards}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
