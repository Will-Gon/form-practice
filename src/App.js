import React, { useState } from 'react';
import './App.css';
import Form from './components/Players/Form';
import PlayersList from './components/Players/PlayersList';


function App() {
  const [playersList, setPlayersList] = useState([]);

  const addPlayerHandler = (pName, pLastName, pAge) => {
    setPlayersList((prevPlayersList) => {
      return [...prevPlayersList, { name: pName, lastName: pLastName, Age: pAge, id: Math.random().toString }]
    });
  };

  return (
    <div className='App'>
      <Form onAddPlayer={addPlayerHandler} />
      <PlayersList players={playersList}/>
    </div>
  );
}

export default App;
