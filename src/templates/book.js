import React from 'react'

export default ({ pathContext, data}) => {
  const { slug } = pathContext
  const bookNode = data.markdownRemark
  const book = bookNode .frontmatter
  book.id = book.id || slug

  return (
    <div>
      <h1>{book.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: bookNode.html }} />
    </div>
  )
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BooksBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        cover
        date
      }
      fields {
        slug
      }
    }
  }
`
