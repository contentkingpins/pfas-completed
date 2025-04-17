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

const EligibilityForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    zipCode: '',
    phone: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // For zip code, only allow numbers and limit to 5 characters
    if (name === 'zipCode') {
      const numericValue = value.replace(/\D/g, '').slice(0, 5);
      setFormData({ ...formData, [name]: numericValue });
      return;
    }
    
    // For phone, format as user types
    if (name === 'phone') {
      const digits = value.replace(/\D/g, '');
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
      const phoneDigits = formData.phone.replace(/\D/g, '');
      if (phoneDigits.length !== 10) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission with a delay
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Clear form after submission
        setFormData({
          fullName: '',
          zipCode: '',
          phone: '',
        });
      }, 1500);
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