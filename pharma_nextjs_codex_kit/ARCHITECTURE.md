# Architecture

## Framework
Next.js App Router + TypeScript.

## Suggested Structure

```txt
src/
├── app/
│   ├── (website)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   ├── therapeutic-areas/
│   │   │   └── [slug]/
│   │   ├── quality/
│   │   ├── research/
│   │   ├── news/
│   │   │   └── [slug]/
│   │   ├── careers/
│   │   │   └── [slug]/
│   │   └── contact/
│   │
│   ├── admin/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── products/
│   │   ├── categories/
│   │   ├── therapeutic-areas/
│   │   ├── news/
│   │   ├── careers/
│   │   ├── applications/
│   │   ├── certifications/
│   │   ├── messages/
│   │   └── settings/
│   │
│   ├── api/
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   ├── home/
│   ├── website/
│   ├── admin/
│   ├── forms/
│   └── ui/
│
├── lib/
│   ├── db/
│   ├── auth/
│   ├── validation/
│   ├── seo/
│   ├── storage/
│   └── utils/
│
├── actions/
├── types/
└── config/
```

## Server / Client Rules
- Prefer Server Components.
- Use Client Components only for actual interactivity.
- Use server actions or route handlers for protected mutations.
- Keep database access server-side.
- Never expose service keys to the client.

## Data
- PostgreSQL is the primary database.
- Prisma ORM owns the application schema, migrations, and typed database access.
- Use a single server-only Prisma client helper to avoid duplicate clients during development.
- Validate all writes with Zod before persistence.

## Authentication
- Use Better Auth with the official Next.js integration.
- Use the Prisma adapter with PostgreSQL.
- Better Auth owns authentication/session/account data; do not implement a second custom session system.
- Protect `/admin` on the server.
- Store application roles such as `SUPER_ADMIN`, `CONTENT_ADMIN`, `PRODUCT_MANAGER`, and `HR_MANAGER` and enforce them in server actions/route handlers.

## Media
- Use Cloudinary for public product images, news covers, certification images, and other site media.
- Validate MIME type and file size before upload.
- Store only Cloudinary public IDs/secure URLs and relevant metadata in PostgreSQL.
- CVs and other sensitive application files must not be exposed through unrestricted public URLs; configure authenticated/private delivery or another private object-storage provider if required.

## Security
- protected admin routes
- Better Auth server-side session validation
- role authorization on every protected mutation
- safe Cloudinary/file upload validation
- CSRF-aware form architecture
- rate limiting for public forms when deployed
- server-side validation
- safe HTML/rich-text handling
