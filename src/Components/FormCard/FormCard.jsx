import React from 'react';

import './FormCard.css';

function FormCard(props) {

    return (
        <div className="FormCard">
            {props.children}       
        </div>
    );
}

export default FormCard;