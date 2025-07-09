# replit.md

## Overview

This is a full-stack web application for TECHASOFT's ML-based ejection system support platform. The application provides an AI-powered chat interface for technical troubleshooting, maintenance scheduling, and team management. It's built with a modern tech stack featuring React for the frontend, Express.js for the backend, and PostgreSQL with Drizzle ORM for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state, React hooks for local state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful API with JSON responses
- **Database**: PostgreSQL with Drizzle ORM
- **External Services**: OpenAI API for AI chat functionality

### Database Design
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Migration**: Drizzle Kit for schema management
- **Connection**: Neon serverless PostgreSQL with connection pooling

## Key Components

### AI Chat System
- Real-time chat interface with OpenAI integration
- Multi-language support (English, Telugu, Tamil, Hindi, Kannada)
- Voice input/output capabilities using Web Speech API
- Structured troubleshooting responses with confidence scoring
- Support escalation detection and team member routing

### Troubleshooting Engine
- Predefined troubleshooting procedures for:
  - Camera connectivity issues
  - PLC disconnection problems
  - Runtime system errors
- Step-by-step guidance with detailed instructions
- Keyword-based issue classification

### Maintenance Management
- Scheduled maintenance tasks with frequency tracking
- Priority-based task organization
- Estimated duration and detailed step lists
- Maintenance history and completion tracking

### Team Management
- Multi-language support staff directory
- Specialty-based team member routing
- Contact information and availability status
- Role-based access and capabilities

## Data Flow

1. **User Interaction**: Users interact through the React frontend chat interface
2. **API Gateway**: Express.js server handles all API requests with logging middleware
3. **AI Processing**: OpenAI API analyzes user messages and provides structured responses
4. **Data Storage**: Drizzle ORM manages database operations with type safety
5. **Real-time Updates**: TanStack Query provides optimistic updates and caching

## External Dependencies

### Core Services
- **OpenAI API**: GPT-4o model for natural language processing and troubleshooting guidance
- **Neon Database**: Serverless PostgreSQL hosting with automatic scaling
- **Web Speech API**: Browser-native speech recognition and synthesis

### UI Components
- **Radix UI**: Accessible component primitives
- **Framer Motion**: Animation library for enhanced UX
- **Lucide React**: Icon library for consistent visual elements

### Development Tools
- **Vite**: Development server with HMR and build optimization
- **TypeScript**: Type safety across the entire stack
- **Tailwind CSS**: Utility-first CSS framework with custom design system

## Deployment Strategy

### Build Process
- Frontend: Vite builds optimized static assets to `dist/public`
- Backend: esbuild bundles the Express server to `dist/index.js`
- Database: Drizzle migrations are applied via `db:push` command

### Environment Configuration
- Development: Local development with Vite dev server and tsx for backend
- Production: Compiled JavaScript bundle with static file serving
- Database: Environment-based connection strings for different deployment stages

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database access
- Environment variables for OpenAI API key and database URL
- Static file serving capability for frontend assets

## Key Architectural Decisions

### Monorepo Structure
**Problem**: Managing shared types and schemas between frontend and backend
**Solution**: Unified repository with shared schema definitions in `/shared` directory
**Benefits**: Type safety across the stack, reduced duplication, easier maintenance

### Serverless Database
**Problem**: Traditional database hosting complexity and scaling challenges
**Solution**: Neon serverless PostgreSQL with connection pooling
**Benefits**: Automatic scaling, reduced infrastructure management, cost efficiency

### AI-First Support
**Problem**: Complex technical troubleshooting requires expert knowledge
**Solution**: OpenAI integration with structured prompt engineering and predefined procedures
**Benefits**: 24/7 availability, consistent responses, multilingual support

### Component-Driven UI
**Problem**: Maintaining consistent design and accessibility across the application
**Solution**: shadcn/ui components built on Radix primitives with Tailwind styling
**Benefits**: Accessibility compliance, design consistency, rapid development