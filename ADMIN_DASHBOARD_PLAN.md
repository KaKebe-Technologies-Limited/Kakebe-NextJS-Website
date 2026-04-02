# Kakebe Admin Dashboard — Implementation Plan

## Documentation Discovery (Phase 0 Findings)

### Confirmed Package Versions
- `next`: 16.1.4 (App Router, React 19)
- `react`: 19.2.3
- `tailwindcss`: 3.4.19
- `bcryptjs`: 3.0.3 (installed, unused — use for auth)
- `framer-motion`: 12.29.0
- `clsx`: 2.1.1
- **NOT installed yet:** `next-auth`, `@prisma/client`, `jose`, `sharp`

### Confirmed Existing Patterns
- TypeScript interfaces in `/lib/types.ts` — 7 interfaces covering all data types
- CSS variables: `--background`, `--foreground`, `--accent` in `/app/globals.css`
- Prisma client stub exists at `/lib/generated/prisma/` but schema is EMPTY — no models
- No `.env` file exists yet
- Static export must be removed (`output: 'export'` in `next.config.ts`)
- `@/*` path alias maps to project root

### Key Constraints
- Removing `output: 'export'` changes deployment target — site must run on Node.js (Vercel, Railway, etc.)
- Images are currently in `/public/images/` — uploads will go to `/public/uploads/`
- Tailwind config has no custom theme extensions yet

---

## Phase 1 — Foundation

**Goal:** Convert the site to a server-rendered app, add a database, authentication, and the admin shell.

### 1.1 — Remove Static Export & Update Config

**Files to change:**
- `next.config.ts` — remove `output: 'export'`, keep `images.unoptimized: true` temporarily

```ts
// next.config.ts — new content
import type { NextConfig } from 'next'
const nextConfig: NextConfig = {
  images: { unoptimized: true },   // keep for now; remove when using Next Image
}
export default nextConfig
```

### 1.2 — Install New Dependencies

```bash
npm install @prisma/client prisma jose
npm install --save-dev @types/bcryptjs
```

- `prisma` — CLI for migrations
- `@prisma/client` — runtime DB client
- `jose` — JWT signing/verification (works in Edge middleware)

### 1.3 — Create `.env` File

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="replace-with-a-long-random-string-32-chars-min"
ADMIN_EMAIL="admin@kakebe.tech"
ADMIN_PASSWORD_HASH=""   # generated with bcryptjs in seed script
```

### 1.4 — Create Prisma Schema

**File:** `prisma/schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
  output   = "../lib/generated/prisma"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model SiteConfig {
  id          Int    @id @default(1)
  name        String @default("Kakebe Technologies")
  tagline     String @default("")
  description String @default("")
  email       String @default("")
  phone       String @default("")
  address     String @default("")
  twitter     String @default("")
  linkedin    String @default("")
  github      String @default("")
  faviconUrl  String @default("/favicon.png")
  logoUrl     String @default("")
  primaryColor String @default("#dc2626")
  formspreeId String @default("xkorrnno")
  updatedAt   DateTime @updatedAt
}

model NavItem {
  id    Int    @id @default(autoincrement())
  label String
  href  String
  order Int
}

model FooterConfig {
  id          Int    @id @default(1)
  brandText   String @default("")
  copyrightName String @default("Kakebe Technologies")
  updatedAt   DateTime @updatedAt
}

model HeroSection {
  id          Int    @id @default(1)
  headline    String @default("")
  subheadline String @default("")
  cta1Label   String @default("")
  cta1Href    String @default("")
  cta2Label   String @default("")
  cta2Href    String @default("")
  imageUrl    String @default("")
  updatedAt   DateTime @updatedAt
}

model TeamMember {
  id         Int      @id @default(autoincrement())
  name       String
  role       String
  categories String   // JSON array stored as string
  image      String
  bio        String
  linkedin   String   @default("")
  twitter    String   @default("")
  order      Int      @default(0)
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
}

