import React, { useState } from 'react';
import Button from '../UI/Button'

const Form = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addPLayer = (e) => {
        e.preventDefault();
        if (enteredName.trim().length === 0 || enteredLastName.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        };
        if (enteredAge > 13) {
            return;
        };
        console.log('oops');
        setEnteredName('');
        setEnteredLastName('');
        setEnteredAge('');
    };

    const nameChangeHandler = (e) => {
        // console.log(e.target.value)
        setEnteredName(e.target.value);
    };

    const lastNameChangeHandler = (e) => {
        // console.log(e.target.value);
        setEnteredLastName(e.target.value);
    };

    const ageChangeHandler = (e) => {
        // console.log(e.target.value);
        setEnteredAge(e.target.value);
    };
    return (
        <form onSubmit={addPLayer}>
            <label htmlFor='name'>Name:</label>
            <input type='text' value={enteredName} onChange={nameChangeHandler}></input>
            <label htmlFor='lastName'>Last Name:</label>
            <input type='text' value={enteredLastName} onChange={lastNameChangeHandler}></input>
            <label htmlFor='Age'>Age (Years)</label>
            <input type='number' value={enteredAge} onChange={ageChangeHandler}></input>
            <Button type='submit'>Add Player</Button>
        </form>
    )
};

export default Form;