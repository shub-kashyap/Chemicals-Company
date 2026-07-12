import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiLayers } from 'react-icons/fi';
import { companyInfo } from '../data/companyData';
import { productCategories } from '../data/productsData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-slate-300 border-t border-slate-800 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 -mr-32 -mb-32 w-96 h-96 bg-royal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 -ml-32 -mt-32 w-96 h-96 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 pb-16 border-b border-slate-800">
          
          {/* Column 1: Logo, Tagline & Certification */}
          <div className="flex flex-col space-y-6">
            <Link to="/home" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#FACC15] flex items-center justify-center text-[#0F172A] font-heading font-bold text-[15px]">
                KD
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold tracking-tight text-white leading-none text-lg">
                  KAPOOR DYES
                </span>
                <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase font-sans mt-0.5">
                  & Chemicals Company
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              "{companyInfo.tagline}"
            </p>
            
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-xl p-3 w-fit">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald animate-pulse" />
              <span className="text-xs font-heading font-bold text-white uppercase tracking-wider">
                {companyInfo.certification}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">
              Corporate Links
            </h3>
            <ul className="flex flex-col space-y-2.5 text-sm">
              <li>
                <Link to="/home" className="hover:text-cyan transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan transition-colors duration-200">Company Profile</Link>
              </li>
              <li>
                <Link to="/infrastructure" className="hover:text-cyan transition-colors duration-200">Infrastructure</Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-cyan transition-colors duration-200">Quality Control</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan transition-colors duration-200">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products Quick Access */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-heading text-sm font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">
              Dye Products
            </h3>
            <ul className="flex flex-col space-y-2.5 text-sm">
              {productCategories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products?category=${cat.id}`}
                    className="hover:text-cyan flex items-center space-x-1.5 transition-colors duration-200"
                  >
                    <FiLayers className="text-[10px] text-royal" />
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
        </div>

        {/* Corporate Address & Contact Details Footer Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10 pb-8 text-xs text-slate-400 border-b border-slate-800">
          <div>
            <h4 className="font-heading font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center space-x-2">
              <FiMapPin className="text-royal text-sm" />
              <span>CORPORATE OFFICE & FACTORY (AHMEDABAD)</span>
            </h4>
            <p className="leading-relaxed font-sans">
              {companyInfo.contacts.corporateOffice.address}
            </p>
            <div className="flex flex-wrap gap-4 mt-2 font-mono">
              <span className="flex items-center space-x-1">
                <FiPhone />
                <a href={`tel:${companyInfo.contacts.corporateOffice.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {companyInfo.contacts.corporateOffice.phone}
                </a>
              </span>
              <span className="flex items-center space-x-1">
                <FiMail />
                <a href={`mailto:${companyInfo.contacts.corporateOffice.email}`} className="hover:text-white transition-colors">
                  {companyInfo.contacts.corporateOffice.email}
                </a>
              </span>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center space-x-2">
              <FiMapPin className="text-cyan text-sm" />
              <span>BRANCH OFFICE & WORKS (KANPUR)</span>
            </h4>
            <p className="leading-relaxed font-sans">
              {companyInfo.contacts.kanpurBranch.address}
            </p>
            <div className="flex flex-wrap gap-4 mt-2 font-mono">
              <span className="flex items-center space-x-1">
                <FiPhone />
                <a href={`tel:${companyInfo.contacts.kanpurBranch.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {companyInfo.contacts.kanpurBranch.phone}
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-xs text-slate-500 font-sans">
          <p>
            &copy; {currentYear} Kapoor Dyes & Chemicals Company. All Rights Reserved.
          </p>
          <p className="mt-2 sm:mt-0 font-medium">
            Standardized Quality. ISO 9001:2015 Registered.
          </p>
        </div>
      </div>
    </footer>
  );
}
