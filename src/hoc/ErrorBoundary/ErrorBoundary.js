import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: null,
        info: null
    }

    componentDidCatch(error, info) {
        console.log("TCL: ErrorBoundary -> componentDidCatch -> info", info)
        console.log("TCL: ErrorBoundary -> componentDidCatch -> error", error)
        this.setState({
            error,
            info
        });
    }

    render() {
        return (
            this.state.error &&
            <div class = "ErrorBoundary-container" >
                <div class = "error-overlay"> </div> 
                <div class = "error-container" > { this.state.error } </div> 
            </div>
        )
    }
}

export default ErrorBoundary;