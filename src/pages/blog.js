import React from 'react'
import styled from 'react-emotion'
import PostList from '../components/Post/List'

const Div = styled.div`
  padding: 1em 5em 0;
`
const Blog = props => {
  const postEdges = props.data.allMarkdownRemark.edges
  return (
    <Div>
      <h1>Blog</h1>
      <PostList postEdges={postEdges} />
    </Div>
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
                        category
                        date
                    }
                }
            }
        }
    }
`
