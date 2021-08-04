import React, { useState } from 'react';

import StatsForm from './StatsForm';
import Button from '../UI/Button';

const Stats = (props) => {
    const [showForm, setShowForm] = useState(false);

    const handleShowForm = (value) => {
        setShowForm(value);
    };

    return (
        <div>
            {!showForm && <Button onClick={() => handleShowForm(true)}>Stats</Button>}
            {showForm && <StatsForm />}
        </div>
    )
};

export default Stats;