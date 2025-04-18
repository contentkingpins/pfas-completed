import React from 'react';
import Card from '../UI/Card';

interface CaseResult {
  id: number;
  amount: string;
  description: string;
  location: string;
}

const caseResults: CaseResult[] = [
  {
    id: 1,
    amount: "$54M",
    description: "Awarded for water contamination class action",
    location: "Ohio"
  },
  {
    id: 2,
    amount: "$28M",
    description: "Settlement for manufacturing plant pollution",
    location: "Michigan"
  },
  {
    id: 3,
    amount: "$17.5M",
    description: "Recovered for firefighting foam exposure",
    location: "Pennsylvania"
  },
  {
    id: 4,
    amount: "$1.2M",
    description: "Secured for family with cancer linked to PFAS",
    location: "New York"
  },
  {
    id: 5,
    amount: "$850K",
    description: "Individual settlement for kidney cancer patient",
    location: "Florida"
  },
  {
    id: 6,
    amount: "$110M",
    description: "Ongoing municipal water system remediation",
    location: "North Carolina"
  }
];

const ClientWins: React.FC = () => {
  return (
    <section id="case-results" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trustBlue mb-4">
            Real Results for PFAS Victims
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've helped thousands of people affected by PFAS contamination get the compensation they deserve.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseResults.map((result) => (
            <Card key={result.id} className="transform transition-transform hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-trustBlue text-white p-3 rounded-lg text-center min-w-[100px] flex items-center justify-center">
                  <span className="block text-xl md:text-2xl font-bold whitespace-nowrap">{result.amount}</span>
                </div>
                <div>
                  <h3 className="font-bold text-trustBlue text-lg">{result.description}</h3>
                  <p className="text-gray-600">{result.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-safetyGreen bg-opacity-10 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-trustBlue mb-4">Total Recovered: $1+ Billion</h3>
          <p className="text-lg text-gray-700 mb-6">
            Our legal team has secured over one billion dollars in settlements and verdicts for PFAS victims.
            You may be entitled to significant compensation if you've been exposed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-3xl font-bold text-trustBlue mb-2">$850M+</div>
              <p className="text-gray-600">In class action settlements</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-3xl font-bold text-trustBlue mb-2">$150M+</div>
              <p className="text-gray-600">In individual claims</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-3xl font-bold text-trustBlue mb-2">5,000+</div>
              <p className="text-gray-600">Families helped</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientWins; 