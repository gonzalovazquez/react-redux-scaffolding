import React from 'react';
import PropTypes from 'prop-types';

/**
 * Container to render other components
 * @return {ReactElement} Markup
 */
export default function Container({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}
/**
 * propTypes
 * @property {object} children - Renders child components
 */
Container.propTypes = {
  children: PropTypes.object,
};
