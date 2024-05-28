

export const getReviews = await graphql(`
  allStrapiReview(limit: 10) {
    nodes {
      slug
      name
    }
  }
`)