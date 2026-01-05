# Zaka International - Spice & Agricultural Export Website

## Overview

This is a premium B2B business website for Zaka International, a wholesaler and exporter of Indian spices and agricultural commodities. The application is a full-stack TypeScript project with a React frontend and Express backend, designed to showcase products, build trust with international buyers, and capture business inquiries through a contact form.

The site follows a premium, elegant design aesthetic with earthy spice tones (saffron, deep brown, olive green) and features a product catalog, company information, and contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for page transitions and scroll effects
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Build System**: Vite for frontend, esbuild for server bundling
- **API Pattern**: Simple REST endpoints defined in `shared/routes.ts`
- **Development**: Hot module replacement via Vite middleware

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` contains table definitions
- **Migrations**: Drizzle Kit for schema management (`drizzle-kit push`)

### Project Structure
```
client/           # React frontend
  src/
    components/   # Reusable UI components
    pages/        # Route pages (Home, Products, About, Contact)
    hooks/        # Custom React hooks for data fetching
    lib/          # Utilities and query client setup
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Database access layer
  db.ts           # Database connection
shared/           # Shared code between client/server
  schema.ts       # Drizzle database schema
  routes.ts       # API route type definitions
```

### Key Design Decisions
- **Monorepo Structure**: Client and server share types through the `shared/` directory, ensuring type safety across the stack
- **Path Aliases**: `@/` maps to client source, `@shared/` maps to shared code
- **Component Library**: shadcn/ui provides accessible, customizable components without heavy dependencies
- **Premium Typography**: Playfair Display for headings, DM Sans for body text

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries and schema management

### Frontend Libraries
- **Radix UI**: Accessible component primitives (dialogs, dropdowns, forms)
- **Embla Carousel**: Hero section image carousel with autoplay
- **Lucide React**: Icon library

### Build & Development
- **Vite**: Frontend development server and bundler
- **esbuild**: Server-side bundling for production
- **tsx**: TypeScript execution for development

### Image Assets
- Product and hero images sourced from Unsplash URLs (no local image storage)