
import React, { useState } from 'react';

const faqs = [
  {
    question: "What is a secondary septic lateral line?",
    answer: "The secondary septic lateral line is part of your leach field. After wastewater leaves the septic tank (primary treatment), it flows into these perforated pipes to be filtered through gravel and soil (secondary treatment). If these lines fail, you may notice soggy spots or foul odors in your yard."
  },
  {
    question: "How deep should my outdoor hydrant be buried in Iowa?",
    answer: "In Ankeny and Central Iowa, the frost line can reach 4 to 5 feet. For a yard hydrant to be truly 'frost-proof,' the valve at the base must be buried at least 5 to 6 feet deep to ensure it can drain properly and not freeze during extreme winters."
  },
  {
    question: "Why is my yard hydrant leaking from the handle?",
    answer: "This is usually caused by a loose 'packing nut' or worn-out O-rings. In many cases, a simple adjustment can fix the leak, but if the internal plunger is damaged, a full repair kit may be necessary to restore a watertight seal."
  },
  {
    question: "Can you repair a septic line without digging up the whole yard?",
    answer: "Yes. Depending on the issue, we can often use biological rejuvenators to clear biomat clogs or perform localized repairs on specific damaged sections of the lateral line, saving you the cost of a full system replacement."
  }
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left focus:outline-none group"
      >
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {question}
        </h3>
        <svg 
          className={`w-6 h-6 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600 leading-relaxed animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Common concerns for Iowa farmhouse owners.</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
