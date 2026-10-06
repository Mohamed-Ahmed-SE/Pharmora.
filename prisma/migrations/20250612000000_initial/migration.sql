CREATE TYPE "AdminRole" AS ENUM ('SUPER_ADMIN', 'CONTENT_ADMIN', 'PRODUCT_MANAGER', 'HR_MANAGER');
CREATE TYPE "CareerStatus" AS ENUM ('DRAFT', 'OPEN', 'CLOSED');
CREATE TYPE "ApplicationStatus" AS ENUM ('NEW', 'REVIEWING', 'SHORTLISTED', 'REJECTED', 'ACCEPTED');
CREATE TYPE "MessageStatus" AS ENUM ('UNREAD', 'READ', 'ARCHIVED');

CREATE TABLE "users" (
  "id" TEXT NOT NULL, "name" TEXT NOT NULL, "email" TEXT NOT NULL, "emailVerified" BOOLEAN NOT NULL DEFAULT false,
  "image" TEXT, "role" "AdminRole" NOT NULL DEFAULT 'CONTENT_ADMIN', "active" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "sessions" (
  "id" TEXT NOT NULL, "expiresAt" TIMESTAMP(3) NOT NULL, "token" TEXT NOT NULL, "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL, "ipAddress" TEXT, "userAgent" TEXT, "userId" TEXT NOT NULL,
  CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "accounts" (
  "id" TEXT NOT NULL, "accountId" TEXT NOT NULL, "providerId" TEXT NOT NULL, "userId" TEXT NOT NULL,
  "accessToken" TEXT, "refreshToken" TEXT, "idToken" TEXT, "accessTokenExpiresAt" TIMESTAMP(3), "refreshTokenExpiresAt" TIMESTAMP(3),
  "scope" TEXT, "password" TEXT, "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "verifications" (
  "id" TEXT NOT NULL, "identifier" TEXT NOT NULL, "value" TEXT NOT NULL, "expiresAt" TIMESTAMP(3) NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "verifications_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "product_categories" (
  "id" TEXT NOT NULL, "name" TEXT NOT NULL, "slug" TEXT NOT NULL, "description" TEXT, "imageUrl" TEXT,
  "sortOrder" INTEGER NOT NULL DEFAULT 0, "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "product_categories_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "therapeutic_areas" (
  "id" TEXT NOT NULL, "name" TEXT NOT NULL, "slug" TEXT NOT NULL, "description" TEXT NOT NULL, "imageUrl" TEXT, "iconKey" TEXT,
  "sortOrder" INTEGER NOT NULL DEFAULT 0, "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "therapeutic_areas_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "products" (
  "id" TEXT NOT NULL, "slug" TEXT NOT NULL, "tradeName" TEXT NOT NULL, "genericName" TEXT NOT NULL, "activeIngredient" TEXT NOT NULL,
  "description" TEXT NOT NULL, "strength" TEXT NOT NULL, "dosageForm" TEXT NOT NULL, "packaging" TEXT NOT NULL, "imageUrl" TEXT,
  "leafletUrl" TEXT, "registrationInfo" TEXT, "featured" BOOLEAN NOT NULL DEFAULT false, "published" BOOLEAN NOT NULL DEFAULT false,
  "seoTitle" TEXT, "seoDescription" TEXT, "categoryId" TEXT NOT NULL, "therapeuticAreaId" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "news_posts" (
  "id" TEXT NOT NULL, "title" TEXT NOT NULL, "slug" TEXT NOT NULL, "excerpt" TEXT NOT NULL, "body" TEXT NOT NULL,
  "coverImageUrl" TEXT, "authorId" TEXT NOT NULL, "published" BOOLEAN NOT NULL DEFAULT false, "publishedAt" TIMESTAMP(3),
  "seoTitle" TEXT, "seoDescription" TEXT, "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "news_posts_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "careers" (
  "id" TEXT NOT NULL, "title" TEXT NOT NULL, "slug" TEXT NOT NULL, "department" TEXT NOT NULL, "location" TEXT NOT NULL,
  "employmentType" TEXT NOT NULL, "description" TEXT NOT NULL, "requirements" TEXT NOT NULL, "status" "CareerStatus" NOT NULL DEFAULT 'DRAFT',
  "closingDate" TIMESTAMP(3), "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "careers_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "career_applications" (
  "id" TEXT NOT NULL, "careerId" TEXT NOT NULL, "applicantName" TEXT NOT NULL, "email" TEXT NOT NULL, "phone" TEXT NOT NULL,
  "cvUrl" TEXT, "coverNote" TEXT, "status" "ApplicationStatus" NOT NULL DEFAULT 'NEW', "adminNotes" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "career_applications_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "certifications" (
  "id" TEXT NOT NULL, "title" TEXT NOT NULL, "issuer" TEXT, "certificateDate" TIMESTAMP(3), "imageUrl" TEXT, "documentUrl" TEXT,
  "description" TEXT, "sortOrder" INTEGER NOT NULL DEFAULT 0, "published" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "certifications_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "contact_messages" (
  "id" TEXT NOT NULL, "name" TEXT NOT NULL, "email" TEXT NOT NULL, "phone" TEXT, "subject" TEXT NOT NULL, "department" TEXT,
  "message" TEXT NOT NULL, "status" "MessageStatus" NOT NULL DEFAULT 'UNREAD', "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "contact_messages_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "site_settings" (
  "id" TEXT NOT NULL, "key" TEXT NOT NULL, "valueJson" JSONB NOT NULL, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "site_settings_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "homepage_sections" (
  "id" TEXT NOT NULL, "sectionKey" TEXT NOT NULL, "contentJson" JSONB NOT NULL, "enabled" BOOLEAN NOT NULL DEFAULT true,
  "sortOrder" INTEGER NOT NULL DEFAULT 0, "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "homepage_sections_pkey" PRIMARY KEY ("id")
);
CREATE TABLE "media_assets" (
  "id" TEXT NOT NULL, "publicId" TEXT NOT NULL, "secureUrl" TEXT NOT NULL, "resourceType" TEXT NOT NULL, "width" INTEGER,
  "height" INTEGER, "bytes" INTEGER, "originalFilename" TEXT, "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "media_assets_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE UNIQUE INDEX "sessions_token_key" ON "sessions"("token");
CREATE INDEX "sessions_userId_idx" ON "sessions"("userId");
CREATE INDEX "accounts_userId_idx" ON "accounts"("userId");
CREATE INDEX "verifications_identifier_idx" ON "verifications"("identifier");
CREATE UNIQUE INDEX "product_categories_slug_key" ON "product_categories"("slug");
CREATE INDEX "product_categories_sortOrder_idx" ON "product_categories"("sortOrder");
CREATE UNIQUE INDEX "therapeutic_areas_slug_key" ON "therapeutic_areas"("slug");
CREATE INDEX "therapeutic_areas_sortOrder_idx" ON "therapeutic_areas"("sortOrder");
CREATE UNIQUE INDEX "products_slug_key" ON "products"("slug");
CREATE INDEX "products_published_featured_idx" ON "products"("published", "featured");
CREATE INDEX "products_categoryId_idx" ON "products"("categoryId");
CREATE INDEX "products_therapeuticAreaId_idx" ON "products"("therapeuticAreaId");
CREATE INDEX "products_dosageForm_idx" ON "products"("dosageForm");
CREATE UNIQUE INDEX "news_posts_slug_key" ON "news_posts"("slug");
CREATE INDEX "news_posts_published_publishedAt_idx" ON "news_posts"("published", "publishedAt");
CREATE UNIQUE INDEX "careers_slug_key" ON "careers"("slug");
CREATE INDEX "careers_status_closingDate_idx" ON "careers"("status", "closingDate");
CREATE INDEX "career_applications_careerId_status_idx" ON "career_applications"("careerId", "status");
CREATE INDEX "career_applications_createdAt_idx" ON "career_applications"("createdAt");
CREATE INDEX "certifications_published_sortOrder_idx" ON "certifications"("published", "sortOrder");
CREATE INDEX "contact_messages_status_createdAt_idx" ON "contact_messages"("status", "createdAt");
CREATE UNIQUE INDEX "site_settings_key_key" ON "site_settings"("key");
CREATE UNIQUE INDEX "homepage_sections_sectionKey_key" ON "homepage_sections"("sectionKey");
CREATE INDEX "homepage_sections_enabled_sortOrder_idx" ON "homepage_sections"("enabled", "sortOrder");
CREATE UNIQUE INDEX "media_assets_publicId_key" ON "media_assets"("publicId");
CREATE INDEX "media_assets_resourceType_createdAt_idx" ON "media_assets"("resourceType", "createdAt");

ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "products" ADD CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "product_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "products" ADD CONSTRAINT "products_therapeuticAreaId_fkey" FOREIGN KEY ("therapeuticAreaId") REFERENCES "therapeutic_areas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "news_posts" ADD CONSTRAINT "news_posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "career_applications" ADD CONSTRAINT "career_applications_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "careers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
