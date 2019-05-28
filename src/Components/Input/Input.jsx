import React from 'react';
import './Input.css';

function Input(props) {

    const classname = "Input-"+props.width;
    return (
        <input type={props.inputType} 
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        pattern={props.pattern}
        autoFocus
        className={classname}
        ></input>
    );
}

export default Input;