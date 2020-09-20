import React from 'react';
import './App.css';
import BrokenClick from './components/Button/BrokenButton';
import Button from './components/Button/Button';
import ButtonList from './components/ButtonList/ButtonList';
import Clicker from './components/Clicker/Clicker';
import CoinContainer from './components/CoinFlipper/CoinContainer/CoinContainer';
import BoxContainer from './components/ColorBox/BoxContainer/BoxContainer';
import Pokegame from './components/Functions/Pokegame/Pokegame';
import Lottery from './components/LottoBall/Lottery/Lottery';
import BetterNumberList from './components/NumberList/BetterNumberList/BetterNumberList';
import NumberList from './components/NumberList/FirstNumberList/NumberList';
import RollDice from './components/RollDice/RollDice';
import ScoreKeeper from './components/ScoreKeeper/ScoreKeeper';
import WiseSquare from './components/WiseSquare/WiseSquare';

function App() {
  return (
    <div className="App">
      <BetterNumberList />
      <NumberList />
      <ButtonList />
      <WiseSquare />
      <BoxContainer />
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
