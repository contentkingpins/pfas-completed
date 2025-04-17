import React, { useState } from 'react';
import Button from '../UI/Button'; // Import Button

const EligibilityForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    zip: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ error: null, success: false }); // { error: string | null, success: boolean }

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Basic phone formatting/input restriction (optional improvement)
    // if (name === 'phone') value = formatPhoneNumber(value);
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    // Clear previous submission status on new input
    setSubmitStatus({ error: null, success: false }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ error: null, success: false }); // Reset status

    const apiEndpoint = '/api/intake'; // Replace with your actual API endpoint

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle HTTP errors (e.g., 4xx, 5xx)
        throw new Error(result.message || `Server error: ${response.status}`);
      }

      if (result.success) {
        // Successful submission
        setSubmitStatus({ error: null, success: true });
        console.log('Form submitted successfully:', formData);
        // TODO: Trigger GTM event here for successful submission
        // window.dataLayer.push({ event: 'formSubmissionSuccess', formName: 'eligibility' });
        setFormData({ name: '', zip: '', phone: '' }); // Reset form
      } else {
        // Handle application-level errors indicated by the API response
        throw new Error(result.message || 'An unexpected error occurred.');
      }

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({ error: error.message || 'Failed to submit the form. Please try again.', success: false });
      // TODO: Trigger GTM event here for submission error
      // window.dataLayer.push({ event: 'formSubmissionError', formName: 'eligibility', errorMessage: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h3 className="text-xl font-semibold text-trust-blue mb-4 text-center">Check Your Eligibility Fast</h3>
      
      {/* Submission Status Messages */}
      {submitStatus.success && (
        <div className="bg-safety-green-light border border-safety-green text-trust-blue px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">Thank you! Your information has been submitted successfully. We will contact you shortly.</span>
        </div>
      )}
      {submitStatus.error && (
        <div className="bg-red-100 border border-warning-red text-warning-red px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{submitStatus.error}</span>
        </div>
      )}

      {/* Form Fields - Only show if not successfully submitted? Or keep visible? Keeping visible for now. */}
      {/* {!submitStatus.success && ( <> ... form fields ... </> )} */} 

      <div>
        <label htmlFor="name" className="sr-only">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          disabled={isSubmitting}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safety-green disabled:opacity-50 disabled:bg-gray-100"
        />
      </div>
      <div>
        <label htmlFor="zip" className="sr-only">Zip Code</label>
        <input
          type="text"
          id="zip"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          placeholder="Zip Code"
          required
          minLength="5" 
          maxLength="5" 
          pattern="[0-9]{5}"
          inputMode="numeric"
          disabled={isSubmitting}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safety-green disabled:opacity-50 disabled:bg-gray-100"
        />
      </div>
      <div>
        <label htmlFor="phone" className="sr-only">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number (e.g., 123-456-7890)"
          required
          // Add pattern for basic validation if desired: pattern="[0-9]{3}-?[0-9]{3}-?[0-9]{4}"
          disabled={isSubmitting}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safety-green disabled:opacity-50 disabled:bg-gray-100"
        />
      </div>

      {/* Use the Button component for submission */}
      <Button 
        type="submit"
        variant="primary"
        disabled={isSubmitting}
        className="w-full" // Ensure it takes full width
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </>
        ) : (
          'Check Eligibility Now'
        )}
      </Button>
    </form>
  );
};

export default EligibilityForm; 