import React from 'react'
import Layout from '../components/layouts/Layout'
import { Row, Col } from 'reactstrap'
import Section from '../components/common/Section'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Blog = () => {

  const data = useStaticQuery(graphql`query {
    allMarkdownRemark{
      edges {
        node {
          id
          html
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }`)

  const { edges } = data.allMarkdownRemark  

  return (
    <Layout>
      <Section>
        <Row>
          <Col>
            <h1>Blogs</h1>
            <ol>
              {edges.map(({ node: { id, fields: {slug }, frontmatter: { title, date } } }) => {
                return (
                  <li key={id}>
                    <Link to={`/blogs/${slug}`}>
                      <h2>{title}</h2>
                    </Link>
                    <p>{date}</p>
                  </li>
                )
              })}
            </ol>
          </Col>
        </Row>
      </Section>
    </Layout>
  )
}

export default Blog