import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layouts/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "@reach/router"
import { Card, CardBody, Col, Row } from "reactstrap"

const NotFound = ({  }) => {
  return (
    <Layout>
      <Row className="flex-center min-vh-75 py-6 text-center">
        <Col sm={10} md={8} lg={6} className="col-xxl-5">
          <Card>
            <CardBody className="p-4 p-sm-5">
              <div className="display-1 text-300 fs-error">404</div>
              <p className="lead mt-4 text-800 text-sans-serif font-weight-semi-bold">The page you're looking for is not
                found.</p>
              <hr/>
              <p>Make sure the address is correct and that the page hasn't moved. If you think this is a mistake, <a href="mailto:humayunkabir.cep@gmail.com">contact us</a>.</p>
              <Link className="btn btn-primary btn-sm mt-3" to={'/'}>
                <FontAwesomeIcon icon="home" className="mr-2"/>Take me home
              </Link>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

NotFound.propTypes = { value: PropTypes.any }

NotFound.defaultProps = { value: `NotFound` }
export default NotFound
