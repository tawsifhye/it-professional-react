import React from 'react';
import './Person.css'

const Person = (props) => {
    console.log(props);
    const {name, role, age, country, Salary, image} = props.person
    // console.log(name);
    return (
        <div className='person'>
            <img src={image} alt="" />
            <h3>Name: {name}</h3>
            <h3>Role: {role}</h3>
            <h3>Age: {age}</h3>
            <h3>Country: {country}</h3>
            <h3>Salary: {Salary}</h3>
        </div>
    );
};

export default Person;