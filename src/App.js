import React, { Component } from 'react';
import './App.css';
import './sass/base.scss';

import TopSec from './components/TopSec/TopSec';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopSec />
      </div>
    );
  }
}

export default App;
