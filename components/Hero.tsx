
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden bg-gray-900">
      <img 
        src="https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=2000" 
        alt="Iowa Farmhouse Plumbing"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 bg-blue-600/30 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold mb-4 backdrop-blur-sm">
            Serving Ankeny & Central Iowa
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Specialized Farmhouse <br />
            <span className="text-blue-400">Plumbing & Septic</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            From secondary septic lateral rejuvenation to frost-proof yard hydrants, 
            we provide the heavy-duty rural solutions standard city plumbers can't handle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:8443406413" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-center transition-all shadow-lg shadow-blue-900/40"
            >
              Request Service Now
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-bold text-center transition-all backdrop-blur-md"
            >
              Our Specializations
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-sm text-gray-400">
             <div className="flex items-center gap-2">
               <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
               Iowa DNR Certified
             </div>
             <div className="flex items-center gap-2">
               <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
               5.0 Star Local Service
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
