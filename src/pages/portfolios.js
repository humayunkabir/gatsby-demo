import React from 'react'
import Layout from '../components/layouts/Layout'
import { Row, Col, Media } from "reactstrap"
import Section from '../components/common/Section'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Portfolios = () => {

  const data = useStaticQuery(graphql`query {
    allContentfulPortfolio (sort: {
      fields: publishedDate
      order: DESC
    }) {
      edges {
        node {
          id
          title
          publishedDate(formatString: "MMMM Do, YYYY")
          liveLink
          slug
          thumbnail {
            title
            file {
              url
            }
          }
        }
      }
    }
  }`)
  
  const { edges } = data.allContentfulPortfolio

  return (
    <Layout>
      <Section>
        <Row className="justify-content-center align-items-center">
          <Col xs="auto">
            <h1>Portfolios</h1>
          </Col>
        </Row>
      </Section>
      <Section>
        <Row>
          {edges.map(({ node: { id, title, publishedDate, slug, thumbnail } }) => {
            return (
              <Col md={6} className="mb-4" key={id}>
                <Media className="shadow-sm h-100 align-items-center p-3 bg-white rounded-lg">
                  <img src={thumbnail.file.url} alt={thumbnail.title} width={150} className="img-thumbnail mr-3" />
                  <Media body>
                    <p className="mb-0">{publishedDate}</p>
                    <h4>{title}</h4>
                    
                    <Link to={`/portfolios/${slug}`} className="stretched-link">
                      Read more
                      <span className="d-inline-block ml-1">⟶</span>
                    </Link>
                  </Media>
                </Media>
              </Col>
            )
          })}
        </Row>
      </Section>
    </Layout>
  )
}

export default Portfolios
