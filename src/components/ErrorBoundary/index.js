import React from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    };
  }

  // This lifecycle method catches errors during rendering
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // This logs error details (useful for debugging)
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // In production, you'd send this to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary" role="alert">
          <div className="error-content">
            <h1>Oops! Noe gikk galt</h1>
            <p>En uventet feil oppstod. Vi beklager bryderiet.</p>
            
            <div className="error-actions">
              <button 
                onClick={() => window.location.reload()}
                className="reload-button"
                aria-label="Last siden på nytt"
              >
                Last på nytt
              </button>
              
              <button 
                onClick={() => window.history.back()}
                className="back-button"
                aria-label="Gå tilbake til forrige side"
              >
                Gå tilbake
              </button>
            </div>

            {/* Only show error details in development */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="error-details">
                <summary>Tekniske detaljer</summary>
                <pre>{this.state.error.toString()}</pre>
                <pre>{this.state.errorInfo.componentStack}</pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;