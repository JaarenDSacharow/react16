import React from 'react';
import Person from './Person/Person';



const people  = (props) => 
  props.people.map((person, index) => 
     <Person
      key={person.id}
      changed = {(event) => props.changed(event, person.id )}
      click={()=>props.clicked(index)}  // you can pass references to a method to a child component
      name={person.name} 
      age={person.age}>
      {person.hobbies}
    </Person>
  
  );

export default people;