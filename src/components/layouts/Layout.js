import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import SiteNavbar from '../navbar/SiteNavbar'
import Footer from '../footer/Footer'
import '../vendors/fa'
import '../../scss/style.scss'
import { main, content } from './layout.module.scss'

const Layout = ({ children }) => (
  <Fragment>
    <Helmet defer={false} >
      <title>Portfolio</title>
      <link type="text/css" href="https://prium.github.io/falcon/v2.2.0/default/assets/css/theme.min.css" rel="stylesheet" />
    </Helmet>
    <main className={main}>
      <div className={content}>
        <SiteNavbar />
        {children}
      </div>
      <Footer />
    </main>
  </Fragment>
)

export default Layout
