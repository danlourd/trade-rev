import React from 'react';
import PropTypes from 'prop-types';

import './AdjustableImage.css';

function AdjustableImage({ width, height, imageSrc, altText }) {
  return (
    <img
      className={width > height ? 'heightAdjust' : 'widthAdjust'}
      src={imageSrc}
      alt={altText}
    />
  );
}

AdjustableImage.propTypes = {
  imageSrc: PropTypes.string,
  altText: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default AdjustableImage;
