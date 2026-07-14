import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiLayers, FiMail } from 'react-icons/fi';
import { productCategories } from '../data/productsData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setProductsDropdown(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'Company Profile', path: '/company-profile' },
    { name: 'Products', path: '/products', hasSub: true },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Quality', path: '/quality' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const showSolidNavbar = scrolled;

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 transition-all duration-300">
        
        {/* MAIN STICKY NAVBAR */}
        <div className={`transition-all duration-300 border-b ${
          showSolidNavbar 
            ? 'py-4 bg-navy border-slate-800/80 shadow-md' 
            : 'py-6 bg-transparent border-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
            
            {/* Logo */}
            <Link to="/home" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#FACC15] flex items-center justify-center text-[#0F172A] font-heading font-bold text-[15px] shadow-md group-hover:scale-105 transition-transform duration-300">
                KD
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold tracking-tight leading-none text-lg md:text-xl transition-colors duration-300 text-white group-hover:text-royal">
                  KAPOOR DYES
                </span>
                <span className="text-[9px] font-bold tracking-wider uppercase font-sans mt-0.5 transition-colors duration-300 text-slate-400">
                  & Chemicals Company
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasSub && setProductsDropdown(true)}
                  onMouseLeave={() => link.hasSub && setProductsDropdown(false)}
                >
                  {link.hasSub ? (
                    <button
                      onClick={() => setProductsDropdown(!productsDropdown)}
                      className={`flex items-center space-x-1 font-heading text-sm font-semibold tracking-wide transition-colors duration-300 py-2 ${
                        location.pathname.startsWith(link.path) 
                          ? 'text-royal' 
                          : 'text-slate-300 hover:text-royal'
                      }`}
                    >
                      <span>{link.name}</span>
                      <FiChevronDown className={`transition-transform duration-300 ${productsDropdown ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`font-heading text-sm font-semibold tracking-wide transition-colors duration-300 py-2 ${
                        location.pathname === link.path 
                          ? 'text-royal border-b-2 border-royal' 
                          : 'text-slate-300 hover:text-royal'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Mega Menu Dropdown */}
                  {link.hasSub && (
                    <AnimatePresence>
                      {productsDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.25 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[480px] bg-navy-dark text-white rounded-2xl shadow-xl border border-slate-800 p-6 overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-royal/10 rounded-full blur-2xl pointer-events-none" />
                          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-cyan/10 rounded-full blur-2xl pointer-events-none" />
                          
                          <div className="relative z-10">
                            <div className="flex items-center space-x-2 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-3 mb-4">
                              <FiLayers className="text-royal text-base" />
                              <span>PRODUCT CATEGORIES</span>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                              {productCategories.map((cat) => (
                                <Link
                                  key={cat.id}
                                  to={`/products?category=${cat.id}`}
                                  className="group/item flex flex-col p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200"
                                >
                                  <span className="font-heading text-sm font-bold text-slate-200 group-hover/item:text-cyan transition-colors duration-200">
                                    {cat.name}
                                  </span>
                                  <span className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                                    {cat.shortDesc}
                                  </span>
                                </Link>
                              ))}
                            </div>
                            
                            <div className="mt-5 border-t border-slate-800 pt-4 flex justify-between items-center text-xs">
                              <span className="text-slate-400">ISO 9001:2015 Quality Standards</span>
                              <Link to="/products" className="text-royal hover:text-cyan font-bold transition-colors duration-200">
                                View Catalogue &rarr;
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Action Button & Menu Icon */}
            <div className="flex items-center space-x-4">
              <Link
                to="/enquiry"
                className="hidden sm:flex items-center space-x-2 bg-royal hover:bg-royal-dark text-navy font-heading font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <FiMail />
                <span>Enquiry</span>
              </Link>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy transition-colors duration-300 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 lg:hidden bg-navy/90 backdrop-blur-lg flex flex-col justify-between p-8 pt-28"
          >
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-royal/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />

            <nav className="relative z-10 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasSub ? (
                    <div>
                      <button
                        onClick={() => setProductsDropdown(!productsDropdown)}
                        className="w-full flex justify-between items-center text-left text-2xl font-heading font-bold text-slate-100 py-1"
                      >
                        <span>{link.name}</span>
                        <FiChevronDown className={`transition-transform duration-300 ${productsDropdown ? 'rotate-180' : ''}`} />
                      </button>
                      <motion.div
                        animate={{ height: productsDropdown ? 'auto' : 0 }}
                        className="overflow-hidden"
                        initial={{ height: 0 }}
                      >
                        <div className="pl-4 border-l-2 border-slate-700 mt-2 space-y-3 flex flex-col">
                          {productCategories.map((cat) => (
                            <Link
                              key={cat.id}
                              to={`/products?category=${cat.id}`}
                              className="text-sm font-semibold text-slate-400 hover:text-cyan py-1"
                            >
                              {cat.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block text-2xl font-heading font-bold py-1 transition-colors duration-200 ${
                        location.pathname === link.path ? 'text-royal' : 'text-slate-100 hover:text-royal'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="relative z-10 border-t border-slate-800 pt-6 mt-8">
              <p className="text-xs text-slate-400">Quick Contact:</p>
              <a href="tel:+919838441481" className="block text-slate-100 font-heading font-bold text-lg mt-1 hover:text-cyan transition-colors">
                +91 98384 41481
              </a>
              <a href="mailto:ankit@kapoordyes.com" className="block text-xs text-slate-400 hover:text-cyan mt-1 transition-colors">
                ankit@kapoordyes.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
