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
            singularName: 'users-permissions',
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'new',
            queryLimit: 10,
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: {
                strapi_id: '*',
                title: '*',
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
                news_categories: '*',
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
                substances: '*',
              },
            },
          },
          {
            singularName: 'learn',
            queryLimit: 10,
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: {
                strapi_id: '*',
                title: '*',
                slug: '*',
                excerpt: '*',
                readtime: '*',
                content: {
                  populate: {
                    slides: "*"
                  }
                },
                authors: {
                  populate: {
                    username: '*',
                    email: '*',
                    fullName: '*',
                    avatar: '*',
                  },
                },
                learn_categories: '*',
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
                substances: '*',
              },
            },
          },
          {
            singularName: 'review',
            pluginOptions: {
              i18n: {
                locale: "all",
              },
            },
            queryLimit: 10,
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
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
          {
            singularName: 'best-of-category',
            queryLimit: 10,
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'best-of',
            queryLimit: 10,
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: {
                strapi_id: '*',
                name: '*',
                subtitle: '*',
                slug: '*',
                taxonomies: '*',
                excerpt: '*',
                readtime: '*',
                isLocked: '*',
                shortDescription: '*',
                best_of_category: {
                  populate: {
                    name: '*',
                    slug: '*',
                    introText: '*',
                    subTitle: '*',
                    introTitle: '*',
                    hideFromBestOfPage: '*',
                    isLocked: '*',
                    image: '*',
                    introImage: '*',
                  },
                },
                productsOverride: '*',
                product1: {
                  populate: {
                    name: '*',
                    description: '*',
                    rating: '*',
                    link: '*',
                    model: '*',
                    editorsChoice: '*',
                    couponCode: '*',
                    couponText: '*',
                    price: '*',
                    affiliateMenuEditor: '*',
                    affiliateLevel2Editor: '*',
                    affiliateTop3: '*',
                    couponRedirect: '*',
                    substances_select: '*',
                    product_types_select: '*',
                    slug: '*',
                    isLocked: '*',
                    affiliateLink: '*',
                    image: '*',
                    review: {
                      populate: {
                        name: '*',
                        slug: '*',
                      },
                    },
                    alternativeImage: '*',
                    gallery: '*',
                    attributes: {
                      populate: '*',
                    },
                    pros: {
                      populate: '*',
                    },
                    cons: {
                      populate: '*',
                    },
                    kitContent: {
                      populate: '*',
                    },
                    specification: {
                      populate: '*',
                    },
                    brand: '*',
                    substances: '*',
                    product_types: '*',
                  },
                },
                product2: {
                  populate: {
                    name: '*',
                    description: '*',
                    rating: '*',
                    link: '*',
                    model: '*',
                    editorsChoice: '*',
                    couponCode: '*',
                    couponText: '*',
                    price: '*',
                    affiliateMenuEditor: '*',
                    affiliateLevel2Editor: '*',
                    affiliateTop3: '*',
                    couponRedirect: '*',
                    substances_select: '*',
                    product_types_select: '*',
                    slug: '*',
                    isLocked: '*',
                    affiliateLink: '*',
                    image: '*',
                    review: {
                      populate: {
                        name: '*',
                        slug: '*',
                      },
                    },
                    alternativeImage: '*',
                    gallery: '*',
                    attributes: '*',
                    pros: '*',
                    cons: '*',
                    kitContent: '*',
                    specification: '*',
                    brand: '*',
                    substances: '*',
                    product_types: '*',
                  },
                },
                product3: {
                  populate: {
                    name: '*',
                    description: '*',
                    rating: '*',
                    link: '*',
                    model: '*',
                    editorsChoice: '*',
                    couponCode: '*',
                    couponText: '*',
                    price: '*',
                    affiliateMenuEditor: '*',
                    affiliateLevel2Editor: '*',
                    affiliateTop3: '*',
                    couponRedirect: '*',
                    substances_select: '*',
                    product_types_select: '*',
                    slug: '*',
                    isLocked: '*',
                    affiliateLink: '*',
                    image: '*',
                    review: {
                      populate: {
                        name: '*',
                        slug: '*',
                      },
                    },
                    alternativeImage: '*',
                    gallery: '*',
                    attributes: '*',
                    pros: '*',
                    cons: '*',
                    kitContent: '*',
                    specification: '*',
                    brand: '*',
                    substances: '*',
                    product_types: '*',
                  },
                },
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
              },
            },
          },
          {
            singularName: 'product',
            queryLimit: 10,
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: {
                name: '*',
                rating: '*',
                image: '*',
                review: {
                  populate: {
                    name: '*',
                    slug: '*',
                  },
                },
                alternativeImage: '*',
                gallery: '*',
                attributes: '*',
                link: '*',
                model: '*',
                editorsChoice: '*',
                pros: {
                  populate: '*',
                },
                cons: {
                  populate: '*',
                },
                kitContent: {
                  populate: '*',
                },
                description: '*',
                couponCode: '*',
                specification: {
                  populate: '*',
                },
                brand: '*',
                price: '*',
                affiliateMenuEditor: '*',
                affiliateLevel2Editor: '*',
                affiliateTop3: '*',
                couponRedirect: '*',
                substances: {
                  populate: '*',
                },
                product_types: {
                  populate: '*',
                },
                substances_select: {
                  populate: '*',
                },
                product_template: {
                  populate: '*',
                },
                exportedId: '*',
                slug: '*',
                isLocked: '*',
                affiliateLink: '*',
              },
            },
          },
          {
            singularName: 'substance',
            queryLimit: 10,
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'simple-page',
            queryLimit: 10,
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'product-type',
            queryLimit: 10,
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'learn-category',
            queryLimit: 10,
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'news-category',
            queryLimit: 10,
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'brand-page',
            queryLimit: 10,
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
        ],
        singleTypes: [
          {
            singularName: 'homepage',
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'sponsorship-bar',
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'layout',
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'best-of-archive',
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'learn-archive',
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'review-archive',
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'news-archive',
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'about-us',
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'contact',
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'advertise',
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'not-found',
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'mega-menu',
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'footer',
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'sidebar',
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'why-trust-us-page',
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'why-trust-us',
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
          {
            singularName: 'translations',
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: 'deep',
            },
          },
        ],
      },
    },
  ],
};
