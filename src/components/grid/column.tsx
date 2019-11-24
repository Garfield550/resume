import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

type ColumnBreakpointKeys = {
  sm: 'sm';
  md: 'md';
  lg: 'lg';
  xl: 'xl';
  max: 'max';
};
export type NoGutterClass = {
  [key in keyof ColumnBreakpointKeys]?: boolean;
};
export type NoGutterLeftClass = {
  [key in keyof ColumnBreakpointKeys]?: boolean;
};
export type OffsetClass = {
  [key in keyof ColumnBreakpointKeys]?: number;
};
export type ColumnClass = {
  [key in keyof ColumnBreakpointKeys]?: number;
};

interface ColumnProps {
  className?: string;
  /** Specify a class name for row */
  children?: React.ReactNode;
  /** Specify a no-gutter class */
  noGutter?: NoGutterClass;
  /** Specify a no-gutter-left class */
  noGutterLeft?: NoGutterLeftClass;
  /** Specify the col offset */
  offset?: OffsetClass;
  /** Specify the col width */
  column?: ColumnClass;
}

const Column: React.FC<ColumnProps> = ({
  className,
  children,
  noGutter,
  noGutterLeft,
  offset,
  column,
}) => {
  const noGutterClass = noGutter && {
    'bx--no-gutter-sm': noGutter.sm,
    'bx--no-gutter-md': noGutter.md,
    'bx--no-gutter-lg': noGutter.lg,
    'bx--no-gutter-xl': noGutter.xl,
    'bx--no-gutter-max': noGutter.max,
  };
  const noGutterLeftClass = noGutterLeft && {
    'bx--no-gutter-sm--left': noGutterLeft.sm,
    'bx--no-gutter-md--left': noGutterLeft.md,
    'bx--no-gutter-lg--left': noGutterLeft.lg,
    'bx--no-gutter-xl--left': noGutterLeft.xl,
    'bx--no-gutter-max--left': noGutterLeft.max,
  };
  const offsetClass = offset && {
    [`bx--offset-sm-${offset.sm}`]: offset.sm,
    [`bx--offset-md-${offset.md}`]: offset.md,
    [`bx--offset-lg-${offset.lg}`]: offset.lg,
    [`bx--offset-xl-${offset.xl}`]: offset.xl,
    [`bx--offset-max-${offset.max}`]: offset.max,
  };
  const columnClass = column && {
    [`bx--col-sm-${column.sm}`]: column.sm,
    [`bx--col-md-${column.md}`]: column.md,
    [`bx--col-lg-${column.lg}`]: column.lg,
    [`bx--col-xl-${column.xl}`]: column.xl,
    [`bx--col-lg-${column.max}`]: column.max,
  };
  const colClass = classNames(
    {
      ...columnClass,
      ...offsetClass,
      ...noGutterClass,
      ...noGutterLeftClass,
    },
    className
  );

  return <div className={colClass}>{children}</div>;
};

Column.defaultProps = {
  column: {
    lg: 12,
  },
};

Column.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  noGutter: PropTypes.shape({
    sm: PropTypes.bool,
    md: PropTypes.bool,
    lg: PropTypes.bool,
    xl: PropTypes.bool,
    max: PropTypes.bool,
  }),
  noGutterLeft: PropTypes.shape({
    sm: PropTypes.bool,
    md: PropTypes.bool,
    lg: PropTypes.bool,
    xl: PropTypes.bool,
    max: PropTypes.bool,
  }),
  offset: PropTypes.shape({
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    max: PropTypes.number,
  }),
  column: PropTypes.shape({
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    max: PropTypes.number,
  }),
};

export default Column;
