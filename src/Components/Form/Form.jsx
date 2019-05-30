import React from 'react';
import FormCard from '../FormCard/FormCard';

import './Form.css';

function Form(props) {

    return (
        <FormCard>
            <div className="FormTitle">{props.formTitle}</div>
            <hr />
            {/* <form autoComplete="off" className='FormField' onKeyDown={props.onKeyDown} 
            onSubmit={props.onSubmit} ref={props.refe} noValidate> */}
                {props.children}
            {/* </form> */}
        </FormCard>
    );
}

export default Form;