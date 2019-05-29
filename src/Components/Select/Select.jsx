import React from 'react';
import './Select.css';

function Select(props) {

    return (
        <select autoFocus className="Select-big">
        {props.categories &&
            props.categoriesName.map((data) =>
            <option key={data.id} value={data.name}>{data.name+" "+data.lastname}</option>
            )
        }
        {!props.categories && 
            props.categoriesName.map((data) => 
            <option key={data.id} value={data.name}>{data.name}</option>
            )
        }
        </select>
    );
}

export default Select;