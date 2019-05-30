import React from 'react';
import './Input.css';

function InputDate(props) {

    return (
        <input type="date" name={props.name} className="InputDate"></input>
    );
}

export default InputDate;