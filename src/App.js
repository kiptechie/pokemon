import React from 'react';
import './App.css';
import BrokenClick from './components/Button/BrokenButton';
import Button from './components/Button/Button';
import Clicker from './components/Clicker/Clicker';
import Pokegame from './components/Functions/Pokegame/Pokegame';
import RollDice from './components/RollDice/RollDice';

function App() {
  return (
    <div className="App">
      <RollDice />
      <Button />
      <BrokenClick/>
      <Clicker/>
     <Pokegame />
    </div>
  );
}

export default App;
