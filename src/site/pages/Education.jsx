import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import PageHero, { SectionHead } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { assetImage, spotlight } from "../components/hooks";
import { degrees, certifications, competitiveSites } from "../../portfolio";

const certs = certifications.certifications.map((c) => ({
  ...c,
  issuer: c.subtitle.replace(/^-\s*/, ""),
  group: /linkedin/i.test(c.subtitle)
    ? "LinkedIn Learning"
    : "Industry & events",
}));
const GROUPS = ["All", "Industry & events", "LinkedIn Learning"];

export default function Education() {
  const [group, setGroup] = useState("All");
  const shown = useMemo(
    () => (group === "All" ? certs : certs.filter((c) => c.group === group)),
    [group]
  );

  return (
    <>
      <PageHero
        eyebrow="Education"
        parts={[{ text: "Always" }, { text: "still learning.", serif: true }]}
        lead="A diploma, a B.Tech, and a long tail of certifications — from NVIDIA and Cisco to DRDO and Smart India Hackathon."
      >
        <div className="page-stats">
          <div>
            <strong>{degrees.degrees.length}</strong>
            <span>degrees</span>
          </div>
          <div>
            <strong>{certs.length}</strong>
            <span>certifications</span>
          </div>
          <div>
            <strong>{competitiveSites.competitiveSites.length}</strong>
            <span>coding profiles</span>
          </div>
        </div>
      </PageHero>

      <section className="section wrap" style={{ paddingTop: 60 }}>
        <div className="degrees">
          {degrees.degrees.map((d, i) => (
            <Reveal
              key={d.title}
              delay={i * 0.1}
              className="degree card spot"
              onPointerMove={spotlight}
            >
              <div className="degree-top">
                <span className="degree-logo">
                  <img
                    src={assetImage(d.logo_path)}
                    alt={d.alt_name}
                    loading="lazy"
                  />
                </span>
                {d.grade && (
                  <span className="degree-grade">
                    {d.grade
                      .replace(/^CGPA\s*/i, "")
                      .replace(/\s*\/\s*10$/, "")}
                    <small>CGPA / 10</small>
                  </span>
                )}
              </div>
              <span className="mono muted">{d.duration}</span>
              <h3>{d.subtitle}</h3>
              <p className="muted" style={{ marginTop: -8 }}>
                {d.title}
              </p>
              {d.descriptions.map((t) => (
                <p key={t}>{t}</p>
              ))}
              {d.website_link && (
                <a
                  className="btn btn-sm"
                  href={d.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit {d.alt_name} <span className="arrow">↗</span>
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <SectionHead
          eyebrow="Certifications"
          parts={[
            { text: "Receipts," },
            { text: "all clickable", serif: true },
          ]}
          aside={
            <div
              className="filter"
              role="group"
              aria-label="Filter certifications"
            >
              {GROUPS.map((g) => (
                <button
                  key={g}
                  type="button"
                  aria-pressed={group === g}
                  onClick={() => setGroup(g)}
                >
                  {group === g && (
                    <motion.span
                      layoutId="cert-filter"
                      className="filter-pill"
                    />
                  )}
                  <span>{g}</span>
                </button>
              ))}
            </div>
          }
        />
        <motion.ul
          layout
          className="certs"
          style={{ listStyle: "none", margin: 0, padding: 0 }}
        >
          <AnimatePresence mode="popLayout">
            {shown.map((c) => (
              <motion.li
                layout
                key={c.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  className="cert card spot"
                  href={c.certificate_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onPointerMove={spotlight}
                >
                  <span className="cert-logo">
                    <img src={assetImage(c.logo_path)} alt="" loading="lazy" />
                  </span>
                  <h3>{c.title}</h3>
                  <span className="cert-issuer">{c.issuer}</span>
                  <span className="cert-view mono">View certificate ↗</span>
                </a>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </section>

      <section className="section wrap">
        <SectionHead
          eyebrow="Practice"
          parts={[{ text: "Where I" }, { text: "sharpen up", serif: true }]}
        />
        <div className="profiles">
          {competitiveSites.competitiveSites.map((s, i) => (
            <Reveal key={s.siteName} delay={i * 0.06}>
              <a
                className="profile card"
                href={s.profileLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{s.siteName}</span>
                <span
                  className="iconify"
                  data-icon={s.iconifyClassname}
                  data-inline="false"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
