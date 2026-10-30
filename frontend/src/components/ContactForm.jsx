import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import content from "../content";
import { Reveal } from "../motion";

const isPlaceholder = (v) => !v || (v.startsWith("[") && v.endsWith("]"));

function TikTokIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export default function ContactForm() {
  const c = content.contact;
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [searchParams] = useSearchParams();
  const urlTopic = searchParams.get("topic") || "";
  const [topic, setTopic] = useState(urlTopic);

  useEffect(() => {
    if (c.topics.some((t) => t.value === urlTopic)) setTopic(urlTopic);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlTopic]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");
    try {
      const body = new URLSearchParams(new FormData(form)).toString();
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error("submit failed");
      setStatus("success");
      form.reset();
      setTopic("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="bg-cream-deep py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <p className="eyebrow mb-6 text-plum/60">{c.eyebrow}</p>
          <h2 className="font-display max-w-md text-balance text-3xl font-semibold leading-tight text-plum sm:text-5xl">
            {c.heading}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-plum/80 sm:text-lg">{c.intro}</p>

          <ul className="mt-10 space-y-4 text-base text-plum">
            {!isPlaceholder(content.links.email) && (
              <li>
                <a
                  href={`mailto:${content.links.email}`}
                  data-testid="contact-email-link"
                  className="inline-flex items-center gap-3 font-semibold no-underline hover:text-gold"
                >
                  <Mail size={20} aria-hidden="true" className="text-gold" />
                  {content.links.email}
                </a>
              </li>
            )}
            <li>
              <a
                href={content.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-instagram-link"
                className="inline-flex items-center gap-3 font-semibold no-underline hover:text-gold"
              >
                <Instagram size={20} aria-hidden="true" className="text-gold" />
                Instagram · @wholesalingwithnicki
              </a>
            </li>
            <li>
              <a
                href={content.links.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-tiktok-link"
                className="inline-flex items-center gap-3 font-semibold no-underline hover:text-gold"
              >
                <TikTokIcon />
                TikTok · @wholesalingwithnicki
              </a>
            </li>
            {!isPlaceholder(content.links.linkedin) && (
              <li>
                <a
                  href={content.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-linkedin-link"
                  className="inline-flex items-center gap-3 font-semibold no-underline hover:text-gold"
                >
                  <Linkedin size={20} aria-hidden="true" className="text-gold" />
                  LinkedIn
                </a>
              </li>
            )}
            {c.location && (
              <li className="inline-flex items-center gap-3 font-semibold">
                <MapPin size={20} aria-hidden="true" className="text-gold" />
                {c.location}
              </li>
            )}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          {status === "success" ? (
            <div
              data-testid="contact-success"
              role="status"
              className="card-surface flex h-full flex-col items-start justify-center p-10"
            >
              <h3 className="font-display text-3xl font-semibold text-plum">{c.successHeading}</h3>
              <p className="mt-4 text-base leading-relaxed text-plum/80">{c.successText}</p>
              <button
                type="button"
                data-testid="contact-success-back"
                className="btn-ghost mt-8 text-plum hover:bg-plum hover:text-cream"
                onClick={() => setStatus("idle")}
              >
                {c.successCta}
              </button>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              data-testid="contact-form"
              onSubmit={onSubmit}
              className="card-surface space-y-6 p-8 sm:p-10"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don&rsquo;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-plum">
                  Name
                </label>
                <input
                  id="contact-name"
                  data-testid="contact-name-input"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-2xl border border-plum/20 bg-white px-5 py-3.5 text-base text-plum placeholder:text-plum/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-plum">
                  Email
                </label>
                <input
                  id="contact-email"
                  data-testid="contact-email-input"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-2xl border border-plum/20 bg-white px-5 py-3.5 text-base text-plum placeholder:text-plum/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="contact-topic" className="mb-2 block text-sm font-semibold text-plum">
                  Topic
                </label>
                <select
                  id="contact-topic"
                  data-testid="contact-topic-select"
                  name="topic"
                  required
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full appearance-none rounded-2xl border border-plum/20 bg-white px-5 py-3.5 text-base text-plum focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
                >
                  <option value="" disabled>
                    Choose a topic
                  </option>
                  {c.topics.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-plum">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  data-testid="contact-message-input"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-y rounded-2xl border border-plum/20 bg-white px-5 py-3.5 text-base text-plum placeholder:text-plum/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="Tell me about your business and what you want more of."
                />
              </div>

              {status === "error" && (
                <p data-testid="contact-error" role="alert" className="text-sm font-semibold text-red-800">
                  Something went wrong sending your message. Please try again.
                </p>
              )}

              <button
                type="submit"
                data-testid="contact-submit-button"
                disabled={status === "sending"}
                className="btn-gold w-full disabled:cursor-wait disabled:opacity-70"
              >
                {status === "sending" ? "Sending…" : "Send my message"}
              </button>
              <p className="text-center text-xs text-plum/60">{c.privacy}</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
