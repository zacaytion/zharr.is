import React from 'react'
import Link from '../Link'

export default ({ postEdges }) => {
  const postList = postEdges.map(({ node }) => ({
    path: node.fields.slug,
    tags: node.frontmatter.tags,
    cover: node.frontmatter.cover,
    title: node.frontmatter.title,
    date: node.frontmatter.date,
    excerpt: node.excerpt,
    timeToRead: node.timeToRead,
  }))

  return (
    <div>
      {postList.map(post => (
        <Link to={post.path} key={post.title}>
          <h1>{post.title}</h1>
        </Link>
      ))}
    </div>
  )
}
