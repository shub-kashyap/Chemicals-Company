import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import SmoothScroll from './components/SmoothScroll';
import WhatsAppButton from './components/WhatsAppButton';
import CallButton from './components/CallButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Infrastructure from './pages/Infrastructure';
import Quality from './pages/Quality';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import DigitalCard from './pages/DigitalCard';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Scroll to top of the page on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
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
                  <Route path="/company-profile" element={<About />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/infrastructure" element={<Infrastructure />} />
                  <Route path="/quality" element={<Quality />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/enquiry" element={<Contact />} />
                  <Route path="/digital-card" element={<DigitalCard />} />
                  <Route path="/bizcard" element={<DigitalCard />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating WhatsApp Action Button */}
            <WhatsAppButton />

            {/* Floating Direct Call Action Button */}
            <CallButton />
          </div>
        </SmoothScroll>
      )}
    </>
  );
}

export default App;
