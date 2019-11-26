import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

interface GridProps {
  className?: string;
  children?: React.ReactNode;
  /**
   * Enable condensed grid
   * @default false
   */
  condensed?: boolean;
}

const Grid: React.FC<GridProps> = ({
  className,
  children,
  condensed = false,
}) => {
  return (
    <div
      className={classNames(
        'bx--grid',
        {
          'bx--grid--condensed': condensed,
        },
        className
      )}>
      {children}
    </div>
  );
};

Grid.defaultProps = {
  condensed: false,
};

Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  condensed: PropTypes.bool,
};

export default Grid;
