import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import content from "../content";
import { Reveal } from "../motion";

export default function WhyFaster() {
  const c = content.faster;
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["6%", "-6%"]);

  return (
    <section ref={ref} data-testid="why-faster-section" className="relative overflow-hidden py-24 sm:py-32">
      <motion.p
        aria-hidden="true"
        style={{ x }}
        className="font-display pointer-events-none absolute top-8 left-0 select-none whitespace-nowrap text-[9rem] font-bold leading-none text-plum/[0.045] sm:text-[13rem]"
      >
        skip the learning curve · skip the learning curve
      </motion.p>
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <p className="eyebrow mb-6 text-plum/60">{c.eyebrow}</p>
          <h2 className="font-display max-w-3xl text-balance text-3xl font-semibold leading-tight text-plum sm:text-5xl">
            {c.heading}
          </h2>
          <p className="mt-8 max-w-2xl border-l-4 border-gold pl-6 text-base leading-relaxed text-plum/85 sm:text-lg">
            {c.text}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
