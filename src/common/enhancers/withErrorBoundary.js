/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ErrorBoundary from '../components/errorBoundary';

const withErrorBoundary = (errorMessage, Component) => (props) => (
  <ErrorBoundary errorMessage={errorMessage}>
    <Component {...props} />
  </ErrorBoundary>
);

export default withErrorBoundary;
