# Database Model

Use PostgreSQL.

## Authentication / users
Use Better Auth with its Prisma adapter. Generate or align the required Better Auth models for the installed version (for example user, session, account, verification data) using the official Better Auth tooling/documentation.

Extend the application user model/profile with:
- role (`SUPER_ADMIN`, `CONTENT_ADMIN`, `PRODUCT_MANAGER`, `HR_MANAGER`)
- active boolean
- created_at
- updated_at

Do not store a separate hand-rolled password hash/session system if Better Auth is managing credentials and sessions.

## products
- id
- slug
- trade_name
- generic_name
- active_ingredient
- description
- strength
- dosage_form
- packaging
- image_url
- leaflet_url
- category_id
- therapeutic_area_id
- registration_info nullable
- featured boolean
- published boolean
- seo_title nullable
- seo_description nullable
- created_at
- updated_at

## product_categories
- id
- name
- slug
- description nullable
- image_url nullable
- sort_order

## therapeutic_areas
- id
- name
- slug
- description
- image_url nullable
- icon_key nullable
- sort_order

## news_posts
- id
- title
- slug
- excerpt
- body
- cover_image_url
- author_id
- published
- published_at
- seo_title nullable
- seo_description nullable
- created_at
- updated_at

## careers
- id
- title
- slug
- department
- location
- employment_type
- description
- requirements
- status
- closing_date nullable
- created_at
- updated_at

## career_applications
- id
- career_id
- applicant_name
- email
- phone
- cv_url
- cover_note nullable
- status
- admin_notes nullable
- created_at

## certifications
- id
- title
- issuer nullable
- certificate_date nullable
- image_url nullable
- document_url nullable
- description nullable
- sort_order
- published

## contact_messages
- id
- name
- email
- phone nullable
- subject
- department nullable
- message
- status
- created_at

## site_settings
- id
- key
- value_json
- updated_at

## homepage_sections
- id
- section_key
- content_json
- enabled
- sort_order
- updated_at

## Optional Future Tables
- countries
- market_presence
- distributors
- product_documents
- product_gallery
- media_library
- audit_logs


## Media persistence
Cloudinary stores the binary media. PostgreSQL stores metadata/references such as:
- secure_url
- public_id
- resource_type
- width nullable
- height nullable
- bytes nullable
- original_filename nullable

Sensitive career-application documents must use private/authenticated delivery rather than unrestricted public URLs.
