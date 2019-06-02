import React from 'react';
import './Select.css';

function Select(props) {

    return (
        <div>
        <select onChange={props.onChange} className="Select-big">
            <option defaultValue disabled="disabled">{props.title}</option>
            {props.categoriesName.map((data) => 
            <option key={data.id} value={data.id}>{data.name}</option>
            )}
        </select>
        <p>{props.description}</p>
        </div>
    );
}

export default Select;