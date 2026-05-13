import fs from "fs";
import path from "path";

const DOMAIN = "https://julianarodriguesadv.com.br";
const KEY = "7f1c2e8a9b4d4e7a9c2f6b1d3a8e5c0f";
const SITEMAP_PATH = path.join(__dirname, "..", "public", "sitemap.xml");

const sitemap = fs.readFileSync(SITEMAP_PATH, "utf-8");
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  (match) => match[1]
);

async function submitIndexNow() {
  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(DOMAIN).host,
      key: KEY,
      keyLocation: `${DOMAIN}/${KEY}.txt`,
      urlList,
    }),
  });

  if (!response.ok) {
    throw new Error(`IndexNow failed: ${response.status} ${response.statusText}`);
  }

  console.log(`IndexNow enviado: ${urlList.length} URLs`);
}

submitIndexNow().catch((error) => {
  console.error(error);
  process.exit(1);
});
