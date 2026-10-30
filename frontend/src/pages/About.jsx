import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import content from "../content";
import { EASE, Reveal } from "../motion";
import SmartImage from "../components/SmartImage";

export default function About() {
  const a = content.about;
  const h = content.hero.headshot;
  return (
    <main data-testid="about-page" className="relative overflow-hidden pt-32 sm:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-12%] h-[30rem] w-[30rem] rounded-full bg-blush blur-3xl opacity-70" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <motion.div
            className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px]"
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
          >
            <div aria-hidden="true" className="absolute -inset-5 -rotate-3 rounded-[2.5rem] bg-blush" />
            <div aria-hidden="true" className="absolute -inset-5 rotate-2 rounded-[2.5rem] border-2 border-gold/50" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_28px_60px_-24px_rgba(59,31,58,0.4)]">
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

          {a.credentials && (
          <Reveal delay={0.2} className="mx-auto mt-10 max-w-[320px] sm:max-w-[360px]">
            <p
              data-testid="about-credentials"
              className="flex items-center gap-3 rounded-2xl bg-plum px-6 py-4 text-sm font-semibold text-cream"
            >
              <GraduationCap size={20} aria-hidden="true" className="shrink-0 text-gold" />
              {a.credentials}
            </p>
          </Reveal>
          )}
        </div>

        <div className="order-1 lg:order-2">
          <motion.h1
            data-testid="about-heading"
            className="font-display text-balance text-4xl font-semibold leading-tight tracking-tight text-plum sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          >
            {a.heading}
          </motion.h1>

          {a.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.15 + i * 0.08}>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-plum/85 sm:text-lg">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.45}>
            <p className="font-display mt-10 max-w-2xl border-l-4 border-gold pl-6 text-xl italic leading-relaxed text-plum sm:text-2xl">
              {a.closer}
            </p>
            <Link to="/?#contact" data-testid="about-cta" className="btn-gold mt-10">
              {a.cta}
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
