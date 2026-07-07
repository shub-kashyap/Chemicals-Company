import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion as framerMotion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiLayers, FiCheck, FiX, FiInfo, FiTag } from 'react-icons/fi';
import { productCategories, productsList } from '../data/productsData';
import SEO from '../components/SEO';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'reactive';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null); // Modal detail state
  
  const categoryData = productCategories.find(c => c.id === activeCategory) || productCategories[0];
  const categorySeries = productsList[activeCategory] || [];

  // Filter products by search query
  const getFilteredSeries = () => {
    if (!searchQuery.trim()) return categorySeries;
    
    const query = searchQuery.toLowerCase();
    
    return categorySeries.map(series => {
      const filteredItems = series.items.filter(item => 
        item.name.toLowerCase().includes(query) ||
        (item.ci && item.ci.toLowerCase().includes(query)) ||
        (item.shade && item.shade.toLowerCase().includes(query))
      );
      
      return {
        ...series,
        items: filteredItems
      };
    }).filter(series => series.items.length > 0);
  };

  const filteredSeries = getFilteredSeries();

  const handleCategoryChange = (catId) => {
    setSearchParams({ category: catId });
    setSearchQuery('');
  };

  return (
    <>
      <SEO 
        title={`${categoryData.name} Catalogue`} 
        description={categoryData.description}
      />
      
      {/* Page Header Banner */}
      <section className="relative h-[360px] md:h-[440px] flex flex-col justify-end bg-slate-900 text-white overflow-hidden pb-12 md:pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: `url(/images/photo-1595246140625-573b715d11dc.jpg)` }}
        />
        <div className="absolute inset-0 bg-black/45" />
        
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
          <div className="space-y-3 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            <span className="text-xs font-heading font-bold text-white uppercase tracking-widest block">
              KDC SOLUTIONS
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight text-royal uppercase">
              Product Catalogue
            </h1>
            <div className="text-xs text-slate-300 font-sans flex items-center space-x-2">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-slate-200">Product Catalogue</span>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-mesh pb-20 pt-12">

        {/* Layout Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar: Categories Navigation */}
          <aside className="lg:col-span-3 flex flex-col space-y-2">
            <h3 className="font-heading text-xs font-bold text-slate-400 uppercase tracking-widest px-4 mb-2 flex items-center space-x-1">
              <FiLayers />
              <span>Categories</span>
            </h3>
            
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-2 lg:pb-0 scrollbar-thin">
              {productCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`flex-shrink-0 text-left px-4 py-3 rounded-xl text-sm font-heading font-bold transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-navy text-white shadow-md'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/60 shadow-soft'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </aside>

          {/* Right Section: Content, Search & Dynamic Tables */}
          <main className="lg:col-span-9 flex flex-col space-y-8">
            
            {/* Category Description Banner */}
            <framerMotion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass bg-white p-6 md:p-8 rounded-2xl border border-white/60 shadow-soft relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-36 h-36 bg-royal/10 rounded-full blur-2xl pointer-events-none" />
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy mb-3">
                {categoryData.name}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans text-justify">
                {categoryData.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed font-sans">
                <div>
                  <h4 className="font-heading font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    Primary Applications:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {categoryData.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center space-x-1.5 text-slate-500">
                        <FiCheck className="text-emerald text-sm" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-heading font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    Key Features:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {categoryData.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center space-x-1.5 text-slate-500">
                        <FiCheck className="text-royal text-sm" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </framerMotion.div>

            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiSearch className="text-slate-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by product name, C.I. name, or shade (e.g. ME4GL, Yellow 160 A)..."
                className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-sm text-navy placeholder-slate-400 focus:outline-none focus:border-royal shadow-soft transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
                >
                  <FiX />
                </button>
              )}
            </div>

            {/* Product Tables */}
            <div className="flex flex-col space-y-10">
              {filteredSeries.length > 0 ? (
                filteredSeries.map((series, sIdx) => (
                  <framerMotion.div
                    key={sIdx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: sIdx * 0.1 }}
                    className="bg-white border border-slate-200/80 rounded-2xl shadow-soft overflow-hidden"
                  >
                    {/* Series Title */}
                    <div className="bg-slate-50 border-b border-slate-200 px-6 py-5">
                      <h3 className="font-heading text-lg font-bold text-navy">
                        {series.series}
                      </h3>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed font-sans">
                        {series.description}
                      </p>
                    </div>

                    {/* Desktop Responsive Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-[500px]">
                        <thead>
                          <tr className="bg-slate-100/50 border-b border-slate-200 text-xs font-heading font-bold text-slate-500 uppercase tracking-wider">
                            {series.headers.map((h, hIdx) => (
                              <th key={hIdx} className="px-6 py-3.5">{h}</th>
                            ))}
                            <th className="px-6 py-3.5 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm font-sans text-slate-600">
                          {series.items.map((item, itemIdx) => (
                            <tr key={itemIdx} className="hover:bg-slate-50/50 transition-colors">
                              {/* Product Name */}
                              <td className="px-6 py-4 font-heading font-bold text-navy">
                                <div className="flex items-center space-x-3">
                                  {/* Color Indicator Badge */}
                                  <div 
                                    className="w-5 h-5 rounded-full border border-slate-200 flex-shrink-0"
                                    style={{ backgroundColor: item.hex || '#E2E8F0' }}
                                    title={item.shade}
                                  />
                                  <span>{item.name}</span>
                                </div>
                              </td>
                              
                              {/* C.I. Generic Name */}
                              <td className="px-6 py-4 font-mono text-xs">{item.ci}</td>
                              
                              {/* Shade/Typical applications info */}
                              <td className="px-6 py-4 text-xs text-slate-500">{item.shade}</td>
                              
                              {/* Actions */}
                              <td className="px-6 py-4 text-right">
                                <button
                                  onClick={() => setSelectedProduct({ ...item, categoryName: categoryData.name, features: categoryData.features, applications: categoryData.applications })}
                                  className="inline-flex items-center space-x-1 bg-royal/10 hover:bg-royal text-royal hover:text-white font-heading font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all"
                                >
                                  <FiInfo />
                                  <span>Details</span>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </framerMotion.div>
                ))
              ) : (
                <div className="glass bg-white p-12 rounded-2xl border border-slate-200/60 shadow-soft text-center flex flex-col items-center justify-center">
                  <FiTag className="text-4xl text-slate-300 mb-4" />
                  <h3 className="font-heading text-lg font-bold text-navy">No products match your search</h3>
                  <p className="text-slate-400 text-xs mt-1">Try refining your keyword query or clear search to reset.</p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-4 bg-royal hover:bg-royal-dark text-white font-heading font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-lg transition-colors"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>

          </main>
        </div>

        {/* 4. PRODUCT DETAILS MODAL */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <framerMotion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
              />
              
              {/* Modal Card */}
              <framerMotion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white w-full max-w-xl rounded-2xl shadow-xl overflow-hidden border border-slate-200 z-10 flex flex-col max-h-[90vh]"
              >
                {/* Header */}
                <div className="bg-slate-50 border-b border-slate-200 px-6 py-5 flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-6 h-6 rounded-full border border-slate-300 flex-shrink-0"
                      style={{ backgroundColor: selectedProduct.hex || '#E2E8F0' }}
                    />
                    <div>
                      <h3 className="font-heading text-xl font-bold text-navy leading-none">
                        {selectedProduct.name}
                      </h3>
                      <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase font-heading mt-1 block">
                        {selectedProduct.categoryName}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="p-1 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <FiX size={18} />
                  </button>
                </div>

                {/* Body Content */}
                <div className="p-6 overflow-y-auto space-y-6 text-sm font-sans text-slate-600">
                  <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-xs text-slate-400 uppercase tracking-wider block">C.I. Generic Name</span>
                      <span className="font-mono font-bold text-navy text-xs mt-0.5 block">{selectedProduct.ci || 'N/A'}</span>
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 uppercase tracking-wider block">Color/Shade</span>
                      <span className="font-heading font-bold text-navy text-xs mt-0.5 block">{selectedProduct.shade || 'N/A'}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-navy uppercase tracking-wider text-xs mb-2">Category Applications</h4>
                    <p className="text-slate-500 text-xs leading-relaxed text-justify mb-3">
                      This chemical is standard-formulated for typical substrate applications matching the {selectedProduct.categoryName} series parameters:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.applications.map((app, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-lg">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-navy uppercase tracking-wider text-xs mb-2">Quality Standards</h4>
                    <p className="text-slate-500 text-xs leading-relaxed text-justify mb-3">
                      Manufactured and standardized under strict quality protocols in our Vatva testing laboratories:
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-500">
                      {selectedProduct.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center space-x-1.5">
                          <FiCheck className="text-royal" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex justify-between items-center">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">ISO 9001:2015 Registered</span>
                  <a
                    href={`mailto:shubkashyap806@gmail.com?subject=Enquiry for product ${selectedProduct.name} (${selectedProduct.ci})`}
                    className="bg-royal hover:bg-royal-dark text-navy font-heading font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-lg shadow transition-colors"
                  >
                    Send Inquiry
                  </a>
                </div>
              </framerMotion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}
