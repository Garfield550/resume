import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../../styles/work-info.scss';

export interface WorkInfoProps {
  className?: string;
  name: string;
  desc?: string;
}

const WorkInfo: React.FC<WorkInfoProps> = ({ className, name, desc = '' }) => {
  const rootClass = classNames('re--work-info', className);
  return (
    <div className={rootClass}>
      <h4 className='re--work-info--name'>{name}</h4>
      {desc && <p className='re--work-info--desc'>{desc}</p>}
    </div>
  );
};

WorkInfo.defaultProps = {
  desc: '',
};

WorkInfo.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

export default WorkInfo;
