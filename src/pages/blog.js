import React from 'react'
import Link from 'gatsby-link'
import PostList from '../components/Post/List'

const Blog = props => {
  const postEdges = props.data.allMarkdownRemark.edges
  return (
    <div>
      <h1>Blog</h1>
      <Link to="/">Go back to the homepage</Link>
      <PostList postEdges={postEdges} />
    </div>
  )
}
export default Blog

/* eslint no-undef: "off" */
export const pageQuery = graphql`
    query BlogQuery {
        allMarkdownRemark(
            filter: {id: {regex: "//blog//"}}
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    excerpt
                    timeToRead
                    frontmatter {
                        title
                        tags
                        cover {
                          publicURL
                        }
                        date
                    }
                }
            }
        }
    }
`
