import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container">
          <h2 className="error-boundary-title">
            Terjadi kendala tampilan saat penerjemahan / Something went wrong
          </h2>
          <p className="error-boundary-message">
            Halaman mengalami sedikit penyesuaian dari penerjemah browser. Klik tombol di bawah untuk memuat ulang tampilan.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="error-boundary-btn"
          >
            Muat Ulang Halaman (Reload)
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
