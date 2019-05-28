import React from 'react';

import './FormRow.css';

function FormRow(props) {

    return (
        <div className="FormWrapper">
                {React.Children.map(props.children, (child,i) =>
                        <div>
                        <div className="ItemS">{child.key === '0' ? child : ''}</div>
                        <div className="ItemB">
                            {child.key === '1' ? child : ''}
                        </div>
                        <div className="ItemS">{child.key === '2' ? child : ''}</div>
                    </div>  
                
                )}
        </div>
    );
}

export default FormRow;