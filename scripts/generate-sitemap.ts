import fs from "fs";
import path from "path";

const DOMAIN = "https://julianarodriguesadv.com.br";
const DIST_DIR = path.join(__dirname, "..", "out");
const OUTPUT_FILE = path.join(__dirname, "..", "public", "sitemap.xml");

// Arquivos e diretórios que nunca devem aparecer no sitemap
const IGNORE_NAMES = new Set([
  "_next",
  "404.html",
  "404",
  "sitemap.xml",
  "robots.txt",
  "manifest.json",
  "site.webmanifest",
  "icon0.svg",
  "icon1.png",
  "apple-icon.png",
  "apple-touch-icon.png",
]);

const IGNORE_EXTENSIONS = new Set([
  ".ico",
  ".png",
  ".jpg",
  ".jpeg",
  ".svg",
  ".webp",
  ".gif",
  ".json",
  ".txt",
  ".webmanifest",
  ".xml",
  ".css",
  ".js",
  ".map",
]);

// lastmod por rota (ISO 8601). Atualize ao publicar ou editar uma página.
const LAST_MOD: Record<string, string> = {
  "/": "2026-04-29",
  "/blog/": "2026-04-29",
  "/blog/justa-causa/": "2025-03-28",
  "/blog/reintegracao-no-emprego/": "2025-03-12",
  "/blog/rescisao-indireta/": "2025-03-29",
  "/blog/overbooking/": "2026-04-27",
  "/blog/plano-de-saude-negou-exame/": "2026-04-29",
  "/politica-de-privacidade/": "2025-01-01",
  "/termos-de-uso/": "2025-01-01",
};

function priority(route: string): string {
  if (route === "/") return "1.0";
  if (route === "/blog/") return "0.8";
  if (route.startsWith("/blog/")) return "0.7";
  return "0.5";
}

function changefreq(route: string): string {
  if (route === "/" || route === "/blog/") return "weekly";
  if (route.startsWith("/blog/")) return "monthly";
  return "yearly";
}

function collectRoutes(dir: string, baseRoute = ""): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    if (IGNORE_NAMES.has(entry.name)) return [];

    const ext = path.extname(entry.name);
    if (IGNORE_EXTENSIONS.has(ext)) return [];

    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return collectRoutes(entryPath, `${baseRoute}/${entry.name}`);
    }

    if (entry.name === "index.html") {
      const route = baseRoute === "" ? "/" : `${baseRoute}/`;
      return [route];
    }

    return [];
  });
}

function buildSitemap(routes: string[]): string {
  const entries = routes
    .sort()
    .map((route) => {
      const lastmod = LAST_MOD[route] ?? "2025-01-01";
      return [
        "  <url>",
        `    <loc>${DOMAIN}${route}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${changefreq(route)}</changefreq>`,
        `    <priority>${priority(route)}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries,
    "</urlset>",
  ].join("\n");
}

const routes = collectRoutes(DIST_DIR);
const sitemap = buildSitemap(routes);

const dir = path.dirname(OUTPUT_FILE);
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(OUTPUT_FILE, sitemap, "utf-8");

console.log(`Sitemap gerado: ${routes.length} URLs`);
routes.forEach((r) => console.log(` → ${DOMAIN}${r}`));
