import { Link } from "react-router-dom";
import { ArrowRight, Calculator, Gauge } from "lucide-react";
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
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/lead-leak-score" data-testid="band-quiz-cta" className="btn-gold">
              <Gauge size={18} aria-hidden="true" />
              {c.quizCta}
            </Link>
            <Link
              to="/lead-calculator"
              data-testid="band-calculator-cta"
              className="btn-ghost text-cream hover:bg-cream hover:text-plum"
            >
              <Calculator size={18} aria-hidden="true" />
              {c.calculatorCta}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
