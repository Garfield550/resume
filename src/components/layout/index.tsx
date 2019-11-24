import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Header, HeaderName } from 'carbon-components-react';

import Container from '../container';

import '../../styles/layout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

interface QueryData {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data: QueryData = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <>
      <Header>
        <HeaderName href='/' prefix=''>
          {data.site.siteMetadata.title}
        </HeaderName>
      </Header>
      <Container>{children}</Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
