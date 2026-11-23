// Pulls your pinned GitHub repositories into src/shared/opensource/projects.json
// (used by the "Pinned repositories" section on the Projects page).
//
// Usage: put GITHUB_TOKEN and GITHUB_USERNAME in .env, then `npm run fetch-data`.
// The token only needs public read access.
import fs from "node:fs";
import dotenv from "dotenv";

dotenv.config();

const token = process.env.GITHUB_TOKEN;
const username = process.env.GITHUB_USERNAME;

if (!token || !username) {
  console.error("Missing GITHUB_TOKEN or GITHUB_USERNAME — see env.example.");
  process.exit(1);
}

const query = `
  query ($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            id
            name
            createdAt
            url
            description
            isFork
            languages(first: 10) { nodes { name } }
          }
        }
      }
    }
  }
`;

const response = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `bearer ${token}`,
  },
  body: JSON.stringify({ query, variables: { login: username } }),
});

const json = await response.json();
if (!response.ok || json.errors) {
  console.error(
    "GitHub API error:",
    JSON.stringify(json.errors || json, null, 2)
  );
  process.exit(1);
}

const data = json.data.user.pinnedItems.nodes.map((repo) => ({
  ...repo,
  languages: repo.languages.nodes.map(({ name }) => ({ name })),
}));

fs.writeFileSync(
  "./src/shared/opensource/projects.json",
  JSON.stringify({ data }, null, 2) + "\n"
);
console.log(
  `Saved ${data.length} pinned repositories to src/shared/opensource/projects.json`
);
