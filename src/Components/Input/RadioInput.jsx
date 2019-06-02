import React from 'react';
import './Input.css';

function RadioInput(props) {

    return (
        <div className="RadioInput">
        <input type="radio"
        autoFocus
        value={props.value}
        name = {props.name}
        onChange = {props.onChange}
        checked = {props.checked}
        />{props.label}</div>
    );
}

export default RadioInput;