import React from 'react'
import Link from 'gatsby-link'
import ProjectList from '../components/Project/List'

const Projects = props => {
    const projectEdges = props.data.allMarkdownRemark.edges
    return (
      <div>
        <h1>Projects</h1>
        <Link to="/">Go back to the homepage</Link>
        <ProjectList projectEdges={projectEdges} />
      </div>
    )
}
export default Projects

/* eslint no-undef: "off" */
export const pageQuery = graphql`
    query ProjectsQuery {
        allMarkdownRemark(
            filter: {id: {regex: "//projects//"}}
            sort: { fields: [frontmatter___order], order: DESC }
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
                        order
                    }
                }
            }
        }
    }
`
