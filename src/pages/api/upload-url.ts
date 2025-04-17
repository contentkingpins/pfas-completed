// Note: This API route will only work if deployed to a server environment, not in static export mode
// For production, this would need to be moved to a serverless function (AWS Lambda, etc.)

import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { fileName, fileType } = req.body;

    if (!fileName || !fileType) {
      return res.status(400).json({ message: 'fileName and fileType are required' });
    }

    // Initialize S3 with credentials (in production, use IAM roles)
    const s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });

    // Generate a unique file key
    const key = `uploads/${Date.now()}-${fileName}`;

    // Parameters for the signed URL
    const params = {
      Bucket: process.env.S3_BUCKET_NAME || 'your-bucket-name',
      Key: key,
      Expires: 60, // URL expires in 60 seconds
      ContentType: fileType,
      ACL: 'public-read' // Makes the uploaded file publicly accessible
    };

    // Generate the presigned URL
    const url = s3.getSignedUrl('putObject', params);

    return res.status(200).json({
      url,
      key,
      uploadUrl: `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`
    });
  } catch (error) {
    console.error('Error generating upload URL:', error);
    return res.status(500).json({ message: 'Error generating upload URL' });
  }
} 