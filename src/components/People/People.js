import React from 'react';
// import Person from './Person/Person';
import Personstateful from './Person/PersonStateful';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

//see PeopleStateful for an example of this exact thing done in a stateful component
const people  = (props) => {
  return (
    props.people.map((person, index) => 
    <ErrorBoundary key={person.id} >
        <Personstateful
          key={person.id}
          changed = {(event) => props.changed(event, person.id )}
          click={()=>props.clicked(index)}  // you can pass references to a method to a child component
          name={person.name} 
          age={person.age}>
          {person.hobbies}
        </Personstateful>
      </ErrorBoundary>
    )
  )
};

export default people;