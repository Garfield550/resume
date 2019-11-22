module.exports = {
  siteMetadata: {
    title: `Garfield Lee's resume`,
    description: `Garfield Lee's resume.`,
    author: '@Garfield550',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Garfield Lee's resume`,
        short_name: 'Garfield550 Resume',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://resume.550.moe',
        stripQueryString: true,
      },
    },
    'gatsby-plugin-offline',
  ],
};
