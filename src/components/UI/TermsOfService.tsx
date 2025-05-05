import React, { useState } from 'react';
import Modal from './Modal';

interface TermsOfServiceProps {
  textLinkClass?: string;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ textLinkClass = "text-trustBlue hover:underline" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <a 
        href="#" 
        onClick={openModal} 
        className={textLinkClass}
      >
        Terms of Service
      </a>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Terms of Service"
      >
        <div className="terms-content space-y-4">
          <h3 className="text-lg font-bold">PFAS Claim Center Terms of Service</h3>
          
          <p>
            Last Updated: May 2023
          </p>
          
          <p>
            Welcome to the PFAS Claim Center website. By accessing or using our website, you agree to be bound by these Terms of Service and our Privacy Policy.
          </p>
          
          <h4 className="text-md font-bold mt-4">Agreement to Terms</h4>
          
          <p>
            By accessing or using the PFAS Claim Center website, you agree to be bound by these Terms of Service. If you do not agree to these Terms, you should not use our website.
          </p>
          
          <h4 className="text-md font-bold mt-4">Description of Services</h4>
          
          <p>
            PFAS Claim Center provides information about PFAS contamination and connects individuals who may have been affected by PFAS contamination with legal representation. We are not a law firm but work with affiliated attorneys and law firms.
          </p>
          
          <h4 className="text-md font-bold mt-4">Eligibility</h4>
          
          <p>
            To use our services, you must be at least 18 years of age and capable of forming legally binding contracts. By using our website, you represent and warrant that you meet these requirements.
          </p>
          
          <h4 className="text-md font-bold mt-4">No Attorney-Client Relationship</h4>
          
          <p>
            The information provided on this website is for general informational purposes only and should not be considered legal advice. No attorney-client relationship is formed by your use of this website or by submitting information through our forms.
          </p>
          
          <h4 className="text-md font-bold mt-4">User Information</h4>
          
          <p>
            When you submit information through our website, you agree to provide truthful, accurate, and complete information. You are responsible for maintaining the confidentiality of any account information or passwords.
          </p>
          
          <h4 className="text-md font-bold mt-4">Intellectual Property</h4>
          
          <p>
            All content on this website, including text, graphics, logos, images, and software, is the property of PFAS Claim Center or its content suppliers and is protected by United States and international copyright laws.
          </p>
          
          <h4 className="text-md font-bold mt-4">Limitation of Liability</h4>
          
          <p>
            PFAS Claim Center will not be liable for any damages arising from the use of our website or services. This includes direct, indirect, incidental, punitive, and consequential damages.
          </p>
          
          <h4 className="text-md font-bold mt-4">Changes to Terms</h4>
          
          <p>
            We reserve the right to modify these Terms of Service at any time. Your continued use of the website after any such changes constitutes your acceptance of the new Terms.
          </p>
          
          <h4 className="text-md font-bold mt-4">Contact Us</h4>
          
          <p>
            If you have questions about these Terms of Service, please contact us at:
          </p>
          
          <p className="mt-2">
            <strong>PFAS Claim Center</strong><br />
            Phone: 833-998-6147<br />
            Email: terms@pfasclaimcenter.com
          </p>
        </div>
      </Modal>
    </>
  );
};

export default TermsOfService; 