import React from 'react';
import './Input.css';

function Input(props) {

    return (
        <textarea className="TextArea"
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        autoFocus
        cols={props.width}
        rows={props.rows}
        ></textarea>
    );
}

export default Input;