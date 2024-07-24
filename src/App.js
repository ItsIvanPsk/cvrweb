import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css'; 
import Home from './pages/home-page';
import Experiences from './pages/experience-page';
import Events from './pages/events';
import Services from './pages/services';
import Develops from './pages/develops';
import Navbar from './components/core/navbar/NavBar';
import KnowUs from './pages/know-us';
import LoginPage from './pages/login-page';
import ProfilePage from './pages/profile-page';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/experiencias" element={<Experiences />} />
        <Route path="/conocenos" element={<KnowUs />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/desarrollos" element={<Develops />} />
        <Route path="/perfil" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
