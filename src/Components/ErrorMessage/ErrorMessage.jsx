import React from 'react';
import './ErrorMessage.css';

function ErrorMessage(props) {

    return (
        <div className="ErrorMessageContainer"><div className="Arrow"></div>
        <div className="ErrorMessage">{props.text}</div>
        </div>
       
    );
  }

export default ErrorMessage;