import React from 'react'
import Layout from '../layouts/Layout'
import Section from '../common/Section'
import { Row, Col, Media, Card, CardBody } from "reactstrap"
import { graphql, Link } from "gatsby"
import { blog } from './blog.mudule.scss';
import { getFormattedDate } from "../vendors/utils"

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
    timeToRead
    frontmatter {
      title
      author
      date
      authorImage {
        publicURL
      }
    }
  }
}`

const Blog = ({ data, uri }) => {
  const { markdownRemark: { html, timeToRead, frontmatter: { title, author, date, authorImage: { publicURL } } } } = data
  return (
    <Layout>
      <Section className={blog}>
        <Row className="justify-content-center">
          <Col style={{ maxWidth: 750 }}>
            <div className="text-center mt-5">
              <p className="mb-0">{getFormattedDate(date)}</p>
              <h2>{title}</h2>
              <p>
                <Link to={`${uri}#author`} className="text-body">{author}</Link> &bull; {timeToRead}min read
              </p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <Card className="bg-white shadow-sm my-4" id="author">
              <CardBody>
                <Media className="align-items-center">
                  <img src={publicURL} alt="" width={120} className="rounded" />
                  <Media body className="ml-3">
                    <h2>{author}</h2>
                  </Media>
                </Media>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Section>
    </Layout>
  )
}

export default Blog
