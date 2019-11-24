import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

interface GridProps {
  className?: string;
  /** Specify a class name for row */
  children?: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ className, children }) => {
  return <div className={classNames('bx--grid', className)}>{children}</div>;
};

Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Grid;
