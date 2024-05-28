const path = require("path")
const { default: Home } = require("./src/themes/home")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  createPage({
    path: "/",
    component: path.resolve(`./src/themes/home.js`),
    context: {
      pagePath: '/',
    },
  })
}
