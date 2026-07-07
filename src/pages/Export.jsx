import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGlobe, FiMapPin, FiTruck, FiBox, FiCheckCircle } from 'react-icons/fi';
import SEO from '../components/SEO';

export default function Export() {
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const exportRegions = [
    {
      id: 'asia',
      name: 'Asia Pacific',
      countries: ['Bangladesh', 'Vietnam', 'Indonesia', 'Thailand', 'Sri Lanka'],
      desc: 'High demand for reactive and direct dyes targeting large-scale apparel manufacturing hubs.',
      coordinates: { x: '72%', y: '52%' }
    },
    {
      id: 'europe',
      name: 'Europe & Turkey',
      countries: ['Turkey', 'Germany', 'United Kingdom', 'Spain', 'Italy'],
      desc: 'Strict compliance with European chemical import standards and eco-labeling.',
      coordinates: { x: '50%', y: '30%' }
    },
    {
      id: 'americas',
      name: 'Americas',
      countries: ['United States', 'Mexico', 'Brazil', 'Argentina', 'Colombia'],
      desc: 'Exporting milling acid dyes for carpet wool and disperse series for synthetic sportswear blends.',
      coordinates: { x: '25%', y: '45%' }
    },
    {
      id: 'mea',
      name: 'Middle East & Africa',
      countries: ['Egypt', 'Kenya', 'United Arab Emirates', 'Saudi Arabia', 'South Africa'],
      desc: 'Supplying high-fastness pigments and direct colorants for leather and printing mills.',
      coordinates: { x: '53%', y: '50%' }
    }
  ];

  return (
    <>
      <SEO title="Export Markets & Global Presence" />
      
      {/* Page Header Banner */}
      <section className="relative h-[360px] md:h-[440px] flex flex-col justify-end bg-slate-900 text-white overflow-hidden pb-12 md:pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: `url(/images/photo-1494412574643-ff11b0a5c1c3.jpg)` }}
        />
        <div className="absolute inset-0 bg-black/45" />
        
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
          <div className="space-y-3 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            <span className="text-xs font-heading font-bold text-white uppercase tracking-widest block">
              GLOBAL FOOTPRINT
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight text-royal uppercase">
              Global Presence
            </h1>
            <div className="text-xs text-slate-300 font-sans flex items-center space-x-2">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-slate-200">Global Presence</span>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-mesh pb-20 pt-12">


        {/* Interactive World Map Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
          <div className="glass bg-navy text-white rounded-3xl p-6 md:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
            
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-80 h-80 bg-royal/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-80 h-80 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* World Map SVG representation */}
              <div className="lg:col-span-8 relative bg-slate-950/40 border border-slate-800/80 rounded-2xl p-4 flex items-center justify-center min-h-[300px] md:min-h-[450px]">
                {/* Stylized world map background outline */}
                <svg
                  className="w-full h-auto opacity-20 text-slate-400"
                  viewBox="0 0 1000 500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Abstract grid lines representing longitude/latitude */}
                  <path d="M 0,250 H 1000 M 500,0 V 500" strokeDasharray="3 6" strokeWidth="0.5" />
                  <path d="M 0,125 H 1000 M 0,375 H 1000" strokeDasharray="3 6" strokeWidth="0.5" />
                  <path d="M 250,0 V 500 M 750,0 V 500" strokeDasharray="3 6" strokeWidth="0.5" />
                  
                  {/* Abstract continent shapes */}
                  {/* North America */}
                  <path d="M 120,80 L 220,90 L 250,140 L 200,200 L 150,220 L 130,180 L 110,130 Z" fill="rgba(255,255,255,0.02)" />
                  {/* South America */}
                  <path d="M 220,240 L 250,280 L 280,380 L 260,420 L 230,350 L 200,270 Z" fill="rgba(255,255,255,0.02)" />
                  {/* Europe */}
                  <path d="M 450,80 L 520,85 L 530,130 L 480,160 L 440,110 Z" fill="rgba(255,255,255,0.02)" />
                  {/* Africa */}
                  <path d="M 460,200 L 520,180 L 560,240 L 550,330 L 510,360 L 480,260 Z" fill="rgba(255,255,255,0.02)" />
                  {/* Asia */}
                  <path d="M 550,80 L 750,85 L 800,160 L 760,280 L 680,270 L 600,210 Z" fill="rgba(255,255,255,0.02)" />
                  {/* Australia */}
                  <path d="M 760,330 L 800,340 L 810,380 L 750,370 Z" fill="rgba(255,255,255,0.02)" />
                </svg>

                {/* Pulsing Pins */}
                {exportRegions.map((region) => (
                  <div
                    key={region.id}
                    className="absolute cursor-pointer group"
                    style={{ left: region.coordinates.x, top: region.coordinates.y }}
                    onMouseEnter={() => setHoveredRegion(region)}
                    onMouseLeave={() => setHoveredRegion(null)}
                  >
                    {/* Ring animation */}
                    <div className="absolute w-6 h-6 bg-royal rounded-full -left-3 -top-3 animate-ping opacity-60 pointer-events-none" />
                    
                    {/* Center dot pin */}
                    <div className={`relative w-3.5 h-3.5 rounded-full border border-white transition-colors duration-300 ${
                      hoveredRegion?.id === region.id ? 'bg-cyan' : 'bg-royal'
                    }`} />
                    
                    {/* Floating mini tool-tip */}
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-5 bg-navy-dark text-white border border-slate-800 text-[10px] font-heading font-bold px-2 py-0.5 rounded shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {region.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Detail panel */}
              <div className="lg:col-span-4 flex flex-col space-y-6">
                <div className="flex items-center space-x-2 text-xs font-bold text-cyan uppercase tracking-widest border-b border-slate-800 pb-3">
                  <FiGlobe className="text-base" />
                  <span>EXPORT DETAIL PANEL</span>
                </div>

                <div className="min-h-[220px] flex flex-col justify-center">
                  {hoveredRegion ? (
                    <motion.div
                      key={hoveredRegion.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <h3 className="font-heading text-xl font-bold text-white flex items-center space-x-2">
                        <FiMapPin className="text-cyan text-sm" />
                        <span>{hoveredRegion.name}</span>
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed font-sans">
                        {hoveredRegion.desc}
                      </p>
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest font-heading">Key Markets:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {hoveredRegion.countries.map((country, idx) => (
                            <span key={idx} className="bg-slate-800 border border-slate-700 text-slate-300 text-xs px-2.5 py-1 rounded-lg">
                              {country}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="text-slate-500 text-sm flex flex-col items-center justify-center py-8">
                      <FiGlobe className="text-4xl text-slate-700 mb-3 animate-spin duration-[10000ms]" />
                      <p className="text-center font-heading font-bold text-xs uppercase tracking-widest">
                        Hover Map Pins
                      </p>
                      <p className="text-center text-[10px] text-slate-600 mt-1 max-w-[200px] font-sans">
                        Interact with the map dots to display regional supply details.
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Truck dispatch logistics image */}
                <div className="mt-4 pt-4 border-t border-slate-800">
                  <img 
                    src="/images/photo-1601584115197-04ecc0da31d7.jpg" 
                    alt="Chemical cargo distribution truck loading" 
                    className="w-full h-32 object-cover rounded-xl border border-slate-800 opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Global Logistics Cards Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Logistics */}
          <div className="glass bg-white p-8 rounded-2xl border border-white/60 shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-6">
              <FiTruck className="text-royal text-2xl" />
            </div>
            <h3 className="font-heading text-lg font-bold text-navy mb-3">
              Port Connectivity
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed text-justify font-sans">
              Our factory in Ahmedabad offers direct transport pathways to India's major western ports (Mundra, Kandla, Pipavav) ensuring swift container loading and customs clearance.
            </p>
          </div>

          {/* Card 2: Regulatory Compliance */}
          <div className="glass bg-white p-8 rounded-2xl border border-white/60 shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-6">
              <FiCheckCircle className="text-emerald text-2xl" />
            </div>
            <h3 className="font-heading text-lg font-bold text-navy mb-3">
              Regulatory Standards
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed text-justify font-sans">
              We comply strictly with international substance limits, ecological guidelines, safety data reporting (SDS), and custom documentation requested by regulatory offices globally.
            </p>
          </div>

          {/* Card 3: Packaging */}
          <div className="glass bg-white p-8 rounded-2xl border border-white/60 shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-6">
              <FiBox className="text-cyan text-2xl" />
            </div>
            <h3 className="font-heading text-lg font-bold text-navy mb-3">
              Moisture-Barrier Packing
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed text-justify font-sans">
              Export shipments are sealed in robust double-polyethylene liners inside high-molecular weight HDPE drums or corrugated boxes, safeguarding dyestuffs from moisture and contamination.
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
