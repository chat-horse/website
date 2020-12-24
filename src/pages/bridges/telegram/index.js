import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../../components/SEO';
import Layout from '../../../layouts/index';

const Telegram = (props) => {
  const pageHTML = props.data.allMarkdownRemark.edges[0].node.html;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Telegram" />
      <div className="container side-padding col-lg-8 col-md-12 col-sm-12">
        <h1 className="title">Linking Your Telegram Account</h1>
        <div className="text" dangerouslySetInnerHTML={{ __html: pageHTML }}>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
query {
  allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/bridges\/telegram\//" } }
  ) {
    edges {
      node {
        html
      }
    }
  }
}
`;

export default Telegram;
