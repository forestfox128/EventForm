import React from 'react';
import './FormLabel.css';

function FormLabel(props) {

    let classname = ''
    if(props.error)
        classname = "FormLabelError"
    else 
        classname = "FormLabel"
    return (
        <div className={classname}>
            {props.children}
        </div>
    );
}

export default FormLabel;