import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

interface RowProps {
  className?: string;
  /** Specify a class name for row */
  children?: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ className, children }) => {
  return <div className={classNames('bx--row', className)}>{children}</div>;
};

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Row;
