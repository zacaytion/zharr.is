import React from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'
import config from '../../data/config'
import Link from '../components/Link'

const { navPaths } = config

// TODO: Place Links on Grid

const NavigationArea = styled.div`
  grid-area: navigation;
  justify-self: end;
  align-self: end;
  display: flex;
  flex-direction: row;
  padding-right: 4rem; 
`
const NavLinks = css`
  padding: 0 10px; 
  font-size: 1.25rem;

`
const Navigation = ({ path }) => {
  const navList = navPaths.map(nav => {
    if (nav.path !== path) {
      return (
        <Link className={NavLinks} key={nav.name} to={nav.path}>
          {nav.name}
        </Link>
      )
    }
  })
  return <NavigationArea>{navList}</NavigationArea>
}

export default Navigation
