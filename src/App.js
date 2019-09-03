import React from 'react';
import Header from './components/header';
import PlayerStats from './components/playerStats';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header text="Player Stats"/>
      <PlayerStats />
    </div>
  );
}

export default App;
