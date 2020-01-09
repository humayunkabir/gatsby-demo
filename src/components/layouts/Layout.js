import React from 'react'
import SiteNavbar from '../navbar/SiteNavbar'
import Footer from '../footer/Footer'
import '../plugins/fa'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../../scss/style.scss'
import { main, content } from './layout.module.scss'

const Layout = ({ children }) => (
  <main className={main}>
    <div className={content}>
      <SiteNavbar />
      {children}
    </div>
    <Footer />
  </main>
)

export default Layout