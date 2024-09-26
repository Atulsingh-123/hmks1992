import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const VolunteerLinkPage = lazy(() => import('./pages/VolunteerLinkPage'));
const AboutLinkPage = lazy(() => import('./pages/AboutLinkPage'));
const OurTeamLinkPage = lazy(() => import('./pages/OurTeamLinkPage'));
const ContactUsLinkPage = lazy(() => import('./pages/ContactUsLinkPage'));
const DonateLinkPage = lazy(() => import('./pages/DonateLinkPage'));

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-t-green-600"></div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/volunteer" element={<VolunteerLinkPage />} />
          <Route path="/about" element={<AboutLinkPage />} />
          <Route path="/team" element={<OurTeamLinkPage />} />
          <Route path="/contact" element={<ContactUsLinkPage />} />
          <Route path="/donate" element={<DonateLinkPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
