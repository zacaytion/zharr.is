import React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import SEO from '../components/SEO'
import config from '../../content/config'
import PostCategory from '../components/Post/Category'
import PostTags from '../components/Post/Tags'

const Div = styled.div`
  padding: 1em 5em 0;
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
        <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
        <div className="post-meta">
          <PostCategory category={post.category} />
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
        cover {
          publicURL
        }
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
