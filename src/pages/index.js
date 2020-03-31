import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import StartChatting from '../components/StartChatting';

const Home = (props) => {
  const featureJson = props.data.allFeaturesJson.edges;
  const blurbJson = props.data.allBlurbsJson.edges;
  const blurb = blurbJson[Math.floor(Math.random()*blurbJson.length)];
  return (
    <Layout bodyClass="page-home main-page">
      <SEO title="chat.horse" />
      <Helmet>
        <meta
          name="description"
          content="chat.horse - a chat network for ponies, by ponies"
        />
      </Helmet>
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="intro col-12 col-lg-6">
            <div className="container">
              <h1>chat<span className="punctuation">.</span>horse</h1>
              <p><i>{blurb.node.text}</i></p>
              <p>Free chat for ponies.<br />Ready to get started?</p>
            </div>
          </div>

          <div className="intro col-12 col-lg-6">
            <StartChatting button />
          </div>
        </div>
      </div>

      <div className="container pt-5 pb-5 pt-md-4 pb-md-4">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 section-title mb-4">Features</h2>
          </div>
          {featureJson.map(edge => (
            <div key={edge.node.id} className="col-12 col-md-6 col-lg-4 mb-2">
              <div className="feature">
                {edge.node.image && (
                  <div className="feature-image">
                    <img src={withPrefix(edge.node.image)} />
                  </div>
                )}
                <h2 className="feature-title">{edge.node.title}</h2>
                <div className="feature-content">{edge.node.description}</div>
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
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
    allBlurbsJson {
      edges {
        node {
          text
        }
      }
    }
  }
`;

export default Home;
