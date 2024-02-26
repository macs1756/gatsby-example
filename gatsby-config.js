module.exports = {
  siteMetadata: {
    title: 'Vaping360 - The Home of Vaping',
    description: 'The world\'s largest online media portal for the vapor market featuring daily news, products, advocacy, market insights, guides, and deals.',
    image: '/favicon_512x512.png',
    icon: '/favicon.png',
    siteUrl: process.env.SITE_URL ?? 'https://dev.vaping360.com',
    twitterUsername: '@vaping360',
    siteName: 'Vaping360',
    content: process.env.NODE_ENV !== 'production' ?? 'noindex, nofollow',
    publisher: 'https://www.facebook.com/Vaping360/',
  },
  flags: {
    PARALLEL_SOURCING: true,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['webp', 'auto'],
          placeholder: 'dominantColor',
          quality: 75,
          breakpoints: [640, 768, 1024, 1280, 1536],
          backgroundColor: 'transparent',
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-root-import',
    'gatsby-plugin-provide-react',
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.GATSBY_STRAPI_API_URL || process.env.STRAPI_API_URL,
        accessToken: process.env.STRAPI_TOKEN,
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
              // populate: 'deep',
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
              populate: {
                hero: {
                  populate: '*',
                },
                searchHeader: '*',
                searchText: '*',
                searchImage: '*',
                content: {
                  populate: '*',
                },
              },
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-schema-snapshot',
      options: {
        path: 'schema.gql',
        withFieldTypes: true,
        update: false,
      },
    },
    'gatsby-plugin-twitter',
    'gatsby-plugin-instagram-embed',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/',
        excludes: [
          '/preview/**',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [
              {
                userAgent: '*',
                disallow: ['/'],
              },
              {
                userAgent: 'AhrefsBot',
                allow: '/',
              },
              {
                userAgent: 'AhrefsSiteAudit',
                allow: '/',
              },
            ],
          },
          production: {
            policy: [
              {
                userAgent: '*',
                allow: '/',
              },
              {
                userAgent: 'AhrefsBot',
                allow: '/',
              },
              {
                userAgent: 'AhrefsSiteAudit',
                allow: '/',
              },
            ],
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_ALL_PAGES,
        queries: process.env.GATSBY_IS_PREVIEW === 'true' ? [] : queries,
        chunkSize: 10000,
        enablePartialUpdates: true,
        matchFields: ['modified'],
        concurrentQueries: false,
        skipIndexing: true,
        continueOnFailure: false,
        algoliasearchOptions: undefined,
      },
    },
    // 'gatsby-plugin-client-side-redirect',
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-plugin-no-javascript-utils',
      options: {
        noScript: false,
        noSourcemaps: true,
        removeGeneratorTag: true,
        removeHeadDataAttrs: false,
        noInlineStyles: false,
        removeGatsbyAnnouncer: false,
      },
    },
  ],
};
