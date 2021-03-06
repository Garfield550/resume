const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Garfield Lee's resume`,
    description: `Garfield Lee's resume.`,
    author: 'Garfield Lee',
    url: 'https://resume.550.moe',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Noto Sans SC'],
        },
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
        background_color: '#161616',
        theme_color: '#161616',
        display: 'minimal-ui',
        icon: 'src/images/icons8-resume_website.png',
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
