import React from 'react';
import Header from './components/header'
import Avatar from './components/avatar';
import List from './components/list'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header text="Player Stats"/>
      <Avatar />
      <List items={["CSS", "JavaScript", "Java", "MySQL", "PHP", "HTML5"]} title="Coding" />
    </div>
  );
}

export default App;
