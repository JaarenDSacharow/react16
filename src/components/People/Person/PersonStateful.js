import React, { Component } from 'react';
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
      }

  render() {
    console.log('[PersonStateful.js] Inside render()');

    const { name, age, click, changed } = this.props;
     return(
        <Aux>
            <p>Hi, my name is {name} and I am {age} years old.</p>
            <p>{this.props.children}</p>
            <input type="text"  onChange={changed} value={name}/>
            <p><button onClick={click}>Delete Person</button></p>
        </Aux>
     ) 
  }

}

export default withClass(PersonStateful, "Person");