import React from 'react';
import './Input.css';

function RadioInput(props) {

    return (
        <div className="RadioInput">
        <input type="radio"
        autoFocus
        value={props.value}
        name = {props.name}
        />{props.label}</div>
    );
}

export default RadioInput;