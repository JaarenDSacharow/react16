import React from 'react';
import './Person.css'

//functional components are best practice
const person = (props) => {

    const { name, age, click, changed } = props;

    return (
        <div className="Person">
            <p onClick={click}>Hi, I'm a person, my name is {name} and I am {age} years old.</p>
            <p>{props.children}</p>
            <input type="text"  onChange={changed} value={name}/>
        </div>

    );

}

export default person;