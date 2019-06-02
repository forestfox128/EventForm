import React from 'react';
import './Input.css';

function InputDate(props) {

    return (
        <input type="date" 
        onChange={props.onChange} 
        name={props.name} 
        className="InputDate" 
        required ></input>
    );
}

export default InputDate;