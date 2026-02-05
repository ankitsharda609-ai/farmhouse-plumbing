
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FAQ from './components/FAQ';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Core Services Section */}
        <Services />

        {/* Detailed Info / About Section */}
        <section id="about" className="py-24 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 font-serif">Iowa Soil Expertise.</h2>
                <div className="space-y-6 text-blue-100 text-lg leading-relaxed">
                  <p>
                    Operating a farm in Iowa requires plumbing that can withstand extreme temperature swings and heavy-duty usage. At <strong className="text-white">Farmhouse Plumbing Repair</strong>, we understand that rural systems require a different level of expertise than standard city plumbing.
                  </p>
                  <p>
                    Whether it's the specialized biological rejuvenation of a saturated leach field or the precise replacement of a yard hydrant's internal plunger, our technicians are trained for the specific environment of Polk County and beyond.
                  </p>
                  <div className="flex items-center gap-4 mt-8">
                    <div className="bg-blue-800 p-4 rounded-xl border border-blue-700">
                      <p className="text-3xl font-bold text-white">15+</p>
                      <p className="text-xs text-blue-300 uppercase tracking-widest">Years Exp</p>
                    </div>
                    <div className="bg-blue-800 p-4 rounded-xl border border-blue-700">
                      <p className="text-3xl font-bold text-white">100%</p>
                      <p className="text-xs text-blue-300 uppercase tracking-widest">IA Local</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-blue-800 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=1000" 
                    alt="Rural Iowa Technician"
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <p className="text-2xl font-bold">Ankeny's Trusted Team</p>
                    <p className="text-blue-300">200 SW State St, Ankeny, IA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQ />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-700 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <span className="text-xl font-bold text-white font-serif">Farmhouse Plumbing Repair</span>
              </div>
              <p className="max-w-sm mb-6">
                Iowa's leader in rural plumbing solutions. Specializing in septic laterals, yard hydrants, and livestock water systems.
              </p>
              <div className="flex gap-4">
                 <a href="#" className="hover:text-white transition-colors">Facebook</a>
                 <a href="#" className="hover:text-white transition-colors">Instagram</a>
                 <a href="#" className="hover:text-white transition-colors">Nextdoor</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Our Services</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-blue-400">Septic Lateral Repair</a></li>
                <li><a href="#" className="hover:text-blue-400">Yard Hydrant Fixes</a></li>
                <li><a href="#" className="hover:text-blue-400">Pressure Tank Service</a></li>
                <li><a href="#" className="hover:text-blue-400">Barn Line Installation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  <span>200 SW State St,<br />Ankeny, IA 50023</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <a href="tel:8443406413" className="hover:text-white font-bold">(844) 340-6413</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Farmhouse Plumbing Repair. All rights reserved. Locally owned in Ankeny, Iowa.</p>
          </div>
        </div>
      </footer>

      {/* AI Assistant Floating Widget */}
      <ChatWidget />
    </div>
  );
};

export default App;
