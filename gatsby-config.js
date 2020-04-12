module.exports = {
  siteMetadata: {
    title: 'chat.horse',
    description: 'chat for ponies',
    contact: {
      phone: 'xxx',
      email: 'contact@chat.horse',
    },
    menuLinks: [
      {
        name: 'About',
        link: '/about',
      },
      {
        name: 'FAQ',
        link: '/faq',
      },
      {
        name: 'Bridges',
        link: '/bridges',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
      {
        name: 'Login',
        link: 'https://app.chat.horse',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
  ],
};
