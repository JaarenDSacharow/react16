import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'


const people  = (props) => {
  props.people.map((person, index)=> {
    return <ErrorBoundary 
    key = {person.id}  //<-- to manipulate the list more efficiently, also kills that annoying error
    >
    <Person
      changed = {(event) => props.changed(event, person.id )}
      click={()=>props.clicked(index)}  // you can pass references to a method to a child component
      name={person.name} 
      age={person.age}>
      {person.hobbies}
    </Person>
    </ErrorBoundary>
  });

}
export default people;