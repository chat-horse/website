import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../layouts/index';
import Accordian from "../../components/Accordian";

const FrequentlyAskedQuestions = (props) => {
  const faqSectionsJSON = props.data.allFrequentlyAskedQuestionsJson.edges;
  return (
    <Layout bodyClass="page-home">
      <div className="container col-10">
        {faqSectionsJSON.map((edge, index) => (
          <div>
            <h2 className="title">{edge.node.title}</h2>
            <Accordian key={index} data={edge.node.rows} />
            <br/>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
query {
  allFrequentlyAskedQuestionsJson {
    edges {
      node {
        title
        rows {
          content
          title
        }
      }
    }
  }
}
`;

export default FrequentlyAskedQuestions;