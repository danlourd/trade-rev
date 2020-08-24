import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component{
  constructor(props) {
    super(props);
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleImageClick() {
    if (this.props.onImageClick) {
      this.props.onImageClick(this.props.id);
    }
  }

  render() {
    return (
      <img
        id={this.props.id}
        src={this.props.imageSrc}
        onClick={this.handleImageClick}
        alt={this.props.altText}
      />
    );
  }
}

Image.propTypes = {
  id: PropTypes.string,
  imageSrc: PropTypes.string,
  altText: PropTypes.string,
  onImageClick: PropTypes.func,
}

export default Image;
