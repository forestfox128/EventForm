import React from 'react';
import './Select.css';

function Select(props) {

    return (
        <div>
        <select autoFocus className="Select-big">
            {props.categoriesName.map((data) => 
            <option key={data.id} value={data.name}>{data.name}</option>
            )}
        </select>
        <p>{props.description}</p>
        </div>
    );
}

export default Select;