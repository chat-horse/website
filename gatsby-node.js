const path = require('path');

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            bridges: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/bridges/" } }
              sort: { fields: [frontmatter___weight], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                  }
                  excerpt
                }
              }
            }
        `,
      ),
    );
  });
};
