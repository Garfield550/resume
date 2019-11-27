import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../../styles/educational-info.scss';

interface EducationalInfoProps {
  className?: string;
  name: string;
  grade: string;
  major: string;
  minor?: string;
  startTime: string;
  endTime?: string;
  desc?: string;
}

const EducationalInfo: React.FC<EducationalInfoProps> = ({
  className,
  name,
  grade,
  major,
  minor = '',
  startTime,
  endTime = '在读',
  desc = '',
}) => {
  const rootClass = classNames('re--educational-info', className);
  return (
    <div className={rootClass}>
      <h3 className='re--educational-info--name'>{name}</h3>
      <p className='re--educational-info--info'>
        {grade}
        <span className='re--educational-info--major'>
          主修：{major}
          {minor && `；辅修：${minor}`}
        </span>
        <span className='re--educational-info--time'>
          {startTime}
          {endTime && ` – ${endTime}`}
        </span>
      </p>
      {desc && <p className='re--educational-info--desc'>{desc}</p>}
    </div>
  );
};

EducationalInfo.defaultProps = {
  minor: '',
  endTime: '在读',
  desc: '',
};

EducationalInfo.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  grade: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  minor: PropTypes.string,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string,
  desc: PropTypes.string,
};

export default EducationalInfo;