model Program {
  id          Int      @id @default(autoincrement())
  title       String
  description String
  icon        String
  features    String   // JSON array
  order       Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Project {
  id          Int      @id @default(autoincrement())
  slug        String   @unique
  title       String
  description String
  category    String
  image       String
  tags        String   // JSON array
  innovators  String   // JSON array of names
  order       Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Innovator {
  id       Int      @id @default(autoincrement())
  slug     String   @unique
  name     String
  tagline  String
  image    String
  bio      String
  projects String   // JSON array
  skills   String   // JSON array
  quote    String   @default("")
  featured Boolean  @default(false)
  order    Int      @default(0)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Metric {
  id     Int    @id @default(autoincrement())
  label  String
  value  String
  suffix String @default("")
  prefix String @default("")
  order  Int    @default(0)
}

model Value {
  id          Int    @id @default(autoincrement())
  title       String
  description String
  icon        String @default("")
  order       Int    @default(0)
}

model AboutContent {
  id          Int    @id @default(1)
  story       String @default("")
  mission     String @default("")
  vision      String @default("")
  milestones  String @default("") // JSON array
  updatedAt   DateTime @updatedAt
}

model PageSEO {
  id          Int      @id @default(autoincrement())
  page        String   @unique // "home", "about", "programs", etc.
  title       String
  description String
  ogImage     String   @default("")
  updatedAt   DateTime @updatedAt
}

model AdminUser {
  id           Int      @id @default(1)
  email        String   @unique
  passwordHash String
  updatedAt    DateTime @updatedAt
}

model ActivityLog {
  id        Int      @id @default(autoincrement())
  action    String
  section   String
  details   String   @default("")
  createdAt DateTime @default(now())
}
```

### 1.5 — Run Migration

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 1.6 — Create DB Client Singleton

**File:** `lib/db.ts`

```ts
import { PrismaClient } from './generated/prisma'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
export const prisma = globalForPrisma.prisma ?? new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
export default prisma
```

### 1.7 — Create Seed Script

**File:** `prisma/seed.ts`

Seeds all data from the existing TypeScript data files into the database. Generates the admin password hash using bcryptjs. Run with:

```bash
npx ts-node prisma/seed.ts
```

### 1.8 — Authentication System

**Files to create:**

```
lib/auth.ts               — sign/verify JWT with jose
app/admin/login/page.tsx  — login form (email + password)
app/api/auth/login/route.ts    — POST: verify credentials, set cookie
app/api/auth/logout/route.ts   — POST: clear cookie
middleware.ts             — protect /admin/* routes, redirect to /admin/login
```

**Auth flow:**
1. Admin visits `/admin/*` → middleware checks `admin_token` cookie (JWT)
2. If no valid token → redirect to `/admin/login`
3. On login form submit → POST to `/api/auth/login` → verify email+password against `AdminUser` DB row → sign JWT with `jose` → set `HttpOnly Secure SameSite=Strict` cookie
4. Logout → DELETE cookie → redirect to `/admin/login`

**lib/auth.ts pattern:**
```ts
import { SignJWT, jwtVerify } from 'jose'
const secret = new TextEncoder().encode(process.env.JWT_SECRET!)

export async function signToken(payload: object) {
  return new SignJWT(payload as Record<string, unknown>)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(secret)
}

export async function verifyToken(token: string) {
  const { payload } = await jwtVerify(token, secret)
  return payload
}
```

### 1.9 — Admin Layout Shell

**Files:**

```
app/admin/layout.tsx       — sidebar + topbar layout wrapper
app/admin/page.tsx         — dashboard overview (placeholder)
app/admin/login/page.tsx   — login page (no layout)
```

**Sidebar nav items (admin-only routes):**
- Dashboard `/admin`
- Site Settings `/admin/settings`
- Branding `/admin/branding`
- Hero `/admin/hero`
- Navigation `/admin/navigation`
- Footer `/admin/footer`
- About Page `/admin/about`
- Team `/admin/team`
- Programs `/admin/programs`
- Projects `/admin/projects`
- Innovators `/admin/innovators`
- Metrics `/admin/metrics`
- Values `/admin/values`
- SEO `/admin/seo`
- Theme `/admin/theme`
- Activity Log `/admin/activity`

**Design:** Clean dark sidebar (gray-900), white content area, red accent on active item. Mobile-responsive with collapsible sidebar.

### Phase 1 Verification
- [ ] `npm run dev` starts without errors
- [ ] Visiting `http://localhost:3000` shows the public site
- [ ] Visiting `http://localhost:3000/admin` redirects to `/admin/login`
- [ ] Login with seed credentials shows admin dashboard shell
- [ ] `npx prisma studio` shows all tables with seed data

---

## Phase 2 — Data Migration

**Goal:** Migrate all hardcoded TypeScript data to the database. Update all public-facing components to read from DB via server components.

### 2.1 — Seed All Existing Data

The seed script (`prisma/seed.ts`) imports from existing `/data/*.ts` files and writes to DB:

```ts
// prisma/seed.ts (example pattern)
import { prisma } from '../lib/db'
import { teamMembers } from '../data/team'
import { programs } from '../data/programs'
// ... import all data files

async function main() {
  // Upsert SiteConfig
  await prisma.siteConfig.upsert({ where: { id: 1 }, create: siteData, update: siteData })

  // Seed team members
  for (const member of teamMembers) {
    await prisma.teamMember.create({
      data: {
        ...member,
        categories: JSON.stringify(member.category),
      }
    })
  }
  // ... repeat for all models

  // Seed admin user
  const hash = await bcrypt.hash('changeme123', 12)
  await prisma.adminUser.upsert({
    where: { id: 1 },
    create: { email: process.env.ADMIN_EMAIL!, passwordHash: hash },
    update: {}
  })
}
```

### 2.2 — Create Data Access Layer

**File:** `lib/data-access.ts`

Server-only functions that replace direct imports from `/data/*.ts`:

```ts
import { prisma } from './db'

export async function getSiteConfig() {
  return prisma.siteConfig.findUnique({ where: { id: 1 } })
}

export async function getTeamMembers() {
  const members = await prisma.teamMember.findMany({ orderBy: { order: 'asc' } })
  return members.map(m => ({ ...m, category: JSON.parse(m.categories) }))
}

export async function getPrograms() { ... }
export async function getProjects() { ... }
export async function getInnovators() { ... }
export async function getMetrics() { ... }
export async function getValues() { ... }
export async function getHeroSection() { ... }
export async function getAboutContent() { ... }
export async function getNavItems() { ... }
export async function getFooterConfig() { ... }
export async function getPageSEO(page: string) { ... }
```

### 2.3 — Update Public Pages to Read from DB

Convert these pages from importing `/data/*.ts` to using `lib/data-access.ts`:

| Page/Component | Data imported | Change |
|---|---|---|
| `app/page.tsx` | team, programs, metrics, innovators | Use `getTeamMembers()`, etc. |
| `app/team/page.tsx` | team.ts | Use `getTeamMembers()` |
| `app/programs/page.tsx` | programs.ts | Use `getPrograms()` |
| `app/projects/page.tsx` | projects.ts | Use `getProjects()` |
| `app/innovators/page.tsx` | innovators.ts | Use `getInnovators()` |
| `app/about/page.tsx` | site.ts | Use `getAboutContent()`, `getSiteConfig()` |
| `app/contact/page.tsx` | site.ts | Use `getSiteConfig()` |
| `app/layout.tsx` | site.ts | Use `getSiteConfig()` for metadata |
| `components/layout/Footer.tsx` | site.ts | Receive as prop from layout |
| `components/layout/Header.tsx` | site.ts | Receive as prop from layout |

**Pattern:** Pages are already server components — just `await` the data-access functions directly.

### 2.4 — Dynamic Metadata

**File:** `app/layout.tsx` and each page — add `generateMetadata()`:

```ts
export async function generateMetadata(): Promise<Metadata> {
  const seo = await getPageSEO('home')
  const site = await getSiteConfig()
  return {
    title: seo?.title ?? site?.name,
    description: seo?.description ?? site?.description,
    icons: { icon: site?.faviconUrl ?? '/favicon.png' },
  }
}
```

### Phase 2 Verification
- [ ] Public site still renders correctly after migration
- [ ] Content matches what was in TypeScript data files
- [ ] No imports from `/data/*.ts` remain in app/ or components/
- [ ] `grep -r "from '@/data/"` returns no results in app/ or components/

---

## Phase 3 — Site & Branding Settings

**Goal:** Admin pages to edit site identity, branding, hero, navigation, and footer.

### 3.1 — Site Settings Page (`/admin/settings`)

**Form fields:**
- Site Name, Tagline, Description (textarea)
- Email, Phone, Address
- Social links: Twitter, LinkedIn, GitHub
- Formspree Form ID
- Save button → POST `/api/admin/settings`

**API route:** `app/api/admin/settings/route.ts`
```ts
// GET: return current SiteConfig
// PATCH: update SiteConfig, log activity
```

### 3.2 — Branding Page (`/admin/branding`)

**Sections:**
- **Favicon** — current preview image, upload new file button → uploads to `/public/uploads/favicon.*`, updates `SiteConfig.faviconUrl`
- **Logo** — current logo text and optional logo image, upload/remove
- **Primary Color** — color picker input (hex), live preview of what the site looks like with new color

**API route:** `app/api/admin/upload/route.ts`
```ts
// POST: multipart/form-data with file + type (favicon/logo/team/project/innovator)
// Saves to /public/uploads/{type}/filename
// Returns { url: '/uploads/type/filename' }
```

### 3.3 — Hero Section Page (`/admin/hero`)

**Form fields:**
- Headline (text input)
- Subheadline (textarea)
- CTA Button 1: Label + Href
- CTA Button 2: Label + Href
- Background image upload (preview shown)
- Save → PATCH `/api/admin/hero`

### 3.4 — Navigation Editor (`/admin/navigation`)

**UI:**
- Drag-and-drop ordered list of nav items (use `@dnd-kit/sortable` or CSS drag)
- Each item: Label text input, Href text input, Delete button
- Add new item button
- Save order → PATCH `/api/admin/navigation`

**API route:** `app/api/admin/navigation/route.ts`
- GET: return NavItems ordered
- POST: create new item
- PATCH: bulk update order
- DELETE: remove item by id

### 3.5 — Footer Editor (`/admin/footer`)

**Form fields:**
- Brand description text (textarea)
- Copyright name
- Link sections (Explore, Programs) — add/remove/rename links
- Contact display overrides (pulls from site settings)
- Save → PATCH `/api/admin/footer`

### Phase 3 Verification
- [ ] Changing site name in settings reflects on public site after refresh
- [ ] Uploading favicon shows new favicon in browser tab
- [ ] Changing primary color updates the CSS variable on public site
- [ ] Nav item reorder reflects in public site header
- [ ] Hero text changes show on homepage

---

## Phase 4 — Content Management

**Goal:** Full CRUD admin interfaces for team, programs, projects, innovators, metrics, and values.

### 4.1 — Team Members (`/admin/team`)

**List view:**
- Table: photo thumbnail, name, role, categories, actions (Edit, Delete)
- Filter tabs: All / Management / Developers / Marketing / Digital Content
- "Add Member" button

**Add/Edit form (`/admin/team/new` and `/admin/team/[id]/edit`):**
- Name, Role (text inputs)
- Categories (multi-select checkboxes)
- Bio (textarea)
- LinkedIn URL, Twitter URL
- Photo upload with current preview
- Display Order (number input)
- Save / Cancel

**API routes:** `app/api/admin/team/route.ts` (GET, POST), `app/api/admin/team/[id]/route.ts` (GET, PATCH, DELETE)

### 4.2 — Programs (`/admin/programs`)

**List view:** Ordered list with icon, title, description preview, drag handle, Edit/Delete

**Add/Edit form:**
- Title, Description (textarea)
- Icon (emoji picker or text input)
- Features list (dynamic add/remove text inputs)
- Order

**API routes:** `app/api/admin/programs/route.ts`, `app/api/admin/programs/[id]/route.ts`

### 4.3 — Projects (`/admin/projects`)

**List view:** Grid of project cards with Edit/Delete overlay

**Add/Edit form:**
- Title, Slug (auto-generated from title, editable)
- Description (textarea)
- Category
- Image upload with preview
- Tags (comma-separated or tag input component)
- Innovators (comma-separated names)
- Order

**API routes:** `app/api/admin/projects/route.ts`, `app/api/admin/projects/[id]/route.ts`

### 4.4 — Innovators (`/admin/innovators`)

**List view:** Cards with photo, name, tagline, featured badge, Edit/Delete

**Add/Edit form:**
- Name, Slug, Tagline
- Bio (textarea)
- Photo upload
- Projects (dynamic list)
- Skills (tag input)
- Quote
- Featured toggle

**API routes:** `app/api/admin/innovators/route.ts`, `app/api/admin/innovators/[id]/route.ts`

### 4.5 — Impact Metrics (`/admin/metrics`)

**UI:** Simple ordered list of 4 (or more) metric rows
- Each row: Label input, Value input, Prefix input, Suffix input
- Drag to reorder
- Save all at once

**API route:** `app/api/admin/metrics/route.ts` (GET, PUT — full replace)

### 4.6 — Core Values (`/admin/values`)

**UI:** Ordered list of value cards
- Each: Title input, Description textarea, Icon input
- Add/Remove/Reorder
- Save all

**API route:** `app/api/admin/values/route.ts`

### Phase 4 Verification
- [ ] Adding a new team member shows them on `/team` page
- [ ] Editing a program description reflects on `/programs` page
- [ ] Uploading a project image shows new image on `/projects` page
- [ ] Deleting a value removes it from public site
- [ ] All CRUD operations log to ActivityLog table

---

## Phase 5 — Advanced Features

**Goal:** SEO management, rich text for about page, image library, theme customization.

### 5.1 — About Page Editor (`/admin/about`)

**Sections (tab-based):**
1. **Story** — rich textarea with basic markdown support
2. **Mission & Vision** — two large textareas
3. **Milestones** — dynamic list: Year (number), Title, Description — add/remove/reorder
4. **TUY Partnership** — editable text block

**API route:** `app/api/admin/about/route.ts`

### 5.2 — SEO Manager (`/admin/seo`)

**UI:** Tab for each page (Home, About, Programs, Projects, Team, Innovators, Contact)

**Per-page form:**
- Page Title (text input, 60 char limit indicator)
- Meta Description (textarea, 160 char limit indicator)
- OG Image upload (for social sharing previews)
- Preview card showing how it appears in Google search results

**API route:** `app/api/admin/seo/route.ts`

### 5.3 — Theme Customization (`/admin/theme`)

**UI:**
- Primary/accent color picker → updates `SiteConfig.primaryColor`
- Font family selector (preset list: Inter, Poppins, Roboto, etc.)
- Live preview iframe/panel showing color applied to sample components
- "Apply to Site" button

**Implementation:**
- Store selected color in `SiteConfig.primaryColor`
- In `app/layout.tsx`, inject `<style>:root { --accent: ${config.primaryColor}; }</style>` in `<head>`
- All Tailwind classes using `text-red-600` should be refactored to use `var(--accent)` where theme customization applies

### 5.4 — Image Upload System (`app/api/admin/upload/route.ts`)

**Accepts:** `multipart/form-data` with `file` and `category` fields

**Saves to:** `/public/uploads/{category}/{uuid}-{original-name}`

**Returns:** `{ url: '/uploads/{category}/{filename}' }`

**Validation:**
- Allowed types: image/jpeg, image/png, image/webp, image/svg+xml, image/x-icon
- Max size: 5MB
- Sanitize filename (no path traversal)

### Phase 5 Verification
- [ ] About page content editable and reflects on `/about`
- [ ] SEO titles show in browser tab and `<meta>` tags
- [ ] Changing primary color immediately visible after page reload
- [ ] Uploaded images accessible via `/uploads/` URL

---

## Phase 6 — Polish & Dashboard Overview

**Goal:** Dashboard landing page with stats, activity log display, cache controls, and UX polish.

### 6.1 — Dashboard Overview (`/admin`)

**Stats cards (top row):**
- Total Team Members
- Total Programs
- Total Projects
- Total Innovators

**Quick actions:**
- Add Team Member
- Add Project
- Edit Site Settings

**Recent Activity feed** — last 20 entries from `ActivityLog` table

**Site health:**
- Last updated timestamp per section
- Link to view public site

### 6.2 — Activity Log Page (`/admin/activity`)

Full paginated table of all admin actions:
- Timestamp, Section, Action, Details
- Filter by section
- Clear old logs button

### 6.3 — Admin UX Polish

**Consistent patterns across all admin pages:**
- Toast notifications on save/error (use a lightweight toast like `react-hot-toast`)
- Confirmation dialogs before delete
- Unsaved changes warning when navigating away
- Loading skeletons on data fetch
- Form validation with inline error messages
- Breadcrumb navigation

**Additional packages to install:**
```bash
npm install react-hot-toast
npm install @dnd-kit/core @dnd-kit/sortable   # drag-and-drop reordering
```

### 6.4 — Security Hardening

- All admin API routes check `Authorization` cookie via middleware or per-route check
- Rate limit login endpoint (5 attempts per minute per IP)
- Validate and sanitize all form inputs server-side
- File upload: validate MIME type server-side (not just extension)
- CSRF protection via same-site cookie + origin check on POST routes

### Phase 6 Verification
- [ ] Dashboard stats are accurate
- [ ] All CRUD actions appear in activity log
- [ ] Toast messages appear on save
- [ ] Delete confirmation works across all sections
- [ ] Unauthorized API access returns 401

---

## Full File Tree — New Files to Create

```
prisma/
  schema.prisma           # Database schema
  seed.ts                 # Seed script

lib/
  db.ts                   # Prisma singleton
  auth.ts                 # JWT sign/verify with jose
  data-access.ts          # Server-side DB query functions
  admin-log.ts            # Activity logging helper

middleware.ts              # Protect /admin/* routes

app/
  admin/
    layout.tsx             # Admin shell: sidebar + topbar
    page.tsx               # Dashboard overview
    login/
      page.tsx             # Login form
    settings/
      page.tsx             # Site settings form
    branding/
      page.tsx             # Favicon, logo, color
    hero/
      page.tsx             # Hero section editor
    navigation/
      page.tsx             # Nav items drag-drop editor
    footer/
      page.tsx             # Footer editor
    about/
      page.tsx             # About page content editor
    team/
      page.tsx             # Team list
      new/page.tsx         # Add member
      [id]/edit/page.tsx   # Edit member
    programs/
      page.tsx             # Programs list
      new/page.tsx
      [id]/edit/page.tsx
    projects/
      page.tsx             # Projects list
      new/page.tsx
      [id]/edit/page.tsx
    innovators/
      page.tsx             # Innovators list
      new/page.tsx
      [id]/edit/page.tsx
    metrics/
      page.tsx             # Metrics editor
    values/
      page.tsx             # Values editor
    seo/
      page.tsx             # SEO per-page editor
    theme/
      page.tsx             # Color/font picker
    activity/
      page.tsx             # Activity log

  api/
    auth/
      login/route.ts
      logout/route.ts
    admin/
      settings/route.ts
      branding/route.ts
      hero/route.ts
      navigation/route.ts
      footer/route.ts
      about/route.ts
      team/route.ts
      team/[id]/route.ts
      programs/route.ts
      programs/[id]/route.ts
      projects/route.ts
      projects/[id]/route.ts
      innovators/route.ts
      innovators/[id]/route.ts
      metrics/route.ts
      values/route.ts
      seo/route.ts
      upload/route.ts

components/
  admin/
    Sidebar.tsx            # Admin sidebar nav
    Topbar.tsx             # Admin top bar (user info, logout)
    PageHeader.tsx         # Reusable admin page title + breadcrumb
    DataTable.tsx          # Reusable table component
    FormField.tsx          # Reusable form field wrapper
    ImageUpload.tsx        # Reusable image upload with preview
    DragList.tsx           # Drag-and-drop reorderable list
    ConfirmDialog.tsx      # Delete confirmation modal
    Toast.tsx              # Toast notification wrapper
```

---

## Execution Order Summary

| Phase | Effort | Unblocks |
|---|---|---|
| Phase 1: Foundation | ~4 hours | Everything else |
| Phase 2: Data Migration | ~3 hours | Public site works from DB |
| Phase 3: Site & Branding | ~4 hours | Visual settings |
| Phase 4: Content Management | ~6 hours | All CRUD content |
| Phase 5: Advanced Features | ~5 hours | SEO, theming, rich editing |
| Phase 6: Polish | ~3 hours | Production readiness |

**Total estimated build: 25 hours across 6 phases**

Each phase is independently executable in a new conversation context. Start a new chat, paste the relevant phase section, and proceed.
