import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import {
  greeting,
  seo,
  socialMediaLinks,
  experience,
  blog,
} from "../../portfolio";

const SITE = seo.og.url.replace(/^http:/, "https:").replace(/\/$/, "");

const TITLES = {
  "/projects": "Projects",
  "/experience": "Experience",
  "/education": "Education",
  "/blog": "Writing",
  "/contact": "Contact",
  "/resume": "Résumé",
};

const currentJob = experience.sections
  .flatMap((s) => s.experiences)
  .find((e) => /present/i.test(e.duration));

// Public profile data only — no phone number or street address.
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: greeting.title,
  url: `${SITE}/`,
  jobTitle: currentJob ? currentJob.title : undefined,
  worksFor: currentJob
    ? { "@type": "Organization", name: currentJob.company }
    : undefined,
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressCountry: "IN",
  },
  sameAs: socialMediaLinks
    .filter((s) => s.link.startsWith("http"))
    .map((s) => s.link),
};

function pageTitle(pathname) {
  const post = pathname.match(/^\/blog\/([^/]+)/);
  if (post) {
    const found = blog.blogPosts.find((p) => String(p.id) === post[1]);
    if (found) return found.title;
  }
  return TITLES[pathname];
}

export default function Seo() {
  const { pathname } = useLocation();
  const section = pageTitle(pathname);
  const title = section
    ? `${section} — ${greeting.title}`
    : `${greeting.title} · Data Analyst & Front-end Developer`;
  return (
    <Helmet>
      <title>{title}</title>
      <link
        rel="canonical"
        href={`${SITE}${pathname === "/home" ? "/" : pathname}`}
      />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={`${SITE}${pathname}`} />
      <script type="application/ld+json">{JSON.stringify(person)}</script>
    </Helmet>
  );
}
