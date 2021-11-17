import StartPage from './components/startpage-component';
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactPage from './components/contact-component';
import AboutMe from './components/aboutme-component';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a href="/" className="navbar-brand" >
              Elin Nilsson
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/contact"} className="nav-link">
                  Kontakt
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/aboutme"} className="nav-link">
                  Om mig
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Routes>
              <Route path="/contact" exact element={<ContactPage />} />
              <Route path="/aboutme" exact element={<AboutMe />} />
              <Route path="/" exact element={< StartPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
