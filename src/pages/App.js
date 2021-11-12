import './App.css';
import React, { Component } from 'react';
import { Routes, Route,} from 'react-router-dom';
import StarshipDetails from './StarshipDetails';
import StarHome from './StarHome';

class App extends Component {
  state = {
    baseUrl: 'https://swapi.dev'
  }

  render() {
    return (
      <>
        <Routes>
          <Route 
            path='/' 
            element={<StarHome />} 
          />
        </Routes>

        <Routes>
          <Route 
            path='/shipDetail' 
            element={<StarshipDetails />} 
          />
        </Routes>
      </>
    )
  }
}

export default App;