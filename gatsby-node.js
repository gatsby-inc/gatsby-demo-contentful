const path = require('path')

exports.createPages = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  const result = await graphql(
    `
      {
        allContentfulPosts {
          nodes {
            id
            url
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const PostTemplate = path.resolve('./src/templates/post-template.js')
  result.data.allContentfulPosts.nodes.forEach((node, index) => {
    const { id, url } = node

    createPage({
      path: url,
      component: PostTemplate,
      context: {
        id: id,
        pagePath: url,
      },
      defer: index + 1 > 2,
    })
  })
}
