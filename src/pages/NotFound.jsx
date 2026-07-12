import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCompass } from 'react-icons/fi';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" />
      
      <div className="min-h-screen bg-mesh flex flex-col justify-center items-center px-6 text-center select-none">
        
        {/* Decorative ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-royal/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-md">
          {/* Compass Icon Spinning */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-3xl bg-slate-900 flex items-center justify-center text-cyan border border-slate-800 shadow-xl">
              <FiCompass className="text-4xl animate-spin duration-[8000ms]" />
            </div>
          </div>

          <h1 className="text-7xl md:text-9xl font-heading font-extrabold tracking-tight text-navy leading-none">
            404
          </h1>
          
          <h2 className="text-xl md:text-2xl font-heading font-bold text-slate-800">
            Route Destination Unreachable
          </h2>
          
          <p className="text-slate-500 font-sans text-xs leading-relaxed max-w-sm mx-auto">
            The page you are looking for has either been moved, updated, or the route parameter does not exist in our corporate directories.
          </p>

          <div className="pt-4">
            <Link
              to="/home"
              className="inline-flex items-center space-x-2 bg-royal hover:bg-royal-dark text-navy font-heading font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-md transition-all"
            >
              <FiArrowLeft />
              <span>Return Home</span>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
