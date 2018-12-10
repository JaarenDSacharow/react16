import React, {Component} from 'react';


//this is a higher order component that can be 
//used to display friendly error messages
// in the event that something outside your
//control may fail.  wrap a component that
//may fit this criteria in in this component.
//if said component is in a map, move the 
// key prop to this higher order component.

class ErrorBoundary extends Component {

    state = {
        hasError: false,
        errorMessage: ''
    }

componentDidCatch = (error, info) => {
    this.setState({
        hasError: true,
        errorMessage: error
    })
}

    render() {
        if(this.state.hasError) {
            return (
                <h1>{this.state.errorMessage}</h1>
            )
        } else {
            return this.props.children;
        }

    }
}

export default ErrorBoundary;