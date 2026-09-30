# ByteSpace New - Project Handoff (context for Claude Code)

> Temporary working file. It is NOT one of the five final docs required by the assessment
> (`docs/01..05-*.md` are written only after the project is finished). Delete or fold this file in at the end.

## 1. What this is

Frontend hiring assessment for a **Jr. Software Engineer (Frontend)** role. Build the **ByteSpace New** landing page
(the Figma **Home** frame, 1440 x 6377) with Next.js, React, TypeScript and Tailwind, fully responsive, then push to a
public GitHub repo, open a PR, and deploy on Vercel. Login/Register pages are an optional bonus, only after the landing
page is polished.

The owner (Naeem) must be able to **understand, rebuild, debug and explain every file in an interview** without AI.
So: keep code simple, teach the concept behind important choices (short comments / short explanations), avoid clever code.

## 2. Rules (from the owner - follow strictly)

- Stack: Next.js App Router, React, TypeScript (practical, no `any`, no fancy generics), Tailwind CSS v4, ESLint. Nothing else
  unless truly required. No backend, DB, Redux, auth, extra UI libraries.
- Figma is the source of truth. Do not invent UI. Do not guess values that can be inspected.
- Hardcode less: repeated content is data (`src/data/*`), environment values go through `src/config/site.ts` + `.env.example`,
  colors/radius/shadows/fonts are Tailwind tokens in `src/app/globals.css`. Genuinely static design values stay inline.
- Server Components by default. Client Components only where state/browser APIs are needed (currently `Navbar`, `CategoryChips`).
- Accessibility: semantic HTML, alt text, keyboard focus states, one `h1`.
- **Git: work only on branch `feature/bytespace-landing`. Never commit to `master`. Do NOT push, open a PR, merge or deploy unless
  the owner explicitly asks. Do not run git commands that change history/state unless asked (read-only `git status/diff/log` is fine).**
- Do not commit secrets. `.env*` is git-ignored except `.env.example`.
- Reply language with the owner: Banglish (Bengali + English mix), concise and direct, no sugarcoating.

## 3. Environment

- Windows. Node v24.13.1, npm 11.8.0, Git 2.45.1. Project root: `D:\Naeem\projects\interview task\Doin-Tech\bytespace-new`.
- Installed: Next.js 16.3.7 (Turbopack), React 19.2.8, Tailwind v4 (`@tailwindcss/postcss`), TypeScript 5, ESLint 9.
- `AGENTS.md` says this Next.js version differs from older versions: **read the relevant guide in `node_modules/next/dist/docs/`
  before writing Next-specific code** (fonts: `01-app/01-getting-started/13-fonts.md`).
- Tailwind v4: there is no `tailwind.config.js`. Tokens live in `@theme` in `src/app/globals.css`.
- Commands: `npm run dev`, `npm run lint`, `npm run build`. Baseline commit `e56dba1` = untouched create-next-app output.
- Scaffolding/design-token/config commit was made by the owner. Section code (Milestones 2-5) is written but was not yet built when
  this file was created - **run lint + build first and fix anything that fails.**

## 4. Figma source

- Working copy (use this): https://www.figma.com/design/2zZjF2lf1zvPLgWxCOc0B6/ByteSpace-New-Check-website--Copy-  (fileKey `2zZjF2lf1zvPLgWxCOc0B6`)
- Original (view-only, MCP is blocked on it): fileKey `26TBgRjmpuxudcErJsHUfy`.
- Pages: Design (9 frames, all 1440 wide, desktop only), Presentation (marketing cover), Style Guide.
- Home frame node `1:1067` (1440 x 6377). Other frames (Creator Profile, 404, Course Reviews/Lessons/Details, Search, Login, Register)
  are out of scope for now.
- **Figma MCP budget: the owner's plan is Starter (20 tool calls/month, shared across all clients). About 17 are already used.
  Do NOT spend MCP calls casually.** Prefer the numbers in this file. If a value is truly missing, ask the owner before calling MCP.
  Assets should be exported manually by the owner (see section 8).
- The prototype has no interactions and no scrolling (nothing to implement from it). **Figma is desktop-only: all mobile/tablet
  behavior is our own decision, never present it as a Figma spec.**

## 5. Home frame section map (Figma facts)

