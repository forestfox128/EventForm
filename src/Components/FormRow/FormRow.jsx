import React from 'react';

import './FormRow.css';

function FormRow(props) {

    return (
        <div className="FormWrapper">
            {props.children}  
        </div>
    );
}

export default FormRow;