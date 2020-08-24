import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import './PhotosGrid.css';

function PhotosGrid({ photos, isSmallScreen, onImageClick }) {
  return (
    <div className="photosGrid">
      {
        photos.get('ids').map(id =>
          <Image
            key={id}
            id={id}
            imageSrc={isSmallScreen ? photos.getIn(['data', id, 'urls', 'thumb']) : photos.getIn(['data', id, 'urls', 'small'])}
            onImageClick={onImageClick}
            altText={photos.getIn(['data', id, 'alt_description'])}
          />
        )
      }
    </div>
  );
}

PhotosGrid.propTypes = {
  photos: PropTypes.object,
  isSmallScreen: PropTypes.bool,
  onImageClick: PropTypes.func,
}

export default PhotosGrid;
