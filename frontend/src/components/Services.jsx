import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import content from "../content";
import { Reveal, stagger, staggerItem } from "../motion";

export default function Services() {
  const c = content.services;
  return (
    <section data-testid="services-section" className="bg-blush py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow mb-6 text-plum/60">{c.eyebrow}</p>
            <h2 className="font-display max-w-2xl text-balance text-3xl font-semibold leading-tight text-plum sm:text-5xl">
              {c.heading}
            </h2>
          </div>
          <a href={content.links.booking} data-testid="services-cta" className="btn-gold shrink-0">
            {c.cta}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </Reveal>

        <motion.div
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {c.items.map((item, i) => (
            <motion.article
              key={item.title}
              variants={staggerItem}
              data-testid={`service-card-${i}`}
              className={`group relative overflow-hidden rounded-3xl bg-plum p-8 text-cream transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_54px_-18px_rgba(42,18,41,0.6)] ${
                i === 0 ? "md:col-span-2 lg:col-span-3" : "lg:col-span-3"
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/15 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              {i === 0 && (
                <span className="mb-4 inline-block rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-plum-ink">
                  Start here
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold leading-snug text-gold">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-cream/85">{item.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
