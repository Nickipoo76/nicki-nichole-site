import { motion } from "framer-motion";
import content from "../content";
import { EASE } from "../motion";

// Full-width navy hero with the headshot cutout standing on a gold rule (matches About).
export default function Hero() {
  const h = content.hero;
  const cut = content.about.cutout;

  return (
    <section data-testid="hero-section" className="relative overflow-hidden bg-plum pt-24 text-white sm:pt-28">
      <div className="mx-auto grid max-w-6xl items-end gap-6 px-6 sm:px-8 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="pb-6 lg:pb-14">
          <motion.p
            data-testid="hero-eyebrow"
            className="mb-5 text-lg font-semibold text-gold sm:text-xl"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          >
            {h.eyebrow}
          </motion.p>

          <motion.h1
            data-testid="hero-headline"
            className="font-display text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          >
            {h.title}
          </motion.h1>

          <motion.p
            className="font-display mt-5 text-2xl font-bold italic text-gold sm:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
          >
            {h.hook}
          </motion.p>

          <motion.p
            data-testid="hero-subhead"
            className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
          >
            {h.subhead}
          </motion.p>

          <motion.ul
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2"
            aria-label="Specialties"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.25 }}
          >
            {h.badges.map((b) => (
              <li key={b} className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                <span aria-hidden="true" className="mr-2 text-gold">◆</span>
                {b}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.img
          src={cut.src}
          alt={cut.alt}
          width={cut.width}
          height={cut.height}
          data-testid="hero-headshot"
          className="mx-auto block w-full max-w-[300px] sm:max-w-[355px] lg:ml-auto lg:mr-0"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: EASE }}
        />
      </div>
      <div aria-hidden="true" className="h-1 bg-gold" />
    </section>
  );
}
