import React from 'react'
import BookList from '../components/Books/List'

const Readings = props => {
    const { inProgress, finished } = props.data
    return (
      <div>
        <h1>Currently Reading</h1>
        <BookList bookEdges={inProgress.edges} />
        <h1>Finished Reading</h1>
        <BookList bookEdges={finished.edges} />
      </div>
    )
}


export default Readings

/* eslint no-undef: "off" */
export const pageQuery = graphql`
    query ReadingQuery {
        inProgress:
        allMarkdownRemark(
            filter: {
                id: {regex: "//readings//"},
                frontmatter: {inProgress: {eq: "t"}
                }
            },
            sort: {
                fields: [frontmatter___date],
                order: DESC
            }) {
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
        finished:
        allMarkdownRemark(
            filter: {
                id: {regex: "//readings//"},
                frontmatter: {inProgress: {ne: "t"}}},
            sort: {
                fields: [frontmatter___date],
                order: DESC
            }) {
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
