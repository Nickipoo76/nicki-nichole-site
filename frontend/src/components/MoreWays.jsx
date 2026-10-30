import { motion } from "framer-motion";
import { ArrowUpRight, Building2, HandCoins, Rocket, ReceiptText } from "lucide-react";
import { Link } from "react-router-dom";
import content from "../content";
import { Reveal, stagger, staggerItem } from "../motion";

const icons = [Building2, HandCoins, ReceiptText, Rocket];

function CardLink({ card }) {
  if (card.external === "accelerate") {
    return (
      <a
        href={content.links.accelerate}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="more-ways-link-taxes"
        className="group/link mt-6 inline-flex items-center gap-2 text-base font-semibold text-plum no-underline"
      >
        <span className="u-gold">{card.linkText}</span>
        <ArrowUpRight size={18} aria-hidden="true" className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link
      to={`/?topic=${card.topic}#contact`}
      data-testid={`more-ways-link-${card.topic}`}
      className="group/link mt-6 inline-flex items-center gap-2 text-base font-semibold text-plum no-underline"
    >
      <span className="u-gold">{card.linkText}</span>
      <ArrowUpRight size={18} aria-hidden="true" className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
    </Link>
  );
}

export default function MoreWays() {
  const c = content.moreWays;
  return (
    <section data-testid="more-ways-section" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-6 text-plum/60">{c.eyebrow}</p>
          <h2 className="font-display max-w-3xl text-balance text-3xl font-semibold leading-tight text-plum sm:text-5xl">
            {c.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-plum/80 sm:text-lg">{c.intro}</p>
        </Reveal>

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {c.cards.map((card, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.article
                key={card.title}
                variants={staggerItem}
                data-testid={`more-ways-card-${i}`}
                className="card-surface flex flex-col p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_-16px_rgba(59,31,58,0.28)]"
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-plum text-gold">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-semibold text-plum">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-plum/80">{card.text}</p>
                <CardLink card={card} />
              </motion.article>
            );
          })}
        </motion.div>

        <Reveal delay={0.15}>
          <p
            data-testid="more-ways-note"
            className="font-display mx-auto mt-14 max-w-3xl text-center text-xl italic leading-relaxed text-plum/85 sm:text-2xl"
          >
            &ldquo;{c.note}&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
