import React from "react"
import Layout from "../components/layouts/Layout"
import Section from "../components/common/Section"
import { Row, Col } from "reactstrap"
import { Link } from "gatsby"

const Home = () => (
  <Layout>
    <Section>
      <Row>
        <Col>
          <h1>The Great Gatsby Bootcamp</h1>
          <p className="lead">Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Col>
      </Row>
    </Section>
  </Layout>
)

export default Home
