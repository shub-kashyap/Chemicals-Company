import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/AnimatedCounter';
import { FiArrowRight, FiShield, FiTruck, FiSliders, FiCheck, FiMail, FiPhone } from 'react-icons/fi';
import { companyInfo } from '../data/companyData';
import { productCategories } from '../data/productsData';
import SEO from '../components/SEO';

export default function Home() {
  
  // High-quality industrial and chemical manufacturing image URLs from Unsplash
  const images = {
    heroBg: '/images/photo-1504917595217-d4dc5ebe6122.jpg', // Heavy chemical reactors corridor
    aboutLab: '/images/photo-1581091226825-a6a2a5aee158.jpg', // Chemist in modern industrial lab
    aboutDyes: '/images/photo-1528207776546-365bb710ee93.jpg', // Colorful pigments
    statsBg: '/images/photo-1541888946425-d81bb19240f5.jpg', // Chemical refinery piping
    ctaBg: '/images/photo-1578575437130-527eed3abbec.jpg', // Shipping cargo port logistics
    
    // Substrate category background images
    categories: {
      reactive: '/images/photo-1515562141207-7a88fb7ce338.jpg', // Colored cotton spools
      acid: '/images/photo-1557672172-298e090bd0f1.jpg', // Colorants synthesis liquid swish
      direct: '/images/photo-1607613009820-a29f7bb81c04.jpg', // Segregated chemical storage drums
      disperse: '/images/photo-1557682250-33bd709cbe85.jpg', // Textile dye/colored gradients
      naphthol: '/images/photo-1528207776546-365bb710ee93.jpg', // Deep red/orange colorant liquid swirl
      pigments: '/images/photo-1595246140625-573b715d11dc.jpg' // Pigment powders/vats
    }
  };

  return (
    <>
      <SEO title="Home" />
      
      {/* 1. HERO SLIDER SECTION (Adapted from Industrie Oil & Gas banner style) */}
      <section className="relative min-h-[90svh] flex items-center pt-36 md:pt-44 pb-36 px-6 md:px-12 bg-slate-950 text-white overflow-hidden">
        
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 z-0"
          style={{ backgroundImage: `url(${images.heroBg})` }}
        />
        <div className="absolute inset-0 bg-black/65 z-1" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-royal/20 border border-royal/40 rounded px-3 py-1 text-xs uppercase tracking-widest font-heading font-bold text-cyan">
              Est. 1966 • Ahmedabad, India
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight text-white leading-none">
              Standardized Dyestuffs
              <span className="block text-cyan mt-1">& Industrial Colorants</span>
            </h1>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans max-w-xl">
              Kapoor Dyes & Chemicals Company is an ISO 9001:2015 certified manufacturer and global exporter of high-exhaust Reactive, Acid, Direct, Disperse Dyes, Naphthols, and Pigments.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/products"
                className="flex items-center space-x-2 bg-royal hover:bg-royal-dark text-navy font-heading font-bold text-xs uppercase tracking-widest px-8 py-4 rounded shadow-lg hover:shadow-xl transition-all"
              >
                <span>Explore Products</span>
                <FiArrowRight />
              </Link>
              <Link
                to="/contact"
                className="flex items-center space-x-2 border border-slate-400 hover:border-white text-white font-heading font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition-all"
              >
                <span>Request Call</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THREE FLOATING CARDS (Overlapping Hero, from template style) */}
      <section className="relative z-20 px-6 md:px-12 -mt-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white hover:bg-slate-50 p-8 rounded-xl shadow-lg border border-slate-200/60 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-royal/10 flex items-center justify-center mb-6 text-royal">
                <FiShield className="text-2xl" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy mb-2">Quality Standards</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-sans text-justify">
                ISO 9001:2015 registered manufacturing. In-house analytical laboratories verify batch strength, shade tone, and substrate leveling under actual application conditions.
              </p>
            </div>
            <Link to="/quality" className="mt-6 inline-flex items-center space-x-1 text-xs font-bold text-royal group-hover:text-cyan transition-colors">
              <span>Read Quality Policy</span>
              <FiArrowRight />
            </Link>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white hover:bg-slate-50 p-8 rounded-xl shadow-lg border border-slate-200/60 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-royal/10 flex items-center justify-center mb-6 text-royal">
                <FiTruck className="text-2xl" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy mb-2">Global Logistics</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-sans text-justify">
                Strategically based in the industrial hubs of Ahmedabad (GIDC Vatva) and Kanpur (Dada Nagar), enabling rapid distribution to domestic regions and shipping through western ports.
              </p>
            </div>
            <Link to="/export" className="mt-6 inline-flex items-center space-x-1 text-xs font-bold text-royal group-hover:text-cyan transition-colors">
              <span>Read Logistics Info</span>
              <FiArrowRight />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white hover:bg-slate-50 p-8 rounded-xl shadow-lg border border-slate-200/60 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-royal/10 flex items-center justify-center mb-6 text-royal">
                <FiSliders className="text-2xl" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy mb-2">Custom Formulations</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-sans text-justify">
                Our core differential edge. We custom-formulate dye properties and shade parameters in our testing laboratory to match the specific fabric substrates requested by B2B clients.
              </p>
            </div>
            <Link to="/about" className="mt-6 inline-flex items-center space-x-1 text-xs font-bold text-royal group-hover:text-cyan transition-colors">
              <span>Read Core Values</span>
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION (Images Grid left, Text right) */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Images Grid Left */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <img 
                src={images.aboutLab} 
                alt="Analytical Testing Lab Kapoor Dyes" 
                className="w-full h-64 object-cover rounded-xl shadow shadow-slate-200"
              />
              <div className="bg-royal text-white p-6 rounded-xl text-center shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-6 -mt-6 w-16 h-16 bg-white/10 rounded-full blur-xl" />
                <span className="text-4xl md:text-5xl font-heading font-extrabold block">
                  <AnimatedCounter end={60} />+
                </span>
                <span className="text-[10px] uppercase tracking-widest font-heading font-bold mt-2 block text-cyan">
                  Years Industry Presence
                </span>
              </div>
            </div>
            <div className="pt-8">
              <img 
                src={images.aboutDyes} 
                alt="Dyestuff Pigments Kapoor Dyes" 
                className="w-full h-96 object-cover rounded-xl shadow shadow-slate-200"
              />
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-heading font-bold text-royal uppercase tracking-widest">
              COMPANY OVERVIEW
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-navy tracking-tight leading-tight">
              Committed to Customer,<br />Committed to Quality
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-sans text-justify">
              Incepted in the year 1966 from a weaver's town, Kapoor Dyes & Chemicals Co. has expanded from a regional trader into a highly respected B2B manufacturer and exporter of chemical dyestuffs. Many of our customers have been attached to us for more than 45 years—reflecting our core focus on zero-conflict transactions, batch quality standardization, and continuous technological expansion.
            </p>
            
            <div className="border-l-4 border-royal pl-4 italic text-slate-500 text-sm font-sans my-4">
              "Laboratories can reduce risk by implementing a proven and internationally accepted quality assurance technology that is applicable across the globe." — Richard Curtis
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-xs font-heading font-bold text-navy">
              <div className="flex items-center space-x-2">
                <FiCheck className="text-emerald text-base" />
                <span>ISO 9001:2015 Standards</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiCheck className="text-emerald text-base" />
                <span>10 Production Reactors</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiCheck className="text-emerald text-base" />
                <span>Custom Tinting & Matching</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiCheck className="text-emerald text-base" />
                <span>Mundra Port Export Logistics</span>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center space-x-2 bg-navy hover:bg-navy-dark text-white font-heading font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded transition-all"
            >
              <span>Our Profile Story</span>
              <FiArrowRight />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. PRODUCT CATEGORIES (Services Section with Substrate Backgrounds) */}
      <section className="py-24 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-heading font-bold text-royal uppercase tracking-widest">
              OUR OPERATIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-navy tracking-tight mt-3">
              Standardized Dye Ranges
            </h2>
            <p className="text-slate-600 text-sm font-sans leading-relaxed mt-4">
              We manufacture chemical dyestuffs formulated specifically for fibers, textile prints, paper coloring, woolen carpets, and leather bases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Category Cards */}
            {productCategories.slice(0, 6).map((cat) => {
              const bgImg = images.categories[cat.id] || images.aboutDyes;
              return (
                <div
                  key={cat.id}
                  className="bg-white rounded-xl shadow-soft overflow-hidden border border-slate-200 flex flex-col justify-between group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div>
                    {/* Background image header block */}
                    <div className="h-44 relative overflow-hidden bg-navy">
                      <div 
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 opacity-80"
                        style={{ backgroundImage: `url(${bgImg})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-65" />
                      <div className="absolute bottom-4 left-6">
                        <span className="text-[10px] uppercase font-heading font-bold bg-royal text-white px-2.5 py-0.5 rounded tracking-wider shadow">
                          Dye Range
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-heading text-lg font-bold text-navy mb-2 group-hover:text-royal transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed font-sans text-justify line-clamp-3">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      to={`/products?category=${cat.id}`}
                      className="w-full flex justify-between items-center bg-slate-50 hover:bg-royal hover:text-white border border-slate-100 rounded px-4 py-2.5 text-xs font-heading font-bold text-royal transition-all"
                    >
                      <span>Explore Variants</span>
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. STATISTICS SECTION WITH INDUSTRIAL BACKGROUND (From template style) */}
      <section className="relative py-24 bg-navy text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 z-0"
          style={{ backgroundImage: `url(${images.statsBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy to-navy/90 z-1" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
            {companyInfo.stats.slice(0, 4).map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-2">
                <span className="text-4xl md:text-6xl font-heading font-extrabold text-white flex items-center">
                  <AnimatedCounter end={stat.value} />
                  <span className="text-cyan font-light text-2xl md:text-4xl ml-1">{stat.suffix}</span>
                </span>
                <div className="w-10 h-[1px] bg-slate-700 my-4" />
                <span className="text-xs font-heading font-bold text-slate-400 uppercase tracking-widest leading-tight max-w-[200px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES SERVED */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-heading font-bold text-royal uppercase tracking-widest">
            APPLICATIONS & MARKETS
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-navy tracking-tight mt-3">
            Industries We Serve Globally
          </h2>
          <p className="text-slate-600 text-sm font-sans mt-4">
            We manufacture colorants with high exhaustion, excellent substrate levelness, and brightness parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyInfo.industries.map((ind, idx) => {
            const indImages = [
              '/images/photo-1515562141207-7a88fb7ce338.jpg', // Textile spools
              '/images/photo-1548036328-c9fa89d128fa.jpg', // Leather texture
              '/images/photo-1616628188506-4ad99d65640e.jpg', // Paper mill rolls
              '/images/photo-1600121848594-d8644e57abab.jpg', // Carpet tapestry
              '/images/photo-1506059612708-99d6c258160e.jpg', // Printing press
              '/images/photo-1513828583688-c52646db42da.jpg'  // Industrial Chemicals
            ];
            const cardImg = indImages[idx];
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-xl shadow-soft overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-40 relative overflow-hidden bg-navy">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 opacity-80"
                      style={{ backgroundImage: `url(${cardImg})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-50" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-navy font-heading font-extrabold text-xs px-2.5 py-1 rounded-md shadow">
                      0{idx + 1}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-bold text-navy mb-2 group-hover:text-royal transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-slate-500 text-xs font-sans leading-relaxed text-justify">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. CONTACT CTA BANNER (Cargo Logistics Background, from template footer cta) */}
      <section className="relative py-20 bg-navy text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 z-0"
          style={{ backgroundImage: `url(${images.ctaBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-transparent z-1" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="max-w-xl space-y-3">
            <span className="text-xs font-heading font-bold text-cyan uppercase tracking-widest">
              B2B INQUIRIES & QUOTATIONS
            </span>
            <h2 className="text-2xl md:text-4xl font-heading font-extrabold tracking-tight">
              Ready to Discuss Your Chemical Requirements?
            </h2>
            <p className="text-slate-300 text-xs font-sans leading-relaxed">
              Contact our international business office in Ahmedabad or visit our branches to request customized formulations and custom price sheets.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <Link
              to="/contact"
              className="flex items-center justify-center space-x-2 bg-royal hover:bg-royal-dark text-navy font-heading font-bold text-xs uppercase tracking-widest px-8 py-4 rounded shadow-lg transition-colors text-center"
            >
              <FiMail />
              <span>Contact Sales</span>
            </Link>
            <a
              href="tel:+919838441481"
              className="flex items-center justify-center space-x-2 border border-slate-400 hover:border-white text-white font-heading font-bold text-xs uppercase tracking-widest px-8 py-4 rounded transition-all text-center"
            >
              <FiPhone />
              <span>+91 98384 41481</span>
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
