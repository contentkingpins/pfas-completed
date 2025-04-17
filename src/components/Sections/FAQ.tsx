import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What exactly are PFAS chemicals?",
    answer: "PFAS (Per- and polyfluoroalkyl substances) are a group of man-made chemicals that have been manufactured and used in various industries since the 1940s. They're found in many consumer products like non-stick cookware, waterproof clothing, stain-resistant fabrics, and certain firefighting foams. They're called 'forever chemicals' because they don't break down naturally in the environment or in your body."
  },
  {
    id: 2,
    question: "How do I know if I've been exposed to PFAS?",
    answer: "PFAS exposure typically happens through contaminated drinking water, using products containing PFAS, or eating food grown in contaminated soil. The only way to know for certain is through blood testing or water testing. However, if you live near industrial facilities, military bases, or airports that used firefighting foam, you may be at higher risk. Our legal team can help determine if you're in a known contamination zone."
  },
  {
    id: 3,
    question: "What health problems are linked to PFAS exposure?",
    answer: "PFAS exposure has been linked to several serious health conditions including kidney cancer, testicular cancer, thyroid disease, high cholesterol, ulcerative colitis, pregnancy-induced hypertension, liver damage, and weakened immune system response. The scientific evidence connecting PFAS to these conditions continues to grow."
  },
  {
    id: 4,
    question: "Who qualifies for a PFAS lawsuit?",
    answer: "You may qualify if: (1) You've been exposed to PFAS-contaminated water, (2) You live in or previously lived in an area with known PFAS contamination, (3) You've been diagnosed with a condition linked to PFAS exposure, or (4) You have property that has decreased in value due to PFAS contamination. Our free eligibility check can help determine if you have a valid claim."
  },
  {
    id: 5,
    question: "How much compensation can I receive?",
    answer: "Compensation varies widely depending on factors such as the severity of your exposure, any health conditions you've developed, property damage, and other damages. Our clients have received settlements ranging from thousands to millions of dollars. We can provide a better estimate after reviewing your specific case details."
  },
  {
    id: 6,
    question: "How long do PFAS lawsuits take?",
    answer: "The timeline for PFAS lawsuits varies. Individual cases may resolve in months, while complex class actions can take several years. We work diligently to expedite your case while maximizing your compensation. Many cases settle without going to trial, which can speed up the process."
  },
  {
    id: 7,
    question: "What does it cost to hire a lawyer for my PFAS case?",
    answer: "We work on a contingency fee basis, which means you pay nothing upfront. We only get paid if we win your case, at which point we receive a percentage of the recovery. This ensures our interests are aligned with yours, and you don't take on any financial risk."
  }
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  
  const toggleItem = (id: number) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter(itemId => itemId !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };
  
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trustBlue mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about PFAS contamination and your legal options.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <div key={item.id} className="mb-4 border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleItem(item.id)}
                className="flex justify-between items-center w-full text-left font-semibold text-trustBlue hover:text-trustBlue-dark focus:outline-none transition-colors p-2"
              >
                <span>{item.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openItems.includes(item.id) ? 'rotate-180' : ''
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {openItems.includes(item.id) && (
                <div className="mt-2 text-gray-600 pl-2">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Have other questions? Call us for a free consultation:
          </p>
          <p className="text-xl font-bold text-trustBlue mt-2">
            1-800-555-1234
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 