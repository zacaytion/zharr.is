/**
 * SITE CONFIGURATION
 */

module.exports = {
  blogPostDir: 'blog', // The name of directory that contains your posts.
  projectsDir: 'projects',
  readingDir: 'readings',
  siteTitle: 'Hello World!', // Site title.
  siteTitleAlt: 'Zach Harris', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://zharr.is', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'Hello, World!', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  googleAnalyticsID: 'UA-47311644-5', // GA tracking ID.
  postDefaultCategoryID: 'tech', // Default category for posts.
  userName: 'Zach Harris', // Username to display in the author segment.
  userTwitter: 'zacaytion', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Earth', // User location to display in the author segment.
  userDescription: '', // Links to social profiles/projects you want to display in the author segment/navigation bar.
  navPaths: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Whoami',
      path: '/whoami',
    },
    {
      name: 'Blog',
      path: '/blog',
    },
    {
      name: 'Projects',
      path: '/projects',
    },
    {
      name: 'Reading',
      path: '/reading',
    },
    {
      name: 'Now',
      path: '/now',
    },
  ],
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/zacaytion',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/zacaytion',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Email',
      url: 'mailto:z@zharr.is',
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: 'Copyright © 2018. Zachary Harris', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
}
