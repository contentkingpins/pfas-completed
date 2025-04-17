import React from 'react';
import awardsData from '../../assets/data/awards.json'; // Import awards data
import Button from '../UI/Button'; // Import Button
import Card from '../UI/Card'; // Import Card

const ClientWins = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-trust-blue mb-10">
          Proven Results: Fighting for Compensation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {awardsData.map((award) => (
            <Card 
              key={award.id} 
              bg="light-gray" 
              accentBorder="border-t-4 border-safety-green" 
              className="text-center"
            >
              <p className="text-4xl font-bold text-safety-green mb-2">{award.amount}</p>
              <p className="text-gray-700">{award.description}</p>
            </Card>
          ))}
          <Card 
            bg="white"
            className="bg-trust-blue text-white text-center flex flex-col justify-center items-center"
          >
            <p className="text-xl font-semibold mb-2">Discuss Your Case</p>
            <p className="text-sm mb-4">Free & Confidential Consultation</p>
            <Button 
              href="tel:+18005551234" 
              variant="warning"
              size="small"
              className="bg-white text-trust-blue hover:bg-gray-100"
            >
              Call 1-800-555-1234
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ClientWins; 