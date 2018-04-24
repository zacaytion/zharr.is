import React from 'react'
import ProjectList from '../components/Project/List'

const Projects = props => {
    const projectEdges = props.data.allMarkdownRemark.edges
    return (
      <div>
        <h2>Projects</h2>
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
                        date
                        order
                    }
                }
            }
        }
    }
`
