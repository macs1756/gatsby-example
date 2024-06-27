const path = require("path");


exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

   createPage({
     path: "/",
     component: path.resolve("./src/themes/home/index.jsx"),
     context: {
       pagePath: '/',
     },
   });

   const { data: reviewsData } = await graphql(`
   query {
     allStrapiReview(limit: 10) {
       nodes {
         slug
         name
       }
     }
   }`);
  
 
    console.log(getReviews);

   const reviewTemplate = path.resolve(`src/themes/review/index.jsx`)
   reviewsData.allStrapiReview.nodes.forEach(({ node }) => {
     createPage({
       path: node.slug,
       component: reviewTemplate,
       context: {
         name: node.name,
       },
     })
   })



};
