import React from 'react';
import './Main.css';

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
        <div>
            <h1>React 16 App</h1>
            <p className={classes.join(' ')}>Customer List</p>
            <button className={props.buttonClass}onClick={() => props.click()}>Show People</button>
        </div>
    );
}

export default main;