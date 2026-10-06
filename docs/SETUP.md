# Setup and integration status

## Local development

Use Node.js 20.9 or newer. Install dependencies with `npm install`, copy `.env.example` to `.env`, then run `npm run dev`. The public routes use explicitly labeled in-repository demonstration content and do not need external credentials.

## PostgreSQL and Prisma

Set `DATABASE_URL` to a PostgreSQL connection string, then run:

```sh
npm run db:generate
npm run db:migrate
npm run db:seed
```

The migration creates the Better Auth identity/session tables and the content models in `prisma/schema.prisma`. Use `npm run db:deploy` to apply committed migrations in a deployment environment. The seed script creates only unpublished demonstration catalogue records; it does not create an administrator or a company identity.

## Better Auth and admin access

Set a unique, random `BETTER_AUTH_SECRET` (at least 32 characters) and a matching `BETTER_AUTH_URL`. `NEXT_PUBLIC_SITE_URL` must identify the public origin. Keep `NEXT_PUBLIC_INDEX_SITE=false` until demo content has been replaced with reviewed public content; set it to `true` only when the deployed site should be indexed. The sign-up endpoint is disabled; an authorized administrator account must be provisioned through a trusted operational process and assigned the least-privileged role. User role and active-state checks are read from PostgreSQL on the server. Never ship credentials in client code or commit `.env`/`.env.local`.

The UI contains server-side access checks and a role-to-module policy. There are no content mutation handlers yet: create/edit/publish/delete operations must be implemented as server actions or route handlers using `requireAdminRole`, Zod validation, and transaction-safe persistence before enabling editorial workflows. Review Better Auth and Prisma configuration against the versions in `package.json` before deployment.

## Cloudinary

Set `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET` only in the server environment. `src/lib/media/config.ts` reports whether they exist; this project does not yet issue upload signatures or perform uploads. Never send the API secret to the browser. CVs and other sensitive application files require authenticated/private delivery; public Cloudinary URLs are not suitable.

## Public forms and limitations

Contact and careers forms validate input with Zod and reject request bodies larger than 16 KiB. They return HTTP 503 and explicitly state that no data was stored. PostgreSQL persistence, CV uploads, CSRF protections, deployment rate limits, email delivery, analytics, and a production content review workflow are not connected. Do not submit real personal information to the demo.

## Before production

Replace all demo content and imagery with approved assets; independently verify all pharmaceutical, clinical, quality, regulatory, company, and career claims; configure and test database backups, administrator provisioning, auth/session policy, Cloudinary access, private file delivery, rate limiting, monitoring, privacy/legal text, and accessibility/performance budgets. No performance score or compliance certification is asserted by this repository.
