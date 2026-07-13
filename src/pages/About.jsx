import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiAward, FiEye, FiTarget } from 'react-icons/fi';
import { companyInfo } from '../data/companyData';
import SEO from '../components/SEO';

export default function About() {
  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const milestoneVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <>
      <SEO title="Company Profile" />
      
      {/* Page Header Banner */}
      <section className="relative h-[360px] md:h-[440px] flex flex-col justify-end bg-slate-900 text-white overflow-hidden pb-12 md:pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: `url(/images/photo-1538097304804-2a1b932466a9.jpg)` }}
        />
        <div className="absolute inset-0 bg-black/45" />
        
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
          <div className="space-y-3 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            <span className="text-xs font-heading font-bold text-white uppercase tracking-widest block">
              SINCE 1966
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight text-royal uppercase">
              Company Profile
            </h1>
            <div className="text-xs text-slate-300 font-sans flex items-center space-x-2">
              <Link to="/home" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-slate-200">Company Profile</span>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-mesh pb-20">

        {/* Section: History & Aristotle Quote */}
        <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col space-y-6 text-justify text-slate-600 leading-relaxed font-sans"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy leading-tight">
              Our Journey: From Weaver's Town to Global Markets
            </h2>
            <p>
              Incepted in the year 1966 from a weaver's town, we, Kapoor Dyes & Chemicals Co., is a well-established manufacturer and exporter of a wide variety of Reactive Dyes, Acid Dyes, Direct Dyes, Basic Dyes, Disperse Dyes, Optical Brightening Agent, and Ultramarine Blue. Our dyes serve textile cotton, wool, silk, and nylon dyeing, carpet wool, leather, and paper manufacturing.
            </p>
            <p>
              Within three years of inception, we garnered the reputation of being the largest traders in terms of volume and revenue in our province. We further expanded by opening a strategic branch in Kanpur—historically known as the 'Manchester of India' and spelled 'Cawnpore' by the British.
            </p>
            <p>
              Having been established and recognized as one of the leading traders of dyestuffs, we initiated manufacturing in the year 1978. Since then, we have diversified into multiple chemical ranges. Today, we are confident in supplying high-exhaust, bi-functional, and standard reactive and acid colorants to B2B clients worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col space-y-8"
          >
            {/* Chemical warehouse logistics image */}
            <img 
              src="/images/photo-1587293852726-70cdb56c2866.jpg" 
              alt="Chemical drums storage warehouse" 
              className="w-full h-44 object-cover rounded-2xl shadow-soft mb-4"
            />
            
            {/* Aristotle Quote Box */}
            <div className="glass p-8 rounded-2xl border border-white/60 shadow-soft relative overflow-hidden bg-white">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-indigo/5 rounded-full blur-2xl pointer-events-none" />
              <div className="text-3xl font-serif text-royal/20">“</div>
              <p className="text-slate-600 italic font-sans text-md leading-relaxed mt-1 mb-4">
                "{companyInfo.qualityQuote}"
              </p>
              <p className="text-xs uppercase font-heading font-bold text-slate-400 tracking-wider">
                — {companyInfo.qualityQuoteAuthor}
              </p>
            </div>
            
            {/* Experience Box */}
            <div className="bg-navy text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute bottom-0 right-0 -mr-16 -mb-16 w-32 h-32 bg-cyan/15 rounded-full blur-2xl pointer-events-none" />
              <h3 className="font-heading font-bold text-cyan text-sm uppercase tracking-widest mb-2">
                Our Differential Edge
              </h3>
              <p className="text-slate-300 font-sans text-sm leading-relaxed mb-4">
                "Riding high on extensive experience of nearly 60 years in the trade, we have wide exposure to understand our customers, their requirements and customize and avail quality products even if they are not in our standard manufacturing portfolio. We proudly say today that many of our customers are attached to us for more than 45 years."
              </p>
              <div className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-[10px] uppercase font-heading font-bold tracking-widest text-slate-300">
                Customer-Centric Formulations
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section: Mission, Vision, Values */}
        <section className="py-16 bg-slate-100/50 border-t border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass bg-white p-8 rounded-2xl shadow-soft border border-white flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-royal/10 flex items-center justify-center text-royal mb-6">
                <FiTarget className="text-2xl" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy uppercase tracking-widest mb-3">
                Our Mission
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-sans">
                To avail premium-quality dyestuffs at highly competitive prices, ensuring timely supply and continuous improvement to support customer growth globally.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="glass bg-white p-8 rounded-2xl shadow-soft border border-white flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo/10 flex items-center justify-center text-indigo mb-6">
                <FiEye className="text-2xl" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy uppercase tracking-widest mb-3">
                Our Vision
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-sans">
                To establish KDC as a key global leader in customized chemical colorants, creating a differential edge in testing and technical support.
              </p>
            </motion.div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass bg-white p-8 rounded-2xl shadow-soft border border-white flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald/10 flex items-center justify-center text-emerald mb-6">
                <FiAward className="text-2xl" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy uppercase tracking-widest mb-3">
                Core Values
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-sans">
                Committed to customer relations, zero conflict dealing, strict compliance with ISO quality standards, and regular upgrading of our technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section: Certificate & Registration */}
        <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <span className="text-xs font-heading font-bold text-royal uppercase tracking-widest block">
              OFFICIAL CERTIFICATION
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy leading-tight">
              ISO 9001:2015 Certified QMS Registration
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-sans text-justify">
              Kapoor Dyes & Chemicals Company holds an official ISO 9001:2015 Registration, certified by **DBS Certifications**. This registration underscores our commitment to providing standardized chemical products that consistently meet customer and regulatory requirements.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed font-sans text-justify">
              The scope of our Quality Management System registry covers the manufacturing, trading, export, and global supply of Reactive Dyes, Acid Dyes, Direct Dyes, Basic Dyes, Disperse Dyes, Organic & Inorganic Pigments, and Optical Brightening Agents.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-l-2 border-royal pl-4 py-1 text-xs font-sans text-slate-500">
              <div><strong>Registration No:</strong> Q-205020121102</div>
              <div><strong>Certification Body:</strong> DBS Certifications</div>
              <div><strong>Initial Date:</strong> 11/12/2020</div>
              <div><strong>Certificate Validity:</strong> ISO 9001:2015 Standard</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="glass bg-white p-4 rounded-3xl border border-slate-200 shadow-soft overflow-hidden w-full max-w-sm hover:shadow-lg transition-shadow duration-300">
              <div className="block overflow-hidden rounded-2xl">
                <img 
                  src="/images/ISO-KDCPL.jpg" 
                  alt="ISO 9001:2015 Certificate DBS Certifications" 
                  className="w-full h-auto object-contain transition-transform duration-500 hover:scale-102"
                />
              </div>
              <p className="text-[10px] text-center text-slate-400 font-heading font-semibold uppercase tracking-wider mt-3">
                DBS Quality Management System Certificate
              </p>
            </div>
          </motion.div>
        </section>

        {/* Section: Technical Expertise & Lab QA Testing */}
        <section className="py-20 bg-slate-50 border-t border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Left */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <img 
                src="/images/technical_assurance.webp" 
                alt="Analytical laboratory quality control matching color shades" 
                className="w-full h-80 object-cover rounded-2xl shadow-soft"
              />
            </motion.div>

            {/* Text Right */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6 text-justify text-slate-600 leading-relaxed font-sans"
            >
              <span className="text-xs font-heading font-bold text-royal uppercase tracking-widest block">
                TECHNICAL ASSURANCE
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy leading-tight">
                Analytical QA Testing & Custom Color Matching
              </h2>
              <p>
                At Kapoor Dyes & Chemicals Co., every batch manufactured or procured undergoes rigorous spectrophotometer and dye-pot application testing in our modern analytical laboratory. Our technical team matches shades, solubility indices, and light/wash fastness parameters specifically as per the requirements of cotton, wool, silk, leather, and paper substrates.
              </p>
              <p>
                By maintaining a highly sophisticated testing laboratory, we ensure complete batch-to-batch consistency. This scientific quality control prevents variation and guarantees that dye exhaustion properties meet exact contract specifications before shipping.
              </p>
              <div className="flex items-center space-x-6 pt-2">
                <div className="flex flex-col border-r border-slate-200 pr-6">
                  <span className="text-2xl font-heading font-bold text-navy">100%</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-heading font-bold mt-1">Batch Verified</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-heading font-bold text-navy">45+ Yrs</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-heading font-bold mt-1">Client Ties</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section: Timeline */}
        <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-heading font-bold text-royal uppercase tracking-widest">
              MILESTONES & EXPANSION
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-navy tracking-tight mt-3">
              KDC Growth Timeline
            </h2>
          </div>

          <motion.div
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="relative border-l-2 border-slate-200 ml-4 md:ml-32 space-y-12"
          >
            {companyInfo.history.map((milestone, idx) => (
              <motion.div
                key={idx}
                variants={milestoneVariants}
                className="relative pl-8 md:pl-12"
              >
                {/* Year Badge on the Left (only md screen and up) */}
                <div className="hidden md:block absolute right-full mr-8 top-1 font-heading font-bold text-right">
                  <span className="text-2xl text-royal">{milestone.year}</span>
                </div>
                
                {/* Bullet node */}
                <div className="absolute -left-[9px] top-2.5 w-4 h-4 rounded-full bg-white border-2 border-royal" />

                {/* Content Box */}
                <div className="glass bg-white p-6 md:p-8 rounded-2xl border border-white shadow-soft hover:shadow-glass hover:-translate-y-0.5 transition-all duration-300">
                  <span className="inline-block md:hidden text-xs font-heading font-bold text-royal uppercase tracking-wider mb-1">
                    {milestone.year}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-navy mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-sans text-justify">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

      </div>
    </>
  );
}
