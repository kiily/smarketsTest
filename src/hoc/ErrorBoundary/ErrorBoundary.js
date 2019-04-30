import React, { Component } from 'react';
import './ErrorBoundary.scss';
class ErrorBoundary extends Component {
    state = {
        error: null,
        info: null
    }

    componentDidCatch(error, info) {
        this.setState({
            error,
            info
        });
    }

    render() {
        return (
            this.state.error ?
            <div className="ErrorBoundary-container">
                <div className="error-overlay"></div> 
                <div className="error-container">
                    <h1 className="error-title">Something went wrong</h1>
                    <span className="error-message">
                        {this.state.error.message}
                    </span>
                </div> 
            </div> : this.props.children
        )
    }
}

export default ErrorBoundary;