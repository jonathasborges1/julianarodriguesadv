/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://julianarodriguesadv.com.br',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  trailingSlash: true,
  exclude: ['/404'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://julianarodriguesadv.com.br/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
