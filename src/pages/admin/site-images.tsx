import React, { useState, useRef, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';

// Import the site images configuration
const SITE_IMAGES = [
  {
    id: 'hero',
    name: 'Hero Background',
    description: 'Large background image for the hero section',
    path: '/images/family concerned about pfas.jpg',
    recommendedDimensions: '1920x1080 pixels',
  },
  {
    id: 'contaminated-water',
    name: 'Contaminated Water',
    description: 'Image showing contaminated water for the What is PFAS section',
    path: '/images/3-dirty-water-glass.jpg',
    recommendedDimensions: '800x600 pixels',
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

// Interface for managing image upload state
interface ImageUploadState {
  [key: string]: {
    file: File | null;
    previewUrl: string | null;
    isUploading: boolean;
    error: string | null;
    success: string | null;
  }
}

export default function AdminSiteImagesPage() {
  // State to manage uploads for each image
  const [imageStates, setImageStates] = useState<ImageUploadState>({});
  
  // Initialize state for each image
  useEffect(() => {
    const initialState: ImageUploadState = {};
    SITE_IMAGES.forEach(image => {
      initialState[image.id] = {
        file: null,
        previewUrl: null,
        isUploading: false,
        error: null,
        success: null
      };
    });
    setImageStates(initialState);
  }, []);
  
  // Handle file selection for a specific image
  const handleFileChange = (imageId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    
    // Validate file type
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        setImageStates(prev => ({
          ...prev,
          [imageId]: {
            ...prev[imageId],
            file: null,
            previewUrl: null,
            error: 'Please select a valid image file (JPEG, PNG, GIF, or WEBP)',
            success: null
          }
        }));
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setImageStates(prev => ({
          ...prev,
          [imageId]: {
            ...prev[imageId],
            file: null,
            previewUrl: null,
            error: 'File size must be less than 5MB',
            success: null
          }
        }));
        return;
      }
      
      // Create a preview URL
      const previewUrl = URL.createObjectURL(file);
      
      setImageStates(prev => ({
        ...prev,
        [imageId]: {
          ...prev[imageId],
          file,
          previewUrl,
          error: null,
          success: null
        }
      }));
    }
  };
  
  // Handle upload for a specific image
  const handleUpload = async (imageId: string, targetPath: string) => {
    const imageState = imageStates[imageId];
    
    if (!imageState.file) {
      setImageStates(prev => ({
        ...prev,
        [imageId]: {
          ...prev[imageId],
          error: 'Please select a file to upload',
          success: null
        }
      }));
      return;
    }
    
    // Set uploading state
    setImageStates(prev => ({
      ...prev,
      [imageId]: {
        ...prev[imageId],
        isUploading: true,
        error: null,
        success: null
      }
    }));
    
    try {
      // In a real implementation, this would upload the file to a server
      // For this demo, we'll simulate a successful upload after a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful upload
      setImageStates(prev => ({
        ...prev,
        [imageId]: {
          ...prev[imageId],
          isUploading: false,
          success: `${imageState.file?.name || 'File'} uploaded successfully! The image will be available on the site after deployment.`,
          file: null
        }
      }));
      
      // In a production environment, you would:
      // 1. Create a FormData object
      // 2. Append the file with the correct name (extracted from targetPath)
      // 3. Send to a server endpoint that handles the file upload
      // 4. Update the UI based on the response
      
      /*
      const formData = new FormData();
      const fileName = targetPath.split('/').pop();
      formData.append('image', imageState.file, fileName);
      
      const response = await fetch('/api/upload-site-image', {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) {
        throw new Error('Failed to upload image');
      }
      
      setImageStates(prev => ({
        ...prev,
        [imageId]: {
          ...prev[imageId],
          isUploading: false,
          success: `${imageState.file.name} uploaded successfully!`,
          file: null
        }
      }));
      */
      
    } catch (error) {
      setImageStates(prev => ({
        ...prev,
        [imageId]: {
          ...prev[imageId],
          isUploading: false,
          error: `Failed to upload: ${error instanceof Error ? error.message : 'Unknown error'}`
        }
      }));
    }
  };
  
  // Clean up object URLs when component unmounts
  useEffect(() => {
    return () => {
      Object.values(imageStates).forEach(state => {
        if (state.previewUrl) {
          URL.revokeObjectURL(state.previewUrl);
        }
      });
    };
  }, [imageStates]);
  
  // Format file size for display
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' bytes';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };
  
  return (
    <div className="font-sans bg-lightGray min-h-screen">
      <Head>
        <title>Manage Site Images | PFAS Claim Center Admin</title>
        <meta name="description" content="Admin tool for managing site images" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Header />
      
      <main className="container mx-auto py-12 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-trustBlue mb-2">Manage Site Images</h1>
          <p className="text-gray-600">
            Upload new images for your website. Each image will replace the current one being used on the site.
          </p>
          <div className="mt-2">
            <Link href="/admin" className="text-trustBlue hover:underline">
              &larr; Back to Admin Dashboard
            </Link>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_IMAGES.map(image => (
            <Card key={image.id} elevated className="overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center relative">
                {/* Current image */}
                {!imageStates[image.id]?.previewUrl && (
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={image.path}
                      alt={image.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder-image.png'; // Fallback image
                        target.alt = 'Image not found';
                      }}
                    />
                  </div>
                )}
                
                {/* Preview of selected image */}
                {imageStates[image.id]?.previewUrl && (
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={imageStates[image.id].previewUrl as string}
                      alt="Preview"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                
                {/* Label for current or preview */}
                <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {imageStates[image.id]?.previewUrl ? 'Preview' : 'Current'}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg text-trustBlue mb-1">{image.name}</h3>
                <p className="text-gray-700 text-sm mb-2">{image.description}</p>
                <div className="bg-gray-100 p-2 rounded text-xs font-mono mb-2">
                  {image.path}
                </div>
                <p className="text-xs text-gray-500 mb-4">{image.recommendedDimensions}</p>
                
                <div className="mb-4">
                  <label 
                    htmlFor={`file-${image.id}`} 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Select new image
                  </label>
                  <input
                    type="file"
                    id={`file-${image.id}`}
                    accept="image/jpeg,image/png,image/gif,image/webp"
                    onChange={(e) => handleFileChange(image.id, e)}
                    className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-trustBlue file:text-white
                      hover:file:bg-trustBlue-dark
                      cursor-pointer"
                  />
                </div>
                
                {/* Error message */}
                {imageStates[image.id]?.error && (
                  <div className="mb-4 p-2 bg-warningRed bg-opacity-10 text-warningRed rounded text-sm">
                    {imageStates[image.id].error}
                  </div>
                )}
                
                {/* Success message */}
                {imageStates[image.id]?.success && (
                  <div className="mb-4 p-2 bg-safetyGreen bg-opacity-10 text-safetyGreen rounded text-sm">
                    {imageStates[image.id].success}
                  </div>
                )}
                
                <Button
                  onClick={() => handleUpload(image.id, image.path)}
                  disabled={!imageStates[image.id]?.file || imageStates[image.id]?.isUploading}
                  className="w-full"
                >
                  {imageStates[image.id]?.isUploading ? 'Uploading...' : 'Upload'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold text-trustBlue mb-4">Instructions for Site Images</h2>
          <ol className="list-decimal pl-5 space-y-3 text-gray-700">
            <li>Prepare your image according to the recommended dimensions for each image type</li>
            <li>Select the image file using the "Select new image" button for the specific image you want to replace</li>
            <li>Click "Upload" to save your changes</li>
            <li>The image will be available on the site after the next deployment</li>
          </ol>
          
          <div className="mt-6 p-4 bg-gray-100 rounded">
            <h3 className="font-semibold text-trustBlue mb-2">Best Practices for Site Images</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
              <li>Images should be optimized for web use to ensure fast loading times</li>
              <li>Use JPG format for photographs and PNG for graphics that need transparency</li>
              <li>Keep file sizes under 300KB when possible for better performance</li>
              <li>Use high-quality, relevant images that match your brand and message</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 