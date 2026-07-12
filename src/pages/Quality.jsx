import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiAward, FiCheckCircle, FiSearch, FiSliders, FiActivity, FiLayers } from 'react-icons/fi';
import { companyInfo } from '../data/companyData';
import SEO from '../components/SEO';

export default function Quality() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const qaSteps = [
    {
      title: 'Raw Material Testing',
      desc: 'No precursor is fed into production reactors without validating purity levels and chemical content ranges against standards.',
      icon: <FiSearch className="text-royal text-xl" />
    },
    {
      title: 'In-Process Control',
      desc: 'Reactor synthesis logs temperature and pressure variables continuously, adjusting parameters dynamically.',
      icon: <FiSliders className="text-indigo text-xl" />
    },
    {
      title: 'Batch Standardization',
      desc: 'Crude dye filtration undergoes standard milling and drying, followed by spectrophotometer color matching to check shade strength.',
      icon: <FiActivity className="text-cyan text-xl" />
    },
    {
      title: 'Application Simulation',
      desc: 'Simulating actual dye-house conditions on target substrates (wool, cotton, or leather) to ensure compatibility.',
      icon: <FiLayers className="text-emerald text-xl" />
    }
  ];

  return (
    <>
      <SEO title="Quality Control & Certifications" />
      
      {/* Page Header Banner */}
      <section className="relative h-[360px] md:h-[440px] flex flex-col justify-end bg-slate-900 text-white overflow-hidden pb-12 md:pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: `url(/images/photo-1582719508461-905c673771fd.jpg)` }}
        />
        <div className="absolute inset-0 bg-black/45" />
        
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
          <div className="space-y-3 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            <span className="text-xs font-heading font-bold text-white uppercase tracking-widest block">
              CERTIFIED B2B STANDARDS
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight text-royal uppercase">
              Quality Assurance
            </h1>
            <div className="text-xs text-slate-300 font-sans flex items-center space-x-2">
              <Link to="/home" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-slate-200">Quality Control</span>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-mesh pb-20 pt-12">

        {/* Section: ISO & Quote */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6 text-justify text-slate-600 leading-relaxed font-sans"
          >
            <div className="inline-flex items-center space-x-2.5 bg-emerald/10 border border-emerald/20 rounded-xl p-3">
              <FiAward className="text-emerald text-xl" />
              <span className="text-sm font-heading font-bold text-navy uppercase tracking-wider">
                {companyInfo.certification}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy leading-tight">
              "Quality is not an act, it is a Habit"
            </h2>
            
            <p>
              At Kapoor Dyes & Chemicals Company, we implement Aristotle's philosophy as our daily standard. Every batch manufactured in our reactors or purchased from verified partners undergoes thorough laboratory checks to guarantee matching color strength, chroma values, and fastness parameters.
            </p>
            <p>
              With our technical expertise, testing in our in-house lab is the core mechanism to maintain consistent quality. Our laboratories are equipped with sophisticated testing equipment, enabling us to ensure consistent quality as desired by our customers. Substantial research is carried out regularly to create a differential edge in the chemical B2B market.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Laboratory testing flasks image */}
            <img 
              src="/images/photo-1532187643603-ba119ca4109e.jpg" 
              alt="Analytical testing flasks colored solutions" 
              className="w-full h-48 object-cover rounded-2xl shadow-soft"
            />
            
            {/* Lab Equipment Box */}
            <div className="glass bg-white p-8 rounded-2xl border border-white shadow-soft">
              <h3 className="font-heading text-sm font-bold text-navy uppercase tracking-widest mb-6 pb-2 border-b border-slate-100">
                QA Laboratory Equipment
              </h3>
              
              <ul className="space-y-4">
                {companyInfo.quality.testingEquipments.map((equip, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm font-sans text-slate-600">
                    <FiCheckCircle className="text-royal text-lg flex-shrink-0 mt-0.5" />
                    <span>{equip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Section: QA Pipeline Workflow */}
        <section className="py-16 bg-slate-100/50 border-t border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-heading font-bold text-royal uppercase tracking-widest">
                VERIFICATION PIPELINE
              </span>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-navy mt-2 tracking-tight">
                Our 4-Stage Quality Protocol
              </h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {qaSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="glass bg-white p-6 rounded-2xl border border-white/60 shadow-soft flex flex-col justify-between group hover:bg-slate-50 transition-all duration-300"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-royal/10 flex items-center justify-center mb-6 transition-colors">
                      {step.icon}
                    </div>
                    <h3 className="font-heading text-base font-bold text-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed text-justify font-sans">
                      {step.desc}
                    </p>
                  </div>
                  <span className="text-[10px] font-heading font-bold text-slate-400 mt-6 tracking-widest">
                    STAGE 0{idx + 1}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}
