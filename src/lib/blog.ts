import fs from "fs";
import path from "path";

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
  time?: string;
}

const monthNumbers: Record<string, number> = {
  janeiro: 0,
  fevereiro: 1,
  marco: 2,
  abril: 3,
  maio: 4,
  junho: 5,
  julho: 6,
  agosto: 7,
  setembro: 8,
  outubro: 9,
  novembro: 10,
  dezembro: 11,
};

export async function loadBlogPosts(): Promise<PostMeta[]> {
  const blogDir = path.join(process.cwd(), "src/app/blog");
  const entries = fs.readdirSync(blogDir, { withFileTypes: true });

  const posts: PostMeta[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const metaPath = path.join(blogDir, entry.name, "metadata.ts");

      if (fs.existsSync(metaPath)) {
        const mod = await import(`../app/blog/${entry.name}/metadata`);
        if (mod.post) {
          posts.push(mod.post);
        }
      }
    }
  }

  return posts.sort(
    (a, b) =>
      parsePostPublishedAt(b).getTime() - parsePostPublishedAt(a).getTime()
  );
}

export function parsePostPublishedAt(
  post: Pick<PostMeta, "date" | "time">
): Date {
  const normalized = post.date
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(",", "")
    .trim();

  const match = normalized.match(/^(\d{1,2})\s+de\s+([a-z]+)\s+(\d{4})$/);

  if (!match) {
    return new Date(0);
  }

  const [, day, monthName, year] = match;
  const month = monthNumbers[monthName];
  const timeMatch = post.time?.match(/^(\d{2}):(\d{2})$/);
  const hours = timeMatch ? Number(timeMatch[1]) : 0;
  const minutes = timeMatch ? Number(timeMatch[2]) : 0;

  if (month === undefined) {
    return new Date(0);
  }

  return new Date(Number(year), month, Number(day), hours, minutes);
}
