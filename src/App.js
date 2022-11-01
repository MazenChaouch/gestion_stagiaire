import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";
import LoginS from "./pages/Stagiaire/LoginS";
import SignUpS from "./pages/Stagiaire/SignUpS";


import MesDemandeS from "./pages/Stagiaire/MesDemandeS";
import DemandeS from "./pages/Stagiaire/DemandeS";

import LoginE from "./pages/Entreprise/LoginE";
import SignUpE from "./pages/Entreprise/SignUpE"

import AcceptedDemandeE from "./pages/Entreprise/AcceptedDemandeE";
import DemandeE from "./pages/Entreprise/DemandeE";
import RefusedDemandeE from "./pages/Entreprise/RefusedDemandeE";

import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <Router>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route exact path="/apropos" element={<Apropos />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/" element={<Home />} />
        <Route path="stagiaire">

          <Route path="demandes/:stagiaireId" element={<DemandeS />} />
          <Route path="mesdemandes/:stagiaireId" element={<MesDemandeS />} />
          


          <Route path="logins" element={<LoginS />} />
          <Route path="signups" element={<SignUpS/>} />


        </Route>
        <Route path="entreprise">
          <Route path="demandee" element={<DemandeE />} />
          <Route path="AcceptedDemandee" element={<AcceptedDemandeE />} />
          <Route path="refuseddemandee" element={<RefusedDemandeE />} />
          
          <Route path="logine" element={<LoginE />} />
          <Route path="signupe" element={<SignUpE />} />
        </Route>
      </Routes>
    </Router>

  )
}

export default App;
