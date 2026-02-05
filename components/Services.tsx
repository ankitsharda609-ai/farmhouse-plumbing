
import React from 'react';

const services = [
  {
    title: "Secondary Septic Laterals",
    description: "Expert rejuvenation of leach fields. We fix biomat clogs and root infiltration using specialized equipment that avoids full yard excavations.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Frost-Proof Hydrants",
    description: "Installation and repair of outdoor hydrants buried 5-6ft deep. We fix leaking packing nuts, replace plungers, and ensure year-round water access.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 9l-6 6m0-6l6 6" />
      </svg>
    )
  },
  {
    title: "Farmstead Water Systems",
    description: "Complete barn lines, pressure tank diagnostics, and livestock watering systems designed for Iowa's harsh seasonal shifts.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Iowa Farm Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Standard residential plumbing isn't enough for the Iowa farmstead. 
            We provide heavy-duty expertise for rural infrastructure.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl hover:border-blue-100 transition-all duration-300 group bg-gray-50">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="tel:8443406413" className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Get Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
