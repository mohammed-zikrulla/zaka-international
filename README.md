# Zaka International - Spice & Agricultural Export Website

Premium B2B platform for Zaka International, a wholesaler and exporter of Indian spices and agricultural commodities.

## Features

- **Premium Hero Section**: Autoplay carousel with high-quality imagery and engaging content.
- **Product Catalog**: Showcase of premium Indian spices and agricultural products.
- **Trust & Stats**: Business highlights showing experience and global reach.
- **About Us**: Detailed company heritage and quality sourcing information.
- **Responsive Design**: Optimized for all devices from mobile to desktop.
- **Contact Integration**: Business inquiry form for international buyers.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: Wouter
- **State Management**: TanStack Query

## Project Structure

- `client/src/components`: Reusable UI components (Carousel, Navigation, Footer, etc.)
- `client/src/pages`: Main application pages (Home, Products, About, Contact)
- `server/routes.ts`: API endpoints for product data and inquiries
- `shared/schema.ts`: Database models and validation schemas

## Development Commands

### Start the Application
To run both the frontend and backend in development mode:
```bash
npm run dev
```

### Database Management
Push schema changes to the database:
```bash
npm run db:push
```

Open the database studio to view/edit data:
```bash
npm run db:studio
```

### Testing
Run the project's test suite:
```bash
npm test
```

### Build
Generate a production build:
```bash
npm run build
```

## How to Use

1. **View Products**: Navigate to the Products page to see the full catalog.
2. **Contact Business**: Use the contact form to send inquiries or request quotes.
3. **Theme Toggle**: Switch between light and dark modes using the theme toggle in the header.
