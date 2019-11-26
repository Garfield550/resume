const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Garfield Lee's resume`,
    description: `Garfield Lee's resume.`,
    author: '@Garfield550',
    url: 'https://resume.550.moe',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'itm4vxb',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
        includePaths: [path.resolve(__dirname, 'node_modules')],
      },
    },
    {
      resolve: 'gatsby-plugin-sass-resources',
      options: {
        resources: ['./src/styles/global.scss'],
      },
    },
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
