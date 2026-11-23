import React from "react";
import { Reveal, SplitWords } from "./Reveal";

export default function PageHero({ eyebrow, parts, lead, children }) {
  return (
    <header className="page-hero wrap">
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <SplitWords
        as="h1"
        className="display"
        parts={parts}
        animateOnMount
        delay={0.1}
      />
      {lead && (
        <Reveal delay={0.3}>
          <p className="lead">{lead}</p>
        </Reveal>
      )}
      {children && <Reveal delay={0.4}>{children}</Reveal>}
    </header>
  );
}

export function SectionHead({ eyebrow, parts, aside }) {
  return (
    <div className="section-head">
      <div>
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <SplitWords as="h2" className="h2" parts={parts} />
      </div>
      {aside && <Reveal delay={0.1}>{aside}</Reveal>}
    </div>
  );
}
