import React from 'react';
import './Input.css';

function InputDate(props) {

    let classname = "InputDate"
    if (props.error)
        classname = "Error" + classname;
    return (
        <input type="date" 
        onChange={props.onChange} 
        name={props.name} 
        className={classname} 
        required ></input>
    );
}

export default InputDate;