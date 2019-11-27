import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../../styles/project-info.scss';

interface ProjectInfoProps {
  className?: string;
  children?: React.ReactNode;
  name: string;
  href?: string;
  desc?: string;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  className,
  children,
  name,
  href = '',
  desc = '',
}) => {
  const rootClass = classNames('re--project-info', className);
  return (
    <div className={rootClass}>
      {href && (
        <a
          className='re--project-info--name'
          href={href}
          target='_blank'
          rel='noopener noreferrer'>
          {name}
        </a>
      )}
      {!href && <h3 className='re--project-info--name'>{name}</h3>}
      {(desc || children) && (
        <p className='re--project-info--desc'>
          {desc}
          {children}
        </p>
      )}
    </div>
  );
};

ProjectInfo.defaultProps = {
  href: '',
  desc: '',
};

ProjectInfo.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
  desc: PropTypes.string,
};

export default ProjectInfo;
