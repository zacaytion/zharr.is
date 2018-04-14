import React from 'react'

export default ({ pathContext, data}) => {
  const { slug } = pathContext
  const projectNode = data.markdownRemark
  const project = projectNode.frontmatter
  project.id = project.id || slug

  return (
    <div>
      <h1>{project.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: projectNode.html }} />
    </div>
  )
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ProjectsBySlug($slug: String!) {
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
