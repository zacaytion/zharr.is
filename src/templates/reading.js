import React from 'react'
import styled from 'react-emotion'

const Div = styled.div`
  padding: 1em 5em 0;
`
export default ({ pathContext, data}) => {
  const { slug } = pathContext
  const bookNode = data.markdownRemark
  const book = bookNode .frontmatter
  book.id = book.id || slug

  return (
    <Div>
      <h1>{book.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: bookNode.html }} />
    </Div>
  )
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BooksBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        cover {
          publicURL
        }
        date
      }
      fields {
        slug
      }
    }
  }
`
