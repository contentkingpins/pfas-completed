import React from 'react';
import Head from 'next/head';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

// Define the site images and their replaceable locations
const SITE_IMAGES = [
  {
    id: 'hero',
    name: 'Hero Background',
    description: 'Main hero image at the top of the page',
    path: '/images/hero-background.jpg',
    dimensions: '1920x1080px recommended'
  },
  {
    id: 'dirty-water',
    name: 'Contaminated Water',
    description: 'Image showing contaminated water for the "What is PFAS" section',
    path: '/images/contaminated-water.jpg',
    dimensions: '800x600px recommended'
  },
  {
    id: 'family',
    name: 'Family Image',
    description: 'Image of a concerned family for the "Who is at risk" section',
    path: '/images/family.jpg',
    dimensions: '800x600px recommended'
  },
  {
    id: 'testimonial1',
    name: 'Testimonial 1',
    description: 'First testimonial person image',
    path: '/images/testimonial1.jpg',
    dimensions: '400x400px square recommended'
  },
  {
    id: 'testimonial2',
    name: 'Testimonial 2',
    description: 'Second testimonial person image',
    path: '/images/testimonial2.jpg',
    dimensions: '400x400px square recommended'
  },
  {
    id: 'logo',
    name: 'Site Logo',
    description: 'Main logo for the PFAS Claim Center',
    path: '/images/logo.png',
    dimensions: '200x100px recommended, transparent background'
  }
];

export default function SiteImagesPage() {
  // This is a simple version - in a full app, this would handle actual file uploads
  return (
    <div className="font-sans bg-white">
      <Head>
        <title>Site Images | PFAS Claim Center</title>
        <meta name="description" content="Update site images for PFAS Claim Center" />
      </Head>

      <Header />
      
      <main className="container mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold text-trustBlue mb-8">Update Site Images</h1>
        <p className="mb-8 text-gray-600 max-w-3xl">
          This page lists all the main images used on the PFAS Claim Center website. To update an image, 
          you'll need to save the new image file with the exact same name as the current one and replace it in the 
          <code className="bg-lightGray px-2 py-1 rounded mx-1">public/images</code> folder.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_IMAGES.map(image => (
            <div key={image.id} className="bg-lightGray rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="font-semibold">Image Preview</p>
                  <p className="text-sm text-gray-500">(Save your new image with this same name)</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-trustBlue">{image.name}</h3>
                <p className="text-gray-700 mb-2">{image.description}</p>
                <div className="bg-white p-3 rounded border border-gray-300 text-sm font-mono mb-2">
                  {image.path}
                </div>
                <p className="text-sm text-gray-500">
                  Recommended size: {image.dimensions}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-trustBlue bg-opacity-5 rounded-lg">
          <h2 className="text-xl font-bold text-trustBlue mb-4">How to Update Images</h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-700">
            <li>Create or prepare your new image according to the recommended dimensions</li>
            <li>Name the file exactly as shown above (e.g., <code className="bg-white px-2 py-1 rounded">hero-background.jpg</code>)</li>
            <li>Replace the existing file in the <code className="bg-white px-2 py-1 rounded">public/images</code> folder</li>
            <li>The updated image will appear on the site after deployment</li>
          </ol>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 