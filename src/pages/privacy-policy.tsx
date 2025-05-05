import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import StickyCallButton from '../components/Layout/StickyCallButton';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="font-sans bg-white">
      <Head>
        <title>Privacy Policy | Claim Connectors</title>
        <meta name="description" content="Privacy Policy for Claim Connectors explaining how we collect, use, and protect your personal information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Header />
      
      <main>
        <div className="container mx-auto py-12 px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <Link href="/" className="text-trustBlue hover:underline mb-6 inline-block">
              &larr; Back to Home
            </Link>
            
            <h1 className="text-3xl font-bold text-trustBlue mb-6">Privacy Policy for Claim Connectors</h1>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                <strong>Effective Date:</strong> May 5, 2025
              </p>
              
              <p>
                Claim Connectors ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy 
                describes how we collect, use, disclose, and protect your personal information when you use our website, 
                services, or submit your information through our Facebook Lead Forms.
              </p>
              
              <div>
                <h2 className="text-xl font-bold text-trustBlue mt-8 mb-3">1. Information We Collect</h2>
                <p>
                  When you submit your information through one of our lead forms or contact us directly, we may collect:
                </p>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>Full Name</li>
                  <li>Phone Number</li>
                  <li>Email Address</li>
                  <li>Location (ZIP code, state)</li>
                  <li>Legal case details (e.g. diagnosis, year of diagnosis, water exposure history)</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-trustBlue mt-8 mb-3">2. How We Use Your Information</h2>
                <p>
                  We collect this information for the purpose of:
                </p>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>Providing you with a free legal case evaluation</li>
                  <li>Connecting you with a licensed attorney or law firm for possible representation</li>
                  <li>Following up by phone, email, or text message (standard message rates may apply)</li>
                  <li>Improving our services and advertising effectiveness</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-trustBlue mt-8 mb-3">3. How We Share Your Information</h2>
                <p>
                  We may share your information with:
                </p>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>Our partner law firms or legal intake teams to evaluate your claim</li>
                  <li>Service providers who help us manage leads or perform marketing tasks</li>
                </ul>
                <p className="mt-2">
                  We do not sell your personal information.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-trustBlue mt-8 mb-3">4. Your Choices</h2>
                <p>
                  You may opt out of further contact at any time by:
                </p>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>Clicking "unsubscribe" in our emails</li>
                  <li>Replying "STOP" to any text message</li>
                  <li>Contacting us at privacy@claimconnectors.com</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-trustBlue mt-8 mb-3">5. Data Security</h2>
                <p>
                  We implement reasonable safeguards to protect your data, but no system can be guaranteed 100% secure.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-trustBlue mt-8 mb-3">6. Children's Privacy</h2>
                <p>
                  Our services are not intended for individuals under 18. We do not knowingly collect data from minors.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-trustBlue mt-8 mb-3">7. Policy Updates</h2>
                <p>
                  We may update this Privacy Policy at any time. The most recent version will always be posted with an updated effective date.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-trustBlue mt-8 mb-3">8. Contact Us</h2>
                <p>
                  For privacy-related questions or requests, contact:
                </p>
                <p className="mt-2">
                  <strong>Claim Connectors</strong><br />
                  Email: privacy@claimconnectors.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default PrivacyPolicyPage; 