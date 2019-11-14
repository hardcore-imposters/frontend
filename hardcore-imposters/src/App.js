import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Route path='/' component={NavBar} className="NavItem"/>
        <Route exact path='/profile' component={Profile} className="Profile"/>
      
      </header>
    </div>
  );
}

export default App;
