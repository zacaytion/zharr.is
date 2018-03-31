/**
 * SITE CONFIGURATION
 */

module.exports = {
  blogPostDir: 'posts', // The name of directory that contains your posts.
  siteTitle: 'Hello World!', // Site title.
  siteTitleAlt: 'Zachary Harris', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://zharr.is', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  // TODO: Change site description
  siteDescription: 'A GatsbyJS stater with Advanced design in mind.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  googleAnalyticsID: 'UA-47311644-5', // GA tracking ID.
  postDefaultCategoryID: 'tech', // Default category for posts.
  userName: 'Zachary Harris', // Username to display in the author segment.
  userTwitter: '', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'North Pole, Earth', // User location to display in the author segment.
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
      name: 'Now',
      path: '/now',
    },
    {
      name: 'Projects',
      path: '/projects',
    },
    {
      name: 'Reading',
      path: '/reading',
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
