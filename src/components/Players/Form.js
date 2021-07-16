import React, { useState } from 'react';
import Wrapper from '../Helpers/Wrapper';

import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal';

const Form = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addPLayer = (e) => {
        e.preventDefault();
        if (enteredName.trim().length === 0 || enteredLastName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name, last name, age (No-Empty values!)'
            });
            return;
        };
        if (enteredAge > 13) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (> 13).'
            });
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

    const closeModal = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onClose={closeModal}/>}
            <Card>
                <form onSubmit={addPLayer}>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' value={enteredName} onChange={nameChangeHandler}></input>
                    <label htmlFor='lastName'>Last Name:</label>
                    <input type='text' value={enteredLastName} onChange={lastNameChangeHandler}></input>
                    <label htmlFor='Age'>Age (Years)</label>
                    <input type='number' value={enteredAge} onChange={ageChangeHandler}></input>
                    <Button type='submit'>Add Player</Button>
                </form>
            </Card>
        </Wrapper>
    )
};

export default Form;