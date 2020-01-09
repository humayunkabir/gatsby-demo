import React from 'react'
import Layout from '../components/layouts/Layout'
import Section from '../components/common/Section'
import { Row, Col } from 'reactstrap'
import { Link } from "gatsby"

const About = () => (
  <Layout>
    <Section>
      <Row>
        <Col>
          <h1>Bio</h1>
          <p className="lead">Over the last five years, I've been engaged with web development focusing on intuitive UI and better UX. Experienced with building a pack of web templates, web apps, plugins, frameworks, and tools, I never stopped learning new things. Considering the other traits, I'm a team player, dedicated, fast learner, highly tech-enthusiast, and a genuine bug fixer. My start-up-friendly career is my biggest asset to trade with the excellence of the institutions where I’d like to work.</p>
          <p className="lead">Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Col>
      </Row>
    </Section>
  </Layout>
)

export default About