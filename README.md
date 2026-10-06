# Pharmora demo website

A demonstration pharmaceutical corporate website and CMS foundation built with the Next.js App Router, TypeScript, Tailwind CSS, PostgreSQL/Prisma, Better Auth, Cloudinary, and Zod. All company, product, news, careers, and dashboard data shown in the interface is illustrative and must be replaced with client-approved content before publication.

## Getting started

1. Use Node.js 20.9 or later and install dependencies with `npm install`.
2. Copy `.env.example` to `.env` and configure PostgreSQL, Better Auth, and Cloudinary values as needed.
3. Generate the Prisma client with `npm run db:generate`, apply migrations with `npm run db:migrate`, and optionally add unpublished demo catalogue records with `npm run db:seed`.
4. Start the development server with `npm run dev`.
5. Run `npm run lint`, `npx tsc --noEmit`, `npm test`, and `npm run build` before submitting changes.

Without credentials, the public site remains viewable with labeled demonstration material. The admin area reports its configuration state and denies access to protected modules; it does not pretend that authentication, persistence, or media uploads are connected. See `docs/SETUP.md` for configuration and security boundaries. The public forms respond with an explicit not-configured error until secure persistence is implemented.
