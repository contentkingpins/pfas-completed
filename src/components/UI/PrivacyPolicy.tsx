import React, { useState } from 'react';
import Modal from './Modal';

interface PrivacyPolicyProps {
  textLinkClass?: string;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ textLinkClass = "text-trustBlue hover:underline" }) => {
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
        Privacy Policy
      </a>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Privacy Policy"
      >
        <div className="privacy-policy-content space-y-4">
          <h3 className="text-lg font-bold">PFAS Claim Center Privacy Policy</h3>
          
          <p>
            Last Updated: May 2023
          </p>
          
          <p>
            At PFAS Claim Center, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or communicate with us.
          </p>
          
          <h4 className="text-md font-bold mt-4">Information We Collect</h4>
          
          <p>
            We collect personal information that you voluntarily provide to us when you:
          </p>
          
          <ul className="list-disc pl-5 space-y-1">
            <li>Fill out forms on our website</li>
            <li>Contact us by phone, email, or any other communication method</li>
            <li>Subscribe to our newsletter</li>
            <li>Request information about our services</li>
          </ul>
          
          <p>
            The personal information we collect may include:
          </p>
          
          <ul className="list-disc pl-5 space-y-1">
            <li>First and last name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Mailing address</li>
            <li>Zip code</li>
            <li>Information about your potential PFAS exposure</li>
          </ul>
          
          <h4 className="text-md font-bold mt-4">How We Use Your Information</h4>
          
          <p>
            We may use the information we collect in the following ways:
          </p>
          
          <ul className="list-disc pl-5 space-y-1">
            <li>To provide, operate, and maintain our website</li>
            <li>To evaluate your eligibility for a PFAS water contamination claim</li>
            <li>To connect you with affiliated attorneys or law firms</li>
            <li>To respond to your inquiries and requests</li>
            <li>To send you updates and information related to your case</li>
            <li>To improve our website and user experience</li>
            <li>To comply with legal obligations</li>
          </ul>
          
          <h4 className="text-md font-bold mt-4">Sharing Your Information</h4>
          
          <p>
            We may share your information with:
          </p>
          
          <ul className="list-disc pl-5 space-y-1">
            <li>Affiliated attorneys and law firms to help process your claim</li>
            <li>Service providers who assist us in operating our website and conducting our business</li>
            <li>Legal and regulatory authorities when required by law</li>
          </ul>
          
          <p>
            We do not sell, rent, or trade your personal information to third parties for marketing purposes.
          </p>
          
          <h4 className="text-md font-bold mt-4">Your Rights</h4>
          
          <p>
            You have the right to:
          </p>
          
          <ul className="list-disc pl-5 space-y-1">
            <li>Access the personal information we have about you</li>
            <li>Correct inaccuracies in your personal information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of communications from us</li>
          </ul>
          
          <h4 className="text-md font-bold mt-4">Contact Us</h4>
          
          <p>
            If you have questions about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          
          <p className="mt-2">
            <strong>PFAS Claim Center</strong><br />
            Phone: 833-998-6147<br />
            Email: privacy@pfasclaimcenter.com
          </p>
        </div>
      </Modal>
    </>
  );
};

export default PrivacyPolicy; 