import React from 'react'
import Link from 'gatsby-link'
import BookList from '../components/Books/List'

const Readings = props => {
    const bookEdges = props.data.allMarkdownRemark.edges
    return (
      <div>
        <h1>Readings</h1>
        <Link to="/">Go back to the homepage</Link>
        <BookList bookEdges={bookEdges} />
      </div>
    )
}


export default Readings

// TODO: Sort by current vs read

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ReadingQuery {
     allMarkdownRemark(
        filter: {id: {regex: "//readings//"}}
        sort: { fields: [frontmatter___date], order: DESC }
    ) {
        edges {
            node {
                fields {
                    slug
                }
                frontmatter {
                    title
                    cover
                    date
                }
            }
        }
    }
}
`
