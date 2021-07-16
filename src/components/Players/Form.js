import React from 'react';
import Button from '../UI/Button'

const Form = () => {
    return (
        <form>
            <label>Name:</label>
            <input type='text'></input>
            <label>Last Name:</label>
            <input type='number'></input>
            <label>Age (Years)</label>
            <input type='text'></input>
            <Button>Add Player</Button>
        </form>
    )
};

export default Form;