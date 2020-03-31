import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Contact = (props) => {
  const pageHTML = props.data.allMarkdownRemark.edges[0].node.html;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Contact" />
      <div className="container side-padding col-lg-8 col-md-12 col-sm-12">
        <h1 className="title">Contact</h1>
        <p className="text"
          dangerouslySetInnerHTML={{ __html: pageHTML }}
        >
        </p>
      </div>
    </Layout>
  );
};

export const query = graphql`
query {
  allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/contact/" } }
  ) {
    edges {
      node {
        html
      }
    }
  }
}
`;

export default Contact;