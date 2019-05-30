import React from 'react';
import './Button.css';

function CustomizedButton(props) {

    return (
        
      <input type="submit" className="Button" onClick={props.onClick} value={props.buttonText}>
        
      </input>
    );
  }

export default CustomizedButton;