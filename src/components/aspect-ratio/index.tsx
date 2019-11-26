import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

interface AspectRatioProps {
  className?: string;
  children?: React.ReactNode;
  aspectRatio?: '1x1' | '1x2' | '2x1' | '4x3' | '16x9';
}

const AspectRatio: React.FC<AspectRatioProps> = ({
  className,
  children,
  aspectRatio = undefined,
}) => {
  const aspectRatioClass = {
    'bx--aspect-ratio': aspectRatio,
    [`bx--aspect-ratio--${aspectRatio}`]: aspectRatio,
  };
  return (
    <div className={classNames(aspectRatioClass, className)}>
      <div className='bx--aspect-ratio--object'>{children}</div>
    </div>
  );
};

AspectRatio.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  aspectRatio: PropTypes.oneOf(['1x1', '1x2', '2x1', '4x3', '16x9']),
};

export default AspectRatio;
