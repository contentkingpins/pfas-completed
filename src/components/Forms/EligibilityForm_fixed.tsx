import React, { useState } from 'react';
import Button from '../UI/Button';

interface FormData {
  fullName: string;
  zipCode: string;
  phone: string;
}

interface FormErrors {
  fullName?: string;
  zipCode?: string;
  phone?: string;
}

// Updated API Gateway URL with console log
const API_ENDPOINT = 'https://wtrq7vmbmj.execute-api.us-east-1.amazonaws.com/prod/submissions';

// Double checking the API endpoint with a very visible log
console.log('================================================');
console.log('API ENDPOINT:', API_ENDPOINT);
console.log('================================================');

// A simple global test function to verify direct API calls work
// This can be called from the browser console: testApiEndpoint()
(window as any).testApiEndpoint = async () => {
  console.log('Testing API endpoint:', API_ENDPOINT);
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        fullName: 'Test User',
        zipCode: '12345',
        phone: '555-555-5555'
      })
    });
    console.log('API test response status:', response.status);
    const data = await response.json();
    console.log('API test response data:', data);
    return data;
  } catch (error) {
    console.error('API test error:', error);
    return error;
  }
};

const EligibilityForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    zipCode: '',
    phone: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // For zip code, only allow numbers and limit to 5 characters
    if (name === 'zipCode') {
      const numericValue = value.replace(/\\D/g, '').slice(0, 5);
      setFormData({ ...formData, [name]: numericValue });
      return;
    }
    
    // For phone, format as user types
    if (name === 'phone') {
      const digits = value.replace(/\\D/g, '');
      let formattedPhone = '';
      
      if (digits.length <= 3) {
        formattedPhone = digits;
      } else if (digits.length <= 6) {
        formattedPhone = `${digits.slice(0, 3)}-${digits.slice(3)}`;
      } else {
        formattedPhone = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
      }
      
      setFormData({ ...formData, [name]: formattedPhone });
      return;
    }
    
    // Default handler for other fields
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): boolean => {
    console.log('Running form validation');
    const newErrors: FormErrors = {};
    
    // Validate name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    }
    
    // Validate zip code
    if (!formData.zipCode) {
      newErrors.zipCode = 'Zip code is required';
    } else if (formData.zipCode.length !== 5) {
      newErrors.zipCode = 'Zip code must be 5 digits';
    }
    
    // Validate phone
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else {
      // Check if phone has enough digits (10) after removing non-digits
      const phoneDigits = formData.phone.replace(/\\D/g, '');
      if (phoneDigits.length !== 10) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
      }
    }
    
    console.log('Validation errors:', newErrors);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission started');
    console.log('Current form data:', formData);
    setSubmitError(null);
    
    if (validateForm()) {
      console.log('Form validation passed');
      setIsSubmitting(true);
      console.log('Submitting form to:', API_ENDPOINT);
      console.log('Form data being sent:', JSON.stringify(formData));
      
      try {
        console.log('Attempting fetch...');
        // Submit to our API Gateway endpoint
        const response = await fetch(API_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        console.log('Fetch call completed.');
        console.log('API Response received:', response.status);
        
        const result = await response.json();
        
        console.log('API Result:', result);
        
        if (!response.ok) {
          throw new Error(result.message || 'Failed to submit form');
        }
        
        console.log('Form submission successful:', result);
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Clear form after submission
        setFormData({
          fullName: '',
          zipCode: '',
          phone: '',
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        setIsSubmitting(false);
        setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred');
      }
    } else {
      console.log('Form validation failed', errors);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-6 bg-safetyGreen bg-opacity-20 rounded-lg">
        <h3 className="text-xl font-bold text-trustBlue mb-2">Thank You!</h3>
        <p className="mb-4">
          Your eligibility check has been submitted. One of our legal representatives will contact you 
          shortly to discuss your potential PFAS claim.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)} 
          variant="secondary"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-safetyGreen focus:border-safetyGreen ${
            errors.fullName ? 'border-warningRed' : 'border-gray-300'
          }`}
          placeholder="John Smith"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-warningRed">{errors.fullName}</p>
        )}
      </div>

      <div>
        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
          Zip Code
        </label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-safetyGreen focus:border-safetyGreen ${
            errors.zipCode ? 'border-warningRed' : 'border-gray-300'
          }`}
          placeholder="12345"
          maxLength={5}
        />
        {errors.zipCode && (
          <p className="mt-1 text-sm text-warningRed">{errors.zipCode}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-safetyGreen focus:border-safetyGreen ${
            errors.phone ? 'border-warningRed' : 'border-gray-300'
          }`}
          placeholder="123-456-7890"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-warningRed">{errors.phone}</p>
        )}
      </div>

      {submitError && (
        <div className="p-3 bg-warningRed bg-opacity-10 text-warningRed rounded-lg">
          {submitError}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Processing...' : 'Check Eligibility'}
      </Button>
      
      <p className="text-xs text-gray-500 mt-2">
        By submitting this form, you agree to be contacted by our legal team 
        regarding your potential PFAS claim. We respect your privacy and will 
        never share your information with third parties.
      </p>
    </form>
  );
};

export default EligibilityForm; 