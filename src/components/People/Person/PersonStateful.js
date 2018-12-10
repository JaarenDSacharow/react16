import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';


//stateful version of the person component

class PersonStateful extends Component {
    constructor(props){
        super(props); //you have to define super if you create your own constructor
      
        console.log('[PersonStateful.js] Inside Constructor');
      
    }

      componentWillMount(){
        console.log('[PersonStateful.js] Inside componentWillMount()');
      }
      
      componentDidMount(){
        console.log('[PersonStateful.js] Inside componentDidMount()');
        //this is the best place to set focus based on ref.
        // the position is passed in from the parent via prop.
        //see ref in the input element below for syntax.

        if (this.props.position === 0) {
            this.inputElement.focus();
        }
      }

  render() {
    console.log('[PersonStateful.js] Inside render()');

    const { name, age, click, changed } = this.props;

     return(
        <Aux>
            <p>Hi, my name is {name} and I am {age} years old.</p>
            <p>{this.props.children}</p>
            <input
                ref={(inp) => { this.inputElement = inp }}
                type="text"  
                onChange={changed} 
                value={name}/>
            <p><button onClick={click}>Delete Person</button></p>
        </Aux>
     ) 
  }
}

//propTypes can only be used in stateful components.

PersonStateful.propTypes = {
    click: propTypes.func,
    name: propTypes.string,
    age: propTypes.number,
    changed: propTypes.func,

}

export default withClass(PersonStateful, "Person");