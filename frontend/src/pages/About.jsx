import { Link } from "react-router-dom";
import { ArrowRight, Award, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import content from "../content";
import { EASE, Reveal } from "../motion";
import SmartImage from "../components/SmartImage";

function Strip({ label, items, icon: Icon, testId }) {
  return (
    <div data-testid={testId} className="mt-8 rounded-3xl bg-cream-deep p-6 ring-1 ring-plum/10 sm:p-7">
      <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-plum/60">
        <Icon size={16} aria-hidden="true" className="text-gold" />
        {label}
      </p>
      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
        {items.map((item, i) => (
          <li key={item} className="flex items-center gap-3 text-sm font-semibold text-plum sm:text-base">
            {i > 0 && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  const a = content.about;
  const h = content.hero.headshot;
  return (
    <main data-testid="about-page" className="relative overflow-hidden pt-24 sm:pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-12%] h-[30rem] w-[30rem] rounded-full bg-blush blur-3xl opacity-70" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <motion.div
            className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:sticky lg:top-28"
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
          >
            <div aria-hidden="true" className="absolute -inset-5 -rotate-3 rounded-[2.5rem] bg-blush" />
            <div aria-hidden="true" className="absolute -inset-5 rotate-2 rounded-[2.5rem] border-2 border-gold/50" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_28px_60px_-24px_rgba(11,26,52,0.4)]">
              <SmartImage
                src={h.src}
                alt={h.alt}
                width={h.width}
                height={h.height}
                className="w-full"
                eager
                testId="about-headshot"
              />
            </div>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2">
          <motion.h1
            data-testid="about-heading"
            className="font-display text-balance text-4xl font-bold leading-tight text-plum sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          >
            {a.heading}
          </motion.h1>

          {a.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.15 + i * 0.08}>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-body sm:text-lg">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <Strip label={a.awardsLabel} items={a.awards} icon={Award} testId="about-awards" />
            <Strip label={a.rolesLabel} items={a.roles} icon={Briefcase} testId="about-roles" />
          </Reveal>

          <Reveal delay={0.4}>
            <p className="font-display mt-10 max-w-2xl border-l-4 border-gold pl-6 text-xl italic leading-relaxed text-plum sm:text-2xl">
              {a.closer}
            </p>
            <Link to="/#contact" data-testid="about-cta" className="btn-gold mt-10">
              {a.cta}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
