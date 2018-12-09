import React from 'react';
import './Person.css';

//functional components are best practice
const person = (props) => {

    const { name, age, click, changed } = props;

    return (
        <div className="Person">
            <p>Hi, I'm a person, my name is {name} and I am {age} years old.</p>
            <p>{props.children}</p>
            <input type="text"  onChange={changed} value={name}/>
            <p><button onClick={click}>Delete Person</button></p>
        </div>

    );

}

export default person;