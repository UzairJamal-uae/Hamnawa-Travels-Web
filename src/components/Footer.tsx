import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-earth-900 text-earth-100 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-12 bg-nature-50 broken-paper-edge-bottom"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-white">Hamnawa Travels</h3>
            <p className="text-earth-300 text-sm leading-relaxed">
              Your premier gateway to exploring the majestic landscapes of Pakistan. From the peaks of Hunza to the valleys of Swat.
            </p>
            <div className="flex gap-4">
              <a href="https://web.facebook.com/profile.php?id=61585943083613" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-nature-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/hamnawatravels/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-nature-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-nature-400 transition-colors">Home</Link></li>
              <li><Link to="/destinations" className="hover:text-nature-400 transition-colors">Destinations</Link></li>
              <li><Link to="/about" className="hover:text-nature-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-nature-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-nature-400" />
                <span>0318-6211386</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-nature-400" />
                <span>hamnawatravels@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-nature-400 mt-1" />
                <span>Khetiya wala bazaar, near Toor School, Jhang Sadar Punjab Pakistan</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Founders</h4>
            <p className="text-sm text-earth-300">Uzair & Umer</p>
            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs italic text-earth-400">"Exploring Pakistan, one peak at a time."</p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 text-center text-xs text-earth-400">
          <p>&copy; {new Date().getFullYear()} Hamnawa Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
