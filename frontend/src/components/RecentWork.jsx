import content from "../content";
import { Reveal } from "../motion";

// Hidden until content.recentWork.image is set.
export default function RecentWork() {
  const c = content.recentWork;
  if (!c.image) return null;
  return (
    <section data-testid="recent-work-section" className="mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-16">
      <Reveal>
        <h2 className="font-display text-3xl font-bold text-[#1B3A6B] sm:text-5xl">{c.heading}</h2>
        <figure className="mt-8">
          <img src={c.image} alt={c.alt} className="w-full max-w-xl" loading="lazy" />
          {c.caption && <figcaption className="mt-3 text-[#3A4A66]">{c.caption}</figcaption>}
        </figure>
      </Reveal>
    </section>
  );
}
