module.exports = {
  siteMetadata: {
    url: 'https://gatsbydemocontentful.gatsbyjs.io',
    title: "Gatsby's Contentful demo",
    image: 'og-image.jpg',
    description:
      'Blazing fast modern site generator for React Go beyond static sites: build blogs, e-commerce sites, full-blown apps, and more with Gatsby',
    language: 'en-us',
    keywords: ['gatsby', 'gatsbyjs contentful'],
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 70,
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
        },
      },
    },
    'gatsby-transformer-sharp',
  ],
}
