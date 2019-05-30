import React from 'react';
import './Select.css';

function SelectWithCat(props) {

    const myNameID = 3;
    const values = []
    
    values.push(<option key={101} value='' disabled>Me</option>);

    props.categoriesName.forEach((data) => {
        if(data.id === myNameID)
            values.push(<option key={data.id} value={data.name+" "+data.lastname}>{data.name+" "+data.lastname}</option>);
    });
    
    values.push(<option key={102} value='' disabled>Others</option>);

    props.categoriesName.forEach((data) => {
        if(data.id !== myNameID)
            values.push(<option key={data.id} value={data.name+" "+data.lastname}>{data.name+" "+data.lastname}</option>); 
    });


    return (
        <div>
        <select autoFocus className="Select-big">
            {values}
        </select>
        <p>{props.description}</p>
        </div>
    );
}

export default SelectWithCat;