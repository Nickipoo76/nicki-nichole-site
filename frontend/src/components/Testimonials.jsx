import content from "../content";
import { Reveal } from "../motion";

export default function Testimonials() {
  const c = content.testimonials;
  if (!c.items.length) return null;
  const [lead, ...rest] = c.items;
  return (
    <section data-testid="testimonials-section" className="bg-plum py-12 text-white sm:py-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold italic text-gold sm:text-5xl">{c.heading}</h2>
          <figure className="mt-10 max-w-4xl">
            <blockquote className="font-display text-2xl font-semibold leading-snug sm:text-4xl">
              &ldquo;{lead.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-gold">
              {lead.name} <span className="font-medium normal-case tracking-normal text-white/70">· {lead.role}</span>
            </figcaption>
          </figure>
          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {rest.map((t) => (
              <figure key={t.name} className="border-l-4 border-gold pl-5">
                <blockquote className="text-lg leading-relaxed text-white/90">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-gold">
                  {t.name} <span className="font-medium normal-case tracking-normal text-white/70">· {t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
