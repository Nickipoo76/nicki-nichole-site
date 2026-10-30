import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, RotateCcw, Send } from "lucide-react";
import content from "../content";
import { EASE } from "../motion";

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

export default function LeadLeakScore() {
  const q = content.quiz;
  usePageMeta(q.metaTitle, q.metaDescription);
  const reduce = useReducedMotion();

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);
  const [emailStatus, setEmailStatus] = useState("idle"); // idle | sending | success | error

  const total = q.questions.length;
  const answered = answers.length;
  const progress = finished ? 100 : Math.round((answered / total) * 100);

  const pick = (answerIndex) => {
    const next = [...answers];
    next[step] = answerIndex;
    setAnswers(next);
    if (step === total - 1) setFinished(true);
    else setStep(step + 1);
  };

  const back = () => {
    if (finished) setFinished(false);
    else if (step > 0) setStep(step - 1);
  };

  const retake = () => {
    setAnswers([]);
    setStep(0);
    setFinished(false);
    setEmailStatus("idle");
  };

  const sum = answers.reduce((a, b) => a + (b || 0), 0);
  const score = Math.round((sum / (total * 3)) * 100);
  const label = q.labels.find((l) => score <= l.max)?.label;
  const leaks = q.questions
    .map((question, i) => ({ ...question, points: answers[i] ?? 0, index: i }))
    .sort((a, b) => a.points - b.points || a.index - b.index)
    .slice(0, 3);

  const sendResults = async (e) => {
    e.preventDefault();
    setEmailStatus("sending");
    try {
      const data = new FormData(e.target);
      data.set("score", `${score} / 100 — ${label}`);
      data.set("leaks", leaks.map((l) => l.area).join("; "));
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });
      if (!res.ok) throw new Error("submit failed");
      setEmailStatus("success");
    } catch {
      setEmailStatus("error");
    }
  };

  const transition = reduce
    ? { duration: 0 }
    : { duration: 0.4, ease: EASE };

  return (
    <main data-testid="quiz-page" className="relative overflow-hidden pt-28 sm:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-[-10%] h-[26rem] w-[26rem] rounded-full bg-blush blur-3xl opacity-70" />
        <div className="absolute bottom-[-15%] right-[-10%] h-[22rem] w-[22rem] rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl px-6 pb-24 sm:px-8">
        <header className="mb-10 text-center">
          <p className="eyebrow justify-center text-plum/60">{q.eyebrow}</p>
          <h1 className="font-display mt-5 text-balance text-3xl font-semibold leading-tight text-plum sm:text-5xl">
            {q.heading}
          </h1>
          <p className="mt-4 text-base text-plum/75 sm:text-lg">{q.intro}</p>
        </header>

        {/* Progress */}
        <div className="mb-8">
          <div
            className="h-2 w-full overflow-hidden rounded-full bg-plum/10"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Quiz progress"
            data-testid="quiz-progress"
          >
            <div
              className="h-full rounded-full bg-gold transition-[width] duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          {!finished && (
            <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-plum/60" data-testid="quiz-step-label">
              {q.progressLabel.replace("{current}", Math.min(step + 1, total)).replace("{total}", total)}
            </p>
          )}
        </div>

        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div
              key={step}
              initial={reduce ? false : { opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, x: -32 }}
              transition={transition}
            >
              <h2
                className="font-display text-balance text-2xl font-semibold leading-snug text-plum sm:text-3xl"
                data-testid="quiz-question"
                aria-live="polite"
              >
                {q.questions[step].question}
              </h2>
              <div className="mt-8 space-y-3">
                {q.questions[step].answers.map((answer, i) => (
                  <button
                    key={answer}
                    type="button"
                    data-testid={`quiz-answer-${i}`}
                    onClick={() => pick(i)}
                    className={`w-full rounded-2xl border-2 px-6 py-5 text-left text-base font-medium text-plum transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-gold hover:bg-blush focus-visible:border-gold sm:text-lg ${
                      answers[step] === i ? "border-gold bg-blush" : "border-plum/15 bg-white/70"
                    }`}
                  >
                    {answer}
                  </button>
                ))}
              </div>
              <button
                type="button"
                data-testid="quiz-back-button"
                onClick={back}
                disabled={step === 0}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-plum/70 transition-colors hover:text-plum disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                {q.backLabel}
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              data-testid="quiz-result"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition}
            >
              <div className="card-surface p-8 text-center sm:p-12">
                <h2 className="eyebrow justify-center text-plum/60">{q.resultHeading}</h2>
                <p data-testid="quiz-score" className="font-display mt-6 text-7xl font-semibold text-plum sm:text-8xl">
                  {score}
                </p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-plum/50">{q.scoreOutOf}</p>
                <p
                  data-testid="quiz-label"
                  className="mx-auto mt-5 inline-block rounded-full bg-gold px-6 py-2 text-sm font-bold uppercase tracking-[0.14em] text-plum-ink"
                >
                  {label}
                </p>
              </div>

              <h3 className="font-display mt-12 text-2xl font-semibold text-plum" data-testid="quiz-leaks-heading">
                {q.leaksHeading}
              </h3>
              <ul className="mt-5 space-y-4">
                {leaks.map((leak, i) => (
                  <li key={leak.area} data-testid={`quiz-leak-${i}`} className="card-surface p-6">
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-plum/60">{leak.area}</p>
                    <p className="mt-2 text-base leading-relaxed text-plum">{leak.tip}</p>
                  </li>
                ))}
              </ul>

              <a href={content.links.booking} data-testid="quiz-cta" className="btn-gold mt-10 w-full sm:w-auto">
                {q.cta}
                <ArrowRight size={18} aria-hidden="true" />
              </a>

              <div className="card-surface mt-10 p-8">
                {emailStatus === "success" ? (
                  <p data-testid="quiz-email-success" role="status" className="text-base font-semibold text-plum">
                    {q.emailSuccess}
                  </p>
                ) : (
                  <form
                    name="lead-leak-score"
                    method="POST"
                    data-netlify="true"
                    data-testid="quiz-email-form"
                    onSubmit={sendResults}
                    className="flex flex-col gap-4 sm:flex-row sm:items-end"
                  >
                    <input type="hidden" name="form-name" value="lead-leak-score" />
                    <input type="hidden" name="score" value="" />
                    <input type="hidden" name="leaks" value="" />
                    <div className="flex-1">
                      <label htmlFor="quiz-email" className="mb-2 block text-sm font-semibold text-plum">
                        {q.emailHeading}
                      </label>
                      <input
                        id="quiz-email"
                        data-testid="quiz-email-input"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder={q.emailPlaceholder}
                        className="w-full rounded-2xl border border-plum/20 bg-white px-5 py-3.5 text-base text-plum placeholder:text-plum/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
                      />
                    </div>
                    <button
                      type="submit"
                      data-testid="quiz-email-submit"
                      disabled={emailStatus === "sending"}
                      className="btn-ghost text-plum hover:bg-plum hover:text-cream disabled:cursor-wait disabled:opacity-70"
                    >
                      {emailStatus === "sending" ? "Sending…" : q.emailCta}
                      <Send size={16} aria-hidden="true" />
                    </button>
                    {emailStatus === "error" && (
                      <p data-testid="quiz-email-error" role="alert" className="text-sm font-semibold text-red-800">
                        {q.emailError}
                      </p>
                    )}
                  </form>
                )}
              </div>

              <button
                type="button"
                data-testid="quiz-retake-button"
                onClick={retake}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-plum/70 transition-colors hover:text-plum"
              >
                <RotateCcw size={16} aria-hidden="true" />
                {q.retake}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
