import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import content from "../content";
import { EASE, Reveal } from "../motion";

const NAVY_TEXT = "text-[#1B3A6B]";

export default function About() {
  const a = content.about;
  return (
    <main data-testid="about-page" className="relative overflow-hidden">
      {/* Hero: full-width navy with the cutout standing on the proof band */}
      <section className="bg-plum pt-24 text-white sm:pt-28">
        <div className="mx-auto grid max-w-6xl items-end gap-6 px-6 sm:px-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="pb-4 lg:pb-16">
            <motion.h1
              data-testid="about-heading"
              className="font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            >
              {a.hookTop}
              <span className="mt-2 block italic text-gold">{a.hookGold}</span>
            </motion.h1>
            <motion.p
              className="mt-7 max-w-xl text-xl font-semibold leading-snug sm:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            >
              {a.subhook}
            </motion.p>
            <p className="mt-4 text-base text-white/80 sm:text-lg">{a.hello}</p>
          </div>
          <motion.img
            src={a.cutout.src}
            alt={a.cutout.alt}
            width={a.cutout.width}
            height={a.cutout.height}
            data-testid="about-headshot"
            className="mx-auto block w-full max-w-[300px] sm:max-w-[355px] lg:ml-auto lg:mr-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: EASE }}
          />
        </div>
        <div className="border-t-4 border-gold bg-plum-deep">
          <dl
            data-testid="about-glance"
            aria-label={a.glanceLabel}
            className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-6 py-10 sm:px-8 lg:grid-cols-6"
          >
            {a.glance.map((g) => (
              <div key={g.label} className="flex flex-col">
                <dt className="text-sm leading-snug text-white/85">{g.label}</dt>
                <dd className="font-display order-first mb-1 text-3xl font-bold text-gold">{g.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* The story */}
      <section className="mx-auto max-w-3xl px-6 py-14 sm:px-8 sm:py-20">
        {a.chapters.map((c) => (
          <Reveal key={c.title} className="mb-12 last:mb-0">
            <h2 className={`font-display text-3xl font-bold leading-tight sm:text-4xl ${NAVY_TEXT}`}>{c.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-[#3A4A66]">{c.text}</p>
          </Reveal>
        ))}
      </section>

      {/* The receipts */}
      <section data-testid="about-awards" className="bg-plum py-14 text-white sm:py-16">
        <Reveal className="mx-auto max-w-3xl px-6 sm:px-8">
          <h2 className="font-display text-3xl font-bold italic text-gold sm:text-4xl">{a.awardsLabel}</h2>
          <p className="mt-2 text-white/85">{a.awardsNote}</p>
          <ul className="mt-6 space-y-3">
            {a.awards.map((item) => (
              <li key={item} className="border-b border-white/15 pb-3 text-lg font-semibold">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* For employers */}
      <section data-testid="about-skills" className="mx-auto max-w-3xl px-6 py-14 sm:px-8 sm:py-16">
        <Reveal>
          <h2 className={`font-display text-3xl font-bold sm:text-4xl ${NAVY_TEXT}`}>{a.skillsLabel}</h2>
          <ul className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {a.skills.map((k) => (
              <li key={k.title} className="border-l-4 border-gold pl-4">
                <p className={`font-semibold ${NAVY_TEXT}`}>{k.title}</p>
                <p className="mt-1 leading-relaxed text-[#3A4A66]">{k.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-14">
          <h2 className={`font-display text-2xl font-bold italic sm:text-3xl ${NAVY_TEXT}`}>{a.sideNoteLabel}</h2>
          <p className="mt-3 text-lg leading-relaxed text-[#3A4A66]">{a.sideNote}</p>
          <Link
            to="/#contact"
            data-testid="about-cta"
            className={`mt-8 inline-flex items-center gap-2 font-semibold underline decoration-gold decoration-2 underline-offset-4 ${NAVY_TEXT}`}
          >
            {a.cta}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
