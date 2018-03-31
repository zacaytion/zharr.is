import React from 'react'
import styled from 'react-emotion'
import Link from '../components/Link'

// TODO: Display only relevant pages
// TODO: Place Links on Grid

const NavigationArea = styled.div`
  grid-area: navigation;
  justify-self: end;
`

const Navigation = ({ path }) => (
  <NavigationArea>
    <Link to="/whoami">Whoami</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/now">Now</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/reading">Reading</Link>
  </NavigationArea>
)

export default Navigation
