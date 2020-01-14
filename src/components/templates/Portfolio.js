import React from 'react'
import Layout from '../layouts/Layout'
import Section from '../common/Section'
import { Row, Col, Media, Card, CardBody } from "reactstrap"
import { graphql, Link } from "gatsby"
import { blog } from './blog.mudule.scss';
export const query = graphql`query($slug: String!) {
  contentfulPortfolio (slug: { eq: $slug }) {
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
}`

const Portfolio = ({ data, uri }) => {
  // const { contentfulPortfolio: { title, publishedDate, liveLink, clientName, thumbnail: { file: { url } } } } = data
  console.log(JSON.stringify(data, null, 2))
  console.log(uri)
  // return (
  //   <Layout>
  //     <Section className={blog}>
  //       <Row className="justify-content-center">
  //         <Col style={{ maxWidth: 750 }}>
  //           <div className="text-center mt-5">
  //             <p className="mb-0">{publishedDate}</p>
  //             <h2>{title}</h2>
  //             <p>
  //               <Link to={`${uri}#author`} className="text-body">{clientName}</Link>
  //             </p>
  //           </div>
  //           {/*<div dangerouslySetInnerHTML={{ __html: html }} />*/}
  //           <Card className="bg-white shadow-sm my-4" id="author">
  //             <CardBody>
  //               <Media className="align-items-center">
  //                 <img src={url} alt="" width={120} className="rounded" />
  //                 <Media body className="ml-3">
  //                   <h2>{clientName}</h2>
  //                 </Media>
  //               </Media>
  //             </CardBody>
  //           </Card>
  //         </Col>
  //       </Row>
  //     </Section>
  //   </Layout>
  // )
}

export default Portfolio
