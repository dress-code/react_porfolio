import React from 'react';
import ButtonsMenu from "./components/buttonsMenu";
import PlayerStatsPage from "./components/playerStatsPage";
import TopBar from './components/topBar';
import './App.css';

function App() {
  return (
    <div className="App container column">
      <TopBar />
      <ButtonsMenu />
      {/*<PlayerStatsPage />*/}
    </div>
  );
}

export default App;
