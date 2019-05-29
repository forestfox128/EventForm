import React from 'react';

import './FormRow.css';

function Col(props) {

    const classname = "Item" + props.size
    return (
        <div className={classname}>
            {props.children}
        </div>

    );
}

export default Col;