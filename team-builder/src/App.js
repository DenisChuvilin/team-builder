import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { teamMembers } from './components/teamMembers';
import { MembersList } from './components/MembersList';
import { MemberForm } from './components/MemberForm';
function App() {
  const [list, setList] = useState(teamMembers);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <MembersList list={list}/>
        <MemberForm setList={setList} list={list} />
      </header>
    </div>
  );
}

export default App;
