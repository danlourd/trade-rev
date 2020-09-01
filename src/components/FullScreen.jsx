import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

import AdjustableImage from './AdjustableImage';
import HideableButton from './HideableButton';

import './FullScreen.css';

const keyCodes = {
  ESC: 27,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
}

class FullScreen extends Component {
  constructor(props) {
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.state = {
      index: props.photos.get('ids').indexOf(props.startingPhotoId),
      photoId: props.startingPhotoId,
      isMouseMoving: false,
      interval: null,
      lastMouseMove: null,
    };
  }

  componentDidMount() {
    clearInterval(this.state.interval);
    const interval = setInterval(() => {
      const { lastMouseMove } = this.state;
      if (lastMouseMove && Date.now() - lastMouseMove >= 3000) {
        this.setState({ isMouseMoving: false, lastMouseMove: null })
      }
    }, 1000);
    this.setState({ interval })
  }

  componentWillUnmount() {  
    clearInterval(this.state.interval);
  }
  
  handleNext() {
    const index = this.state.index + 1;
    if (index < this.props.photos.get('ids').size) {
      this.setState({ index, photoId: this.props.photos.getIn(['ids', index]) });
    }
  }

  handlePrev() {
    const index = this.state.index - 1;
    if (index >= 0) {
      this.setState({ index, photoId: this.props.photos.getIn(['ids', index]) });
    }
  }

  handleClose() {
    const photoId = this.props.photos.getIn(['ids', this.state.index]);
    if (this.props.onClose) {
      this.props.onClose(photoId);
    }
  }

  handleMouseMove(e) {
    e.preventDefault();
    this.setState({ isMouseMoving: true, lastMouseMove: Date.now() }); 
  }

  handleKeyDown(e) {
    if (e.keyCode === keyCodes.ESC) {
      this.handleClose();
    } else if (e.keyCode === keyCodes.LEFT_ARROW) {
      this.handlePrev();
    } else if (e.keyCode === keyCodes.RIGHT_ARROW) {
      this.handleNext();
    } 
  }

  render() {
    const { photoId, isMouseMoving } = this.state;
    const { show, photos } = this.props;
    if (show && photoId) {
      return (
        <div className="fullScreen" tabIndex="0" onMouseMove={this.handleMouseMove} onKeyDown={this.handleKeyDown}>
          <HideableButton
            isHidden={!isMouseMoving}
            className="close fullScreenClose text-light mt-2"
            onClick={this.handleClose}
          >
            <span>&times;</span>
          </HideableButton>
          <HideableButton
            isHidden={!isMouseMoving}
            className="fullScreenButtonPrev"
            icon="carousel-control-prev-icon"
            onClick={this.handlePrev} />
          <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <AdjustableImage
              imageSrc={photos.getIn(['data', photoId, 'urls', 'regular'])}
              altText={photos.getIn(['data', photoId, 'alt_description'])}
              width={photos.getIn(['data', photoId, 'width'])}
              height={photos.getIn(['data', photoId, 'height'])}
            />
          </div>
          <HideableButton
            isHidden={!isMouseMoving}
            className="fullScreenButtonNext"
            icon="carousel-control-next-icon"
            onClick={this.handleNext}
          />
        </div>
      );
    }

    return false;
  }
}

FullScreen.propTypes = {
  show: PropTypes.bool,
  photos: PropTypes.object,
}

export default FullScreen;
