const PRODUCTION_SITE_URL = "https://julianarodriguesadv.com.br";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const isLocalhostUrl = configuredSiteUrl
  ? /^https?:\/\/localhost(?::\d+)?$/i.test(configuredSiteUrl)
  : false;

export const SITE_URL =
  configuredSiteUrl && !isLocalhostUrl
    ? configuredSiteUrl
    : PRODUCTION_SITE_URL;

export function canonicalUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${SITE_URL}${withSlash}`;
}
