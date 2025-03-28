import fs from "fs";
import path from "path";

const DOMAIN = "https://julianarodriguesadv.com.br";
const DIST_DIR = path.join(__dirname, "..", "out");
const OUTPUT_FILE = path.join(__dirname, "..", "public", "sitemap.xml");

const ignoreList = new Set([
  "_next",
  "404.html",
  "sitemap.xml",
  "robots.txt",
  "manifest.json",
  "icon0.svg",
  "icon1.png",
  "apple-icon.png",
  "404",
]);

function getRoutesFromOutDir(dir: string, baseRoute = ""): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);
    const route = path.join(baseRoute, entry.name);

    if (ignoreList.has(entry.name)) return [];

    if (entry.isDirectory()) {
      return getRoutesFromOutDir(entryPath, route);
    }

    if (entry.name === "index.html") {
      const formattedRoute = baseRoute === "" ? "/" : `/${baseRoute}/`;
      return [formattedRoute.replace(/\\/g, "/")];
    }

    return [];
  });
}

function generateSitemap(urls: string[]): string {
  const entries = urls
    .map((url) => `  <url>\n    <loc>${DOMAIN}${url}</loc>\n  </url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;
}

function writeSitemap(content: string) {
  const dir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(OUTPUT_FILE, content, "utf-8");
  console.log("✅ Sitemap gerado com sucesso!");
}

// Execução
const routes = getRoutesFromOutDir(DIST_DIR);

// Inclui favicon.ico e favicon-32x32.png
const extraUrls = ["/favicon.ico", "/favicon-32x32.png"];
const allUrls = [...routes, ...extraUrls];

const sitemap = generateSitemap(allUrls);
writeSitemap(sitemap);
