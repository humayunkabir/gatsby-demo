const path = require('path')

module.exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({ node, name: 'slug', value: slug })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve('./src/components/templates/Blog.js')
  const response = await graphql(`query {
    allMarkdownRemark{
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }`)

  response.data.allMarkdownRemark.edges.forEach(({ node: { fields: { slug } } }) => {
    createPage({
      component: blogTemplate,
      path: `/blogs/${slug}`,
      context: { slug }
    })
  })
}