| # | Section | Figma node | y | h | Background |
|---|---|---|---|---|---|
| 1 | Hero (navbar is inside it) | `1:1695` Hero_Frame | 0 | 1024 | #003BE2 |
| 2 | Logo strip | `1:1794` | 1024 | 202 | #F5F5F6 |
| 3 | Discover: heading `12:101`, chips `21:33`/`21:56`/`21:63`, cards `33:683` | | 1298-2576 | | white |
| 4 | Explore Learning Paths: heading `34:684`, cards `34:725` | | 2648-3000 | | white |
| 5 | Growth + Create (one frame `34:1159`) | | 3120 | 1460 | #FAFAFA + blurred lime/periwinkle glows |
| 6 | CTA `34:1161` | | 4580 | 488 | #003BE2 |
| 7 | Testimonials `34:1175` | | 5068 | 784 | #FAFAFA + blurred ellipses |
| 8 | Footer `34:1256` | | 5852 | 525 | white |

Grid: 12 columns, margin 120, gutter 40, content width 1200.

### Key measurements (desktop, 1440)
- Header 120 tall; logo mark 28.875x31.5 at x=122; nav centered (Home medium/active, Courses, Creators; gap 24, 16px, #F5F5F6);
  right cluster at right 120: Sign In, Join Us, bag icon 24 (gap 24).
- Hero content: top 169, width 1200, gap 60. H1 Poppins SemiBold 72/1.2, tracking -0.72px, white, 935 wide, centered. Subtitle Satoshi 18/1.6 #E5E6E8.
  Search bar: white input 461x52 radius 24 padding 24/12, placeholder "Course, topic, creator" #82868E, lime button (#D4FB20, radius 24, px24 py12, Satoshi Medium 18, #242528) label "Search", gap 16.
- Hero illustration: 578x541 at y=512 (centered). Floating cards (white, p16, radius 16, blur 10): "Learning Progress 55%" at (842, 651); "Happy Students 4.5 (240)" + 7 avatars 43px overlap 16 + "2K+" at (328, 837), width 258;
  "UI/UX Design - 200 Courses - 1000+ Students" at (404, 639). 3D ornament group `46:79`: 1719x803 at (-118, 221). Grid overlay `12:224` 1440x1024. Ellipse `1:1866` 1149 at y=582.
- Logo strip: 5 partner logos ~167-170 x 41, gap 72, top offset 80 ("Logoipsum" placeholders).
- Discover: heading Poppins SemiBold 44/1.2 (588 wide, 2 lines), paragraph Satoshi 18/1.6 (917 wide), gap 16. Chips: px16 py12 radius 24, gap 16, 3 rows (8 / 6 / 4 + "+ More" in #003BE2), row pitch 64. Active chip lime, others #F5F5F6 with #4B4C53 text.
  Cards: 3 columns x 2 rows, 373x384, gap 40.
- Course_Card_1 `13:249`: 373x384, radius 24, 1px #CED0D3, white, no shadow. Image 341x195 at (15,15) radius 12; pills over image (rgba(246,246,246,.6), blur 4, px12 py6, radius 24, 12px #4F4F4F);
  body at top 231: title Poppins SemiBold 20 (black, tracking -0.2px), "by purepearl studio" 12px (name #003BE2); level chip "Beginner" (#F5F5F6) + 4 avatars 32px (overlap 8) + lime "26+" circle;
  price "$25" Poppins SemiBold 20 #003BE2 + "/lifetime" 12px; rating "4.5 + star" at (305, 231), 18px.
- Explore: heading 36px SemiBold (one line, 792 wide), paragraph 917 wide. Category cards 167x167 radius 24 border #CED0D3, lime circle (p12, radius 40) with 36px icon, label Satoshi Medium 20; 6 cards, gap 40.
- Growth/Create (frame content x=121, y=120): row 1 = text 574 + gap 63 + visual 621x552; row 2 = visual 541x596 + gap 79 + text 580; row gap 72.
  Row-1 text: H2 44px; paragraph 18px 477 wide; stats (Poppins Medium 36/44 #003BE2 + label 18px #4B4C53), gap 56. Row-2: H2 44px (391 wide), paragraph 18/28, checklist 4 items (24px check icon + Satoshi Medium 18, gap 16).
  Blue stat cards (#003BE2, p16, radius 16): "Total Revenue / July 1-28 / $120.29 / +12$ badge (#CBFC01)" and "Year to Date / 2023 / $1,200.38 / +12$".
  Layering (verified by screenshot): person cut-out image is ABOVE the course card / revenue cards; floating cards and lime squiggle ornaments on top.
- CTA: content 964 wide, gap 40; H2 44px (#F5F5F6, 710 wide), paragraph 18px, lime "Join as Creator" button. Ornaments group `46:78` 1714x803 at (-118, -162).
- Testimonials: H2 44px (577 wide) + paragraph (580 wide) side by side, bottom aligned, gap 43; 3 cards (white, radius 24, p24, gap 24, quote width 326, card gap 41); avatar 80; name Poppins SemiBold 20; role #003BE2 18px; quote #4F4F4F 18/1.6.
- Footer: 1px top line; left: logo, blurb (14px, 528 wide), email input 376x52 radius 100 + lime button, legal 12px; right: three 167px link columns (14px, gap 16, column gap 40);
  bottom bar: line, "(c) year ByteSpace. All rights reserved." + Privacy Policy / Terms of Service / Cookies Settings (12px, gap 24).

## 6. Design tokens (already in `src/app/globals.css`)

- Colors: `shuttle-50..950` (grays; 950 = #242528 main text, 700 = #4B4C53 body, 400 = #82868E placeholder, 200 = #CED0D3 borders),
  `persian-50..950` (blue; 800 = #003BE2 brand), `electric-50..950` (lime; 400 = #D4FB20 accent, 500 = #CBFC01 badge),
  plus `ink-700` (#4F4F4F) and `surface-alt` (#FAFAFA).
- Radius: `image` 12, `float` 16, `card` 24, `icon` 40, `input` 100. Shadow `hero` (8-layer) is defined but currently unused.
- Fonts: Poppins (headings; 500/600 loaded via `next/font/google`), Satoshi (body/labels; Regular 400, Medium 500, Bold 700 - **not loaded yet**),
  Clash Display Bold (wordmark only - **not loaded yet**). CSS variables: `--font-poppins`, `--font-satoshi`, `--font-clash` (with fallbacks in `@theme inline`).
- Text styles used: H1 72/1.2 -1% tracking; H2 44/1.2; explore H2 36/1.2; stats 36/44 Medium; card title 20; body 18/1.6; small 14, 12. Letter spacing on Poppins headings = -1% of size.

## 7. Code structure (what exists)

```
src/
  app/            layout.tsx (Poppins, metadata), page.tsx (stacks sections), globals.css (tokens)
  config/site.ts  name, description, url (NEXT_PUBLIC_SITE_URL)
  types/index.ts  NavLink, Course, Category, Testimonial, Stat, Partner
  lib/cn.ts       class-name joiner
  data/           assets.ts (ALL image paths), navigation, courses (+chip rows), categories, home (stats, benefits),
                  partners, testimonials, footer
  components/
    ui/           Container, Button, Chip, SectionHeading, Rating, AvatarStack, ProgressBar, FloatingCard
    layout/       Logo, Navbar (client), Footer
    cards/        CourseCard, CategoryCard, TestimonialCard, LearningProgressCard, HappyStudentsCard
    sections/     Hero, LogoStrip, CoursesSection, CategoryChips (client), CategoriesSection,
                  FeaturesSection (wraps GrowthRow + CreatorRow), CtaSection, TestimonialsSection
```

Responsive approach (OUR decision, not Figma): Tailwind defaults. Full Figma-accurate layout from `xl` (>=1280); hero becomes a stacked flow below `xl`
(floating cards + 3D ornaments hidden); desktop nav from `lg`, hamburger menu below; growth/creator rows stack below `xl` and hide overlay cards below `md`;
course cards wrap (3/2/1 columns); category cards 6 -> 3 -> 2 columns; testimonials stack; footer stacks.

## 8. Media / assets - WHAT IS STILL PLACEHOLDER

All paths are centralized in `src/data/assets.ts`. Files below currently exist as **placeholders** (solid colors or my own simple SVGs).
Replace them with the real Figma exports using the **same file name**; then the page updates with no code change.
Export from the Figma working copy: select the layer -> Export panel -> PNG **2x** for photos (keep transparency), SVG for vectors.

| Target file (under `public/`) | Figma node(s) | Notes |
|---|---|---|
| `icons/logo-mark.svg` | `1:1788` (footer copy `34:1262`) | lime "b" mark, 28.875x31.5, SVG |
| `images/hero/hero-main.png` | `1:1796` | 578x541 person cut-out (transparent). Same image is reused in the growth section. Check whether the Figma shadow is baked in |
| `images/hero/ornaments.png` | `46:79` | flatten whole 3D group, transparent, 1719x803 |
| `images/cta/ornaments.png` | `46:78` | flatten, transparent, 1714x803 |
| `images/features/creator-woman.png` | `34:1011` | 435x596 cut-out (girl with tablet) |
| `images/features/ornament-lime.png` | `34:981` (or `34:1006`) | lime squiggle, 215x215, transparent |
| `images/avatars/student-1..7.png` | `1:1828`-`1:1834` | 43px circles (export 2x). Used in the "Happy Students" card |
| `images/avatars/card-1..4.png` | `13:266`-`13:269` | 32px circles |
| `images/avatars/testimonial-1..3.png` | `34:1184`, `34:1190`, `34:1196` | 80px circles |
| `images/courses/course-1..6.png` | image inside each Course_Card_1 (`13:249`, `33:518`, `33:551`, `33:584`, `33:615`, `33:646`) | 341x195 -> export 2x. **The 3 pills are children of that frame - hide them or export the raw image fill only** |
| `images/partners/partner-1..5.svg` | `1:1709`, `1:1720`, `1:1736`, `1:1747`, `1:1758` | "Logoipsum" placeholder logos |
| `icons/search.svg`, `bag.svg`, `star.svg`, `check-circle.svg`, `signal.svg` | `1:87`, `1:98`, `1:74`, `1:2`, `33:241` | currently hand-drawn stand-ins |
| `icons/categories/{design,development,it-software,business,marketing,photography}.svg` | `11:71`, `12:157`, `12:159`, `12:166`, `12:162`, `12:164` | currently generic glyphs |
| `images/backgrounds/grid.svg` | `12:224` | 1440x1024 grid overlay (my version = 120px lines at 12% white) |
| `images/backgrounds/hero-ellipse.svg` | `1:1866` | 1149 ellipse |
| (optional) growth / testimonial blobs | `34:1307`, `34:1309`, `34:1314`, `34:1311`, `34:1313` | currently approximated with CSS radial gradients in `FeaturesSection` / `TestimonialsSection`; export and swap only if they look different |

Fonts (owner must download from Fontshare, free): **Satoshi** (Regular, Medium, Bold) and **Clash Display** (Bold), `.woff2`, into `src/fonts/`.
Then wire with `next/font/local` in `src/app/layout.tsx`, exposing the variables `--font-satoshi` and `--font-clash` (the CSS already reads them).

## 9. Known ambiguities / decisions

- Footer newsletter button label is "Search" in Figma (copy error) -> we use "Subscribe". Copyright uses a real (c) and the current year (Figma: "@ 2023").
- Footer column headings "Browse"/"Platform" exist in Figma but are transparent -> not rendered.
- Chips: Figma has 18 chips but only 6 course cards and no link between them -> chips only change the highlight, no filtering.
- Nav/footer/CTA links have no targets in Figma: "Courses" -> `#courses`, "Creators" -> `#creators`, everything else `#`. Login/Register are bonus.
- Course titles are single-line and truncated in Figma (card overflow hidden) -> we use `truncate` with a `title` tooltip.
- Section intro paragraph color under "Discover" and "Explore" was not read from Figma (we use `shuttle-700`); Testimonials background not visually verified.
- Off-token values kept as tokens: `#FAFAFA` (`surface-alt`), `#4F4F4F` (`ink-700`).
- Text style names in Figma are inconsistent (e.g. "Heading S"); rely on per-node values in section 5.
- Frame `Categories_Cards_Frame` (`11:21`) off-canvas is unused.

## 10. Plan / status

1. Setup + tokens + fonts (Poppins) + config + branch - DONE and committed.
2. Navbar + Hero - code written, needs real assets + visual check.
3. Logo strip + Courses (chips, 6 cards) - code written.
4. Categories + Growth + Create - code written.
5. CTA + Testimonials + Footer - code written.
6. **NEXT:** run lint/build, replace placeholder assets/fonts, compare each section with Figma at 1440, fix diffs.
7. Responsive pass (375 / 768 / 1024 / 1280 / 1440 / 1920): no horizontal scroll, sensible stacking, working mobile menu.
8. QA: lint, build, console errors, keyboard focus, alt text, heading order, unused code/deps.
9. Final code review, then PR + Vercel (ONLY when the owner asks), then the five docs in `docs/` (`01-project-guide`, `02-architecture-and-design`,
   `03-code-and-technology-guide`, `04-manual-rebuild-guide`, `05-ownership-and-interview-guide`), based on the real final code.
10. Optional bonus: Login/Register reusing the same UI components.

Suggested commit style (owner runs git): `feat: build navbar and hero section`, `feat: add courses and categories sections`,
`feat: add feature, cta and testimonial sections`, `feat: add footer`, `fix: ...`, `chore: ...`.

## 11. Definition of done for the landing page

- `npm run lint` and `npm run build` pass with no warnings you can fix.
- Home page matches the Figma Home frame at 1440 (positions, sizes, typography, colors, radius) using the real assets and fonts.
- Works and looks intentional at mobile / tablet / laptop / large desktop; no horizontal scroll; mobile menu works.
- No console errors, no broken images, no hydration warnings.
- The owner can explain every file. Nothing over-engineered.
