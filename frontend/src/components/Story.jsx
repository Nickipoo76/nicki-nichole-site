import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import content from "../content";
import { Reveal } from "../motion";

export default function Story() {
  const c = content.story;
  return (
    <section data-testid="story-section" className="mx-auto max-w-3xl px-6 py-12 sm:px-8 sm:py-16">
      <Reveal>
        <h2 className="font-display text-3xl font-bold text-[#1B3A6B] sm:text-4xl">{c.hello}</h2>
        <p className="mt-4 text-lg leading-relaxed text-[#3A4A66]">{c.text}</p>
        <Link
          to="/about"
          data-testid="story-cta"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-[#1B3A6B] underline decoration-gold decoration-2 underline-offset-4"
        >
          {c.cta}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </Reveal>
    </section>
  );
}
