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
          <h3 className="text-lg font-bold">Privacy Policy for Claim Connectors</h3>
          
          <p>
            Effective Date: May 5, 2025
          </p>
          
          <p>
            Claim Connectors ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy 
            describes how we collect, use, disclose, and protect your personal information when you use our website, 
            services, or submit your information through our Facebook Lead Forms.
          </p>
          
          <h4 className="text-md font-bold mt-4">1. Information We Collect</h4>
          
          <p>
            When you submit your information through one of our lead forms or contact us directly, we may collect:
          </p>
          
          <ul className="list-disc pl-5 space-y-1">
            <li>Full Name</li>
            <li>Phone Number</li>
            <li>Email Address</li>
            <li>Location (ZIP code, state)</li>
            <li>Legal case details (e.g. diagnosis, year of diagnosis, water exposure history)</li>
          </ul>
          
          <h4 className="text-md font-bold mt-4">2. How We Use Your Information</h4>
          
          <p>
            We collect this information for the purpose of:
          </p>
          
          <ul className="list-disc pl-5 space-y-1">
            <li>Providing you with a free legal case evaluation</li>
            <li>Connecting you with a licensed attorney or law firm for possible representation</li>
            <li>Following up by phone, email, or text message (standard message rates may apply)</li>
            <li>Improving our services and advertising effectiveness</li>
          </ul>
          
          <h4 className="text-md font-bold mt-4">3. How We Share Your Information</h4>
          
          <p>
            We may share your information with:
          </p>
          
          <ul className="list-disc pl-5 space-y-1">
            <li>Our partner law firms or legal intake teams to evaluate your claim</li>
            <li>Service providers who help us manage leads or perform marketing tasks</li>
          </ul>
          
          <p>
            We do not sell your personal information.
          </p>
          
          <h4 className="text-md font-bold mt-4">4. Your Choices</h4>
          
          <p>
            You may opt out of further contact at any time by:
          </p>
          
          <ul className="list-disc pl-5 space-y-1">
            <li>Clicking "unsubscribe" in our emails</li>
            <li>Replying "STOP" to any text message</li>
            <li>Contacting us at privacy@claimconnectors.com</li>
          </ul>
          
          <h4 className="text-md font-bold mt-4">5. Data Security</h4>
          
          <p>
            We implement reasonable safeguards to protect your data, but no system can be guaranteed 100% secure.
          </p>
          
          <h4 className="text-md font-bold mt-4">6. Children's Privacy</h4>
          
          <p>
            Our services are not intended for individuals under 18. We do not knowingly collect data from minors.
          </p>
          
          <h4 className="text-md font-bold mt-4">7. Policy Updates</h4>
          
          <p>
            We may update this Privacy Policy at any time. The most recent version will always be posted with an updated effective date.
          </p>
          
          <h4 className="text-md font-bold mt-4">8. Contact Us</h4>
          
          <p>
            For privacy-related questions or requests, contact:
          </p>
          
          <p className="mt-2">
            <strong>Claim Connectors</strong><br />
            Email: privacy@claimconnectors.com
          </p>
        </div>
      </Modal>
    </>
  );
};

export default PrivacyPolicy; 