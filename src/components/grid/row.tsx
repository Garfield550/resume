import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

interface RowProps {
  className?: string;
  children?: React.ReactNode;
  /**
   * Enable condensed row
   * @default false
   */
  condensed?: boolean;
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

const Row: React.FC<RowProps> = ({
  className,
  children,
  condensed = false,
  noGutter = false,
  noGutterLeft = false,
  noGutterRight = false,
}) => {
  return (
    <div
      className={classNames(
        'bx--row',
        {
          'bx--row--condensed': condensed,
          'bx--no-gutter': noGutter,
          'bx--no-gutter--left': noGutterLeft,
          'bx--no-gutter--right': noGutterRight,
        },
        className
      )}>
      {children}
    </div>
  );
};

Row.defaultProps = {
  condensed: false,
  noGutter: false,
  noGutterLeft: false,
  noGutterRight: false,
};

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  condensed: PropTypes.bool,
  noGutter: PropTypes.bool,
  noGutterLeft: PropTypes.bool,
  noGutterRight: PropTypes.bool,
};

export default Row;
