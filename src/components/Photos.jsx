import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner'

import UnsplashApi from '../api/unsplashApi';
import './Photos.css';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.handlePhotosLoaded = this.handlePhotosLoaded.bind(this);
    this.state = { photos: [], isLoading: true };
  }

  componentDidMount() {
    UnsplashApi.getPhotos(this.handlePhotosLoaded);
  }

  handlePhotosLoaded(photos) {
    this.setState({ photos, isLoading: false });
  }

  render() {
    return (
      <div className="photos">
        <div className="photosGrid">
        {
          this.state.photos.map(photo => <img className="photosImage" src={photo.urls.small}></img>)
        }
        </div>
        <div className="loadingContainer">
          <Spinner className={this.state.isLoading ? 'd-block' : 'd-none'} animation="border" />
        </div>
      </div>
    );
  }
}

export default Photos;
