import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import content from "../content";
import { EASE } from "../motion";

export function Wordmark({ dark = false }) {
  return (
    <span className="inline-flex items-baseline gap-3" data-testid="wordmark">
      <span
        className={`font-display text-xl font-semibold tracking-tight ${dark ? "text-cream" : "text-plum"}`}
      >
        Nicki Nichole
      </span>
      <span className="hidden h-1.5 w-1.5 rounded-full bg-gold sm:inline-block" aria-hidden="true" />
    </span>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const firstMobileLink = useRef(null);
  const n = content.nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) firstMobileLink.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      data-testid="site-nav"
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        scrolled || open ? "bg-cream/90 shadow-[0_1px_0_rgba(59,31,58,0.08)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8"
      >
        <Link
          to="/"
          data-testid="nav-home-link"
          className="no-underline"
          onClick={() => setOpen(false)}
          aria-label="Nicki Nichole — home"
        >
          <Wordmark />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            to="/about"
            data-testid="nav-about-link"
            className="text-sm font-semibold text-plum no-underline transition-colors duration-300 hover:text-gold"
          >
            {n.about}
          </Link>
          <Link
            to="/#contact"
            data-testid="nav-contact-link"
            className="text-sm font-semibold text-plum no-underline transition-colors duration-300 hover:text-gold"
          >
            {n.contact}
          </Link>
          <a
            href={content.links.booking}
            data-testid="nav-cta-button"
            className="btn-gold !px-6 !py-2.5 !text-sm"
          >
            {n.cta}
          </a>
        </div>

        <button
          type="button"
          data-testid="nav-mobile-toggle"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-plum md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            data-testid="nav-mobile-menu"
            className="fixed inset-0 top-0 z-[-1] flex flex-col justify-center bg-cream px-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <nav aria-label="Mobile" className="flex flex-col gap-6">
              {[
                { label: n.home, to: "/", tid: "mobile-nav-home" },
                { label: n.about, to: "/about", tid: "mobile-nav-about" },
                { label: n.contact, to: "/#contact", tid: "mobile-nav-contact" },
              ].map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.5, ease: EASE }}
                >
                  <Link
                    ref={i === 0 ? firstMobileLink : undefined}
                    to={item.to}
                    data-testid={item.tid}
                    className="font-display text-4xl font-semibold text-plum no-underline"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.46, duration: 0.5, ease: EASE }}
              >
                <a
                  href={content.links.booking}
                  data-testid="mobile-nav-cta"
                  className="btn-gold mt-4"
                  onClick={() => setOpen(false)}
                >
                  {n.cta}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
