# Technical Stack

## Frontend / Full-stack Framework
- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion for restrained interaction/motion

## Database
- PostgreSQL
- Prisma ORM
- Prisma migrations and seed scripts

## Authentication
- Better Auth
- Official Next.js integration
- Prisma adapter
- Server-enforced admin roles and permissions

## Media
- Cloudinary
- Product images
- News covers
- Certification media
- Public site assets managed by the CMS

For CVs or sensitive documents, use authenticated/private Cloudinary delivery or a private S3-compatible store. Never expose private application documents through open public URLs.

## Validation / Forms
- Zod
- React Hook Form where it improves complex forms
- Server-side validation for all writes

## Deployment
Recommended initial setup:
- Next.js app: Vercel or Node.js VPS
- PostgreSQL: managed PostgreSQL or self-hosted PostgreSQL on a properly maintained VPS
- Media: Cloudinary

The application must not depend on Supabase.
