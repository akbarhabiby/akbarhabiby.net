require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `Muhammad Akbar Habiby Khalid`,
    siteTitleAlt: `Portfolio | Muhammad Akbar Habiby Khalid`,
    siteHeadline: `Akbar Habiby's Portfolio site`,
    siteUrl: `https://akbarhabiby.net`,
    siteDescription: `Hi, I'm a Software Developer, Filmmaker, Photographer, and Gamer.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `Muhammad Akbar Habiby Khalid`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio | Muhammad Akbar Habiby Khalid`,
        short_name: `Portfolio | Muhammad Akbar Habiby Khalid`,
        description: `Hi, I'm a Software Developer, Filmmaker, Photographer, and Gamer.`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`
  ].filter(Boolean),
}
