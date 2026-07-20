import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiUser, FiSend, FiCheck, FiMessageSquare, FiChevronDown } from 'react-icons/fi';
import { companyInfo } from '../data/companyData';
import SEO from '../components/SEO';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    product: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill out all required fields marked with *');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          productType: formData.product,
          message: formData.message
        })
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        setFormSubmitted(true);
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          subject: '',
          product: '',
          message: ''
        });
        
        // Let success screen stay for 6 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 6000);
      } else {
        setSubmitError(result.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err) {
      console.error('Inquiry Submission Error:', err);
      setSubmitError('Unable to connect to the mailing service. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us & Factory Directions" 
        description="Get in touch with Kapoor Dyes & Chemicals Company. Factory located at C 1/125 GIDC Phase 2, Vatva, Ahmedabad, Gujarat. Direct Phone: +91 98384 41481, Email: ankit@kapoordyes.com."
        keywords="Contact Kapoor Dyes, Ahmedabad Factory Address, Vatva GIDC Chemical Plant, Kanpur Branch Office, Kapoor Dyes Phone Number, Dyestuff Inquiry"
        canonical="https://kapoordyes.com/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Us - Kapoor Dyes & Chemicals Company",
          "url": "https://kapoordyes.com/contact",
          "mainEntity": {
            "@type": "Place",
            "name": "Kapoor Dyes & Chemicals Ahmedabad Factory",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "C 1 / 125, GIDC Phase 2, Vatva",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "postalCode": "382445",
              "addressCountry": "IN"
            },
            "telephone": "+919838441481",
            "email": "ankit@kapoordyes.com"
          }
        }}
      />
      
      {/* Page Header Banner */}
      <section className="relative h-[360px] md:h-[440px] flex flex-col justify-end bg-slate-900 text-white overflow-hidden pb-12 md:pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: `url(/images/photo-1486406146926-c627a92ad1ab.jpg)` }}
        />
        <div className="absolute inset-0 bg-black/45" />
        
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
          <div className="space-y-3 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            <span className="text-xs font-heading font-bold text-white uppercase tracking-widest block">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight text-royal uppercase">
              Contact Us
            </h1>
            <div className="text-xs text-slate-300 font-sans flex items-center space-x-2">
              <Link to="/home" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-slate-200">Contact Us</span>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-mesh pb-20 pt-12">

        {/* Contact Info & Form */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Office Addresses & Contacts */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Office boardroom visual representation */}
            <img 
              src="/images/photo-1497366216548-37526070297c.jpg" 
              alt="Corporate Office Boardroom Lobby" 
              className="w-full h-40 object-cover rounded-xl shadow-soft mb-6"
            />
            
            {/* Corporate Office */}
            <div className="glass bg-white p-6 md:p-8 rounded-2xl border border-white shadow-soft">
              <h3 className="font-heading font-bold text-navy text-lg mb-4 flex items-center space-x-2">
                <FiMapPin className="text-royal text-xl" />
                <span>Corporate Office & Ahmedabad Plant</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-sans mb-4">
                {companyInfo.contacts.corporateOffice.address}
              </p>
              <div className="space-y-2 text-xs font-mono text-slate-500">
                <div className="flex items-center space-x-2">
                  <FiPhone />
                  <a href={`tel:${companyInfo.contacts.corporateOffice.phone.replace(/\s+/g, '')}`} className="hover:text-royal transition-colors">
                    {companyInfo.contacts.corporateOffice.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <FiMail />
                  <a href={`mailto:${companyInfo.contacts.corporateOffice.email}`} className="hover:text-royal transition-colors">
                    {companyInfo.contacts.corporateOffice.email}
                  </a>
                </div>
                {companyInfo.contacts.corporateOffice.emailAlt && (
                  <div className="flex items-center space-x-2 pl-6">
                    <a href={`mailto:${companyInfo.contacts.corporateOffice.emailAlt}`} className="hover:text-royal transition-colors">
                      {companyInfo.contacts.corporateOffice.emailAlt}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Kanpur Branch */}
            <div className="glass bg-white p-6 md:p-8 rounded-2xl border border-white shadow-soft">
              <h3 className="font-heading font-bold text-navy text-lg mb-4 flex items-center space-x-2">
                <FiMapPin className="text-cyan text-xl" />
                <span>Kanpur Branch Office & Works</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-sans mb-4">
                {companyInfo.contacts.kanpurBranch.address}
              </p>
              <div className="space-y-2 text-xs font-mono text-slate-500">
                <div className="flex items-center space-x-2">
                  <FiPhone />
                  <a href={`tel:${companyInfo.contacts.kanpurBranch.phone.replace(/\s+/g, '')}`} className="hover:text-royal transition-colors">
                    {companyInfo.contacts.kanpurBranch.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Key Personnel Grid */}
            <div className="glass bg-white p-6 md:p-8 rounded-2xl border border-white shadow-soft">
              <h3 className="font-heading font-bold text-navy text-lg mb-4 flex items-center space-x-2">
                <FiUser className="text-royal text-xl" />
                <span>Key Personnel Support</span>
              </h3>
              <div className="grid grid-cols-1 gap-4 text-xs font-sans">
                {companyInfo.contacts.keyContacts.map((contact, idx) => (
                  <div key={idx} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">{contact.role}</span>
                    <span className="font-heading font-bold text-navy text-sm mt-0.5 block">{contact.name}</span>
                    <div className="flex items-center space-x-2 font-mono text-slate-500 mt-1">
                      <FiPhone />
                      <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="hover:text-royal transition-colors">
                        {contact.phone}
                      </a>
                    </div>
                    {contact.name.includes("Ankit") && (
                      <div className="mt-2">
                        <Link 
                          to="/digital-card" 
                          className="inline-flex items-center space-x-1 bg-royal/10 hover:bg-royal/20 text-royal font-heading font-bold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-lg transition-colors"
                        >
                          <FiUser />
                          <span>View Digital Card</span>
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact/Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass bg-white p-8 rounded-2xl border border-white shadow-soft">
              <h3 className="font-heading font-bold text-navy text-lg mb-6 flex items-center space-x-2">
                <FiMessageSquare className="text-royal text-xl" />
                <span>Send Inquiry Form</span>
              </h3>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald/10 border border-emerald/20 text-emerald-dark p-8 rounded-xl flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald flex items-center justify-center text-white">
                    <FiCheck size={24} />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-navy">Inquiry Received Successfully</h4>
                  <p className="text-slate-600 text-xs leading-relaxed max-w-sm font-sans">
                    Thank you, your message has been sent to our corporate dispatch desk. We will review your request and get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-500 mb-1.5 uppercase font-bold tracking-wider">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy placeholder-slate-400 focus:outline-none focus:border-royal transition-colors text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-500 mb-1.5 uppercase font-bold tracking-wider">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Global Textiles Ltd"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy placeholder-slate-400 focus:outline-none focus:border-royal transition-colors text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-500 mb-1.5 uppercase font-bold tracking-wider">Your Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy placeholder-slate-400 focus:outline-none focus:border-royal transition-colors text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-500 mb-1.5 uppercase font-bold tracking-wider">Mobile Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 99999 99999"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy placeholder-slate-400 focus:outline-none focus:border-royal transition-colors text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-500 mb-1.5 uppercase font-bold tracking-wider">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Price Quotation Request"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy placeholder-slate-400 focus:outline-none focus:border-royal transition-colors text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-500 mb-1.5 uppercase font-bold tracking-wider">Target Product Category</label>
                      <div className="relative">
                        <select
                          name="product"
                          value={formData.product}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pr-10 text-navy focus:outline-none focus:border-royal transition-colors text-xs appearance-none cursor-pointer"
                        >
                          <option value="">Select Category...</option>
                          <option value="Reactive Dyes">Reactive Dyes</option>
                          <option value="Acid Dyes">Acid Dyes</option>
                          <option value="Direct Dyes">Direct Dyes</option>
                          <option value="Disperse Dyes">Disperse Dyes</option>
                          <option value="Naphthols & Bases">Naphthols & Bases</option>
                          <option value="Organic & Inorganic Pigments">Organic & Inorganic Pigments</option>
                          <option value="Basic Dyes">Basic Dyes</option>
                          <option value="Optical Brighteners">Optical Brighteners</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                          <FiChevronDown size={14} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-500 mb-1.5 uppercase font-bold tracking-wider">Inquiry Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Detail your dye requirements, required volumes, or shade specs..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy placeholder-slate-400 focus:outline-none focus:border-royal transition-colors text-xs resize-none"
                    />
                  </div>

                  {submitError && (
                    <div className="bg-rose-50 border border-rose-200 text-rose-700 p-4 rounded-xl text-xs font-semibold">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 bg-royal hover:bg-royal-dark text-navy font-heading font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <svg className="animate-spin h-4 w-4 text-navy" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Sending Inquiry...</span>
                      </span>
                    ) : (
                      <>
                        <FiSend />
                        <span>Send Message Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </section>

        {/* Embedded Google Maps Ahmedabad */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="glass bg-white rounded-3xl p-4 border border-slate-200 shadow-soft overflow-hidden h-[400px]">
            <iframe
              title="Kapoor Dyes & Chemicals Factory Location, Vatva GIDC"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.31688647576!2d72.6323458!3d22.9570183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8f522384f509%3A0xe54ef48270188b77!2sGIDC%20Phase%202%2C%20Vatva%2C%20Ahmedabad%2C%20Gujarat%20382445!5e0!3m2!1sen!2sin!4v1703120000000!5m2!1sen!2sin"
              className="w-full h-full border-0 rounded-2xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

      </div>
    </>
  );
}
