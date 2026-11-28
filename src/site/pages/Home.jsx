import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import DotGrid from "../components/DotGrid";
import { Reveal, RISEN, SplitWords, rise } from "../components/Reveal";
import { ProjectStack, Gallery } from "../components/Work";
import { Journey, StatsRow, VelocityMarquee } from "../components/Showcase";
import { spotlight, useClock } from "../components/hooks";
import { INTRO_DELAY } from "../introState";
import {
  greeting,
  experience,
  featuredProjects,
  moreWork,
  skills,
} from "../../portfolio";
import {
  getJourney,
  getLatestPosts,
  getStats,
  getToolbox,
} from "../../shared/highlights";

const EASE = [0.22, 1, 0.36, 1];
const current = experience.sections
  .flatMap((s) => s.experiences)
  .find((e) => /present/i.test(e.duration));
const tools = getToolbox().map((t) => t.skillName);
const journey = getJourney();
const stats = getStats();
const posts = getLatestPosts(4);

function Hero() {
  const time = useClock();
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const d = INTRO_DELAY;
  const [first, ...rest] = greeting.title.split(" ");

  return (
    <section className="hero" ref={ref}>
      <DotGrid />
      <motion.div
        className="wrap hero-inner"
        style={reduce ? undefined : { y, opacity: fade }}
      >
        <motion.div
          className="hero-top mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: d + 0.2, duration: 0.8 }}
        >
          <span>Balbheji © {new Date().getFullYear()}</span>
          <span>New Delhi, IN · {time} IST</span>
        </motion.div>

        <SplitWords
          as="h1"
          className="hero-name"
          animateOnMount
          delay={d}
          parts={[{ text: first }, { text: rest.join(" "), serif: true }]}
        />

        <div className="hero-bottom">
          <motion.p
            className="hero-lede"
            initial={{ opacity: 0, transform: rise("20px") }}
            animate={{ opacity: 1, ...RISEN }}
            transition={{ delay: d + 0.5, duration: 0.9, ease: EASE }}
          >
            Data analyst &amp; front-end developer, turning raw numbers into{" "}
            <span className="serif">clear stories</span> and ideas into{" "}
            <span className="serif">working apps</span>.
          </motion.p>

          <motion.div
            className="hero-side"
            initial={{ opacity: 0, transform: rise("20px") }}
            animate={{ opacity: 1, ...RISEN }}
            transition={{ delay: d + 0.65, duration: 0.9, ease: EASE }}
          >
            {current && (
              <Link to="/experience" className="status">
                <span className="pulse-dot" />
                <span>
                  Currently <strong>{current.title}</strong> at{" "}
                  {current.company}
                </span>
              </Link>
            )}
            <div className="hero-ctas">
              <a href="#work" className="btn btn-primary">
                See my work <span className="arrow">↓</span>
              </a>
              <Link to="/resume" className="btn">
                Résumé
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="scroll-cue mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: d + 1.2 }}
        aria-hidden="true"
      >
        <span />
        scroll
      </motion.div>
    </section>
  );
}

/* Paragraph that lights up word by word as you scroll through it. */
function ScrollText({ text }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 45%"],
  });
  const words = text.split(" ");
  return (
    <p ref={ref} className="scroll-text">
      {words.map((w, i) => (
        <Word
          key={i}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
          reduce={reduce}
        >
          {w}
        </Word>
      ))}
    </p>
  );
}

function Word({ children, progress, range, reduce }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <>
      <motion.span style={reduce ? undefined : { opacity }}>
        {children}
      </motion.span>{" "}
    </>
  );
}

