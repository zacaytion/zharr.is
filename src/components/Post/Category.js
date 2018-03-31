import React from 'react'
import Link from '../Link'

export default ({ category }) => (
  <Link key={category} to={`/categories/${category}`}>
    Category - {category}
  </Link>
)
