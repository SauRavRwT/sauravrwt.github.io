import React, { useState } from "react";
import { Link } from "react-router-dom";
import { greeting, socialMediaLinks } from "../../portfolio";
import { NAV_LINKS } from "./Nav";
import { Reveal, SplitWords } from "./Reveal";
import { useClock } from "./hooks";

export const EMAIL = (
  socialMediaLinks.find((s) => s.link.startsWith("mailto:")) || { link: "" }
).link.replace("mailto:", "");

export function CopyEmail({ className = "" }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      window.location.href = `mailto:${EMAIL}`;
    }
  };
  return (
    <button
      type="button"
      className={`btn ${className}`}
      onClick={copy}
      aria-live="polite"
    >
      {copied ? "Copied to clipboard ✓" : "Copy email"}
    </button>
  );
}

export function Socials() {
  return (
    <ul className="socials">
      {socialMediaLinks.map((s) => (
        <li key={s.name}>
          <a
            href={s.link}
            target={s.link.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={s.name}
            title={s.name}
          >
            <i
              className={`fa-brands ${s.fontAwesomeIcon}`}
              aria-hidden="true"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const time = useClock();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-cta">
          <Reveal>
            <span className="eyebrow">Open to good conversations</span>
          </Reveal>
          <SplitWords
            as="h2"
            className="footer-title"
            parts={[
              { text: "Let's build" },
              { text: "something", serif: true },
              { text: "together." },
            ]}
          />
          <Reveal delay={0.2} className="footer-email-row">
            <a href={`mailto:${EMAIL}`} className="footer-email underline-link">
              {EMAIL}
            </a>
            <CopyEmail />
          </Reveal>
        </div>

        <div className="footer-grid">
          <div>
            <p className="footer-signature" aria-label={greeting.title}>
              {greeting.title}
            </p>
            <p className="muted footer-small">
              New Delhi, India · <span className="mono">{time} IST</span>
            </p>
          </div>
          <nav aria-label="Footer" className="footer-nav">
            <Link to="/home">Home</Link>
            {NAV_LINKS.map((l) => (
              <Link key={l.to} to={l.to}>
                {l.label}
              </Link>
            ))}
            <Link to="/contact">Contact</Link>
          </nav>
          <div className="footer-right">
            <Socials />
            <p className="muted footer-small">
              Designed & built with React and Vite ·{" "}
              <a
                className="underline-link"
                href={greeting.portfolio_repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source ↗
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
