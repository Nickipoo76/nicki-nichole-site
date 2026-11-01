import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import content from "../content";
import { EASE, MaskedLine } from "../motion";
import SmartImage from "./SmartImage";
import { Link } from "react-router-dom";

export default function Hero() {
  const h = content.hero;
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70]);
  const haloY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -50]);

  return (
    <section ref={ref} data-testid="hero-section" className="relative overflow-hidden pt-24 sm:pt-28">
      {/* ambient halos */}
      <motion.div aria-hidden="true" style={{ y: haloY }} className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-blush blur-3xl opacity-70" />
        <div className="absolute bottom-[-20%] left-[-12%] h-[28rem] w-[28rem] rounded-full bg-gold/20 blur-3xl" />
      </motion.div>

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10 lg:pb-16">
        <div>
          <motion.p
            data-testid="hero-eyebrow"
            className="eyebrow mb-8 text-plum/70"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          >
            {content.site.name}
          </motion.p>

          <h1
            data-testid="hero-headline"
            className="font-display text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-plum sm:text-6xl lg:text-7xl"
          >
            {h.lines.map((line, i) => (
              <MaskedLine key={i} delay={0.25 + i * 0.14}>
                {line.map((seg, j) => (
                  <span key={j} className={seg.accent ? "u-gold" : undefined}>
                    {seg.text}{" "}
                  </span>
                ))}
              </MaskedLine>
            ))}
          </h1>

          <motion.p
            data-testid="hero-subhead"
            className="mt-8 max-w-xl text-base leading-relaxed text-body sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: EASE }}
          >
            {h.subhead}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
          >
            <a href={content.links.booking} data-testid="hero-primary-cta" className="btn-gold">
              {h.primaryCta}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <Link
              to="/#work-with-me"
              data-testid="hero-secondary-cta"
              className="group inline-flex items-center gap-2 text-base font-semibold text-plum no-underline"
            >
              <span className="u-gold">{h.secondaryCta}</span>
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <motion.ul
            className="mt-12 flex flex-wrap gap-2.5"
            aria-label="Specialties"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.25 }}
          >
            {h.badges.map((b) => (
              <li
                key={b}
                className="rounded-full border border-plum/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-plum/70"
              >
                {b}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Headshot with slow float + parallax */}
        <motion.div
          style={{ y: imgY }}
          className="relative mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[400px]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
          >
            <div aria-hidden="true" className="absolute -inset-5 -rotate-3 rounded-[2.5rem] bg-blush" />
            <div aria-hidden="true" className="absolute -inset-5 rotate-2 rounded-[2.5rem] border-2 border-gold/50" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_28px_60px_-24px_rgba(11,26,52,0.4)]">
              <SmartImage
                src={h.headshot.src}
                alt={h.headshot.alt}
                width={h.headshot.width}
                height={h.headshot.height}
                className="w-full"
                eager
                testId="hero-headshot"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
