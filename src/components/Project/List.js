import React from 'react'
import Link from '../Link'

export default ({ projectEdges }) => {
  const projectList = projectEdges.map(({ node }) => ({
    path: node.fields.slug,
    title: node.frontmatter.title,
    date: node.frontmatter.date,
    order: node.frontmatter.order,
  }))

  return (
    <div>
      {projectList.map(project => (
        <Link to={project.path} key={project.title}>
          <h3>{project.title}</h3>
        </Link>
      ))}
    </div>
  )
}
