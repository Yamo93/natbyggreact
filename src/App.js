import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import './utils/base.scss';

import MainPage from './routes/mainpage/MainPage/MainPage';
import ServicesPage from './routes/services/ServicesPage/ServicesPage';
import AboutPage from './routes/about/AboutPage/AboutPage';
import ContactPage from './routes/contact/ContactPage/ContactPage';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={MainPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          {/* <MainPage /> */}
          {/* <ServicesPage /> */}
          {/* <AboutPage /> */}
          {/* <ContactPage /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;