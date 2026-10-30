import { ArrowUpRight } from "lucide-react";
import content from "../content";
import { Reveal } from "../motion";

export default function LeadToolsBand() {
  const c = content.leadTools;
  return (
    <section data-testid="lead-tools-band" className="bg-blush pb-24 sm:pb-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal className="rounded-3xl bg-plum px-8 py-12 text-center shadow-[0_28px_60px_-24px_rgba(42,18,41,0.55)] sm:px-12">
          <h2 className="font-display text-balance text-2xl font-semibold leading-tight text-cream sm:text-4xl">
            {c.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-cream/80 sm:text-lg">{c.text}</p>
          <div className="mt-8 flex justify-center">
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="band-tools-cta"
              className="btn-gold"
            >
              {c.cta}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
