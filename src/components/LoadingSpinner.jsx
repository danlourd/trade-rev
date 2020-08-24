import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner'

function LoadingSpinner({ isLoading }) {
  return (
    <div className="d-flex justify-content-center align-items-center m-5">
      <Spinner className={isLoading ? 'd-block' : 'd-none'} animation="border" />
    </div>
  );
}

LoadingSpinner.propTypes = {
  isLoading: PropTypes.bool,
}

export default LoadingSpinner;
