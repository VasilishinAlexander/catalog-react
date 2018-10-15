import React from 'react';

const LoadingComponent = props => (
  <div className='error-component center-content'>
    <div className='error-component__message'>
      {props.message}
    </div>
  </div>
)

export default LoadingComponent;