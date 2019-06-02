import React from 'react';
import './Select.css';

function SelectWithCat(props) {

    const myNameID = 3;
    const values = []
    
    

    props.categoriesName.forEach((data) => {
        if(data.id === myNameID){
            values.push(<option key={101} defaultValue disabled="disabled">{"Me "+data.name+" "+data.lastname}</option>);
            values.push(<option key={data.id} value={data.id}>{data.name+" "+data.lastname}</option>);
        }
            
    });
    
    values.push(<option key={102} value='' disabled>Others</option>);

    props.categoriesName.forEach((data) => {
        if(data.id !== myNameID)
            values.push(<option key={data.id} value={data.id}>{data.name+" "+data.lastname}</option>); 
    });

    return (
        <div>
        <select onChange={props.onChange} className="Select-big">
            {values}
        </select>
        <p>{props.description}</p>
        </div>
    );
}

export default SelectWithCat;