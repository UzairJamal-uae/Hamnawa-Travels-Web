import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  destinationName?: string;
  packageName?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, destinationName, packageName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          destination: destinationName,
          package: packageName
        })
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setFormData({ name: '', email: '', phone: '', city: '', message: '' });
        }, 3000);
      }
    } catch (error) {
      console.error("Booking error:", error);
      setStatus('idle');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-nature-100"
          >
            <div className="p-8 md:p-12">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-nature-50 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-earth-400" />
              </button>

              {status === 'success' ? (
                <div className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-nature-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-nature-600" />
                  </motion.div>
                  <h3 className="text-3xl font-serif font-bold text-nature-900 mb-4">Booking Sent!</h3>
                  <p className="text-earth-600">We've received your request for {destinationName}. Our team will contact you shortly.</p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-3xl font-serif font-bold text-nature-900 mb-2">Book Your Trip</h3>
                    <p className="text-earth-500">
                      {destinationName ? `Interested in ${destinationName}` : 'Fill in your details to get started'}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-earth-700 uppercase tracking-wider">Full Name</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-nature-50 border border-nature-100 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-nature-500 transition-all"
                        placeholder="Uzair Ahmed"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-earth-700 uppercase tracking-wider">Email</label>
                        <input
                          required
                          type="email"
                          className="w-full bg-nature-50 border border-nature-100 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-nature-500 transition-all"
                          placeholder="uzair@example.com"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-earth-700 uppercase tracking-wider">Phone</label>
                        <input
                          required
                          type="tel"
                          className="w-full bg-nature-50 border border-nature-100 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-nature-500 transition-all"
                          placeholder="0318-xxxxxxx"
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-earth-700 uppercase tracking-wider">City</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-nature-50 border border-nature-100 rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-nature-500 transition-all"
                        placeholder="Jhang Sadar"
                        value={formData.city}
                        onChange={e => setFormData({...formData, city: e.target.value})}
                      />
                    </div>

                    <button
                      disabled={status === 'submitting'}
                      type="submit"
                      className="w-full bg-nature-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-nature-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-nature-200 disabled:opacity-50 mt-4"
                    >
                      {status === 'submitting' ? 'Sending...' : 'Confirm Booking'}
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </>
              )}
            </div>
            
            {/* Broken Paper Edge */}
            <div className="absolute bottom-0 left-0 w-full h-4 bg-nature-600 broken-paper-edge opacity-20"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
