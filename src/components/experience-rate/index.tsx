import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Rate from '../rate';

import '../../styles/experience-rate.scss';

interface ExperienceRateProps {
  className?: string;
  /** Experience title */
  title: string;
  /**
   * Current rate
   * @default 1
   */
  rate?: number;
  /**
   * Max of rate
   * @default 5
   */
  max?: number;
  /**
   * Display experience rate description
   */
  desc?: boolean;
}

const ExperienceRate: React.FC<ExperienceRateProps> = ({
  className,
  title,
  rate = 1,
  max = 5,
  desc = true,
}) => {
  const makeDescText = (level: number): string => {
    if (level > 2) return '熟悉';
    if (level > 4) return '熟练';
    return '了解';
  };
  const descText = makeDescText(rate);
  const rootClass = classNames('re--experience-rate', className);
  return (
    <div className={rootClass}>
      <p className='re--experience-rate--title'>{title}:</p>
      <div className='re--experience-rate--info'>
        <Rate rate={rate} max={max} />
        {desc && (
          <span className='re--experience-rate--desc'>({descText})</span>
        )}
      </div>
    </div>
  );
};

ExperienceRate.defaultProps = {
  rate: 1,
  max: 5,
  desc: true,
};

ExperienceRate.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  rate: PropTypes.number,
  max: PropTypes.number,
  desc: PropTypes.bool,
};

export default ExperienceRate;
