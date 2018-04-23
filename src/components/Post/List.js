import React from 'react'
import styled from 'react-emotion'
import Link from '../Link'


const Article = styled.article`
  margin-bottom: 2em;
`
const Nav = styled.nav`
  margin-top: 0.5em;
`
export default ({ postEdges }) => {
  const postList = postEdges.map(({ node }) => ({
    path: node.fields.slug,
    tags: node.frontmatter.tags,
    cover: node.frontmatter.cover,
    title: node.frontmatter.title,
    date: node.frontmatter.date,
    excerpt: node.excerpt,
    category: node.frontmatter.category,
    timeToRead: node.timeToRead,
  }))


  return (
    <div>
      {postList.map(post => (
        <Article key={post.title}>
          <header>
            <h2>
              <Link to={post.path}>
                {post.title}
              </Link>
            </h2>
            <p>
              {post.timeToRead} minute read || Published: {post.date}
            </p>
          </header>
          <div>
            {post.excerpt}
          </div>
          <Nav>
            <Link to={post.path}>
              Read More >>>
            </Link>
          </Nav>
        </Article>
      ))}
    </div>
  )
}
