import React from 'react';
import './Button.css';

function CustomizedButton(props) {

    return (
        
      <input type="submit" className="Button" label={props.buttonText}>
        
      </input>
    );
  }

export default CustomizedButton;