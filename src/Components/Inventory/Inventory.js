import React from 'react';
import './Inventory.css'

const Inventory = (props) => {
    const persons = props.inventory;
    let totalSalary = 0;
    // console.log(persons);
    for(let person of persons){
        totalSalary = totalSalary + person.Salary;
    }
    function hireBtnHandler(){
        if(!persons.length){
            window.alert('Please add member');
            return
        }
        window.confirm('Team hiring successful');
    }
    return (
        <div className='inventory'>
           <h2>CV Added: {persons.length}</h2>
           <ul>
               {
                   persons.map(person => <li key={person.id}>{person.name}</li>)
               }
           </ul>
            <h2>Total Cost:$ {totalSalary}</h2>
            <button onClick= {hireBtnHandler}>Hire Your Team</button>
        </div>
    );
};

export default Inventory;