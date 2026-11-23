import React from "react";
import PageHero from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { CopyEmail, EMAIL } from "../components/Footer";
import { useClock } from "../components/hooks";
import { contactPageData, socialMediaLinks, writer } from "../../portfolio";

const HANDLE = {
  Github: "@SauRavRwT",
  LinkedIn: "in/SauRavRwT",
  YouTube: "@balbheji",
  Instagram: "@rawatsensei",
};

export default function Contact() {
  const time = useClock();
  const socials = socialMediaLinks.filter((s) => !s.link.startsWith("mailto:"));
  return (
    <>
      <PageHero
        eyebrow="Contact"
        parts={[{ text: "Say" }, { text: "hello.", serif: true }]}
        lead={contactPageData.contactSection.description}
      />

      <section className="wrap">
        <Reveal>
          <a href={`mailto:${EMAIL}`} className="contact-big">
            {EMAIL}
          </a>
        </Reveal>
        <Reveal delay={0.1} className="hero-ctas">
          <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
            Write an email <span className="arrow">↗</span>
          </a>
          <CopyEmail />
        </Reveal>
        <Reveal delay={0.15}>
          <p className="muted mono" style={{ marginTop: 28 }}>
            Based in New Delhi, India · it's {time} here
          </p>
        </Reveal>
      </section>

      <section className="section wrap">
        <div className="contact-grid">
          {socials.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.06}>
              <a
                className="contact-tile card"
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className={`fa-brands ${s.fontAwesomeIcon}`}
                  aria-hidden="true"
                />
                <span className="tile-arrow" aria-hidden="true">
                  ↗
                </span>
                <div>
                  <strong>{s.name}</strong>
                  <span>
                    {HANDLE[s.name] ||
                      s.link.replace(/^https?:\/\/(www\.)?/, "")}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
          {writer && (
            <Reveal delay={socials.length * 0.06}>
              <a
                className="contact-tile card"
                href={writer.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-feather" aria-hidden="true" />
                <span className="tile-arrow" aria-hidden="true">
                  ↗
                </span>
                <div>
                  <strong>{writer.title}</strong>
                  <span>Shayari &amp; poems</span>
                </div>
              </a>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
