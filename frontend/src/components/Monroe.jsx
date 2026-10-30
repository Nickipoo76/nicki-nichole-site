import { Reveal } from "../motion";
import content from "../content";
import SmartImage from "./SmartImage";

export default function Monroe() {
  const c = content.monroe;
  return (
    <section data-testid="monroe-section" className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative mx-auto w-full max-w-[340px]">
          <div aria-hidden="true" className="absolute -inset-5 rotate-3 rounded-[2.5rem] bg-plum" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_28px_60px_-24px_rgba(59,31,58,0.45)]">
            <SmartImage
              src={c.image.src}
              alt={c.image.alt}
              className="w-full"
              testId="monroe-image"
            />
            <span
              data-testid="monroe-ai-label"
              className="absolute left-4 top-4 rounded-full bg-plum/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gold backdrop-blur-sm"
            >
              {c.imageLabel}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow mb-6 text-plum/60">{c.eyebrow}</p>
          <h2 className="font-display max-w-xl text-balance text-3xl font-semibold leading-tight text-plum sm:text-5xl">
            {c.heading}
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-plum/85 sm:text-lg">{c.text}</p>
        </Reveal>
      </div>
    </section>
  );
}
