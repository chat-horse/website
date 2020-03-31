import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';

const MenuMobile = props => {
  const { menuLinks } = props.data.site.siteMetadata;
  return (
    <div
      id="main-menu-mobile"
      className={`main-menu-mobile ${props.active ? 'open' : ''}`}
    >
      <ul>
        {/* Modification to allow for external menu links */}
        {menuLinks.map(link => link.link.startsWith("https") ? (
          <li key={link.name}>
            <a href={link.link}>{link.name}</a>
          </li>
        ) : (
          <li key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query MenuMobileQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <MenuMobile active={props.active} data={data} />}
  />
);
