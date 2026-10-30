import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Minus, Plus } from "lucide-react";
import content from "../content";
import { EASE } from "../motion";

const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function usePageMeta(title, description) {
  useEffect(() => {
    const prevTitle = document.title;
    const descTag = document.querySelector('meta[name="description"]');
    const prevDesc = descTag?.getAttribute("content");
    document.title = title;
    descTag?.setAttribute("content", description);
    return () => {
      document.title = prevTitle;
      if (descTag && prevDesc) descTag.setAttribute("content", prevDesc);
    };
  }, [title, description]);
}

function NumberField({ id, label, help, value, onChange, testId }) {
  const num = Number(value) || 0;
  const bump = (delta) => onChange(String(Math.max(0, num + delta)));
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-plum">
        {label}
      </label>
      <p className="mb-3 text-xs text-plum/60">{help}</p>
      <div className="flex items-stretch overflow-hidden rounded-2xl border border-plum/20 bg-white focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/50">
        <button
          type="button"
          data-testid={`${testId}-minus`}
          aria-label={`Decrease ${label}`}
          onClick={() => bump(-1)}
          className="flex w-12 items-center justify-center text-plum/70 transition-colors hover:bg-blush hover:text-plum"
        >
          <Minus size={18} aria-hidden="true" />
        </button>
        <input
          id={id}
          data-testid={testId}
          type="number"
          inputMode="numeric"
          min="0"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="0"
          className="w-full border-0 py-4 text-center text-lg font-semibold text-plum focus:outline-none focus:ring-0 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <button
          type="button"
          data-testid={`${testId}-plus`}
          aria-label={`Increase ${label}`}
          onClick={() => bump(1)}
          className="flex w-12 items-center justify-center text-plum/70 transition-colors hover:bg-blush hover:text-plum"
        >
          <Plus size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default function LeadCalculator() {
  const c = content.calculator;
  usePageMeta(c.metaTitle, c.metaDescription);

  const [leads, setLeads] = useState("");
  const [clients, setClients] = useState("");
  const [value, setValue] = useState("");
  const [pct, setPct] = useState(20);

  const leadsNum = Math.max(0, Number(leads) || 0);
  const clientsNum = Math.max(0, Number(clients) || 0);
  const valueNum = Math.max(0, Number(value) || 0);
  const filled = leads !== "" && clients !== "" && value !== "";
  const invalid = filled && clientsNum > leadsNum;
  const lost = invalid ? 0 : Math.max(0, leadsNum - clientsNum);
  const extraClients = Math.round(lost * (pct / 100) * 10) / 10;
  const extraMonthly = lost * (pct / 100) * valueNum;
  const extraYearly = extraMonthly * 12;

  return (
    <main data-testid="calculator-page" className="relative overflow-hidden pt-28 sm:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-10%] h-[26rem] w-[26rem] rounded-full bg-blush blur-3xl opacity-70" />
        <div className="absolute bottom-[-15%] left-[-10%] h-[22rem] w-[22rem] rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 pb-24 sm:px-8">
        <header className="mb-12 text-center">
          <p className="eyebrow justify-center text-plum/60">{c.eyebrow}</p>
          <h1 className="font-display mt-5 text-balance text-3xl font-semibold leading-tight text-plum sm:text-5xl">
            {c.heading}
          </h1>
          <p className="mt-4 text-base text-plum/75 sm:text-lg">{c.intro}</p>
        </header>

        <div className="card-surface grid gap-8 p-8 sm:grid-cols-3 sm:p-10">
          <NumberField id="calc-leads" testId="calc-leads-input" label={c.inputs.leads.label} help={c.inputs.leads.help} value={leads} onChange={setLeads} />
          <NumberField id="calc-clients" testId="calc-clients-input" label={c.inputs.clients.label} help={c.inputs.clients.help} value={clients} onChange={setClients} />
          <NumberField id="calc-value" testId="calc-value-input" label={c.inputs.value.label} help={c.inputs.value.help} value={value} onChange={setValue} />
        </div>

        {invalid && (
          <p data-testid="calc-validation" role="alert" className="mt-6 rounded-2xl bg-blush px-6 py-4 text-center text-sm font-semibold text-plum">
            {c.validation}
          </p>
        )}

        {filled && !invalid && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mt-10 rounded-3xl bg-plum p-8 text-cream sm:p-12"
            data-testid="calc-results"
          >
            <p className="font-display text-balance text-center text-2xl font-semibold leading-snug sm:text-4xl" data-testid="calc-lost-line">
              {c.lostLine.split("{count}")[0]}
              <span className="text-gold">{lost}</span>
              {c.lostLine.split("{count}")[1]}
            </p>

            <fieldset className="mt-10">
              <legend className="mb-4 w-full text-center text-sm font-semibold uppercase tracking-[0.2em] text-cream/60">
                {c.toggleLabel}
              </legend>
              <div className="mx-auto flex w-fit rounded-full bg-plum-deep p-1.5 ring-1 ring-cream/15" role="radiogroup" aria-label={c.toggleLabel}>
                {c.toggleOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    role="radio"
                    aria-checked={pct === option}
                    data-testid={`calc-pct-${option}`}
                    onClick={() => setPct(option)}
                    className={`rounded-full px-6 py-2.5 text-base font-bold transition-[background-color,color] duration-300 ${
                      pct === option ? "bg-gold text-plum-ink" : "text-cream/70 hover:text-cream"
                    }`}
                  >
                    {option}%
                  </button>
                ))}
              </div>
            </fieldset>

            <dl className="mt-10 grid gap-6 text-center sm:grid-cols-3">
              <div data-testid="calc-extra-clients">
                <dt className="order-2 mt-2 text-sm text-cream/70">{c.results.clients}</dt>
                <dd className="font-display order-1 text-4xl font-semibold text-gold sm:text-5xl">{extraClients}</dd>
              </div>
              <div data-testid="calc-extra-monthly">
                <dt className="order-2 mt-2 text-sm text-cream/70">{c.results.monthly}</dt>
                <dd className="font-display order-1 text-4xl font-semibold text-gold sm:text-5xl">{usd.format(extraMonthly)}</dd>
              </div>
              <div data-testid="calc-extra-yearly">
                <dt className="order-2 mt-2 text-sm text-cream/70">{c.results.yearly}</dt>
                <dd className="font-display order-1 text-4xl font-semibold text-gold sm:text-5xl">{usd.format(extraYearly)}</dd>
              </div>
            </dl>

            <p className="mt-8 text-center text-xs text-cream/55" data-testid="calc-note">
              {c.note}
            </p>
          </motion.div>
        )}

        <div className="mt-10 text-center">
          <a href={content.links.booking} data-testid="calc-cta" className="btn-gold">
            {c.cta}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </main>
  );
}
