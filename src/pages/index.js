import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const HomeData = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiBestOfCategory(slug: {eq: "best-vape-accessories"}) {
        name
        slug
        subTitle
        introTitle
        id
        editorProduct {
          couponCode
          couponText
          couponRedirect
          name
          rating
          id
          affiliateLevel2Editor
          affiliateLink
          link
          image {
            alternativeText
            height
            width
            url
          }
        }
        introText {
          data {
            introText
          }
        }
        best_ofs {
          name
          id
          slug
          shortDescription
          product1 {
            ...product
          }
          product2 {
            ...product
          }
          product3 {
            ...product
          }
        }
        introImage {
          alternativeText
          height
          width
          url
        }
        updatedAt
        seo {
          metaTitle
          metaDescription
          metaRobots
          canonicalURL
          keywords
          metaImage {
            url
            mime
          }
          metaSocial {
            title
            socialNetwork
            description
            image {
              url
              mime
            }
          }
        }
      }
    }
  `);

  console.log(data);
 
  return (
    <div>
      {/* Render your component */}
    </div>
  );
};

export default HomeData;
