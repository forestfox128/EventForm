import React from 'react';
import './Button.css';

function CustomizedButton(props) {

    return (
        
      <button className="Button">
        {props.buttonText}
      </button>
    );
  }

export default CustomizedButton;