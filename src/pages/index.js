import React from "react";
import styled from "react-emotion";
import Layout from "../components/layout";
import Link from "../components/Link";

const Div = styled.div`
  padding: 1em 5em 0;
`;
const IndexPage = props => (
  <Layout location={props.location}>
    <Div>
      <h2>Hello, World!</h2>
      <p>Welcome to the website and blog of Zach Harris.</p>
      <p>
        You can learn a bit about me <Link to="/whoami">here</Link>.
      </p>
      <p>
        Check out what I&apos;m up to right <Link to="/now">now</Link>
      </p>
      <p>
        Read some of my thoughts and <Link to="/blog">musings</Link>
      </p>
      <p>
        View my <Link to="/readings">reading</Link> list.
      </p>
      <p>
        Learn about some <Link to="/projects">projects</Link> I&apos;ve built.
      </p>
      <p>
        Feel free to{" "}
        <a href="mailto:z@zharr.is?Subject=Website" target="_top">
          email
        </a>{" "}
        me if you have any trouble with the site
      </p>

      <p>
        This site is a work and progress, so please excuse any bugs. I&apos;m
        still optimizing it for mobile use.
      </p>
    </Div>
  </Layout>
);

export default IndexPage;
