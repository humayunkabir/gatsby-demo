import React from 'react'
import Layout from '../components/layouts/Layout'
import { Row, Col, Card, CardBody } from "reactstrap"
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

  console.log(JSON.stringify(data, null, 2))

  return (
    <Layout>
      <Section>
        <Row>
          <Col>
            <h1>Portfolios</h1>
            <Row>
              {edges.map(({ node: { id, title, publishedDate, slug } }) => {
              
                return (
                  <Col md={6} className="mb-4" key={id}>
                    <Card className="shadow-sm h-100">
                      <CardBody>
                        <p className="mb-0">{publishedDate}</p>
                        <Link to={`/portfolios/${slug}`} className="text-body">
                          <h3>{title}</h3>
                        </Link>
                        <Link to={`/portfolios/${slug}`}>
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

export default Portfolios
