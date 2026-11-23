import React, { useMemo, useState } from "react";
import { Link, Redirect, useLocation, useParams } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import PageHero from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { spotlight } from "../components/hooks";
import { blog, blogDesp, writer } from "../../portfolio";

const posts = [...blog.blogPosts].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);
const categories = ["All", ...new Set(posts.map((p) => p.category))];
const fmt = (d, long) =>
  new Date(d).toLocaleDateString("en-US", {
    month: long ? "long" : "short",
    day: "numeric",
    year: "numeric",
  });

export function BlogIndex() {
  const { search } = useLocation();
  const legacy = new URLSearchParams(search).get("post");
  const [cat, setCat] = useState("All");
  const list = useMemo(
    () => (cat === "All" ? posts : posts.filter((p) => p.category === cat)),
    [cat]
  );

  // old links: /blog?post=3 → /blog/3
  if (legacy !== null) return <Redirect to={`/blog/${legacy}`} />;

  const [featured, ...rest] = list;
  const minutes = posts.reduce((n, p) => n + parseInt(p.readTime, 10), 0);

  return (
    <>
      <PageHero
        eyebrow="Writing"
        parts={[
          { text: "Notes, tutorials &" },
          { text: "detours.", serif: true },
        ]}
        lead={blogDesp.description}
      >
        <div className="page-stats">
          <div>
            <strong>{posts.length}</strong>
            <span>posts</span>
          </div>
          <div>
            <strong>{categories.length - 1}</strong>
            <span>topics</span>
          </div>
          <div>
            <strong>{minutes}</strong>
            <span>minutes of reading</span>
          </div>
        </div>
      </PageHero>

      <section className="section wrap" style={{ paddingTop: 60 }}>
        <Reveal
          className="filter blog-filter"
          role="group"
          aria-label="Filter posts by topic"
        >
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={cat === c}
              onClick={() => setCat(c)}
            >
              {cat === c && (
                <motion.span layoutId="blog-filter" className="filter-pill" />
              )}
              <span>{c}</span>
            </button>
          ))}
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {featured && (
              <Link
                to={`/blog/${featured.id}`}
                className="blog-featured card spot"
                onPointerMove={spotlight}
              >
                <span className="blog-featured-emoji" aria-hidden="true">
                  {featured.emoji}
                </span>
                <div className="blog-featured-text">
                  <span className="mono muted">
                    Latest · {featured.category} · {fmt(featured.date)} ·{" "}
                    {featured.readTime}
                  </span>
                  <h2>{featured.title}</h2>
                  <p>{featured.excerpt}</p>
                  <span
                    className="btn btn-primary btn-sm"
                    style={{ alignSelf: "flex-start" }}
                  >
                    Read post <span className="arrow">→</span>
                  </span>
                </div>
              </Link>
            )}
            <div className="blog-grid">
              {rest.map((p, i) => (
                <Reveal key={p.id} delay={(i % 3) * 0.07}>
                  <Link
                    to={`/blog/${p.id}`}
                    className="blog-card card spot"
                    onPointerMove={spotlight}
                  >
                    <span className="blog-card-emoji" aria-hidden="true">
                      {p.emoji}
                    </span>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <span className="mono">
                      {p.category} · {fmt(p.date)} · {p.readTime}
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {writer && (
        <section className="section wrap">
          <Reveal className="writer card spot" onPointerMove={spotlight}>
            <div>
              <span className="eyebrow">Also writing at</span>
              <h3 className="serif">{writer.title}</h3>
              <p className="muted">{writer.subtitle}</p>
            </div>
            <a
              className="btn btn-primary"
              href={writer.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the poems <span className="arrow">↗</span>
            </a>
          </Reveal>
        </section>
      )}
    </>
  );
}

export function BlogPost() {
  const { id } = useParams();
  const index = posts.findIndex((p) => String(p.id) === id);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  if (index === -1) return <Redirect to="/blog" />;
  const post = posts[index];
  const newer = posts[index - 1];
  const older = posts[index + 1];

  return (
    <article className="wrap">
      <motion.div
        className="reading-progress"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <div className="post">
        <Link to="/blog" className="post-back mono">
          ← All writing
        </Link>
        <Reveal>
          <div className="post-emoji" aria-hidden="true">
            {post.emoji}
          </div>
          <h1>{post.title}</h1>
          <div className="post-meta mono">
            <span className="accent">{post.category}</span>
            <span>{fmt(post.date, true)}</span>
            <span>{post.readTime}</span>
          </div>
        </Reveal>
        <div className="post-body">
          {post.content.map((para, i) => (
            <Reveal key={i} y={16} amount={0.1}>
              <p>{para}</p>
            </Reveal>
          ))}
          <div className="chip-row post-tags">
            {post.tags.map((t) => (
              <span key={t} className="chip">
                #{t}
              </span>
            ))}
          </div>
        </div>
        <nav className="post-nav" aria-label="More posts">
          {older ? (
            <Link to={`/blog/${older.id}`} className="card">
              <span className="mono muted">← Older</span>
              <strong>{older.title}</strong>
            </Link>
          ) : (
            <span />
          )}
          {newer && (
            <Link to={`/blog/${newer.id}`} className="card">
              <span className="mono muted">Newer →</span>
              <strong>{newer.title}</strong>
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
