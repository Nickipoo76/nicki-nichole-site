import { motion } from "framer-motion";
import { ArrowRight, Briefcase, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import content from "../content";
import { Reveal, stagger, staggerItem } from "../motion";

export default function WorkWithMe() {
  const c = content.workWithMe;
  return (
    <section id="work-with-me" data-testid="work-with-me-section" className="bg-blush py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-6 text-plum/60">{c.eyebrow}</p>
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight text-plum sm:text-5xl">
            {c.heading}
          </h2>
        </Reveal>

        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.article
            variants={staggerItem}
            data-testid="work-owners-card"
            className="flex flex-col rounded-3xl bg-plum p-9 text-cream transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-20px_rgba(7,18,42,0.6)] sm:p-12"
          >
            <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-plum-ink">
              <Briefcase size={22} aria-hidden="true" />
            </span>
            <h3 className="font-display text-2xl font-semibold text-gold sm:text-3xl">{c.owners.heading}</h3>
            <p className="mt-4 flex-1 text-base leading-relaxed text-cream/85">{c.owners.text}</p>
            <a href={content.links.booking} data-testid="work-owners-cta" className="btn-gold mt-8 self-start">
              {c.owners.cta}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </motion.article>

          <motion.article
            variants={staggerItem}
            data-testid="work-hiring-card"
            className="flex flex-col rounded-3xl bg-white/80 p-9 ring-1 ring-plum/10 backdrop-blur-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-20px_rgba(11,26,52,0.3)] sm:p-12"
          >
            <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blush-deep text-plum">
              <UserRound size={22} aria-hidden="true" />
            </span>
            <h3 className="font-display text-2xl font-semibold text-plum sm:text-3xl">{c.hiring.heading}</h3>
            <p className="mt-4 flex-1 text-base leading-relaxed text-body">
              {c.hiring.text.replace("{roles}", c.hiring.roles)}
            </p>
            <Link
              to={`/?topic=${c.hiring.topic}#contact`}
              data-testid="work-hiring-cta"
              className="btn-ghost mt-8 self-start text-plum hover:bg-plum hover:text-cream"
            >
              {c.hiring.cta}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
