// Fetches all posts from Medium RSS and rewrites src/components/Blogs.tsx.

import { writeFileSync } from "fs";
import { parseStringPromise } from "xml2js";

const MEDIUM_RSS = "https://medium.com/feed/@vedantbhavsar";
const BLOGS_FILE = new URL(
  "../../src/data/blogs.ts",
  import.meta.url
).pathname;

function formatDate(pubDate) {
  const d = new Date(pubDate);
  return d.toLocaleString("en-US", { month: "short", year: "numeric" });
}

function stripHtml(html = "") {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function buildBlogsTs(posts) {
  const entries = posts
    .map(
      (p) =>
        `  {\n    title: ${JSON.stringify(p.title)},\n    description: ${JSON.stringify(p.description)},\n    date: ${JSON.stringify(p.date)},\n    link: ${JSON.stringify(p.link)},\n  }`
    )
    .join(",\n");

  return `export interface BlogPost {
  title: string;
  description: string;
  date: string;
  link: string;
}

export const blogs: BlogPost[] = [
${entries},
];
`;
}

async function main() {
  const res = await fetch(MEDIUM_RSS);
  if (!res.ok) throw new Error(`Failed to fetch RSS: ${res.status}`);
  const xml = await res.text();

  const parsed = await parseStringPromise(xml);
  const items = parsed.rss.channel[0].item ?? [];

  const posts = items.map((item) => {
    const title = item.title?.[0] ?? "";
    const rawDesc =
      item["content:encoded"]?.[0] ?? item.description?.[0] ?? "";
    const plain = stripHtml(rawDesc);
    const firstSentence = plain.split(/[.!?]/)[0].trim().slice(0, 160);
    return {
      title,
      description: firstSentence || title,
      date: formatDate(item.pubDate?.[0] ?? ""),
      link: item.link?.[0] ?? "#",
    };
  });

  if (posts.length === 0) {
    console.log("No posts found — keeping existing Blogs.tsx unchanged.");
    return;
  }

  writeFileSync(BLOGS_FILE, buildBlogsTs(posts), "utf8");
  console.log(`Updated Blogs.tsx with ${posts.length} posts.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
