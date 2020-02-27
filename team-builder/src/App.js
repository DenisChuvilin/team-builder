import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {teamMembers} from "./components/teamMembers";


function App() {
 const [member, setMember] = useState({
   Name: '',
   Status: '',
  Gender: ''
 });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
<teamMembers/>
      </header>


    </div>
  );
}

export default App;
