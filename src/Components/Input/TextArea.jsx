import React from 'react';
import './Input.css';

function Input(props) {

    const classname = props.error ? "ErrorTextArea" : "TextArea";

    return (
        <div>
        <textarea className={classname}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        cols={props.width}
        name={props.name}
        rows={props.rows}
        required
        onChange={props.onChange}
        ></textarea>
        <div className="Paragraph">Max length 140 characters
        <div style={{float: 'right'}}><div>{props.currentSignNum}/140</div></div></div>
        </div>
    );
}

export default Input;