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
import EndedStageS from "./pages/Stagiaire/EndedStageS";

import MesDemandeS from "./pages/Stagiaire/MesDemandeS";
import DemandeS from "./pages/Stagiaire/DemandeS";

import LoginE from "./pages/Entreprise/LoginE";
import SignUpE from "./pages/Entreprise/SignUpE";
import StatistiqueE from "./pages/Entreprise/StatistiqueE";

import AcceptedDemandeE from "./pages/Entreprise/AcceptedDemandeE";
import DemandeE from "./pages/Entreprise/AcceptedDemandeE";
import RefusedDemandeE from "./pages/Entreprise/RefusedDemandeE";
import ExpiredStageE from "./pages/Entreprise/ExpiredStageE";


const App = () => {

  const [loggedIn, setLoggedIn] = useState(false)
  const [id, setId] = useState('')


  useEffect(() => {
    const user = localStorage.getItem('user')
    setId(user)
    if (user && user !== '') {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }

  }, [loggedIn])


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
        <Route exact path="/" element={<Home />} />
        <Route path="stagiaire">

          <Route path="demandes/:stagiaireId" element={loggedIn ? <DemandeS /> : <Navigate to="/" replace />} />
          <Route path="mesdemandes/:stagiaireId" element={loggedIn ? <MesDemandeS /> : <Navigate to="/" replace />} />
          <Route path="endedstages:stagiaireId" element={loggedIn ? <EndedStageS /> : <Navigate to="/" replace />} />


          <Route path="logins" element={!loggedIn ? <LoginS /> : <Navigate to={"mesdemandes/" + id} replace />} />
          <Route path="signups" element={!loggedIn ? <SignUpS /> : <Navigate to={"mesdemandes/" + id} replace />} />


        </Route>
        <Route path="entreprise">
          <Route path="statistiquee" element={<StatistiqueE />} />
          <Route path="demandee" element={<DemandeE />} />
          <Route path="AcceptedDemandee" element={<AcceptedDemandeE />} />
          <Route path="refuseddemandee" element={<RefusedDemandeE />} />
          <Route path="expiredstagee" element={<ExpiredStageE />} />
          <Route path="logine" element={<LoginE />} />
          <Route path="signupe" element={<SignUpE />} />
        </Route>
      </Routes>
    </Router>

  )
}

export default App;
