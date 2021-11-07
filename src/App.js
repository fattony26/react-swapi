import './App.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Starships from './Starships/Starships';

class App extends Component {
  state = {
    starships: [
      { url: '/starships', name: '' },
    ]
  }

  render() {
    return (
      <>
        <h1>Hello Kitty</h1>
        <Route 
          exact path='/starships' 
          render={() => (
            <Starships />
          )}
        />
      </>
    )
  }
}

export default App;