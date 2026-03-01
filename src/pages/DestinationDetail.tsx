import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { DESTINATIONS } from '../constants';
import { MapPin, Clock, CheckCircle2, ArrowLeft, Calendar } from 'lucide-react';
import BookingModal from '../components/BookingModal';
import ScrollReveal from '../components/ScrollReveal';

const DestinationDetail = () => {
  const { id } = useParams();
  const dest = DESTINATIONS.find(d => d.id === id);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  if (!dest) {
    return (
      <div className="pt-40 pb-20 text-center bg-nature-50 min-h-screen">
        <h2 className="text-3xl font-serif font-bold text-nature-900">Destination not found</h2>
        <Link to="/destinations" className="text-nature-600 hover:underline mt-6 inline-block font-bold">Back to all destinations</Link>
      </div>
    );
  }

  return (
    <div className="bg-nature-50 overflow-x-hidden">
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        destinationName={dest.name}
      />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <img 
          src={dest.images[0]} 
          alt={dest.name} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-nature-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-5xl">
            <Link to="/destinations" className="inline-flex items-center gap-3 text-nature-300 hover:text-white mb-10 transition-colors font-bold uppercase tracking-widest text-sm">
              <ArrowLeft className="w-5 h-5" />
              Back to Destinations
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-9xl font-serif font-bold mb-8 drop-shadow-2xl leading-tight"
            >
              {dest.name}
            </motion.h1>
            <div className="flex flex-wrap items-center justify-center gap-8 text-xl md:text-2xl">
              <span className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <MapPin className="w-6 h-6 text-nature-400" /> {dest.location}
              </span>
              <span className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <Clock className="w-6 h-6 text-nature-400" /> {dest.duration}
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-nature-50 broken-paper-edge z-20"></div>
      </section>

      {/* Details Content */}
      <section className="py-32 bg-nature-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Left Column: Info */}
            <div className="lg:col-span-2 space-y-20">
              <ScrollReveal>
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-nature-900 mb-10">About the Trip</h2>
                  <p className="text-earth-700 text-xl md:text-2xl leading-relaxed">
                    {dest.description}
                  </p>
                  <p className="text-earth-600 text-lg mt-8 leading-relaxed">
                    Explore the majestic landscapes of {dest.name}. Our carefully curated trip ensures you experience the best of this region with comfort and safety. We handle all logistics including transport, accommodation, and guided tours.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-10 rounded-[2.5rem] border border-nature-100 shadow-xl">
                    <h3 className="text-2xl font-serif font-bold text-nature-900 mb-6 flex items-center gap-3">
                      <Clock className="w-6 h-6 text-nature-500" />
                      Available Durations
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-nature-50 rounded-2xl">
                        <span className="font-bold text-nature-800">Standard Trip</span>
                        <span className="text-nature-600 font-medium">3 Days / 2 Nights</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-nature-50 rounded-2xl border border-nature-200">
                        <span className="font-bold text-nature-800">Extended Trip</span>
                        <span className="text-nature-600 font-medium">5 Days / 4 Nights</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-nature-50 rounded-2xl">
                        <span className="font-bold text-nature-800">Grand Tour</span>
                        <span className="text-nature-600 font-medium">7 Days / 6 Nights</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-nature-900 p-10 rounded-[2.5rem] text-white shadow-2xl">
                    <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-nature-400" />
                      Travel Tips
                    </h3>
                    <ul className="space-y-4 text-nature-200">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-nature-400 rounded-full mt-2"></div>
                        <span>Carry warm clothing even in summers.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-nature-400 rounded-full mt-2"></div>
                        <span>Keep original CNIC/Passport at all times.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-nature-400 rounded-full mt-2"></div>
                        <span>Photography is allowed but respect local culture.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {dest.images.slice(1).map((img, i) => (
                  <ScrollReveal key={i} delay={i * 0.2}>
                    <img src={img} alt={`${dest.name} ${i}`} className="rounded-[3rem] shadow-2xl w-full h-[400px] object-cover hover:scale-[1.02] transition-transform duration-500" referrerPolicy="no-referrer" />
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal>
                <div className="bg-white p-10 md:p-16 rounded-[3.5rem] border border-nature-100 shadow-2xl">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-nature-900 mb-12">Trip Itinerary (Sample)</h3>
                  <div className="space-y-12">
                    {[
                      { day: "Day 1", title: "Arrival & Sightseeing", desc: "Arrival at the destination, check-in to the hotel, and evening visit to local landmarks." },
                      { day: "Day 2", title: "Adventure & Exploration", desc: "Full day excursion to nearby valleys, lakes, or historical sites. Professional photography session included." },
                      { day: "Day 3", title: "Leisure & Departure", desc: "Free time for shopping and local interaction before departure back to the city." }
                    ].map((item, i) => (
                      <div key={i} className="relative pl-12 border-l-2 border-nature-200 last:border-0 pb-12 last:pb-0">
                        <div className="absolute left-[-9px] top-0 w-4 h-4 bg-nature-500 rounded-full border-4 border-white shadow-lg"></div>
                        <span className="text-nature-500 font-bold text-sm uppercase tracking-widest mb-2 block">{item.day}</span>
                        <h4 className="text-2xl font-bold text-nature-900 mb-4">{item.title}</h4>
                        <p className="text-earth-600 text-lg leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-nature-900 mb-10">Terms & Conditions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      "50% advance payment required for booking confirmation.",
                      "Cancellation 7 days before the trip is 100% refundable.",
                      "Hamnawa Travels is not responsible for any natural disasters or road blockages.",
                      "Clients must follow the instructions of the tour guide for safety.",
                      "Personal insurance is recommended for all travelers.",
                      "Any damage to hotel property will be charged to the client."
                    ].map((term, i) => (
                      <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-nature-100 shadow-sm">
                        <CheckCircle2 className="w-6 h-6 text-nature-500 shrink-0" />
                        <span className="text-earth-700 font-medium">{term}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Packages & Booking */}
            <div className="space-y-12">
              <div className="bg-white p-10 md:p-12 rounded-[3.5rem] border border-nature-100 sticky top-32 shadow-2xl shadow-nature-200/50">
                <h3 className="text-3xl font-serif font-bold text-nature-900 mb-10">Available Packages</h3>
                <div className="space-y-10">
                  {dest.packages.map((pkg, i) => (
                    <div key={i} className="bg-nature-50 p-10 rounded-[2.5rem] border border-nature-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                      <div className="flex justify-between items-center mb-8">
                        <h4 className="text-2xl font-bold text-nature-900">{pkg.name}</h4>
                        <span className="text-3xl font-serif font-bold text-nature-600">{pkg.price}</span>
                      </div>
                      <ul className="space-y-4 mb-10">
                        {pkg.features.map((f, j) => (
                          <li key={j} className="text-base text-earth-600 flex items-center gap-4">
                            <div className="w-2 h-2 bg-nature-400 rounded-full"></div>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <button 
                        onClick={() => setIsBookingOpen(true)}
                        className="w-full bg-nature-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-nature-700 transition-all shadow-xl shadow-nature-200 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        Book This Package
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 pt-10 border-t border-nature-100">
                  <div className="flex items-center gap-5 text-earth-600 mb-6">
                    <Calendar className="w-8 h-8 text-nature-600" />
                    <span className="font-bold text-lg">Flexible durations available.</span>
                  </div>
                  <p className="text-base text-earth-400 leading-relaxed">Custom corporate and honeymoon packages available on request. Contact us for group discounts and special arrangements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetail;
