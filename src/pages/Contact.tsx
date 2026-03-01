import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Send } from 'lucide-react';
import { motion } from 'motion/react';

const Contact = () => {
  return (
    <div className="bg-nature-50 overflow-x-hidden">
      <section className="bg-nature-900 py-32 md:py-48 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto text-white"
          >
            <h1 className="text-6xl md:text-9xl font-serif font-bold mb-8 leading-tight drop-shadow-2xl">
              Get in <span className="text-nature-400 italic font-normal">Touch</span>
            </h1>
            <p className="text-nature-200 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
              Have questions about our trips or want to plan a custom journey? 
              Our team is here to help you every step of the way.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-nature-50 broken-paper-edge z-20"></div>
      </section>

      <section className="py-32 bg-nature-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-16">
              <div>
                <h2 className="text-4xl font-serif font-bold text-nature-900 mb-12">Contact Details</h2>
                <div className="space-y-10">
                  {[
                    { icon: Phone, title: 'Phone Number', value: '0318-6211386' },
                    { icon: Mail, title: 'Email Address', value: 'hamnawatravels@gmail.com' },
                    { icon: MapPin, title: 'Office Address', value: 'Khetiya wala bazaar, near Toor School, Jhang Sadar Punjab Pakistan' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-8 group">
                      <div className="w-16 h-16 rounded-[1.5rem] bg-white flex items-center justify-center shrink-0 shadow-xl border border-nature-100 group-hover:bg-nature-500 transition-colors duration-500">
                        <item.icon className="w-8 h-8 text-nature-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-nature-900 mb-1">{item.title}</h4>
                        <p className="text-earth-600 text-lg">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-nature-900 mb-8">Follow Our Adventures</h3>
                <div className="flex gap-6">
                  {[
                    { icon: Facebook, url: 'https://web.facebook.com/profile.php?id=61585943083613' },
                    { icon: Instagram, url: 'https://www.instagram.com/hamnawatravels/' }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center hover:bg-nature-600 hover:text-white transition-all duration-500 text-nature-600 shadow-xl border border-nature-100"
                    >
                      <social.icon className="w-8 h-8" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 md:p-16 rounded-[3.5rem] border border-nature-100 shadow-2xl shadow-nature-200/50">
              <h3 className="text-3xl font-serif font-bold text-nature-900 mb-10">Send us a Message</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-earth-700 uppercase tracking-widest pl-2">Full Name</label>
                    <input type="text" className="w-full bg-nature-50 border-none rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-nature-500 transition-all text-nature-900 placeholder:text-earth-300" placeholder="John Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-earth-700 uppercase tracking-widest pl-2">Email</label>
                    <input type="email" className="w-full bg-nature-50 border-none rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-nature-500 transition-all text-nature-900 placeholder:text-earth-300" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-earth-700 uppercase tracking-widest pl-2">Subject</label>
                  <input type="text" className="w-full bg-nature-50 border-none rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-nature-500 transition-all text-nature-900 placeholder:text-earth-300" placeholder="Trip Inquiry" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-earth-700 uppercase tracking-widest pl-2">Message</label>
                  <textarea rows={5} className="w-full bg-nature-50 border-none rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-nature-500 transition-all text-nature-900 placeholder:text-earth-300" placeholder="Tell us about your travel plans..."></textarea>
                </div>
                <button type="submit" className="w-full bg-nature-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-nature-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-nature-200 hover:scale-[1.02] active:scale-[0.98]">
                  Send Message
                  <Send className="w-6 h-6" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
