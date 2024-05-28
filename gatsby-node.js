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
};
