import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMaximize2, FiX, FiLayers, FiCompass, FiBriefcase } from 'react-icons/fi';
import { companyInfo } from '../data/companyData';
import SEO from '../components/SEO';

export default function Infrastructure() {
  const [activeImage, setActiveImage] = useState(null);
  
  // Custom image dataset for gallery to display real chemical manufacturing and distribution contexts.
  const galleryItems = [
    {
      id: 1,
      title: 'Reactor Synthesis Line',
      category: 'Production',
      desc: '10 operational reactors with capacities up to 10,000 liters under automated control.',
      image: '/images/photo-1504917595217-d4dc5ebe6122.jpg',
      stat: '10,000L Capacity'
    },
    {
      id: 2,
      title: 'Analytical Testing Lab',
      category: 'Research & QA',
      desc: 'Equipped with sophisticated spectrophotometers for color strength and tone evaluation.',
      image: '/images/photo-1582719508461-905c673771fd.jpg',
      stat: 'Spectrophotometry'
    },
    {
      id: 3,
      title: 'Dye Finishing Line',
      category: 'Finishing',
      desc: 'International standard finishing mills, spray dryers, and pulverizers.',
      image: '/images/photo-1576086213369-97a306d36557.jpg',
      stat: 'Standardized Milling'
    },
    {
      id: 4,
      title: 'Material Packing & Sealing',
      category: 'Logistics',
      desc: 'Latest moisture-barrier packaging to ensure chemical stability during global shipping.',
      image: '/images/photo-1607613009820-a29f7bb81c04.jpg',
      stat: 'Moisture-Barrier Seal'
    },
    {
      id: 5,
      title: 'Raw Material Warehouse',
      category: 'Storage',
      desc: 'Segregated storage area maintaining dry conditions for reactive intermediates.',
      image: '/images/photo-1586528116311-ad8dd3c8310d.jpg',
      stat: '6,000 m² Facility'
    },
    {
      id: 6,
      title: 'Product Dispatch Dock',
      category: 'Logistics',
      desc: 'Optimized logistics workflow ensuring timely container dispatch to Gujarat ports.',
      image: '/images/photo-1542751371-adc38448a05e.jpg',
      stat: 'Global Export Ready'
    }
  ];

  return (
    <>
      <SEO title="Infrastructure & Capacity" />
      
      {/* Page Header Banner */}
      <section className="relative h-[360px] md:h-[440px] flex flex-col justify-end bg-slate-900 text-white overflow-hidden pb-12 md:pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: `url(/images/photo-1513828583688-c52646db42da.jpg)` }}
        />
        <div className="absolute inset-0 bg-black/45" />
        
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
          <div className="space-y-3 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            <span className="text-xs font-heading font-bold text-white uppercase tracking-widest block">
              MANUFACTURING CAPACITY
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight text-royal uppercase">
              Our Infrastructure
            </h1>
            <div className="text-xs text-slate-300 font-sans flex items-center space-x-2">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-slate-200">Infrastructure</span>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-mesh pb-20 pt-12">

        {/* Section: Facility Details */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Main Infrastructure Description */}
            <div className="glass bg-white p-8 rounded-2xl border border-white shadow-soft text-justify text-slate-600 leading-relaxed font-sans">
              <h2 className="text-2xl font-heading font-bold text-navy mb-4 flex items-center space-x-2">
                <FiCompass className="text-royal text-xl" />
                <span>Ahmedabad Manufacturing Facility</span>
              </h2>
              <p className="mb-4">
                {companyInfo.infrastructure.description}
              </p>
              <p className="mb-4">
                {companyInfo.infrastructure.reactors}
              </p>
              <p>
                {companyInfo.infrastructure.team}
              </p>
            </div>

            {/* Quote Block */}
            <div className="glass bg-gradient-to-tr from-slate-900 to-navy text-white p-8 rounded-2xl border border-slate-800 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-cyan/10 rounded-full blur-2xl pointer-events-none" />
              <div className="text-3xl font-serif text-cyan/20">“</div>
              <p className="text-sm font-sans italic leading-relaxed mb-4 relative z-10">
                "{companyInfo.labQuote}"
              </p>
              <p className="text-xs uppercase font-heading font-bold text-cyan tracking-wider relative z-10">
                — {companyInfo.labQuoteAuthor}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Quick Specs List */}
            <div className="glass bg-white p-6 rounded-2xl border border-white shadow-soft">
              <h3 className="font-heading text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center space-x-2">
                <FiLayers className="text-royal text-sm" />
                <span>Facility Quick Specifications</span>
              </h3>
              <ul className="space-y-4 text-xs font-sans">
                <li className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="text-slate-400">Total Land Acquired</span>
                  <span className="font-heading font-bold text-navy">6,000 square meters</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="text-slate-400">Operational Reactors</span>
                  <span className="font-heading font-bold text-navy">10 Reactors</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="text-slate-400">Largest Reactor</span>
                  <span className="font-heading font-bold text-navy">10,000 Liters</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="text-slate-400">Location</span>
                  <span className="font-heading font-bold text-navy">GIDC Vatva, Gujarat</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-400">Quality Testing</span>
                  <span className="font-heading font-bold text-navy">In-house QA Laboratory</span>
                </li>
              </ul>
            </div>

            {/* Lab details box */}
            <div className="glass bg-white p-6 rounded-2xl border border-white shadow-soft">
              <h3 className="font-heading text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center space-x-2">
                <FiBriefcase className="text-royal text-sm" />
                <span>Our Lab Capabilities</span>
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed font-sans text-justify">
                {companyInfo.infrastructure.laboratory.split(" Hence")[0]}
              </p>
            </div>
          </motion.div>

        </section>

        {/* Section: Image Gallery with Lightbox */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-heading font-bold text-royal uppercase tracking-widest">
              VISUAL WORKFLOW
            </span>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-navy tracking-tight mt-2">
              Facility Showcase
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="glass bg-white rounded-2xl border border-white/60 shadow-soft overflow-hidden group cursor-pointer"
                onClick={() => setActiveImage(item)}
              >
                <div className="h-48 bg-navy relative overflow-hidden p-6 flex flex-col justify-between text-white">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 opacity-60 z-0"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-40 z-1" />
                  
                  <span className="relative z-10 text-[10px] uppercase font-heading font-bold bg-royal text-navy px-2 py-0.5 rounded w-fit tracking-wider">
                    {item.category}
                  </span>
                  
                  <div className="relative z-10 flex justify-between items-end">
                    <span className="font-heading font-bold text-xs bg-navy/60 px-2 py-1 rounded backdrop-blur-xs tracking-tight">{item.stat}</span>
                    <FiMaximize2 className="text-white/95 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                
                {/* Description */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-navy text-lg mb-1 group-hover:text-royal transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* LIGHTBOX MODAL */}
        <AnimatePresence>
          {activeImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveImage(null)}
                className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white w-full max-w-2xl rounded-2xl border border-slate-200 shadow-2xl overflow-hidden z-10 flex flex-col"
              >
                <div className="h-64 md:h-80 bg-navy relative p-8 flex flex-col justify-between text-white">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-70"
                    style={{ backgroundImage: `url(${activeImage.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-50" />
                  <button
                    onClick={() => setActiveImage(null)}
                    className="absolute top-4 right-4 p-2 rounded-lg bg-navy/35 hover:bg-navy/60 text-white transition-colors"
                  >
                    <FiX size={18} />
                  </button>
                  <span className="text-xs uppercase font-heading font-bold bg-white/20 px-3 py-1 rounded w-fit tracking-wider">
                    {activeImage.category}
                  </span>
                  
                  <span className="text-2xl md:text-3xl font-heading font-extrabold tracking-tight">
                    {activeImage.stat}
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="font-heading font-bold text-navy text-xl mb-3">
                    {activeImage.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans text-justify">
                    {activeImage.desc}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
                    <span>Kapoor Dyes & Chemicals Co.</span>
                    <span>Ahmedabad Facility</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}
