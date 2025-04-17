# PFAS Claim Center

A professional website for legal intake focused on helping individuals determine if they've been exposed to PFAS-contaminated water ("forever chemicals") and guiding them toward legal help and compensation.

## Overview

This site is built using:
- Next.js (React framework)
- TypeScript for type safety
- TailwindCSS for styling
- Responsive, mobile-first design

## Project Structure

```
src/
├── components/
│   ├── Forms/          # Form components
│   ├── Layout/         # Layout components (Header, Footer)
│   ├── Sections/       # Page sections
│   └── UI/             # Reusable UI components
├── pages/              # Next.js pages
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

## Planned Features (Not Yet Implemented)

- Geo-location service using AWS Location Services
- PFAS contamination hot zone detection
- Admin dashboard for lead management
- Email/push notification system

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

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

The site is configured for deployment on AWS Amplify:

1. Connect repository to AWS Amplify
2. Configure build settings:
   - Build command: `npm run build` or `yarn build`
   - Output directory: `.next`
3. Set up environment variables as needed
4. Deploy

## License

This project is proprietary. All rights reserved.

## Contact

For questions or support, please contact:
- Email: info@pfasclaimcenter.com
- Phone: 1-800-555-1234 