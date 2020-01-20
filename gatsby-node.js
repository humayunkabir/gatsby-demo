const path = require('path')

module.exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({ node, name: 'slug', value: slug })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //-----------
  // Blogs
  //-----------
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
  
  //-----------
  // Portfolios
  //-----------
  const portfolioTemplate = path.resolve('./src/components/templates/Portfolio.js');
  
  // const portfoliosResponse = await graphql`query {
  //   allContentfulPortfolio {
  //     edges {
  //       node{
  //         slug
  //       }
  //     }
  //   }
  // }`;
  
  const portfoliosResponse = {
    "data": {
      "allContentfulPortfolio": {
        "edges": [
          {
            "node": {
              "slug": "sparrow-simple-seamless-alive"
            }
          },
          {
            "node": {
              "slug": "falcon-admin-dashboard-webapp-template"
            }
          },
          {
            "node": {
              "slug": "falcon-admin-dashboard-webapp-template-react"
            }
          }
        ]
      }
    }
  }
  
  console.log(portfoliosResponse);
  
  portfoliosResponse.data.allContentfulPortfolio.edges.forEach(({ node: { slug } }) => {
    console.log(portfolioTemplate)
    console.log(slug)
    createPage({
      component: portfolioTemplate,
      path: `/portfolios/${slug}`,
      context: { slug }
    })
  })
}
