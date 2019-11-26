import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import '../../styles/footer.scss';

interface SiteMetaQueryData {
  site: {
    siteMetadata: {
      author: string;
    };
  };
}

const Footer: React.FC = () => {
  const data: SiteMetaQueryData = useStaticQuery(
    graphql`
      query SiteMetaQuery {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  );

  const year = new Date().getFullYear();
  const author = data.site.siteMetadata.author;
  return (
    <footer className='re--footer'>
      © {year} {author}, Built with{' '}
      <a
        href='https://www.carbondesignsystem.com/'
        target='_blank'
        rel='noopener noreferrer'>
        Carbon Design System
      </a>{' '}
      and{' '}
      <a
        href='https://www.gatsbyjs.org'
        target='_blank'
        rel='noopener noreferrer'>
        Gatsby
      </a>
      .
    </footer>
  );
};

export default Footer;
