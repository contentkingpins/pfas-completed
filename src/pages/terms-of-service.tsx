import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import StickyCallButton from '../components/Layout/StickyCallButton';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="font-sans bg-white">
      <Head>
        <title>Terms of Service | Claim Connectors</title>
        <meta name="description" content="Terms of Service for Claim Connectors explaining the terms governing your use of our services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Header />
      
      <main>
        <div className="container mx-auto py-12 px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <Link href="/" className="text-trustBlue hover:underline mb-6 inline-block">
              &larr; Back to Home
            </Link>
            
            <h1 className="text-3xl font-bold text-trustBlue mb-6">Terms of Service</h1>
            
            <div className="space-y-6">
              <p className="text-gray-600">
                <strong>Last Updated:</strong> May 5, 2025
              </p>
              
              <p>
                Welcome to the Claim Connectors website. By accessing or using our website, you agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
              
              <div>
                <h2 className="text-xl font-bold text-trustBlue mt-8 mb-3">Agreement to Terms</h2>
                <p>
                  By accessing or using the Claim Connectors website, you agree to be bound by these Terms of Service. If you do not agree to these Terms, you should not use our website.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-trustBlue mt-8 mb-3">Description of Services</h2>
                <p>
                  Claim Connectors provides information about PFAS contamination and connects individuals who may have been affected by PFAS contamination with legal representation. We are not a law firm but work with affiliated attorneys and law firms.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-trustBlue mt-8 mb-3">Eligibility</h2>
                <p>
                  To use our services, you must be at least 18 years of age and capable of forming legally binding contracts. By using our website, you represent and warrant that you meet these requirements.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-trustBlue mt-8 mb-3">No Attorney-Client Relationship</h2>
                <p>
                  The information provided on this website is for general informational purposes only and should not be considered legal advice. No attorney-client relationship is formed by your use of this website or by submitting information through our forms.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-trustBlue mt-8 mb-3">User Information</h2>
                <p>
                  When you submit information through our website, you agree to provide truthful, accurate, and complete information. You are responsible for maintaining the confidentiality of any account information or passwords.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-trustBlue mt-8 mb-3">Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, images, and software, is the property of Claim Connectors or its content suppliers and is protected by United States and international copyright laws.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-trustBlue mt-8 mb-3">Limitation of Liability</h2>
                <p>
                  Claim Connectors will not be liable for any damages arising from the use of our website or services. This includes direct, indirect, incidental, punitive, and consequential damages.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-trustBlue mt-8 mb-3">Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. Your continued use of the website after any such changes constitutes your acceptance of the new Terms.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-trustBlue mt-8 mb-3">Contact Us</h2>
                <p>
                  If you have questions about these Terms of Service, please contact us at:
                </p>
                <p className="mt-2">
                  <strong>Claim Connectors</strong><br />
                  Email: terms@claimconnectors.com
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

export default TermsOfServicePage; 