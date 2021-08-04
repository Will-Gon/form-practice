import React from 'react';
import Button from '../UI/Button'

const StatsForm = (props) => {
    return (
        <form>
            <label>TouchDowns</label>
            <input></input>
            <label>Catches</label>
            <input></input>
            <Button>Close</Button>
        </form>
    )
};

export default StatsForm;