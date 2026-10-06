# CODEX BUILD PROMPT

You are building a production-quality pharmaceutical corporate website and CMS.

Before coding:
1. Read every Markdown file in this project.
2. Treat the supplied pharmaceutical/medical website reference image as visual inspiration only.
3. Do not copy the reference literally.
4. Build a more premium, international, pharmaceutical-company interpretation.

## OBJECTIVE

Build a complete full-stack pharmaceutical corporate platform using:

- Next.js App Router
- TypeScript
- Tailwind CSS
- PostgreSQL
- Prisma ORM
- Better Auth for secure authentication and sessions
- Cloudinary for media storage
- Zod validation
- React Hook Form when useful
- Framer Motion only for subtle motion

The result must feel like a real multinational pharmaceutical company website, not a generic template, AI landing page, or SaaS dashboard.

## DESIGN

Visual identity:
- Background: #F8FBFC
- White: #FFFFFF
- Primary Navy: #09243A
- Medical Blue: #1769AA
- Aqua Accent: #31C7C5
- Light Aqua: #EAF8F7
- Text: #17212B
- Muted: #667581
- Border: #DDE7EA

Typography:
- Manrope for headings
- Inter for UI/body

Design language:
- large editorial typography
- generous white space
- high-quality pharmaceutical/laboratory imagery
- clean grid
- restrained medical aqua accents
- premium corporate composition
- flat cards with subtle borders
- excellent responsive behavior

DO NOT USE:
- glowing buttons
- neon effects
- glassmorphism everywhere
- excessive gradients
- random AI icons
- oversized rounded SaaS cards
- fake medical claims
- excessive animations

## HOMEPAGE

Build these sections:

1. Header
2. Hero
3. Company Introduction
4. Therapeutic Areas
5. Featured Products
6. Quality / Manufacturing
7. Company Stats
8. R&D / Science
9. Global Presence
10. Latest News
11. Careers CTA
12. Footer

Hero direction:

Headline:
"Advancing Healthcare Through Science"

Supporting text:
"We develop high-quality pharmaceutical solutions designed to improve health and quality of life across the markets we serve."

Buttons:
- Explore Our Products
- Discover Our Company

The hero should use a premium pharmaceutical laboratory or manufacturing image with an asymmetric editorial layout.

## PUBLIC ROUTES

Create:

/
 /about
 /products
 /products/[slug]
 /therapeutic-areas
 /therapeutic-areas/[slug]
 /quality
 /research
 /news
 /news/[slug]
 /careers
 /careers/[slug]
 /contact

## PRODUCTS

Products page:
- search
- category filter
- therapeutic area filter
- dosage-form filter
- responsive grid
- clean product cards
- good empty state

Product detail:
- product image
- trade name
- generic name
- active ingredient
- strength
- dosage form
- packaging
- description
- therapeutic area
- leaflet download
- registration information when available
- related products

Do not make medical claims.

## ADMIN

Create protected routes under:

/admin

Admin modules:
- Dashboard
- Products
- Categories
- Therapeutic Areas
- News
- Careers
- Applications
- Certifications
- Contact Messages
- Homepage Content
- Site Settings
- Admin Users

Dashboard UI should be visually separate from the public site:
- compact sidebar
- clean tables
- KPI cards
- professional forms
- no gradients
- no decorative visual clutter

## AUTHENTICATION

Use Better Auth with the official Next.js integration and Prisma adapter.

Requirements:
- email/password admin sign-in
- secure server-side session checks
- protected `/admin` routes
- logout
- disabled/inactive admin support
- no custom JWT/session implementation alongside Better Auth
- do not expose secrets to client components

## ADMIN ROLES

Implement:
- Super Admin
- Content Admin
- Product Manager
- HR Manager

Use real authorization logic, not UI-only permission hiding.

## DATABASE

Use PostgreSQL with Prisma ORM.

Implement the domain schema described in DATABASE.md.
Use Better Auth's Prisma-compatible authentication tables/schema for users, accounts, sessions, and verification records as required by the installed Better Auth version. Do not invent incompatible auth tables when the Better Auth tooling can generate them.

Requirements:
- relational data modeled properly
- `prisma/schema.prisma`
- migrations
- reusable server-only Prisma client
- seed script with clearly marked DEMO data only
- indexes for slugs, publication state, foreign keys, and commonly filtered fields where appropriate
- no direct database credentials in browser code

Seed the project with clearly marked DEMO data only.

Do not present demo values as real company facts.

## MEDIA STORAGE

Use Cloudinary instead of Supabase Storage.

Requirements:
- server-side signed uploads or protected server upload endpoints
- validate file type and size
- store Cloudinary `public_id`, secure URL, width/height where relevant
- delete/replace stale assets when content is replaced where safe
- optimize responsive images on the public site
- do not expose private CV/application documents through unrestricted public URLs

## CMS

Admins must be able to:
- create/edit/delete/publish products
- manage categories
- manage therapeutic areas
- manage news
- manage careers
- view/manage applications
- manage certifications
- view contact messages
- update homepage content
- update global company settings

## FORMS

Public forms:
- contact
- career application

Requirements:
- server-side validation
- loading state
- success state
- error state
- accessible fields
- spam/rate-limit-ready architecture

## SEO

Implement:
- page metadata
- dynamic product metadata
- dynamic news metadata
- dynamic career metadata
- canonical URLs
- sitemap
- robots
- Open Graph
- Organization structured data
- Breadcrumb structured data
- Article schema for news
- JobPosting schema for careers when valid

## PERFORMANCE

Targets:
- desktop Lighthouse: 95+ where realistic
- mobile Lighthouse: 90+ where realistic
- accessibility: 95+
- SEO: 95+

Use:
- Server Components by default
- next/image
- responsive image sizes
- optimized fonts
- lazy loading below the fold
- dynamic imports for heavy interactive modules
- minimal client-side JS

## RESPONSIVENESS

Verify:
- 375px mobile
- 430px mobile
- 768px tablet
- 1024px tablet/laptop
- 1440px desktop
- 1920px wide desktop

No horizontal overflow.

## ACCESSIBILITY

Implement:
- semantic HTML
- keyboard-accessible menus
- proper focus states
- aria labels only where necessary
- accessible form labels/errors
- reduced-motion support
- color contrast compliance

## CODE QUALITY

Requirements:
- clear folder structure
- reusable components
- strongly typed props
- no `any` unless truly unavoidable
- no giant monolithic page components
- no duplicated section logic
- no hardcoded production company facts
- clean loading/error/empty states
- environment variables documented in `.env.example`

## DEVELOPMENT ORDER

1. Initialize project structure and theme tokens.
2. Build global header/footer.
3. Build homepage.
4. Build remaining public pages.
5. Build database schema.
6. Add seed/demo content.
7. Configure Better Auth + Prisma adapter and authorization.
8. Configure Cloudinary media handling.
9. Build admin shell.
10. Build admin CRUD modules.
11. Connect public pages to CMS data.
12. Add SEO.
13. Add animations.
14. Perform responsive/accessibility/performance cleanup.
15. Run lint/typecheck/build and fix all issues.

## ACCEPTANCE

The project is complete only when:
- all routes render
- CRUD works
- Better Auth sign-in/session/logout works
- permissions are enforced server-side
- Prisma migrations and seed work
- Cloudinary uploads/replacements work
- product filters/search work
- forms work
- image/file uploads work
- no broken mobile layouts
- no TypeScript errors
- no build errors
- demo data is clearly marked
- admin can manage the important site content without code changes

Do not stop after creating a homepage mockup.
Build the complete working system.
