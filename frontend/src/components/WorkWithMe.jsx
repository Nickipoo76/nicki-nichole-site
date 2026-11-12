import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import content from "../content";
import { Reveal } from "../motion";

const linkCls =
  "mt-4 inline-flex items-center gap-2 font-semibold text-white underline decoration-gold decoration-2 underline-offset-4";

export default function WorkWithMe() {
  const c = content.workWithMe;
  return (
    <section id="work-with-me" data-testid="work-with-me-section" className="bg-plum py-10 text-white sm:py-14">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold italic text-gold sm:text-5xl">{c.heading}</h2>
          <div className="mt-10 grid gap-x-12 gap-y-10 lg:grid-cols-2">
            <div data-testid="work-owners-card" className="border-l-4 border-gold pl-5">
              <h3 className="font-display text-2xl font-bold sm:text-3xl">{c.owners.heading}</h3>
              <p className="mt-3 text-lg leading-relaxed text-white/85">{c.owners.text}</p>
              <Link to="/?topic=business#contact" data-testid="work-owners-cta" className={linkCls}>
                {c.owners.cta}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div data-testid="work-hiring-card" className="border-l-4 border-gold pl-5">
              <h3 className="font-display text-2xl font-bold sm:text-3xl">{c.hiring.heading}</h3>
              <p className="mt-3 text-lg leading-relaxed text-white/85">
                {c.hiring.text.replace("{roles}", c.hiring.roles)}
              </p>
              <Link to={`/?topic=${c.hiring.topic}#contact`} data-testid="work-hiring-cta" className={linkCls}>
                {c.hiring.cta}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
