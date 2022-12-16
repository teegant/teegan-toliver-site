import React from 'react';
import './App.css';
import Home from './components/home';

import 'bootstrap/dist/css/bootstrap.min.css';
import BasicNavBar from './components/nav-bar/navbar';

function App() {
  return (
    <div className="App">
      <BasicNavBar></BasicNavBar>
      <Home></Home>
    </div>
  );
}

export default App;
