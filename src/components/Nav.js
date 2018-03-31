import React from 'react'
import Link from '../components/Link'

// Nav Options:
// Home
// Whoami
// Blog
// Projects
// Reading
// Now

const Navigation = () => (
  <div>
    <Link to="/whoami">Whoami</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/now">Now</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/reading">Reading</Link>
  </div>
)

export default Navigation
