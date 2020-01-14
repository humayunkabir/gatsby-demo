import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { footer } from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`query {
    site {
      siteMetadata{
        author
        email
      }
    }
  }`)

  const { author, email } = data.site.siteMetadata

  return (
    <footer className={footer}>
      <Container>
        <Row>
          <Col>
            <p className="mb-0">Created by {author}, &copy; {new Date(Date.now()).getFullYear()}</p>
          </Col>
          <Col xs="auto">
            <a href={`mailto:${email}`}>
              <FontAwesomeIcon icon="envelope" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
