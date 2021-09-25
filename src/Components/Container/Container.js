import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import Person from '../Person/Person';
import './Container.css'

const Container = () => {
    const [persons, setPersons] = useState([])
    useEffect( () => {
        fetch('./fakedata.json')
        .then(res => res.json())
        .then(data => setPersons(data))
    },[])
    console.log(persons);
    return (
        <div className='container'>
            <div className='person-container'>
                {
                    persons.map( person => <Person key={person.id} person={person}></Person>)
                }
            </div>
            <div>
                <Inventory></Inventory>
            </div>
        </div>
    );
};

export default Container;