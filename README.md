# ByteSpace

Front-end for the ByteSpace online-course platform, built from the Figma design (Home, Search, Course
About / Lessons / Reviews, Creator Profile, Sign In, Sign Up and 404). There is no backend: all content is
static sample data in `src/data`.

**Stack:** Next.js (App Router), React, TypeScript, Tailwind CSS v4, ESLint.

## Run it

```bash
npm install
cp .env.example .env.local   # optional, see "Configuration"
npm run dev                  # http://localhost:3000
npm run lint
npm run build && npm start   # production build
```

## Routes

| Route | Page |
|---|---|
| `/` | Home (landing page) |
| `/search` | Course search with filters, chips and pagination |
| `/courses/[slug]` | Course details (About tab) |
| `/courses/[slug]/lessons` | Course lessons tab |
| `/courses/[slug]/reviews` | Course reviews tab |
| `/creators/[slug]` | Creator profile |
| `/login`, `/register` | Sign in and sign up (front-end validation only) |
| any other URL | 404 page (`src/app/not-found.tsx`) |

## Project structure

```text
src/
  app/            routes, layouts, global styles and design tokens (globals.css)
  components/
    ui/           small reusable pieces (Button, Chip, Rating, Icon, Pagination, ...)
    layout/       Navbar, Footer, Logo
    cards/        CourseCard, TestimonialCard, floating info cards
    sections/     Home page sections
    course/       course pages (header, sidebar, tabs, reviews, lessons)
    creator/      creator profile
    search/       search page
    auth/         sign in / sign up
  data/           all sample content and the central image map (assets.ts)
  config/         site-wide settings (site.ts, reads .env)
  lib/            tiny helpers (cn, validation)
  types/          shared TypeScript types
public/           images and icons exported from Figma
```

## Configuration

Environment values live in one place: `src/config/site.ts`. The only variable is `NEXT_PUBLIC_SITE_URL`
(see `.env.example`); nothing secret is needed.

## Design decisions

- **Figma is desktop only (1440 px).** The full Figma layout is used from the `xl` breakpoint (1280 px) up. Below
  that the layouts stack, decorative floating cards and 3D shapes are hidden and the menu becomes a hamburger. Those
  mobile and tablet layouts are our own decisions, not part of the Figma file.
- **Server Components by default.** Only pieces that need state are Client Components: Navbar (mobile menu),
  category chips, search page, review filter, tabs, share and follow buttons, auth form.
- **Data-driven UI.** Repeated blocks (course cards, chips, reviews, modules, footer links...) are rendered from
  arrays in `src/data`.
- **Images** use `next/image`. Every image path is listed in `src/data/assets.ts`.
- **No video player.** The course preview is a still picture, as in the design.
