import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = styled.header`
  background-color: #fdfeff;
  box-shadow: 0 0px 5px 0px #dddddd;
`

const HeaderContent = styled.div`
  width: 1200px;
  max-width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  height: 64px;
  display: flex;
`

const Nav = styled.nav`
  margin-left: auto;
`
const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`

const NavItem = styled.li`
  a {
    display: block;
    line-height: 64px;
    text-decoration: none;
    color: #a8afbf;
    text-transform: uppercase;
    font-weight: 600;
    padding: 0 20px;
    transition: all 0.2s ease-in-out;

    :hover {
      background: #6772e5;
      color: #fdfeff;
    }
  }
`

const Links = [
  { label: 'Entrance', path: '/entrance' },
  { label: 'Kitchen', path: '/kitchen' },
]

const renderLinks = (links = Links) =>
  links.map(link => (
    <NavItem key={link.label}>
      <Link to={link.path}>{link.label}</Link>
    </NavItem>
  ))

const AppHeader = () => {
  return (
    <Header>
      <HeaderContent>
        <Nav>
          <NavList>{renderLinks()}</NavList>
        </Nav>
      </HeaderContent>
    </Header>
  )
}

export default AppHeader
