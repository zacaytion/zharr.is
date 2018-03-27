import React from 'react'
import Helmet from 'react-helmet'
import config from '../../data/config'

export default ({ pathContext, data }) => {
  const { tag } = pathContext
  const postEdges = data.allMarkdownRemark.edges
  return (
    <div>
      <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
    </div>
  )
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
