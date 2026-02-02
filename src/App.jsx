import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import History from './pages/History';
import Mudras from './pages/Mudras';
import Pioneers from './pages/Pioneers';
import Attire from './pages/Attire';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/mudras" element={<Mudras />} />
            <Route path="/pioneers" element={<Pioneers />} />
            <Route path="/attire" element={<Attire />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
