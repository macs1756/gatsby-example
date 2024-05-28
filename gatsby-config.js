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
        collectionTypes: [
          {
            singularName: 'review',
            queryLimit: 10,
            queryParams: {
              publicationState: 'live',
              populate: {
                strapi_id: '*',
                name: '*',
                slug: '*',
                excerpt: '*',
                readtime: '*',
                content: {
                  populate: '*',
                },
                authors: {
                  populate: {
                    username: '*',
                    email: '*',
                    fullName: '*',
                    avatar: '*',
                  },
                },
                sidebar: {
                  populate: '*',
                },
                seo: '*',
                image: '*',
                whyTrust: {
                  populate: {
                    avatar: '*',
                    content: '*',
                    label: '*',
                    link: '*',
                    first_item_image: '*',
                    first_item_label: '*',
                    second_item_image: '*',
                    second_item_label: '*',
                  },
                },
                product_types: '*',
                buyNowProducts: {
                  populate: '*',
                },
                substances: '*',
              },
            },
          },
        ]
      }
    }
  ],
};
