import React from 'react';
import { motion } from 'motion/react';
import { DollarSign, TrendingUp, Users, Send, Briefcase } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const WorkWithUs = () => {
  return (
    <div className="bg-nature-50 overflow-x-hidden">
      <section className="bg-nature-900 py-32 md:py-48 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="inline-flex items-center gap-3 bg-nature-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-10 shadow-lg shadow-nature-500/20 uppercase tracking-widest"
            >
              <Briefcase className="w-5 h-5" />
              Career Opportunity
            </motion.div>
            <h1 className="text-6xl md:text-9xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-2xl">
              Earn with <span className="text-nature-400 italic font-normal">Hamnawa</span>
            </h1>
            <p className="text-nature-200 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
              Join our team as a referral partner and earn up to <span className="font-bold text-nature-400">5 Lakh+ per month</span>.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-nature-50 broken-paper-edge z-20"></div>
      </section>

      <section className="py-32 bg-nature-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-32">
            {[
              { icon: DollarSign, title: 'High Commission', desc: 'Earn 50k+ to 5 Lakh per month based on your referrals.' },
              { icon: TrendingUp, title: 'Unlimited Growth', desc: 'The more you refer, the more you earn. No upper limit.' },
              { icon: Users, title: 'Supportive Team', desc: 'We provide all the marketing materials and support you need.' }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-10 rounded-[3rem] bg-white border border-nature-100 text-center shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-20 h-20 bg-nature-50 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner group-hover:bg-nature-500 transition-colors duration-500">
                    <item.icon className="w-10 h-10 text-nature-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-nature-900">{item.title}</h3>
                  <p className="text-earth-600 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="bg-nature-900 rounded-[4rem] p-10 md:p-20 text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Start Your Journey Today</h2>
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-nature-300 uppercase tracking-widest pl-2">Full Name</label>
                      <input type="text" className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-nature-500 transition-all text-white placeholder:text-white/20" placeholder="Your Name" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-nature-300 uppercase tracking-widest pl-2">Father Name</label>
                      <input type="text" className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-nature-500 transition-all text-white placeholder:text-white/20" placeholder="Father's Name" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-nature-300 uppercase tracking-widest pl-2">City</label>
                      <input type="text" className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-nature-500 transition-all text-white placeholder:text-white/20" placeholder="Your City" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-nature-300 uppercase tracking-widest pl-2">Email</label>
                      <input type="email" className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-nature-500 transition-all text-white placeholder:text-white/20" placeholder="email@example.com" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-nature-300 uppercase tracking-widest pl-2">Active Number</label>
                      <input type="tel" className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-nature-500 transition-all text-white placeholder:text-white/20" placeholder="03xx-xxxxxxx" />
                    </div>
                    <div className="space-y-3 md:col-span-2">
                      <label className="text-sm font-bold text-nature-300 uppercase tracking-widest pl-2">Tell us about yourself</label>
                      <textarea rows={5} className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-nature-500 transition-all text-white placeholder:text-white/20" placeholder="What do you do? Why do you want to work with us?"></textarea>
                    </div>
                    <button type="submit" className="md:col-span-2 bg-nature-500 text-white py-5 rounded-2xl font-bold text-xl hover:bg-nature-400 transition-all flex items-center justify-center gap-3 shadow-xl shadow-black/20 hover:scale-[1.02] active:scale-[0.98]">
                      Submit Application
                      <Send className="w-6 h-6" />
                    </button>
                  </form>
                </div>
                
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nature-800 rounded-full -mr-48 -mt-48 blur-[120px] opacity-40"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-nature-700 rounded-full -ml-32 -mb-32 blur-[100px] opacity-20"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkWithUs;
