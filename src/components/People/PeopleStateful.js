import React, { Component } from 'react';
import Personstateful from './Person/PersonStateful';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

//stateful version of the people component

class PeopleStateful extends Component {
    constructor(props){
        super(props); //you have to define super if you create your own constructor
      
        console.log('[PeopleStateful.js] Inside Constructor');
      
    }

      componentWillMount(){
        console.log('[PeopleStateful.js] Inside componentWillMount()');
      }
      
      componentDidMount(){
        console.log('[PeopleStateful.js] Inside componentDidMount()');
      }

      componentDidUpdate(){
        console.log('[PeopleStateful.js] Inside componentDidUpdate()');
      }

      shouldComponentUpdate(nextProps, nextState){
        console.log('[PeopleStateful.js] Inside shouldComponentUpdate()');
        return nextProps.people !==this.props.people;
        //return true;
      }
       
    render(){
        console.log('[PeopleStateful.js] Inside render()');
        return (
            this.props.people.map((person, index) => 
            <ErrorBoundary key={person.id} >
                <Personstateful
                  key={person.id}
                  position={index}
                  changed = {(event) => this.props.changed(event, person.id )}
                  click={()=>this.props.clicked(index)}  // you can pass references to a method to a child component
                  name={person.name} 
                  age={person.age}>
                  {person.hobbies}
                </Personstateful>
              </ErrorBoundary>
            )
          )
    }
}



export default PeopleStateful;