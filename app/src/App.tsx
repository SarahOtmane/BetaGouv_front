import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Metiers from './pages/Metiers';
const AppContent: React.FC = () => {

    return (
        <>
            <Routes>
                {<Route path='/' element={<Home />} /> }
                {<Route path='/metiers' element={<Metiers />} /> }

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