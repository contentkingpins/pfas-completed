# PFAS Claim Center

A professional website for legal intake focused on helping individuals determine if they've been exposed to PFAS-contaminated water ("forever chemicals") and guiding them toward legal help and compensation.

## Overview

This site is built using:
- Next.js (React framework)
- TypeScript for type safety
- TailwindCSS for styling
- AWS S3 for image storage
- Responsive, mobile-first design

## Project Structure

```
src/
├── components/
│   ├── Forms/          # Form components
│   ├── Layout/         # Layout components (Header, Footer)
│   ├── Sections/       # Page sections
│   └── UI/             # Reusable UI components
├── pages/
│   ├── api/            # API routes for backend functionality
│   ├── admin/          # Admin dashboard and image uploads
│   └── ...             # Main site pages
└── styles/             # Global styles
```

## Features

- Professional, trust-building design with legal-focused color scheme
- Mobile-responsive layout
- Clean, accessible UI
- Intake form with validation
- Educational content about PFAS chemicals
- Case results showcase
- Client testimonials
- FAQ section with collapsible items
- Admin area with image upload functionality

## Image Upload System

The site includes an admin interface for uploading and managing images:
- Access via `/admin` and navigate to "Image Uploads"
- Upload images up to 5MB (JPEG, PNG, GIF, WEBP formats)
- View, copy URLs, and delete uploaded images
- Optional AWS S3 integration for production

### AWS S3 Integration (Production Setup)

1. Create an S3 bucket in your AWS account
2. Set the bucket permissions to allow public read access
3. Create an IAM user with S3 write permissions
4. Copy `.env.template` to `.env.local` and add your AWS credentials
5. Uncomment the S3 upload code in `src/pages/admin/uploads.tsx`

## Development

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pfas-claim-center.git
cd pfas-claim-center
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create environment file for AWS integration (optional):
```bash
cp .env.template .env.local
# Edit .env.local with your AWS credentials
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

The site is configured for deployment on AWS Amplify:

1. Connect repository to AWS Amplify
2. Configure build settings:
   - Build command: `npm run build` or `yarn build`
   - Output directory: `build`
3. Set up environment variables for AWS S3 if using image upload
4. Deploy

## License

This project is proprietary. All rights reserved.

## Contact

For questions or support, please contact:
- Email: info@pfasclaimcenter.com
- Phone: 1-800-555-1234 