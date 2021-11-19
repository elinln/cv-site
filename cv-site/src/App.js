import StartPage from './components/startpage-component';
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactPage from './components/contact-component';
import AboutMe from './components/aboutme-component';
import ExperiencePage from './components/experience-component';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="navbar navbar-expand-lg navbar-dark" style={{ dispay: "flex", justifyContent: "center", backgroundColor: "rgb(56 53 53 / 43%)" }}>
            <a href="/" className="navbar-brand" >
              <h1>
                Elin Nilsson
              </h1>
            </a>

          </div>
          <div className="navbar-nav mr-auto" style={{ display: "flex", flexDirection: "row", justifyContent: "center", backgroundColor: "rgb(56 53 53 / 43%)", color: "white" }}>
            <li className="nav-item">
              <Link to={"/aboutme"} className="nav-link" style={{
                textDecoration: "none", color: "white", padding: "12px"
              }}>
                Lär känna mig
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/contact"} className="nav-link" style={{
                textDecoration: "none", color: "white", padding: "12px"
              }}>
                Kontakt
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/experience"} className="nav-link" style={{
                textDecoration: "none", color: "white", padding: "12px"
              }}>
                Mina erfarenheter
              </Link>
            </li>
          </div>

          <div className="container mt-3">
            <Routes>
              <Route path="/contact" exact element={<ContactPage />} />
              <Route path="/aboutme" exact element={<AboutMe />} />
              <Route path="/experience" exact element={<ExperiencePage />} />
              <Route path="/" exact element={< StartPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
