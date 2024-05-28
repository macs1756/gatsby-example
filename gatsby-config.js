require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});


module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {},
    },
    {
      resolve: 'gatsby-plugin-schema-snapshot',
      options: {
        path: 'schema.gql',
        withFieldTypes: true,
        update: true,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://127.0.0.1:1337',
        accessToken: process.env.GRAPHQL_TOKEN,
      }
    }
  ],
};
