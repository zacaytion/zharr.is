import React, { Component } from 'react'
import Helmet from 'react-helmet'
import SEO from '../components/SEO'
import config from '../../data/config'

export default ({ pathContext, data }) => {
  const { slug } = pathContext
  const postNode = data.markdownRemark
  const post = postNode.frontmatter
  post.id = post.id || slug
  post.category_id = post.category_id || config.postDefaultCategoryID

  return (
    <div>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
        <div className="post-meta" />
      </div>
    </div>
  )
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
      }
    }
  }
`
