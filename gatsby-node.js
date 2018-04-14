/* eslint-disable no-case-declarations, no-useless-escape */
const path = require('path')
const _ = require('lodash')
const webpackLodashPlugin = require('lodash-webpack-plugin')

// Parse date information out of blog post filename.
const BLOG_POST_FILENAME_REGEX = /([0-9]+)\-([0-9]+)\-([0-9]+)\-(.+)/

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  switch (node.internal.type) {
    case 'MarkdownRemark':
    const parentNode = getNode(node.parent)
    const { sourceInstanceName, name } = parentNode
    let slug
    switch (sourceInstanceName) {
      case 'blog':
      const match = BLOG_POST_FILENAME_REGEX.exec(name)
      const filename = match[4]
      slug = `/${sourceInstanceName}/${filename}`
      break
      case '':
      slug = `${name}`
      break
      default:
      slug = `${sourceInstanceName}/${name}`
    }
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
    break
  default:
    break
  }
}

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const postTemplate = path.resolve('src/templates/post.js')
  const tagTemplate = path.resolve('src/templates/tag.js')
  const categoryTemplate = path.resolve('src/templates/category.js')
  const projectTemplate = path.resolve('src/templates/project.js')
  const readingTemplate = path.resolve('src/templates/reading.js')
  const allMarkdown = await graphql(
      `
        {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  tags
                  category
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `
  )

  if (allMarkdown.errors) {
    /* eslint no-console: "off" */
    console.error(allMarkdown.errors)
    throw Error(allMarkdown.errors)
  }

  const tagSet = new Set()
  const categorySet = new Set()

  allMarkdown.data.allMarkdownRemark.edges.forEach(edge => {
    const { slug } = edge.node.fields
    let template
    if (edge.node.frontmatter.tags) {
      edge.node.frontmatter.tags.forEach(tag => {
        tagSet.add(tag)
      })
    }

    if (edge.node.frontmatter.category) {
      categorySet.add(edge.node.frontmatter.category)
    }

    if (slug.includes('blog/')) {
      template = postTemplate
    } else if (slug.includes('projects/')) {
      template = projectTemplate
    } else if (slug.includes('readings/')) {
      template = readingTemplate
    }
    createPage({
      path: slug,
      component: template,
      context: {
        slug,
      },
    })
  })

  const tagList = Array.from(tagSet)
  tagList.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag,
      },
    })
  })

  const categoryList = Array.from(categorySet)
  categoryList.forEach(category => {
    createPage({
      path: `/categories/${_.kebabCase(category)}/`,
      component: categoryTemplate,
      context: {
        category,
      },
    })
  })
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-javascript') {
    config.plugin('Lodash', webpackLodashPlugin, null)
  }
}
 
