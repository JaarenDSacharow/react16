import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const people  = (props) => {
  return (
    props.people.map((person, index) => 
    <ErrorBoundary key={person.id} >
        <Person
          key={person.id}
          changed = {(event) => props.changed(event, person.id )}
          click={()=>props.clicked(index)}  // you can pass references to a method to a child component
          name={person.name} 
          age={person.age}>
          {person.hobbies}
        </Person>
      </ErrorBoundary>
    )
  )
};

export default people;