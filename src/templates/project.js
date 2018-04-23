import React from 'react'
import styled from 'react-emotion'

const Div = styled.div`
  padding: 1em 5em 0;
`
export default ({ pathContext, data}) => {
  const { slug } = pathContext
  const projectNode = data.markdownRemark
  const project = projectNode.frontmatter
  project.id = project.id || slug

  return (
    <Div>
      <h1>{project.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: projectNode.html }} />
    </Div>
  )
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ProjectsBySlug($slug: String!) {
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
