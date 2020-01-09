import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SiteNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const data = useStaticQuery(graphql`query {
    site {
      siteMetadata{
        title
        socials {
          twitter
          github
          gitlab
          bitbucket
        }
      }
    }
  }`)

  const { title, socials } = data.site.siteMetadata

  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand tag={Link} to="/">{title}</NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink activeClassName="active" tag={Link} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" tag={Link} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" tag={Link} to="/blogs">Blogs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" tag={Link} to="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            {Object.entries(socials).map((entry, index) => (
              <NavItem key={index}>
                <NavLink href={entry[1]} target="_blank">
                  <FontAwesomeIcon icon={['fab', entry[0]]} />
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Container>    
    </Navbar>
  )
}

export default SiteNavbar