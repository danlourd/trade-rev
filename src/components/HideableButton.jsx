import React from 'react';
import PropTypes from 'prop-types';

function HideableButton({ isHidden, icon, className, onClick, children }) {
  return (
    <button className={`btn ${className} ${isHidden ? 'invisible' : 'visible'}`} onClick={onClick}>
      { icon ? <span className={icon} /> : children }
    </button>
  );
}

HideableButton.defaultProps = {
  isHidden: true,
}

HideableButton.propTypes = {
  className: PropTypes.string,
  isHidden: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
}

export default HideableButton;
