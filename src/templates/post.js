import React from 'react'
import Helmet from 'react-helmet'
import SEO from '../components/SEO'
import config from '../../content/config'
import PostCategory from '../components/Post/Category'
import PostTags from '../components/Post/Tags'
import styled from 'react-emotion'

const Div = styled.div`
  padding: 0 15px;
`
export default ({ pathContext, data }) => {
  const { slug } = pathContext
  const postNode = data.markdownRemark
  const post = postNode.frontmatter
  post.id = post.id || slug
  post.category = post.category || config.postDefaultCategoryID

  return (
    <Div>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
        <h1>{post.title}</h1>
        <PostCategory category={post.category} />
        <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
        <div className="post-meta">
          <PostTags tags={post.tags} />
        </div>
    </Div>
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
