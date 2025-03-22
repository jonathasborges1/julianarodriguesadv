/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://julianarodrigues.com.br',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  trailingSlash: true,
  exclude: ['/404'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://julianarodrigues.com.br/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
