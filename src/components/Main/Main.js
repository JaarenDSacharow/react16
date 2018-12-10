import React from 'react';
import './Main.css';
import Aux from '../../hoc/Aux';  //added this HOC merely to avoid having to wrap the adjaceny JSX elements in a div tag

const main = (props) => {
     //to test dymanic class injection
    const classes = [];

    if(props.people.length <= 2 ) {
        classes.push('red');
    }
    
    if(props.people.length <= 1 ) {
        classes.push('bold');
    }
    return(
        <Aux>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>VIP List</p>
            <p>Button Click counter: {props.toggleClicked}</p>
            <button className={props.buttonClass}onClick={() => props.click()}>Show People</button>
            <p><button onClick={props.login}>Log in</button></p>
        </Aux>
    );
}

export default main;