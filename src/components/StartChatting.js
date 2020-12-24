import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const StartChatting = props => (
  <div className="start-chatting">
    <div className="start-chatting-box-top">
      <div className="start-chatting-email">
        <strong>Open now in your browser</strong>
      </div>
    </div>
    {props.button && (
      <div className="start-chatting-box-bottom">
        <a href="https://app.chat.horse" className="button">
          Start Chatting
        </a>
      </div>
    )}
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <StartChatting button={props.button} data={data} />}
  />
);
