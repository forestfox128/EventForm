import React from 'react';
import './Input.css';

function Input(props) {

    return (
        <div>
        <textarea className="TextArea"
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        autoFocus
        cols={props.width}
        rows={props.rows}
        ></textarea>
        <p>Counter znaków</p>
        </div>
    );
}

export default Input;