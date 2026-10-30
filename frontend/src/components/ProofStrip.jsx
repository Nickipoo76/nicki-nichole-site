import content from "../content";

// Bold band + one slow editorial marquee directly under the hero.
export default function ProofStrip() {
  const items = [...content.proofStrip, ...content.proofStrip];
  return (
    <section aria-label="Track record" data-testid="proof-strip" className="relative z-10 bg-plum py-6">
      <div className="overflow-hidden" role="presentation">
        <div className="animate-marquee flex w-max items-center whitespace-nowrap">
          {items.map((text, i) => (
            <span key={i} className="flex items-center">
              <span
                className="font-display text-lg font-medium text-cream sm:text-xl"
                aria-hidden={i >= content.proofStrip.length ? "true" : undefined}
              >
                {text}
              </span>
              <span aria-hidden="true" className="mx-8 h-2 w-2 rounded-full bg-gold" />
            </span>
          ))}
        </div>
      </div>
      {/* Screen-reader friendly static list */}
      <ul className="sr-only">
        {content.proofStrip.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </section>
  );
}
