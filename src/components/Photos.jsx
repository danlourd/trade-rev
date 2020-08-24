import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner'

import UnsplashApi from '../api/unsplashApi';
import './Photos.css';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.handlePhotosLoaded = this.handlePhotosLoaded.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = { photos: [], isLoading: true, loadedPage: 1 };
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
    this.setState({ photos: [...this.state.photos, ...pagedPhotos], isLoading: false });
  }

  handleScroll(e) {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      this.setState({ loadedPage: this.state.loadedPage + 1, isLoading: true});
    }
  }

  render() {
    return (
      <div className="photos" onScroll={this.handleScroll}>
        <div className="photosGrid">
        {
          this.state.photos.map(photo => <img key={photo.id} className="photosImage" src={photo.urls.small}></img>)
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
