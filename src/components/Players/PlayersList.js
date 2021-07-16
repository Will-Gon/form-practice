import React from 'react';

import Card from '../UI/Card'
import classes from './PlayersList.module.css';
import Button from '../UI/Button'

const PlayersList = (props) => {
    return (
        <Card className={classes.players}>
            <ul>
                {props.players.map(player => {
                    return <li key={player.id}>
                        {player.name} {player.lastName} ({player.age} years old.)
                        <Button>Stats</Button>
                        <Button>Add Stats</Button>
                    </li>
                })}
            </ul>
        </Card>
    )
};

export default PlayersList;