import React from "react";
import Layout from "../components/layout";

import BookList from "../components/Books/List";

const Readings = props => {
  const { inProgress, finished } = props.data;
  return (
    <Layout location={props.location}>
      <div>
        <h2>Currently Reading</h2>
        <BookList inProgress bookEdges={inProgress.edges} />
        <h2>Finished</h2>
        <BookList bookEdges={finished.edges} />
      </div>
    </Layout>
  );
};

export default Readings;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ReadingQuery {
    inProgress: allMarkdownRemark(
      filter: {
        id: { regex: "//readings//" }
        frontmatter: { inProgress: { eq: "t" } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            cover {
              publicURL
            }
            inProgress
            author
            date
          }
        }
      }
    }
    finished: allMarkdownRemark(
      filter: {
        id: { regex: "//readings//" }
        frontmatter: { inProgress: { ne: "t" } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            cover {
              publicURL
            }
            inProgress
            author
            date
          }
        }
      }
    }
  }
`;
