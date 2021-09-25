import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust, faDatabase, faFileDownload } from '@fortawesome/free-solid-svg-icons'
import './Person.css'

const Person = (props) => {
    console.log(props);
    const {name, role, age, country, Salary, image} = props.person
    const btnIcon = <FontAwesomeIcon icon={faFileDownload} />
    // console.log(name);
    return (

        <div className='person'>
            <img src={image} alt="" />
            <h3>Name: {name}</h3>
            <h3>Role: {role}</h3>
            <h3>Age: {age}</h3>
            <h3>Country: {country}</h3>
            <h3>Salary:$ {Salary}</h3>
            <button className='perosn-btn'><span className='btn-icon'>{btnIcon}</span>Download CV</button>
        </div>        
    );
};

export default Person;