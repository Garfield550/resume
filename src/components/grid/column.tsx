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
  children?: React.ReactNode;
  /** Specify the col offset */
  offset?: OffsetClass;
  /** Specify the col width */
  column?: ColumnClass;
  /**
   * Specify a no-gutter class
   * @default false
   */
  noGutter?: boolean;
  /**
   * Specify a no-gutter-left class
   * @default false
   */
  noGutterLeft?: boolean;
  /**
   * Specify a no-gutter-right class
   * @default false
   */
  noGutterRight?: boolean;
}

const Column: React.FC<ColumnProps> = ({
  className,
  children,
  offset,
  column,
  noGutter = false,
  noGutterLeft = false,
  noGutterRight = false,
}) => {
  const noGutterClass = {
    'bx--no-gutter': noGutter,
  };
  const noGutterLeftClass = {
    'bx--no-gutter--left': noGutterLeft,
  };
  const noGutterRightClass = {
    'bx--no-gutter--right': noGutterRight,
  };
  const offsetClass = offset && {
    [`bx--offset-sm-${offset.sm}`]: offset.sm,
    [`bx--offset-md-${offset.md}`]: offset.md,
    [`bx--offset-lg-${offset.lg}`]: offset.lg,
    [`bx--offset-xl-${offset.xl}`]: offset.xl,
    [`bx--offset-max-${offset.max}`]: offset.max,
  };
  const defaultColumnClass = {
    'bx--col': true,
  };
  const columnClass = column
    ? {
        [`bx--col-sm-${column.sm}`]: column.sm,
        [`bx--col-md-${column.md}`]: column.md,
        [`bx--col-lg-${column.lg}`]: column.lg,
        [`bx--col-xl-${column.xl}`]: column.xl,
        [`bx--col-lg-${column.max}`]: column.max,
      }
    : defaultColumnClass;
  const colClass = classNames(
    {
      ...columnClass,
      ...offsetClass,
      ...noGutterClass,
      ...noGutterLeftClass,
      ...noGutterRightClass,
    },
    className
  );

  return <div className={colClass}>{children}</div>;
};

Column.defaultProps = {
  noGutter: false,
  noGutterLeft: false,
  noGutterRight: false,
};

Column.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
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
  noGutter: PropTypes.bool,
  noGutterLeft: PropTypes.bool,
  noGutterRight: PropTypes.bool,
};

export default Column;
