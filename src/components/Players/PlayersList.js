import React from 'react';

const PlayersList = (props) => {
    return (
        <div>
            <ul>
                {props.players.map(player => {
                    return <li>
                        {player.name} {player.lastName} ({player.aye} years old.)
                    </li>
                })}
            </ul>
        </div>
    )
};

export default PlayersList;