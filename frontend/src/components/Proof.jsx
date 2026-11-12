import content from "../content";
import { Reveal } from "../motion";

export default function Proof() {
  const c = content.proof;
  return (
    <section data-testid="proof-section" className="bg-plum py-10 text-white sm:py-14">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold italic text-gold sm:text-5xl">{c.heading}</h2>
          <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {c.stats.map((stat, i) => (
              <div key={stat.description} data-testid={`stat-tile-${i}`} className="flex flex-col border-b border-white/15 pb-6">
                <dt className="text-base leading-snug text-white/85">{stat.description}</dt>
                <dd className="font-display order-first mb-2 text-5xl font-bold text-gold">
                  {stat.value}
                  {stat.label && <span className="text-2xl text-white/80"> {stat.label}</span>}
                </dd>
              </div>
            ))}
          </dl>
          <p data-testid="proof-awards" className="mt-10 text-lg font-semibold text-white/90">{c.awards}</p>
        </Reveal>
      </div>
    </section>
  );
}
