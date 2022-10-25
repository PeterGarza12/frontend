import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/login/login';

import logo from './logo.svg';
import './App.css';

function App() {
  //Agregué el dflex y eso para hace rprueba de diseño de login
  //En este momento afectaría a todas las pantallas si no me equivoco
  return (
    <div className="App d-flex  justify-content-center">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
