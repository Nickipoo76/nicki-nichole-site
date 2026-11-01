import { motion } from "framer-motion";
import { ArrowUpRight, Building2, GraduationCap, HandCoins, ReceiptText, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import content from "../content";
import { Reveal, stagger, staggerItem } from "../motion";

const icons = [Building2, HandCoins, ReceiptText, Rocket, GraduationCap];

export default function MoreWays() {
  const c = content.moreWays;
  return (
    <section data-testid="more-ways-section" className="py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-6 text-plum/60">{c.eyebrow}</p>
          <h2 className="font-display max-w-3xl text-balance text-3xl font-bold leading-tight text-plum sm:text-5xl">
            {c.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-body sm:text-lg">{c.intro}</p>
        </Reveal>

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {c.cards.map((card, i) => {
            const Icon = icons[i % icons.length];
            const span = i < 3 ? "lg:col-span-2" : "lg:col-span-3";
            const wide = i === c.cards.length - 1 && c.cards.length % 2 === 1 ? "sm:col-span-2 lg:col-span-3" : "";
            return (
              <motion.article
                key={card.title}
                variants={staggerItem}
                data-testid={`more-ways-card-${i}`}
                className={`card-surface flex flex-col p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_-16px_rgba(11,26,52,0.28)] ${span} ${wide}`}
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-plum text-gold">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-bold text-plum">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{card.text}</p>
                <Link
                  to={`/?topic=${card.topic}#contact`}
                  data-testid={`more-ways-link-${card.topic}`}
                  className="group/link mt-6 inline-flex items-center gap-2 text-base font-semibold text-plum no-underline"
                >
                  <span className="u-gold">{card.linkText}</span>
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        <Reveal delay={0.15}>
          <p
            data-testid="more-ways-note"
            className="font-display mx-auto mt-12 max-w-3xl text-center text-xl italic leading-relaxed text-plum sm:text-2xl"
          >
            &ldquo;{c.note}&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
