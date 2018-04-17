import React from 'react'
import Link from '../Link'

export default ({ bookEdges }) => {
  const bookList = bookEdges.map(({ node }) => ({
    path: node.fields.slug,
    cover: node.frontmatter.cover,
    title: node.frontmatter.title,
    date: node.frontmatter.date,
  }))


  return (
    <div>
      {bookList.map(book => (
        <Link to={book.path} key={book.title}>
          <h1>{book.title}</h1>
        </Link>
      ))}
    </div>
  )
}
