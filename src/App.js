import React, { Component } from 'react';
import './App.css';
import './utils/base.scss';

import MainPage from './routes/mainpage/MainPage/MainPage';
import ServicesPage from './routes/services/ServicesPage/ServicesPage';

// import MainTopSec from './components/MainTopSec/MainTopSec';
// import MainInfoSec from './components/MainInfoSec/MainInfoSec';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MainPage /> */}
        <ServicesPage />
      </div>
    );
  }
}

export default App;