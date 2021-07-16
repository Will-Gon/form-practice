import React from 'react';

const PlayersList = (props) => {
    return (
        <div>
            <ul>
                {props.players.map(player => {
                    return <li key={player.id}>
                        {player.name} {player.lastName} ({player.age} years old.)
                    </li>
                })}
            </ul>
        </div>
    )
};

export default PlayersList;