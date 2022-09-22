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
import StatistiqueS from "./pages/Stagiaire/StatistiqueS";

import AcceptedDemandeS from "./pages/Stagiaire/AcceptedDemandeS";
import DemandeS from "./pages/Stagiaire/DemandeS";
import RefusedDemandeS from "./pages/Stagiaire/RefusedDemandeS";
import EndedStageS from "./pages/Stagiaire/EndedStageS";

import LoginE from "./pages/Entreprise/LoginE";
import SignUpE from "./pages/Entreprise/SignUpE";
import StatistiqueE from "./pages/Entreprise/StatistiqueE";

import AcceptedDemandeE from "./pages/Entreprise/AcceptedDemandeE";
import DemandeE from "./pages/Entreprise/AcceptedDemandeE";
import RefusedDemandeE from "./pages/Entreprise/RefusedDemandeE";
import ExpiredStageE from "./pages/Entreprise/ExpiredStageE";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="stagiaire">
          <Route path="statistiques" element={<StatistiqueS />} />
          <Route path="demandes" element={<DemandeS />} />
          <Route path="accepteddemandes" element={<AcceptedDemandeS />} />
          <Route path="refuseddemandes" element={<RefusedDemandeS />} />
          <Route path="endedstages" element={<EndedStageS />} />
          <Route path="logins" element={<LoginS />} />
          <Route path="signups" element={<SignUpS />} />
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
