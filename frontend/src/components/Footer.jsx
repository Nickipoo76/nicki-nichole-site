import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import content from "../content";
import { Wordmark } from "./Nav";

const isPlaceholder = (v) => !v || (v.startsWith("[") && v.endsWith("]"));

export default function Footer() {
  const f = content.footer;
  return (
    <footer data-testid="site-footer" className="bg-plum-ink py-14 text-cream/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center sm:px-8">
        <Wordmark dark />
        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
          <a
            href={content.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-instagram-link"
            className="inline-flex items-center gap-2 font-medium no-underline transition-colors hover:text-gold"
          >
            <Instagram size={16} aria-hidden="true" /> Instagram
          </a>
          {!isPlaceholder(content.links.linkedin) && (
            <a
              href={content.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-linkedin-link"
              className="inline-flex items-center gap-2 font-medium no-underline transition-colors hover:text-gold"
            >
              <Linkedin size={16} aria-hidden="true" /> LinkedIn
            </a>
          )}
          <Link
            to="/privacy"
            data-testid="footer-privacy-link"
            className="font-medium no-underline transition-colors hover:text-gold"
          >
            {f.privacy}
          </Link>
        </nav>
        <p data-testid="footer-copyright" className="text-sm text-cream/60">
          {f.copyright}
        </p>
      </div>
    </footer>
  );
}
