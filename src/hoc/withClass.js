import React, {Component} from 'react';
//this is an example of a higher order component.
//it is a function that accepts a "wrapped component" and a classname
//it is generic and can pass any props to the "wrapped component" 
//with the spread operator below.
//for use, import to the component you wish to wrap, and then
// in the export for that component,
// use, for example:
//export default withClass(App, "App");

//with HOC like these you can avoid wrapping in divs

//this is a stateless implementartion.  statfeful below.

//const withClass = (WrappedComponent, className) => {
 //   return(props) => (
   //     <div className={className}>
  //      <WrappedComponent {...props}/>
  //      </div>
  //  )
// } 



//you can of course turn this into a stateful implementation this way,
// if for example you're using it to check validation

const withClass = (WrappedComponent, className) => {

    return class extends Component { //return a genberic class

        render() {
            return(
                <div className={className}>
                <WrappedComponent {...this.props}/>
                </div>
            )
        }
    }
   
} 

export default withClass;