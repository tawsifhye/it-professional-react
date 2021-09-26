import React from 'react';
import './Inventory.css'

const Inventory = (props) => {
    console.log(props.inventory);
    
    return (
        <div className='inventory'>
           <h2>CV Added:</h2>
           {
               <p>{props.inventory}</p>
           }
           <br />
           <h2>Total Cost:$</h2>
        </div>
    );
};

export default Inventory;