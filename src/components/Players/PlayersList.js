import React from 'react';

import Card from '../UI/Card'
import classes from './PlayersList.module.css';

const PlayersList = (props) => {
    return (
        <Card className={classes.players}>
            <ul>
                {props.players.map(player => {
                    return <li key={player.id}>
                        {player.name} {player.lastName} ({player.age} years old.)
                    </li>
                })}
            </ul>
        </Card>
    )
};

export default PlayersList;