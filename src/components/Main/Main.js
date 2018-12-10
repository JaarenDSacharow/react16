import React from 'react';

const main = (props) => {
    return(
        <div>
            <h1>React 16 App</h1>
            <p className={props.classes}>Customer List</p>
            <button className={props.buttonClass }onClick={() => props.click()}>Show People</button>
        </div>
    );
}

export default main;