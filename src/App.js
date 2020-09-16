import React from 'react';
import './App.css';
import BrokenClick from './components/Button/BrokenButton';
import Button from './components/Button/Button';
import Clicker from './components/Clicker/Clicker';
import CoinContainer from './components/CoinFlipper/CoinContainer/CoinContainer';
import Pokegame from './components/Functions/Pokegame/Pokegame';
import Lottery from './components/LottoBall/Lottery/Lottery';
import RollDice from './components/RollDice/RollDice';
import ScoreKeeper from './components/ScoreKeeper/ScoreKeeper';

function App() {
  return (
    <div className="App">
      <CoinContainer />
      <Lottery />
      <Lottery title="Mini Daily" maxNum={10} numBalls={4} />
      <ScoreKeeper/>
      <RollDice />
      <Button />
      <BrokenClick/>
      <Clicker/>
     <Pokegame />
    </div>
  );
}

export default App;
