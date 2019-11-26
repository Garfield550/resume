import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../../styles/card.scss';

interface CardProps {
  className?: string;
  children?: React.ReactNode;
  /** Card title */
  title: string;
  /** Card caption/subtitle */
  caption?: string;
  /**
   * Use small card
   * @default false
   */
  small?: boolean;
}

const Card: React.FC<CardProps> = ({
  className,
  children,
  title,
  caption,
  small = false,
}) => {
  const cardClass = classNames('re--card', className);
  const cardTitleClass = classNames('re--card-title--heading-clip', {
    're--card-title--productive-heading': title && caption,
    're--card-title--heading': title && !caption,
  });
  const cardTitleSmallClass = classNames('re--card-title--heading-clip', {
    're--card-title--productive-heading-small': title,
  });
  const cardCaptionClass = classNames({
    're--card-title--caption': caption && !small,
    're--card-title--caption-small': caption && small,
  });
  return (
    <div className={cardClass}>
      <div className='re--card-title'>
        {caption && !small && <p className={cardCaptionClass}>{caption}</p>}
        <h2 className={small ? cardTitleSmallClass : cardTitleClass}>
          {title}
        </h2>
        {caption && small && <p className={cardCaptionClass}>{caption}</p>}
      </div>
      <div className='re--card-content'>{children}</div>
    </div>
  );
};

Card.defaultProps = {
  small: false,
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string,
  small: PropTypes.bool,
};

export default Card;
