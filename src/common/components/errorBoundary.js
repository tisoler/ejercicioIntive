/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Typography, Paper } from '@material-ui/core';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <Paper>
          <Typography variant="h6">Something went wrong</Typography>
          {this.props.errorMessage && <Typography variant="subtitle2">{this.props.errorMessage}</Typography>}
        </Paper>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
