import React from 'react';
import PropTypes from 'prop-types';

function AdjustableImage({ width, height, imageSrc, altText }) {
  return (
    <img
      className={width > height ? 'w-100 h-auto' : 'w-auto h-100'}
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
