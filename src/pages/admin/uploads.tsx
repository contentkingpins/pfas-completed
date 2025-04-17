import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';

// Interface for uploaded image objects
interface UploadedImage {
  id: string;
  name: string;
  url: string;
  uploadDate: string;
  size: number;
}

export default function UploadsPage() {
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load images from localStorage on mount (in a real app, this would come from S3/database)
  useEffect(() => {
    const savedImages = localStorage.getItem('uploadedImages');
    if (savedImages) {
      try {
        setUploadedImages(JSON.parse(savedImages));
      } catch (e) {
        console.error('Error loading saved images:', e);
      }
    }
  }, []);

  // Save to localStorage when images change (in a real app, this would be in a database)
  useEffect(() => {
    localStorage.setItem('uploadedImages', JSON.stringify(uploadedImages));
  }, [uploadedImages]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    setErrorMessage(null);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous messages
    setErrorMessage(null);
    setSuccessMessage(null);
    
    if (!selectedFile) {
      setErrorMessage('Please select a file to upload');
      return;
    }
    
    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(selectedFile.type)) {
      setErrorMessage('Please select a valid image file (JPEG, PNG, GIF, or WEBP)');
      return;
    }
    
    // Validate file size (max 5MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setErrorMessage('File size must be less than 5MB');
      return;
    }
    
    setUploading(true);
    
    try {
      // For demo purposes, we'll create a local URL
      // In production, you would upload to AWS S3 here
      const reader = new FileReader();
      
      reader.onload = () => {
        const now = new Date();
        const newImage: UploadedImage = {
          id: `img_${Date.now()}`,
          name: selectedFile.name,
          url: reader.result as string,
          uploadDate: now.toISOString(),
          size: selectedFile.size
        };
        
        setUploadedImages(prev => [newImage, ...prev]);
        setSelectedFile(null);
        setSuccessMessage('Image uploaded successfully!');
        
        // Reset file input
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        
        setUploading(false);
      };
      
      reader.onerror = () => {
        setErrorMessage('Error reading file');
        setUploading(false);
      };
      
      reader.readAsDataURL(selectedFile);
      
      /* 
      // AWS S3 Upload Code (would be used in production)
      // This requires AWS SDK and proper configuration
      
      const s3 = new AWS.S3({
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
        region: process.env.NEXT_PUBLIC_AWS_REGION
      });
      
      const params = {
        Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
        Key: `uploads/${Date.now()}-${selectedFile.name}`,
        Body: selectedFile,
        ContentType: selectedFile.type,
        ACL: 'public-read'
      };
      
      const { Location } = await s3.upload(params).promise();
      
      const newImage = {
        id: `img_${Date.now()}`,
        name: selectedFile.name,
        url: Location,
        uploadDate: new Date().toISOString(),
        size: selectedFile.size
      };
      
      setUploadedImages(prev => [newImage, ...prev]);
      setSelectedFile(null);
      setSuccessMessage('Image uploaded successfully!');
      */
      
    } catch (error) {
      console.error('Upload error:', error);
      setErrorMessage('Error uploading image');
      setUploading(false);
    }
  };

  const handleDeleteImage = (id: string) => {
    // In production, this would also delete from S3
    setUploadedImages(prev => prev.filter(img => img.id !== id));
    setSuccessMessage('Image deleted successfully');
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' bytes';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <div className="font-sans bg-lightGray min-h-screen">
      <Head>
        <title>Image Uploads | PFAS Claim Center Admin</title>
        <meta name="description" content="Upload and manage images for the PFAS Claim Center website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      
      <main className="container mx-auto py-10 px-4">
        <div className="mb-6 flex items-center">
          <Link href="/admin" className="text-trustBlue hover:underline flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </Link>
        </div>
        
        <Card elevated className="mb-8">
          <h1 className="text-2xl font-bold text-trustBlue mb-6">Image Uploads</h1>
          
          <form onSubmit={handleUpload} className="mb-6">
            <div className="mb-4">
              <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700 mb-2">
                Select Image to Upload
              </label>
              <input
                type="file"
                id="fileUpload"
                ref={fileInputRef}
                accept="image/jpeg,image/png,image/gif,image/webp"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-trustBlue file:text-white
                  hover:file:bg-trustBlue-dark
                  cursor-pointer"
              />
              <p className="mt-1 text-sm text-gray-500">
                Accepted formats: JPEG, PNG, GIF, WEBP. Max size: 5MB.
              </p>
            </div>
            
            {errorMessage && (
              <div className="mb-4 p-3 bg-warningRed bg-opacity-10 text-warningRed rounded-lg">
                {errorMessage}
              </div>
            )}
            
            {successMessage && (
              <div className="mb-4 p-3 bg-safetyGreen bg-opacity-10 text-safetyGreen rounded-lg">
                {successMessage}
              </div>
            )}
            
            <Button
              type="submit"
              disabled={!selectedFile || uploading}
              className={uploading ? 'opacity-75 cursor-not-allowed' : ''}
            >
              {uploading ? 'Uploading...' : 'Upload Image'}
            </Button>
          </form>
        </Card>
        
        <Card>
          <h2 className="text-xl font-bold text-trustBlue mb-4">Uploaded Images</h2>
          
          {uploadedImages.length === 0 ? (
            <p className="text-gray-500 italic">No images uploaded yet.</p>
          ) : (
            <div className="divide-y divide-gray-200">
              {uploadedImages.map(image => (
                <div key={image.id} className="py-4 flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center mb-3 md:mb-0">
                    <div className="w-16 h-16 flex-shrink-0 rounded bg-gray-100 overflow-hidden mr-4">
                      <img src={image.url} alt={image.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{image.name}</h3>
                      <p className="text-sm text-gray-500">
                        {formatFileSize(image.size)} · Uploaded on {formatDate(image.uploadDate)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => navigator.clipboard.writeText(image.url)}
                      className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300"
                    >
                      Copy URL
                    </button>
                    <a
                      href={image.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300"
                    >
                      View
                    </a>
                    <button
                      onClick={() => handleDeleteImage(image.id)}
                      className="inline-flex items-center px-3 py-1 border border-warningRed text-sm leading-5 font-medium rounded-md text-warningRed bg-white hover:bg-warningRed hover:text-white focus:outline-none"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </main>
      
      <Footer />
    </div>
  );
} 