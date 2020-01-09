import React from 'react'
import Layout from '../components/layouts/Layout'
import Section from '../components/common/Section'
import { Row, Col } from 'reactstrap'

const Contact = () => (
  <Layout>
    <Section>
      <Row>
        <Col>
          <h1>Contact details</h1>
          <p className="lead">If you have any question, ping me <a href="mailto:humayunkabir.cep@gmail.com">here</a>.</p>
          <ul>
            <li>
              <a href="https://twitter.com/_humayunkabir" target="_blank" rel="noopener noreferrer">@_humayunkabir</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Section>
  </Layout>
)

export default Contact