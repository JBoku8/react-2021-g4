import React from 'react';
import Theme from '../theme/theme';

import './styles.css';

class ErrorBoundary extends React.Component {
  state = {
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;
    if (error) {
      return (
        <Theme type="dark">
          <div className="container d-flex justify-content-center vh-100 flex-column">
            <h2 className="text-info">Something went wrong :(</h2>
            <hr />

            <a href="/" className="fs-3 text-warning text-decoration-none">
              Home Page
            </a>

            <details style={{ wordSpacing: 'pre-wrap' }} className="text-white">
              {errorInfo.toString()}
            </details>
          </div>
        </Theme>
      );
    }

    // normally render children
    return children;
  }
}

export default ErrorBoundary;
