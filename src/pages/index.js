import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h2>Index</h2>
    <ul>
      <li>
        <Link to="/whoami">Whoami</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/now">Now</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/reading">Reading</Link>
      </li>
    </ul>
  </div>
)

export default IndexPage
