import React, { Component } from 'react';
import './App.css';
import './utils/base.scss';

import MainPage from './routes/mainpage/MainPage/MainPage';
import ServicesPage from './routes/services/ServicesPage/ServicesPage';
import AboutPage from './routes/about/AboutPage/AboutPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MainPage /> */}
        {/* <ServicesPage /> */}
        <AboutPage />

      </div>
    );
  }
}

export default App;