import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Bridges = (props) => {
  const bridges = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-bridges">
      <SEO title="Bridges" />
      <h1 className="page-title title pt-2 pb-2">Bridges</h1>
      <div className="container pb-6">
        <p className="row intro-text">
          Bridges allow you to link other chat services to chat.horse. Continue to talk to your friends on other networks without having to use other chat apps.<br />
          The following networks are supported:
        </p>
        <h2 className="title pt-2 pb-2">Available Networks</h2>
        <div className="row">
          {bridges.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-6 mb-1 pb-4 pr-4 pl-4">
              <div className="bridge card-one">
                <div className="card-header">
                  <div className="card-header-left">
                    {edge.node.frontmatter.image && (
                      <div className="text-center card-image">
                        <img
                          alt={edge.node.frontmatter.title}
                          className="img-fluid bridge-img mb-2"
                          src={edge.node.frontmatter.image}
                        />
                      </div>
                    )}
                  </div>
                  <div className="card-right">
                    <h2 className="card-title">{edge.node.frontmatter.title}</h2>
                  </div>
                </div>
                <div
                  className="bridge-content"
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
                <a href={edge.node.frontmatter.qapath}>More information...</a>
                <div className="link-account-button pt-4">
                  <a href={edge.node.frontmatter.path} className="button">
                    {edge.node.frontmatter.linkbuttontext}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/bridges/*.md" } }
      sort: { fields: [frontmatter___weight], order: ASC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            qapath
            image
            linkbuttontext
          }
        }
      }
    }
  }
`;

export default Bridges;
