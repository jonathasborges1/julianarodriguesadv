export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://julianarodriguesadv.com.br";

export function canonicalUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${SITE_URL}${withSlash}`;
}
