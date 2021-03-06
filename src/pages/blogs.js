import React from 'react'
import Layout from '../components/layouts/Layout'
import { Row, Col, Card, CardBody } from "reactstrap"
import Section from '../components/common/Section'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { getFormattedDate } from "../components/vendors/utils"

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
            <Row>
              {edges.map(({ node: { id, fields: {slug }, frontmatter: { title, date } } }) => {
                
                return (
                  <Col md={6} className="mb-4" key={id}>
                    <Card className="shadow-sm h-100">
                      <CardBody>
                        <p className="mb-0">{getFormattedDate(date)}</p>
                        <Link to={`/blogs/${slug}`} className="text-body">
                          <h3>{title}</h3>
                        </Link>
                        <Link to={`/blogs/${slug}`}>
                          Read more
                          <span className="d-inline-block ml-1">⟶</span>
                        </Link>
                      </CardBody>
                    </Card>
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>
      </Section>
    </Layout>
  )
}

export default Blog
