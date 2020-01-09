import React from 'react'
import Layout from '../layouts/Layout'
import Section from '../common/Section'
import { Row, Col } from 'reactstrap'
import { graphql } from 'gatsby'

export const query = graphql`query (
  $slug: String!
) {
  markdownRemark (
    fields: {
      slug: {
        eq: $slug
      }
    }
  ) {
    html
    frontmatter {
      title
      date
    }
  }
}`

const Blog = ({ data }) => {

  const { markdownRemark: { html, frontmatter: { title, date } } } = data

  return (
    <Layout>
      <Section>
        <Row className="justify-content-center">
          <Col style={{ maxWidth: 750 }}>
            <h1>{title}</h1>
            <p>{date}</p>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Col>
        </Row>
      </Section>
    </Layout>
  )
}

export default Blog