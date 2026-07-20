import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiGlobe, FiMapPin, FiDownload, FiShare2 } from 'react-icons/fi';
import { FaWhatsapp, FaQrcode } from 'react-icons/fa';
import SEO from '../components/SEO';

export default function DigitalCard() {
  const [copied, setCopied] = useState(false);
  
  const cardData = {
    name: "Mr. Ankit Kapoor",
    role: "International Business / Quick Contact",
    company: "Kapoor Dyes & Chemicals Company",
    phone: "+91 98384 41481",
    email: "ankit@kapoordyes.com",
    website: "https://kapoordyes.com",
    address: "C 1 / 125, GIDC Phase 2, Vatva, Ahmedabad - 382 445, Gujarat, India.",
    googleMapsUrl: "https://maps.google.com/?q=C+1+/+125,+GIDC+Phase+2,+Vatva,+Ahmedabad+-+382+445,+Gujarat,+India"
  };

  // Function to build and download vCard (VCF) dynamically
  const downloadVCard = () => {
    const vcardString = `BEGIN:VCARD
VERSION:3.0
N:Kapoor;Ankit;;Mr.;
FN:Ankit Kapoor
ORG:Kapoor Dyes & Chemicals Company
TITLE:International Business / Sales Manager
TEL;TYPE=CELL,VOICE,MSG:+919838441481
EMAIL;TYPE=PREF,INTERNET:ankit@kapoordyes.com
ADR;TYPE=WORK:;;C 1 / 125, GIDC Phase 2, Vatva;Ahmedabad;Gujarat;382445;India
URL:https://kapoordyes.com
NOTE:ISO 9001:2015 Certified Dyestuffs & Industrial Colorants Manufacturer.
REV:${new Date().toISOString()}
END:VCARD`;

    const blob = new Blob([vcardString], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'ankit_kapoor_kdc.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to share the card URL using Web Share API if supported
  const shareCard = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Ankit Kapoor - Digital Business Card',
          text: 'Contact details for Ankit Kapoor at Kapoor Dyes & Chemicals Company',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Copy to clipboard fallback
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // QR Code URL (using qrserver API pointing to current URL)
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(window.location.href || 'https://kapoordyes.com/digital-card')}&color=0c131f`;

  return (
    <>
      <SEO 
        title="Mr. Ankit Kapoor | Digital Business Card" 
        description="Digital Business Card of Mr. Ankit Kapoor, International Business / Sales Manager at Kapoor Dyes & Chemicals Company. Save contact, start WhatsApp chat, or call directly."
        keywords="Ankit Kapoor Dyes, Kapoor Dyes Digital Card, Ankit Kapoor Contact, Dyestuff Sales Manager Ahmedabad"
        canonical="https://kapoordyes.com/digital-card"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Ankit Kapoor",
          "jobTitle": "International Business / Sales Manager",
          "worksFor": {
            "@type": "Organization",
            "name": "Kapoor Dyes & Chemicals Company"
          },
          "telephone": "+919838441481",
          "email": "ankit@kapoordyes.com",
          "url": "https://kapoordyes.com/digital-card"
        }}
      />
      
      <div className="min-h-screen bg-navy text-white flex flex-col justify-center items-center py-24 px-6 relative overflow-hidden bg-mesh">
        
        {/* Decorative background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-royal/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-cyan/10 rounded-full blur-3xl pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-navy-light/95 border border-slate-800 rounded-3xl p-8 shadow-2xl relative z-10 glass-dark"
        >
          {/* Card Header/Profile */}
          <div className="flex flex-col items-center text-center space-y-4 pb-6 border-b border-slate-800/80">
            {/* Initials Avatar */}
            <div className="w-20 h-20 bg-royal text-navy font-heading font-extrabold text-2xl rounded-2xl flex items-center justify-center shadow-lg relative">
              AK
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald border-2 border-navy-light rounded-full" title="Available" />
            </div>
            
            <div className="space-y-1">
              <h1 className="text-2xl font-heading font-extrabold text-white tracking-tight">
                {cardData.name}
              </h1>
              <p className="text-xs font-heading font-bold text-royal uppercase tracking-wider">
                {cardData.role}
              </p>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">
                {cardData.company}
              </p>
            </div>
          </div>
          
          {/* Save Contact Primary CTA */}
          <div className="py-6 flex flex-col space-y-3">
            <button
              onClick={downloadVCard}
              className="w-full bg-royal hover:bg-royal-dark text-navy font-heading font-bold text-sm uppercase tracking-wider py-4 rounded-xl flex items-center justify-center space-x-2.5 transition-all shadow-md active:scale-95"
            >
              <FiDownload className="text-lg" />
              <span>Save Contact (VCF)</span>
            </button>
            
            <button
              onClick={shareCard}
              className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-heading font-bold text-xs uppercase tracking-wider py-3 rounded-xl flex items-center justify-center space-x-2 transition-all active:scale-95"
            >
              <FiShare2 />
              <span>{copied ? 'Link Copied!' : 'Share Business Card'}</span>
            </button>
          </div>
          
          {/* Contact Details Links */}
          <div className="space-y-4 text-xs font-sans text-slate-300 border-t border-b border-slate-800/80 py-6">
            <a 
              href={`tel:${cardData.phone.replace(/\s+/g, '')}`}
              className="flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-800/40 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-royal/10 flex items-center justify-center text-royal group-hover:bg-royal group-hover:text-navy transition-colors">
                <FiPhone size={16} />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Call Mobile</span>
                <span className="text-sm font-heading font-bold text-white group-hover:text-royal transition-colors">{cardData.phone}</span>
              </div>
            </a>
            
            <a 
              href={`https://wa.me/919838441481?text=Hello%20Ankit%20Kapoor,%20I'm%20contacting%20you%20from%20your%20Digital%20Business%20Card.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-800/40 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <FaWhatsapp size={16} />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">WhatsApp Chat</span>
                <span className="text-sm font-heading font-bold text-white group-hover:text-[#25D366] transition-colors">Message on WhatsApp</span>
              </div>
            </a>
            
            <a 
              href={`mailto:${cardData.email}`}
              className="flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-800/40 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-cyan/10 flex items-center justify-center text-cyan group-hover:bg-cyan group-hover:text-navy transition-colors">
                <FiMail size={16} />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Send Email</span>
                <span className="text-sm font-heading font-bold text-white group-hover:text-cyan transition-colors">{cardData.email}</span>
              </div>
            </a>

            <a 
              href={cardData.website}
              className="flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-800/40 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-700/30 flex items-center justify-center text-slate-400 group-hover:bg-slate-200 group-hover:text-navy transition-colors">
                <FiGlobe size={16} />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Company Website</span>
                <span className="text-sm font-heading font-bold text-white group-hover:text-slate-200 transition-colors">www.kapoordyes.com</span>
              </div>
            </a>

            <a 
              href={cardData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-800/40 transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald/10 flex items-center justify-center text-emerald group-hover:bg-emerald group-hover:text-navy transition-colors">
                <FiMapPin size={16} />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Ahmedabad Plant</span>
                <span className="text-xs leading-normal text-slate-300 group-hover:text-white transition-colors block mt-0.5">{cardData.address}</span>
              </div>
            </a>
          </div>
          
          {/* QR Code Section */}
          <div className="pt-6 flex flex-col items-center justify-center text-center space-y-3">
            <div className="bg-white p-3 rounded-2xl shadow-inner">
              <img 
                src={qrCodeUrl} 
                alt="Scan QR Code to visit Card" 
                className="w-32 h-32"
                onError={(e) => {
                  e.target.style.display = 'none'; // Fallback if API fails
                }}
              />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center space-x-1">
                <FaQrcode />
                <span>Scan QR Code</span>
              </span>
              <p className="text-[9px] text-slate-500 font-sans max-w-[200px]">
                Scan with a smartphone camera to instantly share or view this contact page.
              </p>
            </div>
          </div>
          
        </motion.div>
      </div>
    </>
  );
}
