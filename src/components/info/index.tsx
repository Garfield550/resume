import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../../styles/info-bar.scss';

interface InfoProps {
  className?: string;
  children?: React.ReactNode;
  /** Info title */
  title: string;
  /** Info content */
  content?: string;
  /** Content link */
  href?: string;
}

const Info: React.FC<InfoProps> = ({
  className,
  children,
  title,
  content,
  href = '',
}) => {
  const rootClass = classNames('re--info-bar', className);
  return (
    <div className={rootClass}>
      {children}
      <p className='re--info-bar--title'>{title}: </p>
      {content && !href && (
        <span className='re--info-bar--content'>{content}</span>
      )}
      {content && href && (
        <a className='re--info-bar--content' href={href}>
          {content}
        </a>
      )}
    </div>
  );
};

Info.defaultProps = {
  href: '',
};

Info.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  href: PropTypes.string,
};

export default Info;
