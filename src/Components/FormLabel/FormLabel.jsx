import React from 'react';
import './FormLabel.css';

function FormLabel(props) {

    return (
        <div className="FormLabel">
            {props.children}
        </div>
    );
}

export default FormLabel;