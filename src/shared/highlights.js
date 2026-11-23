// Everything on the home page's visual sections is derived from real data
// (portfolio.js + the GitHub data pulled by git_data_fetcher.mjs).
// Update portfolio.js and these update themselves — no hard-coded numbers.
import {
  degrees,
  experience,
  certifications,
  publications,
  blog,
  skills,
} from "../portfolio";
import projects from "./opensource/projects.json";

const MONTHS = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

// "Aug 2025 - Present" | "Sept 2023 - Oct 2023" | "23 May 2025" | "2019 - 2022"
export function parseStartDate(text) {
  if (!text) return null;
  const monthYear = text.match(/([A-Za-z]{3,})\.?\s*(\d{4})/);
  if (monthYear) {
    const month = MONTHS[monthYear[1].slice(0, 3).toLowerCase()];
    if (month !== undefined) return new Date(Number(monthYear[2]), month, 1);
  }
  const year = text.match(/\d{4}/);
  return year ? new Date(Number(year[0]), 0, 1) : null;
}

const SECTION_TYPE = {
  Work: "Work",
  Internships: "Internship",
  Volunteerships: "Volunteering",
};

export function getJourney() {
  const events = [];

  degrees.degrees.forEach((d) => {
    events.push({
      type: "Education",
      title: d.subtitle,
      org: d.alt_name || d.title,
      logo: d.logo_path,
      when: d.duration,
      date: parseStartDate(d.duration),
      to: "/education",
    });
  });

  experience.sections.forEach((section) => {
    section.experiences.forEach((e) => {
      events.push({
        type: SECTION_TYPE[section.title] || section.title,
        title: e.title,
        org: e.company,
        logo: e.logo_path,
        when: e.duration,
        date: parseStartDate(e.duration),
        current: /present/i.test(e.duration),
        to: "/experience",
      });
    });
  });

  publications.data.forEach((p) => {
    const date = new Date(p.createdAt);
    events.push({
      type: "Publication",
      title: p.name,
      org: "Published paper",
      icon: "📄",
      when: date.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      }),
      date,
      href: p.url,
    });
  });

  return events
    .filter((e) => e.date && !isNaN(e.date))
    .sort((a, b) => a.date - b.date);
}

export function getStats() {
  const startYears = degrees.degrees
    .map((d) => parseStartDate(d.duration))
    .filter(Boolean)
    .map((d) => d.getFullYear());
  const firstYear = Math.min(...startYears);

  const roles = experience.sections
    .filter((s) => s.title === "Work" || s.title === "Internships")
    .reduce((n, s) => n + s.experiences.length, 0);

  return [
    {
      value: new Date().getFullYear() - firstYear,
      label: "years learning & building",
      note: `since ${firstYear}`,
      to: "/education",
    },
    {
      value: roles,
      label: "work & internship roles",
      note: "GlobalLogic, DRDO…",
      to: "/experience",
    },
    {
      value: certifications.certifications.length,
      label: "certifications",
      note: "NVIDIA, Cisco, GfG…",
      to: "/education",
    },
    {
      value: projects.data.length,
      label: "pinned GitHub projects",
      note: "live from GitHub",
      to: "/projects",
    },
    {
      value: publications.data.length,
      label:
        publications.data.length === 1 ? "published paper" : "published papers",
      note: "ICAISI 2025",
      to: "/projects",
    },
    {
      value: blog.blogPosts.length,
      label: "blog posts",
      note: "tech, travel, life",
      to: "/blog",
    },
  ];
}

export function getToolbox() {
  const seen = new Set();
  const tools = [];
  skills.data.forEach((group) =>
    group.softwareSkills.forEach((s) => {
      if (!s.fontAwesomeClassname || seen.has(s.skillName)) return;
      seen.add(s.skillName);
      tools.push(s);
    })
  );
  return tools;
}

export function getLatestPosts(count = 3) {
  return [...blog.blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
}
