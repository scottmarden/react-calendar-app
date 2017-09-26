import React, { Component } from 'react';
import Dates from './Dates';
import Calendar from './Calendar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Dates: <Dates />
        Calendar: <Calendar />
      </div>

    );
  }
}

export default App;
