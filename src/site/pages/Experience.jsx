import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import PageHero from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { assetImage } from "../components/hooks";
import { experience } from "../../portfolio";

const EASE = [0.22, 1, 0.36, 1];
const LABEL = {
  Work: "Work",
  Internships: "Internships",
  Volunteerships: "Volunteering",
};

const all = experience.sections.flatMap((s) =>
  s.experiences.map((e) => ({ ...e, section: LABEL[s.title] || s.title }))
);
const FILTERS = [
  "All",
  ...experience.sections.map((s) => LABEL[s.title] || s.title),
];

function Role({ role, open, onToggle }) {
  const current = /present/i.test(role.duration);
  const id = `xp-${role.title}-${role.company}`.replace(/\W+/g, "-");
  return (
    <motion.li layout className={`xp${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="xp-head"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="xp-when mono">
          {role.duration}
          <br />
          {role.section}
        </span>
        <span className="xp-logo">
          <img src={assetImage(role.logo_path)} alt="" loading="lazy" />
        </span>
        <span>
          <span className="xp-title">{role.title}</span>
          <span className="xp-company">
            {role.company} · {role.location}
            {current && (
              <span
                className="chip"
                style={{
                  color: "var(--accent-text)",
                  borderColor: "currentColor",
                }}
              >
                <span className="pulse-dot" /> now
              </span>
            )}
          </span>
        </span>
        <span className="xp-toggle" aria-hidden="true">
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            className="xp-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <div className="xp-body-inner">
              <span />
              <div>
                <p>{role.description}</p>
                <div className="xp-links">
                  {role.company_url && (
                    <a
                      className="btn btn-sm"
                      href={role.company_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {role.company} <span className="arrow">↗</span>
                    </a>
                  )}
                  {role.proof_link && (
                    <a
                      className="btn btn-sm"
                      href={role.proof_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See the device tree on GitHub{" "}
                      <span className="arrow">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

export default function Experience() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(() => new Set([0]));
  const list = filter === "All" ? all : all.filter((r) => r.section === filter);

  const toggle = (key) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  const counts = FILTERS.slice(1).map((f) => ({
    f,
    n: all.filter((r) => r.section === f).length,
  }));

  return (
    <>
      <PageHero
        eyebrow="Experience"
        parts={[
          { text: "Where I've" },
          { text: "put in the hours.", serif: true },
        ]}
        lead={experience.description}
      >
        <div className="page-stats">
          {counts.map((c) => (
            <div key={c.f}>
              <strong>{c.n}</strong>
              <span>{c.f.toLowerCase()}</span>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="section wrap" style={{ paddingTop: 60 }}>
        <Reveal className="xp-toolbar">
          <div className="filter" role="group" aria-label="Filter roles">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {filter === f && (
                  <motion.span layoutId="xp-filter" className="filter-pill" />
                )}
                <span>{f}</span>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="btn btn-sm"
            onClick={() =>
              setOpen((prev) =>
                prev.size >= all.length
                  ? new Set()
                  : new Set(all.map((_, i) => i))
              )
            }
          >
            {open.size >= all.length ? "Collapse all" : "Expand all"}
          </button>
        </Reveal>

        <motion.ul layout className="xp-list">
          <AnimatePresence initial={false}>
            {list.map((role) => {
              const key = all.indexOf(role);
              return (
                <Role
                  key={key}
                  role={role}
                  open={open.has(key)}
                  onToggle={() => toggle(key)}
                />
              );
            })}
          </AnimatePresence>
        </motion.ul>
      </section>
    </>
  );
}
