import React from 'react';
import testimonialsData from '../../assets/data/testimonials.json'; // Import testimonials
import Card from '../UI/Card'; // Import Card

// Updated placeholder paths
const badgeBillion = '/images/badge-billion.png'; 
const badgeLegalTeam = '/images/badge-legal-team.png';
const badgeAsSeenOn = '/images/badge-as-seen-on.png';

const TrustedByThousands = () => {
  // Function to handle image loading errors for placeholders
  const handleImageError = (e) => {
    e.target.style.display = 'none'; // Hide broken image icon
    // Optional: Show text more prominently if image fails
    const parent = e.target.parentElement;
    if (parent) {
        parent.querySelector('p').classList.add('font-semibold', 'text-lg'); 
    }
  };
  
  return (
    <section className="py-16 px-4 bg-light-gray">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-trust-blue mb-10">
          Trusted by Thousands Across the Nation
        </h2>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12">
          <div className="text-center p-2 rounded border border-gray-200 min-w-[150px]">
            <img 
              src={badgeBillion} 
              alt="Over $1 Billion Recovered" 
              className="h-20 mx-auto mb-2 object-contain" 
              onError={handleImageError} // Handle loading errors
            />
            <p className="text-sm text-gray-600">Over $1 Billion Recovered</p>
          </div>
          <div className="text-center p-2 rounded border border-gray-200 min-w-[150px]">
            <img 
              src={badgeLegalTeam} 
              alt="Top Legal Team" 
              className="h-20 mx-auto mb-2 object-contain" 
              onError={handleImageError}
            />
            <p className="text-sm text-gray-600">Top Environmental Tort Team</p>
          </div>
          <div className="text-center p-2 rounded border border-gray-200 min-w-[150px]">
            <img 
              src={badgeAsSeenOn} 
              alt="As Seen On" 
              className="h-16 mx-auto mb-2 object-contain" 
              onError={handleImageError}
            /> 
            <p className="text-sm text-gray-600">As Seen On Major Networks</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonialsData.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              bg="white" 
              accentBorder="border-l-4 border-safety-green"
            >
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-trust-blue">- {testimonial.author}, {testimonial.location}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedByThousands; 