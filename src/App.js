import React from 'react';
import Header from './components/header'
import Avatar from './components/avatar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header text="Player Stats"/>
      <Avatar />
    </div>
  );
}

export default App;
