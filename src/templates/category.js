import React from 'react'
import Helmet from 'react-helmet'
import PostList from '../components/Post/List'
import config from '../../data/config'

export default ({ data, pathContext }) => {
  const { category } = pathContext
  const postEdges = data.allMarkdownRemark.edges

  return (
    <div>
      <Helmet title={`Posts in category "${category}" | ${config.siteTitle}`} />
      <PostList postEdges={postEdges} />
    </div>
  )
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
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
            cover
            date
          }
        }
      }
    }
  }
`
