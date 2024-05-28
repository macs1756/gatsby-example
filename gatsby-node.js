const path = require("path");
const { getReviews } = require("./src/graphQL/queries");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  createPage({
    path: "/",
    component: path.resolve("./src/themes/home/index.jsx"),
    context: {
      pagePath: '/',
    },
  });

  if (getReviews.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  console.log(getReviews);

  const reviewTemplate = path.resolve(`src/themes/review/index.jsx`)
  // result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //   const path = node.frontmatter.path
  //   createPage({
  //     path,
  //     component: reviewTemplate,
  //     context: {
  //       pagePath: path,
  //     },
  //   })
  // })



};
