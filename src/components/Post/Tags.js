import React from 'react'
import { kebabCase } from 'lodash'
import Link from '../Link'

export default ({ tags }) => (
  <div>
    {tags &&
      tags.map(tag => (
        <Link key={tag} to={`/tags/${kebabCase(tag)}`}>
          <button>{tag}</button>
        </Link>
      ))}
  </div>
)
