import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';

import UnsplashApi from '../api/unsplashApi';
import PhotosGrid from './PhotosGrid';
import LoadingSpinner from './LoadingSpinner';
import './Photos.css';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.handlePhotosLoaded = this.handlePhotosLoaded.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.state = {
      photos: fromJS({
        ids: [],
        data: {},
      }),
      isLoading: true,
      loadedPage: 1
    };
  }

  componentDidMount() {
    UnsplashApi.getPhotos({ page: this.state.loadedPage }, this.handlePhotosLoaded);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.loadedPage !== prevState.loadedPage){
      UnsplashApi.getPhotos({ page: this.state.loadedPage }, this.handlePhotosLoaded);
    }
  }

  handlePhotosLoaded(pagedPhotos) {
    const ids = this.state.photos.get('ids');
    const data = this.state.photos.get('data');

    const photos = this.state.photos.withMutations(mutableState => {
      mutableState.set('ids', ids.push(...pagedPhotos.ids));
      mutableState.set('data', data.merge(fromJS(pagedPhotos.data)));
    }); 
    this.setState({ photos, isLoading: false });
  }

  handleScroll(e) {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      this.setState({ loadedPage: this.state.loadedPage + 1, isLoading: true});
    }
  }

  handleImageClick(photoId) {
    console.log(photoId);
  }

  render() {
    return (
      <div className="photos" onScroll={this.handleScroll}>
        <PhotosGrid
          photos={this.state.photos}
          isSmallScreen={this.props.isSmallScreen}
          onImageClick={this.handleImageClick}
        />
        <LoadingSpinner isLoading={this.state.isLoading} />
      </div>
    );
  }
}

Photos.propTypes = {
  isSmallScreen: PropTypes.bool,
}

Photos.defaultProps = {
  isSmallScreen: false,
}

export default Photos;
