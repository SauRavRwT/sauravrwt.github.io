import React from "react";
import PageHero, { SectionHead } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { ProjectStack, Gallery } from "../components/Work";
import { spotlight } from "../components/hooks";
import {
  featuredProjects,
  moreWork,
  greeting,
  publications,
} from "../../portfolio";
import repos from "../../shared/opensource/projects.json";

// GitHub's own language colours
const LANG_COLORS = {
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  "Jupyter Notebook": "#DA5B0B",
  Dockerfile: "#384d54",
  Java: "#b07219",
  TypeScript: "#3178c6",
};

const languageCounts = (() => {
  const counts = {};
  repos.data.forEach((r) =>
    (r.languages || []).forEach(
      (l) => (counts[l.name] = (counts[l.name] || 0) + 1)
    )
  );
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([name, n]) => ({ name, n, pct: (n / total) * 100 }));
})();

const liveCount = [...featuredProjects, ...moreWork].filter((p) => p.live)
  .length;

export default function Projects() {
  const paper = publications.data[0];
  return (
    <>
      <PageHero
        eyebrow="Work"
        parts={[
          { text: "Projects that" },
          { text: "actually run.", serif: true },
        ]}
        lead="Case studies with real details, plus the smaller experiments. Most are live — open them right here without leaving the page."
      >
        <div className="page-stats">
          <div>
            <strong>{featuredProjects.length + moreWork.length}</strong>
            <span>projects shown</span>
          </div>
          <div>
            <strong>{liveCount}</strong>
            <span>live demos</span>
          </div>
          <div>
            <strong>{publications.data.length}</strong>
            <span>published paper</span>
          </div>
        </div>
      </PageHero>

      <section className="section wrap">
        <SectionHead
          eyebrow="Case studies"
          parts={[{ text: "The" }, { text: "big ones", serif: true }]}
        />
        <ProjectStack projects={featuredProjects} />
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Playground"
            parts={[{ text: "Smaller" }, { text: "experiments", serif: true }]}
            aside={<p className="lead">Drag sideways, tap to play.</p>}
          />
        </div>
        <Gallery items={moreWork} />
      </section>

      {paper && (
        <section className="section wrap">
          <SectionHead
            eyebrow="Research"
            parts={[{ text: "Published" }, { text: "work", serif: true }]}
          />
          <Reveal className="publication card spot" onPointerMove={spotlight}>
            <span className="publication-mark" aria-hidden="true">
              “
            </span>
            <div>
              <span className="mono muted">
                ICAISI 2025 · Taylor &amp; Francis ·{" "}
                {new Date(paper.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <h3>{paper.name}</h3>
              <p className="muted">{paper.description}</p>
              <a
                className="btn btn-primary"
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read on Taylor &amp; Francis <span className="arrow">↗</span>
              </a>
            </div>
          </Reveal>
        </section>
      )}

      <section className="section wrap">
        <SectionHead
          eyebrow="From GitHub"
          parts={[{ text: "Pinned" }, { text: "repositories", serif: true }]}
          aside={
            <a
              className="btn"
              href={greeting.githubProfile}
              target="_blank"
              rel="noopener noreferrer"
            >
              Everything on GitHub <span className="arrow">↗</span>
            </a>
          }
        />
        <Reveal>
          <div
            className="lang-bar"
            role="img"
            aria-label="Languages used across pinned repositories"
          >
            {languageCounts.map((l) => (
              <span
                key={l.name}
                style={{
                  width: `${l.pct}%`,
                  background: LANG_COLORS[l.name] || "var(--muted)",
                }}
              />
            ))}
          </div>
          <p className="lang-legend">
            {languageCounts.map((l) => (
              <span key={l.name}>
                <i
                  style={{ background: LANG_COLORS[l.name] || "var(--muted)" }}
                />
                {l.name} · {l.n}
              </span>
            ))}
          </p>
        </Reveal>
        <div className="repo-grid" style={{ marginTop: 32 }}>
          {repos.data.map((r, i) => (
            <Reveal key={r.id} delay={(i % 3) * 0.08}>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="repo card spot"
                onPointerMove={spotlight}
              >
                <div className="repo-top mono">
                  <span>{new Date(r.createdAt).getFullYear()}</span>
                  <span>↗</span>
                </div>
                <h3>{r.name}</h3>
                <p>{r.description}</p>
                <div className="chip-row">
                  {(r.languages || []).map((l) => (
                    <span className="chip" key={l.name}>
                      <i
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: 2,
                          background: LANG_COLORS[l.name] || "var(--muted)",
                        }}
                      />
                      {l.name}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
