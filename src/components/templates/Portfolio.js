import React from 'react'
import Layout from '../layouts/Layout'
import Section from '../common/Section'
import { Row, Col, Media, Card, CardBody, CardHeader } from "reactstrap"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { blog } from './blog.mudule.scss';

export const query = graphql`query($slug: String!) {
  contentfulPortfolio (slug: { eq: $slug }) {
    id
    title
    publishedDate(formatString: "MMMM Do, YYYY")
    liveLink
    slug
    clientName
    clientLogo {
      title
      file {
        url
      }
    }
    thumbnail {
      title
      file {
        url
      }
    }
    content {
      json
    }
  }
}`

const Portfolio = ({ data, uri }) => {
  const { contentfulPortfolio: { title, thumbnail, publishedDate, liveLink, content: { json }, clientName, clientLogo } } = data
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        console.log(JSON.stringify(node, null, 2));
      }
    }
  }
  return (
    <Layout>
      <Section className={blog}>
        <Row className="justify-content-center">
          <Col style={{ maxWidth: 750 }}>
            <Card className="mt-5">
              <CardHeader className="text-center">
                <p className="mb-0">{publishedDate}</p>
                <h3>{title}</h3>
                <p>
                  <Link to={`${uri}#author`} className="text-body">{clientName}</Link>
                </p>
              </CardHeader>
              <CardBody>
                <img src={thumbnail.file.url} alt={thumbnail.title} className="img-thumbnail mb-3" />
                {documentToReactComponents(json, options)}
              </CardBody>
            </Card>
            <Card className="bg-white shadow-sm my-4" id="author">
              <CardBody>
                <Media className="align-items-center">
                  <img src={clientLogo.file.url} alt={clientLogo.title} width={120} className="rounded img-fluid" />
                  <Media body className="ml-3">
                    <h2>{clientName}</h2>
                    <a href={liveLink} target="_blank" rel="noopener noreferrer">Live link</a>
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

export default Portfolio
