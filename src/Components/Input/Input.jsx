import React from 'react';
import './Input.css';

function Input(props) {

    let classname = "Input-" + props.width;
    if (props.error)
        classname = "Error" + classname;
    const input = props.isRequired ? <input type={props.inputType}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        pattern={props.pattern}
        name={props.name}
        className={classname}
        onChange={props.onChange}
        min={props.min}
        max={props.max}
        required
    ></input> :
        <input type={props.inputType}
            placeholder={props.placeholder}
            maxLength={props.maxLength}
            pattern={props.pattern}
            name={props.name}
            className={classname}
            onChange={props.onChange}
        ></input>

    return (
        input

    );
}

export default Input;