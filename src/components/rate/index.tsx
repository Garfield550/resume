import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Star16, StarFilled16 } from '@carbon/icons-react';

import '../../styles/rate.scss';

interface RateProps {
  className?: string;
  /**
   * Current rate
   * @default 0
   */
  rate?: number;
  /**
   * Max of rate
   * @default 5
   */
  max?: number;
}

const Rate: React.FC<RateProps> = ({ className, rate = 0, max = 5 }) => {
  const makeArray = (value: number): number[] => {
    const array: number[] = [];
    for (let index = 0; index < value; index++) {
      array.push(index);
    }
    return array;
  };

  const rateArray = makeArray(rate);
  const unRateArray = makeArray(max - rate);

  const rootClass = classNames('re--rate', className);

  return (
    <div className={rootClass}>
      {rateArray.length &&
        rateArray.map((key: number) => <StarFilled16 key={`rate-${key}`} />)}
      {unRateArray.length &&
        unRateArray.map((key: number) => <Star16 key={`un-rate-${key}`} />)}
    </div>
  );
};

Rate.defaultProps = {
  rate: 0,
  max: 5,
};

Rate.propTypes = {
  className: PropTypes.string,
  rate: PropTypes.number,
  max: PropTypes.number,
};

export default Rate;
