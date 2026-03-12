# Musilinda - Music Theory Learning App

## Overview

Musilinda is a full-stack music theory learning application that teaches through interactive methods including singing, visualization, and gamified lessons. The app features a modern React frontend with a Node.js/Express backend, using PostgreSQL for data persistence and SendGrid for email communications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom design tokens
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Serverless PostgreSQL
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions
- **Email Service**: SendGrid for transactional emails

### Key Design Decisions

1. **Full-Stack TypeScript**: Chosen for type safety across client and server, with shared schema definitions
2. **Drizzle ORM**: Selected for type-safe database operations and automatic schema migrations
3. **Radix UI + shadcn/ui**: Provides accessible, customizable components with consistent design
4. **TanStack Query**: Manages server state, caching, and data synchronization
5. **Neon Serverless**: Scalable PostgreSQL solution suitable for serverless deployments

## Key Components

### Database Schema
- **Users Table**: Stores user authentication data (id, username, password)
- **Waitlist Table**: Captures early access signups (id, email, created_at)
- **Schema Validation**: Zod integration for runtime type checking

### API Endpoints
- **Admin Routes**: `/api/admin/waitlist` - View collected waitlist emails
- **Waitlist Routes**: `/api/waitlist` - Handle early access signups
- **Response Format**: Consistent API responses with success/error structure

### Frontend Pages
- **Landing Page**: Marketing site with hero section, features, testimonials, and pricing
- **Component Structure**: Modular landing page sections (Header, Hero, Features, etc.)
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Authentication System
- **Session-based**: Using connect-pg-simple for PostgreSQL session storage
- **User Management**: Basic username/password authentication
- **Storage Interface**: Abstracted storage layer supporting multiple backends

## Data Flow

1. **User Interaction**: Users interact with React components
2. **API Communication**: TanStack Query manages API calls to Express backend
3. **Database Operations**: Drizzle ORM handles PostgreSQL interactions
4. **Email Notifications**: SendGrid processes waitlist confirmations and notifications
5. **State Management**: Client-side state synchronized with server through React Query

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **@sendgrid/mail**: Email service integration
- **@tanstack/react-query**: Client-side data fetching and caching
- **drizzle-orm**: Type-safe database operations
- **express**: Web server framework

### UI Dependencies
- **@radix-ui/***: Accessible component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for development

## Deployment Strategy

### Development
- **Local Development**: `npm run dev` starts both frontend and backend
- **Hot Reloading**: Vite provides instant updates during development
- **Database**: `npm run db:push` applies schema changes

### Production Build
- **Frontend**: Vite builds optimized static assets
- **Backend**: esbuild bundles server code for Node.js
- **Database**: Drizzle migrations handle schema versioning
- **Environment**: Environment variables for database and SendGrid configuration

### Architecture Benefits
1. **Type Safety**: End-to-end TypeScript ensures compile-time error detection
2. **Scalability**: Serverless-ready architecture with Neon PostgreSQL
3. **Performance**: Optimized builds and efficient data fetching
4. **Maintainability**: Clear separation of concerns and modular structure
5. **Developer Experience**: Hot reloading, type checking, and modern tooling

### Current Implementation Status
- Landing page with waitlist functionality
- Database schema for users and waitlist
- Email integration for notifications
- Responsive design system
- Admin interface for waitlist management

The application is structured as a modern web app ready for iterative development and deployment, with a focus on music theory education through interactive learning experiences.