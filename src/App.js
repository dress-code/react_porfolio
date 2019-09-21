import React from 'react';
import FloatyButton from "./components/floatyButton";
import Header from './components/header';
import PlayerStats from './components/playerStats';
import './App.css';

function App() {
  return (
    <div className="App container column">
      <Header text="Player Stats"/>
      <PlayerStats />
      <FloatyButton icon="resume" text="Resumé"/>
    </div>
  );
}

export default App;
