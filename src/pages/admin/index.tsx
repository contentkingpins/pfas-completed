import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

export default function AdminDashboard() {
  return (
    <div className="font-sans bg-lightGray min-h-screen">
      <Head>
        <title>Admin Dashboard | PFAS Claim Center</title>
        <meta name="description" content="Admin dashboard for PFAS Claim Center" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      
      <main className="container mx-auto py-10 px-4">
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h1 className="text-2xl font-bold text-trustBlue mb-6">Admin Dashboard</h1>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/admin/uploads" className="block p-6 bg-trustBlue text-white rounded-lg hover:bg-trustBlue-dark transition-colors">
              <h2 className="text-xl font-semibold mb-2">Image Uploads</h2>
              <p>Upload and manage images for the PFAS Claim Center website</p>
            </Link>
            
            <div className="p-6 bg-gray-100 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-500 mb-2">Content Management</h2>
              <p className="text-gray-500">Manage website content (coming soon)</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-trustBlue mb-4">Quick Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-safetyGreen bg-opacity-10 p-4 rounded-lg">
              <p className="text-lg font-semibold text-trustBlue">Images</p>
              <p className="text-2xl font-bold text-safetyGreen">-</p>
            </div>
            <div className="bg-safetyGreen bg-opacity-10 p-4 rounded-lg">
              <p className="text-lg font-semibold text-trustBlue">Form Submissions</p>
              <p className="text-2xl font-bold text-safetyGreen">-</p>
            </div>
            <div className="bg-safetyGreen bg-opacity-10 p-4 rounded-lg">
              <p className="text-lg font-semibold text-trustBlue">Site Visitors</p>
              <p className="text-2xl font-bold text-safetyGreen">-</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 