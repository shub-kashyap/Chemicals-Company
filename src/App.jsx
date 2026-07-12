import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import SmoothScroll from './components/SmoothScroll';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Infrastructure from './pages/Infrastructure';
import Quality from './pages/Quality';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Scroll to top of the page on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <LoadingScreen onComplete={() => setLoading(false)} />

      {!loading && (
        <SmoothScroll>
          <div className="flex flex-col min-h-screen">
            {/* Header / Navbar */}
            <Navbar />
            
            {/* Main Content Area */}
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Navigate to="/home" replace />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/infrastructure" element={<Infrastructure />} />
                  <Route path="/quality" element={<Quality />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/enquiry" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </SmoothScroll>
      )}
    </>
  );
}

export default App;
