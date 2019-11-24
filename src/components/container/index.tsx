import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/container.scss';

interface ContainerProps {
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className='re--container'>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
