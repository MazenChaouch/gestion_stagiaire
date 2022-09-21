import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";
import LoginS from "./pages/Stagiaire/LoginS";
import SignUpS from "./pages/Stagiaire/SignUpS";
import Stagiaire from "./pages/Stagiaire/Stagiaire";
import LoginE from "./pages/Entreprise/LoginE";
import SignUpE from "./pages/Entreprise/SignUpE";
import Entreprise from "./pages/Entreprise/Entreprise";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/stagiaire" element={<Stagiaire />} />
          <Route exact path="/entreprise" element={<Entreprise />} />
          <Route path="stagiaire">
            <Route path="logins" element={<LoginS />} />
            <Route path="signups" element={<SignUpS />} />
          </Route>
          <Route path="entreprise">
            <Route path="logine" element={<LoginE />} />
            <Route path="signupe" element={<SignUpE />} />
          </Route>
        </Routes>
      </Router>
  
  )
}

export default App;
