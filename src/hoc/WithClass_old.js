import React from 'react';

const WithClass = (props) => {
    const {children, classes } = props;
    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default WithClass;

