import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <main data-testid="privacy-page" className="mx-auto max-w-3xl px-6 pb-16 pt-24 sm:px-8 sm:pt-28">
      <h1 className="font-display text-4xl font-semibold text-plum sm:text-5xl">Privacy</h1>
      <p className="mt-8 text-base leading-relaxed text-body">
        This site collects only what you choose to send through the contact form: your name, email, topic and
        message. That information is used solely to reply to you and is never sold or shared with third parties
        for marketing.
      </p>
      <p className="mt-4 text-base leading-relaxed text-body">
        The contact form is processed by Netlify Forms. This site sets no advertising cookies and runs no
        third-party trackers.
      </p>
      <p className="mt-4 text-base leading-relaxed text-body">
        Questions? Reach out through the{" "}
        <Link to="/?#contact" className="font-semibold text-plum underline decoration-gold decoration-2">
          contact form
        </Link>
        .
      </p>
      <Link
        to="/"
        data-testid="privacy-back-link"
        className="btn-ghost mt-10 text-plum hover:bg-plum hover:text-cream"
      >
        Back to home
      </Link>
    </main>
  );
}
