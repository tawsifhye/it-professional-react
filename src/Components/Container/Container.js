import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import Person from '../Person/Person';
import './Container.css'

const Container = () => {
    const [persons, setPersons] = useState([]);
    const [inventory, setInventory] = useState([])
    useEffect( () => {
        fetch('./fakedata.json')
        .then(res => res.json())
        .then(data => setPersons(data))
    },[]);

    const handleAddToInventory = (person) => {
        const newInventory = [...inventory, person.name];
        setInventory(newInventory);
    };
    return (
        <div className='container'>
            <div className='person-container'>
                {
                    persons.map( person => <Person 
                        key={person.id} 
                        person={person}
                        handleAddToInventory={handleAddToInventory}
                        ></Person>)
                }
            </div>
            <div>
                <Inventory inventory={inventory}></Inventory>
            </div>
        </div>
    );
};

export default Container;