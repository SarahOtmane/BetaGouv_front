import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Metiers from './pages/Metiers';
import Installations from './pages/Installations';
import Actions from './pages/Actions';
import Portraits from './pages/Portraits';
import AuthEntreprise from './pages/AuthEntreprise';
import AuthLycee from './pages/AuthLycee';
import IdentifierMetiers from './pages/IdentifierMétiers';
import Distance from './pages/Distance';
import Activities from './pages/Activities';
import RefineContact from './pages/RefineContact';
import Backoffice from './pages/Backoffice';
import ProposerProjet from './pages/ProposerProjet';
import DemandeDetails from './pages/DemandeDetails';
const AppContent: React.FC = () => {

    return (
        <>
            <Routes>
                {<Route path='/' element={<Home />} /> }
                {<Route path='/metiers' element={<Metiers />} /> }
                {<Route path="/installations" element={<Installations />}/>}
                {<Route path="/actions" element={<Actions />}/>}
                {<Route path="/portraits" element={<Portraits />}/>}
                {<Route path="/auth_entreprise" element={<AuthEntreprise />}/>}
                {<Route path="/auth_lycee" element={<AuthLycee />} />}
                {<Route path="/identifiermetiers" element={<IdentifierMetiers />} />}
                {<Route path="/distance" element={<Distance />} />}
                {<Route path="/activities" element={<Activities />} />}
                {<Route path="/activities/affiner" element={<RefineContact />} />}
                {<Route path="/backoffice" element={<Backoffice />} />}
                {<Route path="/backoffice/proposer-projet" element={<ProposerProjet />} />}
                {<Route path="/backoffice/demande/:id" element={<DemandeDetails />} />}
            </Routes>
        </>
    );
};

const App: React.FC = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;