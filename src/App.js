import React from 'react';
import ButtonsMenu from "./components/buttonsMenu";
import Header from './components/header';
import PlayerStats from './components/playerStats';
import './App.css';

function App() {
  return (
    <div className="App container column">
      <Header text="Player Stats"/>
      <PlayerStats />
      <ButtonsMenu />
    </div>
  );
}

export default App;