function Capabilities() {
  return (
    <div className="caps">
      {skills.data.map((group, i) => (
        <Reveal
          key={group.title}
          delay={i * 0.1}
          className="cap card spot"
          onPointerMove={spotlight}
        >
          <span className="mono accent">0{i + 1}</span>
          <h3 className="h3">{group.title}</h3>
          <ul className="cap-list">
            {group.skills.map((s) => (
              <li key={s}>{s.replace(/^⚡\s*/, "")}</li>
            ))}
          </ul>
          <ul className="cap-tools" aria-label="Tools">
            {group.softwareSkills.map((t) => (
              <li key={t.skillName} title={t.skillName}>
                <span
                  className="iconify"
                  data-icon={t.fontAwesomeClassname}
                  data-inline="false"
                />
                <span className="visually-hidden">{t.skillName}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}

function Writing() {
  const fmt = (d) =>
    new Date(d).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  return (
    <ul className="post-rows">
      {posts.map((p, i) => (
        <Reveal as="li" key={p.id} delay={i * 0.06}>
          <Link to={`/blog/${p.id}`} className="post-row">
            <span className="post-row-emoji" aria-hidden="true">
              {p.emoji}
            </span>
            <span className="post-row-title">{p.title}</span>
            <span className="post-row-meta mono">
              {p.category} · {fmt(p.date)}
            </span>
            <span className="post-row-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <section className="marquees" aria-label={`Tools: ${tools.join(", ")}`}>
        <VelocityMarquee items={tools.slice(0, Math.ceil(tools.length / 2))} />
        <VelocityMarquee
          items={tools.slice(Math.ceil(tools.length / 2))}
          reverse
          outlined
          baseSpeed={30}
        />
      </section>

      <section className="section wrap">
        <Reveal>
          <span className="eyebrow">About</span>
        </Reveal>
        <ScrollText text={greeting.about} />
      </section>

      <section className="section wrap" id="work">
        <div className="section-head">
          <div>
            <Reveal>
              <span className="eyebrow">Selected work</span>
            </Reveal>
            <SplitWords
              as="h2"
              className="h2"
              parts={[{ text: "Things I've" }, { text: "built", serif: true }]}
            />
          </div>
          <Reveal delay={0.1}>
            <p className="lead">
              Real projects with live demos. Hit “Try it live” to play with them
              right here.
            </p>
          </Reveal>
        </div>
        <ProjectStack projects={featuredProjects.slice(0, 3)} />
        <Reveal className="center-cta">
          <Link to="/projects" className="btn">
            All {featuredProjects.length + moreWork.length} projects{" "}
            <span className="arrow">→</span>
          </Link>
        </Reveal>
      </section>

      <section className="section wrap">
        <div className="section-head">
          <div>
            <Reveal>
              <span className="eyebrow">By the numbers</span>
            </Reveal>
            <SplitWords
              as="h2"
              className="h2"
              parts={[
                { text: "Numbers," },
                { text: "not adjectives", serif: true },
              ]}
            />
          </div>
        </div>
        <StatsRow stats={stats} />
      </section>

      <section className="section">
        <Journey events={journey}>
          <div className="section-head journey-head">
            <div>
              <span className="eyebrow">The path so far</span>
              <h2 className="h2">
                From a diploma to <span className="serif">GlobalLogic</span>
              </h2>
            </div>
            <p className="lead">Every stop links to the details.</p>
          </div>
        </Journey>
      </section>

      <section className="section wrap">
        <div className="section-head">
          <div>
            <Reveal>
              <span className="eyebrow">What I do</span>
            </Reveal>
            <SplitWords
              as="h2"
              className="h2"
              parts={[
                { text: "Three hats," },
                { text: "one desk", serif: true },
              ]}
            />
          </div>
        </div>
        <Capabilities />
      </section>

      <section className="section">
        <div className="wrap section-head">
          <div>
            <Reveal>
              <span className="eyebrow">Playground</span>
            </Reveal>
            <SplitWords
              as="h2"
              className="h2"
              parts={[
                { text: "More things I've" },
                { text: "shipped", serif: true },
              ]}
            />
          </div>
          <Reveal delay={0.1}>
            <p className="lead">
              All live on GitHub Pages. Tap one to play with it.
            </p>
          </Reveal>
        </div>
        <Gallery items={moreWork} />
      </section>

      <section className="section wrap">
        <div className="section-head">
          <div>
            <Reveal>
              <span className="eyebrow">Writing</span>
            </Reveal>
            <SplitWords
              as="h2"
              className="h2"
              parts={[
                { text: "Notes from the" },
                { text: "desk & the hills", serif: true },
              ]}
            />
          </div>
          <Reveal delay={0.1}>
            <Link to="/blog" className="btn">
              All posts <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
        <Writing />
      </section>
    </>
  );
}
