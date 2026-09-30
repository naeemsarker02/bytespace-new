# Pages Handoff - Figma inspection for the remaining pages

> Temporary working file (like `HANDOFF.md`). Source: Figma duplicate `2zZjF2lf1zvPLgWxCOc0B6`, page `Design` (`0:1`).
> Figma is desktop-only (all frames 1440 wide). Mobile/tablet is our own decision (see `HANDOFF.md` section 7).
> Coordinates below are **relative to the parent node** unless written "abs" (= relative to the page frame).

## 0. Status, limits and what could NOT be inspected

**Figma MCP quota is exhausted** (Starter plan). Calls used in this task: 3 x `get_metadata` (start node, page list, whole page `0:1`) and
1 x `download_assets` which returned *"You've reached the Figma MCP tool call limit"*. I stopped there and did not retry.

`get_metadata` returns only **node id, type, name, x/y/width/height** (text layers are named after their text, so all copy below is exact
except for possible truncation of very long paragraphs, which I checked by name = full text). It does **not** return:

- **font family / size / weight / line-height / letter-spacing, colors, radii, borders, shadows, opacity, fills** for any of the new pages
- which tab / chip / pagination number is the *active* one, hover/focus states
- what each icon instance or 3D image actually looks like (only its node id and size)

Everything in the "Tokens" subsections is therefore **inferred from existing Home tokens + layer sizes and marked (verify)**.
Anyone building these pages should look at the Figma frame visually (or spend 1 MCP call/frame on `get_design_context` once quota resets,
next month) before finalizing colors/type.

Nodes not inspected in detail (only listed by name/size): all hidden decorative frames (`HIDDEN` in the outlines), the inside of the video
thumbnail frame (`55:4202` / `78:2845`, a leaf in metadata), the inside of the 3D-shape masked groups on Login/Register.

**Asset download did NOT happen** (limit reached). `figma-export/pages-assets/` was not created. Section 9 is the manual export checklist.

Frame list (all 1440 wide):

| Page | Node | Size | Page-level x/y (canvas) |
|---|---|---|---|
| Register | `47:351` | 1440 x 1024 | (-7274, 1748) |
| Login | `49:195` | 1440 x 1024 | (-7274, 2910) |
| Search Page | `55:117` | 1440 x 3853 | (-5678, 1748) |
| Course Details ("About" tab) | `55:4066` | 1440 x 2717 | (-4082, 1748) |
| Course Lessons | `60:102` | 1440 x 2883 | (-2486, 1748) |
| Course Reviews | `60:681` | 1440 x 3449 | (-890, 1748) |
| Creator Profile | `60:1878` | 1440 x 2136 | (706, 1748) |
| 404 Not Found | `63:252` | 1440 x 1485 | (2302, 1748) |
| Home (done) | `1:1067` | 1440 x 6377 | - |

The start node `78:2845` is **not a page**: it is the 720 x 479 video-thumbnail frame inside Course **Lessons** (hero). The same frame exists
in Details (`55:4202`) and Reviews (`78:2914`). Each page has an empty 56x44 `Auto Layout Vertical` at abs (266,2873): a stray layer, ignore it.

## 1. Shared building blocks (appear on several pages)

### 1.1 Header_Frame (1440 x 120, at 0,0)
Same as Home navbar: logo (mark 29x32 at x=122, "ByteSpace" wordmark 134x30 at x=159) ; nav `Home` `Courses` `Creators` (210 x 26, at x=614);
right cluster `Sign In` `Join Us` + bag icon 24 (174 x 24 at x=1146). Node ids: 404 `78:2779`, Details `78:2727`, Lessons `78:2849`, Reviews `78:2918`,
Creator `78:2766`, Search `78:2714`. **Register (`47:501`) and Login (`49:247`) show only the logo** (no nav, no buttons) -> Navbar needs a "logo only" variant/prop.
Reuse: `Navbar`, `Logo`.

### 1.2 Footer (1440 x 525) - identical to Home footer
Position (abs y): 404 `78:1457` y=960 ; Details `78:1653` y=2192 ; Lessons `78:1604` y=2358 ; Reviews `78:1555` y=2924 ; Creator `78:1506` y=1611 ; Search `78:1408` y=3328.
Content: blurb "Stay Up to date with our latest features and releases by joining our newsletter.", input placeholder "Enter your email", button label in Figma
"Search" (we use "Subscribe"), legal "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.",
columns `Browse` (Featured Courses, Featured Categories, Business, IT, Design) / (Development, Marketing, Photography, Finance, Sport) /
`Platform` (Become a Creator, Affiliate Program, Contact, Help, About), bottom "@ 2023 ByteSpace. All rights reserved." + Privacy Policy / Terms of Service / Cookies Settings.
Reuse `Footer` as is.

### 1.3 Course detail hero (Details, Lessons, Reviews - same layer set; blue `#003BE2` + grid overlay, 1440 x 957)
Hero frame ids: Details `55:4160`, Lessons `78:2792`, Reviews `78:2861`. Children (identical on all 3):

| Element | Position (rel. hero) | Size | Text |
|---|---|---|---|
| Title block | (122,172) row 1283x185 | title 769x43, subtitle 571x24 | "Build Digital Asset: A Comprehensive Guide" / "Unlock the Power of Digital Creation with Expert Guidance" |
| Creator line | (0,99) in block | 157x22 | "by purepearl studio" |
| Meta chips row | (0,145) in block, 576x40 | 3 pills: 171x40, 200x40, 173x40 gap 16 | pill 1 icon(level)+"Intermediate" ; pill 2 icon(star)+"4.8 (172 reviews)" ; pill 3 icon(users)+"199 Students" |
| Share button | (1161,0) in row, 122x40 | icon 24 at (24,8) + text | "Share" |
| Video thumbnail | abs (125,416) | **720 x 479** | leaf frame (image); node Details `55:4202`, Lessons `78:2845`, Reviews `78:2914` |
| Small frame | (165,704) | 70 x 28 | leaf, purpose unknown (maybe play/duration pill) - verify visually |
| 4 decorative images | `HIDDEN` | - | hidden: do NOT build |

Pill layout: icon at x=24, text at x=56, height 40 => padding 24px left, radius probably full (verify). Video thumbnail overlaps into the white body:
sidebar card starts at abs y=416 and hero ends at 957.

### 1.4 Course tabs (3 tabs, 43 tall, each `px16 py12`, text 19 tall, gap 16)
Details: `About` (76 wide), `Lessons` (89), `Reviews` (90). Lessons page and Reviews page label the middle tab **"Lesson"** (82 wide) - inconsistent copy in Figma; use
"Lessons" on all pages. Active tab styling is not in metadata (verify; probably lime / underline like the Chip active state). It is a nav between 3 routes
(`/courses/[id]`, `/courses/[id]/lessons`, `/courses/[id]/reviews`) or 3 client-side panels: decide with owner.
Reuse: `Chip` (same 43px pill height as home chips).

### 1.5 Sidebar card "Enroll" (identical on Details / Lessons / Reviews)
Ids: Details `55:4206`, Lessons `78:2930`, Reviews `78:2982`. Outer 412 x 959 at abs (908,416) (white card, presumably border `#CED0D3` + radius 24 - verify).
Inner column at (40,40), 332 wide, 879 tall. Blocks (y relative to inner column):

| y | Block | Content |
|---|---|---|
| 0 | Lesson preview (326x224) | heading "112 Lessons (24 hours)" (24 tall); rows (each 38 tall, gap 12): `01` "Introduction to Digital Assets" `12 mins`; `02` "Design Principles for Impacts" `21 mins`; `03` "Advanced Techniques in Digital Creation" `16 mins`; link text "99 more videos" (26 tall, at y=150) |
| 248 | Enroll block (332x184) | text "Ready to Dive In? Enroll Now and Start Building Your Digital Future!" (332x52) ; price `$25` (65x38, big) + "/lifetime" (56x26) at y=76 ; button "Enroll Now" (332 x 46, full width, lime presumably) at y=138 |
| 456 | Heading | "This course include" (sic, 192x24) |
| 504 | List (226x140), 4 rows 26 tall gap 12, icon 24 + text at x=32 | "Learning Resources", "Quality Lesson Videos", "Certificate of Completion", "Private Consultation" |
| 668 | Divider line | 332 wide |
| 692 | Creator mini card (332x187) | avatar ellipse 52 + "PurePearl Studio" (22) + "Professional Creator" (26) ; paragraph "Ready to Dive In? Enroll Now and Start Building Your Digital Future!" (repeated placeholder text, 332x52 at y=76) ; button "See Full Profile" (139x35 at y=152, text 107x19 => outline/secondary small button) |

### 1.6 Course Card_1 (`Course_Card_1`, 373 x 384) - same component as Home
On Search/Creator/Register/Login the card is identical to Home's (`CourseCard`): image 341x195 at (16,16), body at y=232,
title, "by purepearl studio", level chip `Beginner` (97x32) + avatar stack (4 x 32, +`26+` lime) , price `$25` `/lifetime`, rating `4.5` + star at (306,232).
Titles used (same 6 as `src/data/courses.ts`, same order): Learn Figma from Basic / Build Digital Asset / the Power of Big Data /
Balancing Productivity and Self-Care / Mastering Money Management / From Idea to Startup Success. Reuse `CourseCard` and `courses` data + `public/images/courses/course-1..6.png`.
Small differences vs Home: title 24 tall (not 28) and level text 14 tall - only metadata rounding, treat as the same component.

### 1.7 Filter toolbar (Search `55:168`, Creator `60:1930`), 1201 x 48
Left group (352 x 48): 3 buttons, each `icon 24 at x=16` + label at x=44, height 48, gap 16: `Filter` (96 wide), `Level` (97), `Category` (127). Icons are `Style=Outlined` instances.
Right: sort button `Most relevant` (157 x 48, icon `Style=Filled` at left x=16, label at x=44) at x=1044 (right aligned to 1201).
Styling (border, radius) not in metadata - verify; looks like outlined pills.

### 1.7b Rating stars
`Style=Filled` 24x24 star instances (5 in a row, pitch 28 -> gap 4). Existing `Rating` shows "4.5 + one star"; the review pages need a new **5-star row** (`StarRow` / prop on `Rating`).

## 2. Register - `47:351` (1440 x 1024)

Layout: full-bleed blue frame with grid overlay (`49:156`, same as Home grid) ; left = decorative showcase, right = white form card.

| Node | Abs pos | Size | Notes |
|---|---|---|---|
| Header_Frame `47:501` | (0,0) | 1440x120 | logo only (see 1.1) |
| Left text `47:498` | (122,120) | 475x127 | h "Sign up and come in" (202x24, 24px-ish, semibold?) + para (475x87): "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost" |
| Showcase group `15254:194` "Group 7" | (97,305) | 548x585 | see below |
| Form card `47:362` "Register_Frame" | (741,120) | 579 x 784 | white card (radius 24-ish, verify); inner `Content` `47:363` at (63,61) 453 x 672 |

Form content (`47:363`, 453 wide):
- Title block `47:365`: small label "Create an Account" (148x29) ; big heading "Welcome to ByteSpace" (453x106 => 2 lines at ~44px).
- Fields (each 453x77 = label 17 tall + gap 8 + input 52): **"Full Name"** placeholder/value `Jamie Davis`; **"Email"** `designer@example.com`; **"Password"** `********`.
  Input: 453x52, text at x=24,y=12 => `px24 py12`, same as Home search input (radius 24 likely).
- Button "Continue" 123x46 aligned **right** (x=330). Same as `Button` (lime, radius 24).
- Bottom row (224x26, centered at x=114, y=646): "Already have an account?" + link "Login" (39 wide, blue link likely).

Showcase group `15254:194` children (coords relative to group `97,305`... note Figma stores card coords absolute-ish):
- Two `Course_Card_1` (373x384) at (122,394) title "Build Digital Asset", and (233,305) title "the Power of Big Data" (overlap; first is in front/behind - verify).
- "Happy Students" card `49:132` 258x123 at (348,740): "Happy Students", "4.5 (240)" + star, 7 avatars 43px pitch 27 + "2K+" -> **reuse `HappyStudentsCard`**.
- Three 3D images (masked groups, need export, see assets): `49:180` 175x175 at (645,626), `49:185` "Cone" 146x146 at (151,320), `49:190` "Cone" 188x188 at (97,702).
  (User's description: lime torus, lime pyramid, white spring - I could not tell which node is which without a screenshot; export all three and name by look.)

Reusable: `Navbar` (logo-only variant), `Button`, `CourseCard` x2, `HappyStudentsCard`, new **`FormField`** (label + input), new **`AuthCard`** (used by Login too).

## 3. Login - `49:195` (1440 x 1024)
Same skeleton as Register (grid `49:196`, header logo only `49:247`, form card `49:220` at (741,120) 579x784, content `49:221` at (63,61) 453x683, left text `49:244` at (122,120) 475x98, showcase group `15254:195` "Group 8" identical to Register: cards `49:251`, `49:282`, happy students `49:313`, 3D `49:330` / `49:335` / `49:340`).

Texts: left heading "Sign in with ease" ; para "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge." (475x58).
Form: label "Sign In" (55x29) ; heading "Welcome Back" (453x53, 1 line ~44px) ; fields "Email" `designer@example.com`, "Password" `********` ; button "Sign In" 104x46 right aligned (x=349) ;
divider row `50:349` (453x29): line 200 + "or" + line 200 (gap ~12) ; two square social buttons 72x72 (`50:354` at x=0 and `50:358` at x=88, gap 16, centered, rect 72 + icon frame 40x40 at (16,16)) = Facebook + Google (icons `50:356`, `50:360`; brand identity is my assumption from the request, verify) ; bottom "New user?" + link "Create an account" (208x26, at y=657).

## 4. Search Page - `55:117` (1440 x 3853)

| Section | Node | Abs pos | Size | Content |
|---|---|---|---|---|
| Hero | `55:844` | (0,0) | 1440 x 360 | blue + grid `55:1693`; H `Find Your Next Course` (393x43, 44px-ish, white, centered, at (408,164) col 624 wide; text offset x=116); search row `55:859` (624x52, y=75 in col): input 461x52 (icon 24 at x=24 + placeholder "Search" 29 tall) + dropdown button `Courses` (147x48, text at x=24, chevron `Style=Filled` 24 at x=99) gap 16. Hidden decor frames (ignore); visible ornament frame `55:856` (332x331 at (-97,149)) and `55:847` (70x28) |
| Filter toolbar | `55:168` | (119,432) | 1201 x 48 | see 1.7 |
| Category tabs | `55:1819` "Tab_Categories" | (120,512) | 1200 x 43 | 9 chips px16 py12 h43, gap ~16/17: `Featured`(96, presumably active) `Music`(75) `Drawing & Painting`(170) `Marketing`(105) `Animation`(105) `Social Media`(124) `UI/UX Design`(130) `Creative Marketing`(169) `Cooking`(94). One row, no "+ More" |
| Course grid | `55:1843` "Frame 8" | (121,632) | 1199 x 2504 | **18 cards**: three sub-groups (`Frame 8` `78:1907`.., `78:2105` at y=848, `78:2304` at y=1696), each 3 columns x 2 rows, card 373x384, column pitch 413 (gap 40), row pitch 424 (gap 40), group pitch 848 (=> uniform grid gap 40 between rows too: 2 rows 808 + 40). Titles cycle through the 6 course titles (1.6) three times |
| Pagination | `55:834` | (588,3208) | 314 x 48 | prev button 56x48 (chevron-left 24) , numbers `1 2 3 4 5` (28 tall text; x=80,111,147,183,221), next 56x48 (chevron-right 24). Active page unknown (probably `1`) |
| Footer | `78:1408` | (0,3328) | 1440x525 | 1.2 |

Note: the hero is only 360 tall on this page (Home is 1024); header overlays it. Toolbar/tabs sit at abs y 432/512 (hero ends at 360).

Reusable: `Navbar`, `Button`, `Chip` (tabs), `CourseCard` (grid, data-driven: repeat the 6 courses x3), `Footer`; new: `SearchBar` (extract from Hero), `FilterToolbar`, `Pagination`, `SortButton`.

## 5. Course Details ("About") - `55:4066` (1440 x 2717)

- Hero (blue, 957 tall) `55:4160`: see 1.3. Texts as listed there.
- Body frame `55:4116` at abs (0,957), 1440 x 1233. Left column `55:4117` at (120,62), **725 wide** x 1108 (abs x=120..845, same width as video thumbnail 720 at x=125).
  - Tabs `55:4118` (287 x 43): About / Lessons / Reviews (1.4).
  - Content `55:4125` at y=83, 725 x 1025:
    - H "Description" (115x24, ~20px semibold)
    - Paragraph (723 x 416, ~18/1.6): "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation. In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm. As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios."
    - H "Sneak Peak" (sic, 115x24) at y=488; 4 images 167 x 125 at x=0,186,372,558 (gap ~19; 725 total) `55:4130`..`55:4133`
    - H "Key Points" (103x24) at y=685; list (318 x 292), rows 26 tall, gap 12, icon `Style=Filled` 24 (check-circle) + text at x=32: "Foundational Concepts", "Design Principles Mastery", "Advanced Techniques in Digital Creation", "Project Showcase and Critique", "Optimizing for Various Platforms", "Digital Asset Management Best Practices", "Monetization Strategies", "Capstone Project: Building Your Portfolio"
- Sidebar `55:4206`: 1.5. Footer y=2192.

Reusable: hero (new `CourseHero` shared by 3 pages), `Chip`/tabs, `CourseSidebar` (shared by 3 pages), list with check icons (like `GrowthRow`/`CreatorRow` checklist -> reuse check-circle icon), `Footer`.

## 6. Course Lessons - `60:102` (1440 x 2883)
Hero `78:2792` + sidebar `78:2930` (identical, 1.3/1.5). Body frame `60:104` abs (0,958) 1440x1400; column `60:105` at (120,78), **723 wide**; tabs `60:106` (280 x 43: About / **Lesson** / Reviews).
Content `60:624` (723 x 1156) at y=83:
- H "Explore the Modules" (199x24) ; para (723x52): "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences."
- H "Lesson List" (106x24) at y=124
- 6 module rows (723 x 75, pitch 99 => gap 24) at y=172,271,370,469,568,667: left icon box 72x72 (icon instance 40x40 at (16,16), i.e. icon in a 72 tile; video-camera-like, verify) ; text column at x=85, 638 wide: title (19 tall, bold-ish 16px) + description (52 tall, 2 lines):
  1. "Module 1: Introduction to Digital Assets" - "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation."
  2. "Module 2: Design Principles for Impact" - "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills."
  3. "Module 4: User-Centric Design Strategies" (sic: no Module 3) - "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design."
  4. "Module 5: Interactive Media and Engagement" - "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences."
  5. "Module 6: Project Showcase and Critique" - "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence."
  6. "Module 7: Optimizing Digital Assets for Various Platforms" - "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes."
- H "Lesson Content" (154x24) at y=766 ; para (723x78): "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes."
- H "Lesson Progress Tracking" (252x24) at y=916 ; para (723x52): "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey."
- Progress card `60:668` (723 x 116) at y=1040, padding 16: "Learning Progress" (115x17), "55%" (72x43, big), bar 691 x 8 at (16,92) with fill 387 x 8 (387/691 = 56% ~ 55%) -> **reuse `ProgressBar`** (full width) and the "Learning Progress" text style of `LearningProgressCard`.
Footer y=2358.

## 7. Course Reviews - `60:681` (1440 x 3449)
Hero + sidebar identical (`78:2861`, `78:2982`). Body `60:683` abs (0,958) 1440x1966; column `60:684` (120,78) **723 wide**; tabs `60:685` (About / Lesson / Reviews).
Content `60:1291` (723 x 1714):
- H "What Learners Are Saying" (257x24) ; para (723x78): "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation."
- Rating summary card `60:1294` (723 x 226) at y=150: left block at (40,43) 129 wide: label "Ratings" (17) + big "4.7" (49x43). Right block at (193,40) 490 x 146: **5 rows** (26 tall, pitch 30): bar track 282 x 8 (at y=9) + fill (260 / 103 / 27 / 10 / 15 wide) + 5 star icons (136 x 24 at x=298, `Style=Filled`) + count text right (x=450): counts `720`, `120`, `21`, `12`, `16`. (Star rows all show 5 stars in metadata; the number of filled stars per row 5..1 is a color/fill detail - verify.) Fill widths are proportional to counts: 260 for 720, 103 for 120 (not exactly proportional - copy px values or compute pct).
- H "Individual Reviews:" (190x24) at y=400
- Rating filter row `60:1355` (723x48) at y=448: `All rating` (97x43) + 5 pill buttons each star icon + number `5` `4` `3` `2` `1` (70/71/70/70/66 wide x 48), gap 16.
- 4 review cards (723 x 276-282, pitch 306 => gap 24; at y=520, 820, 1126, 1432), padding 40: header row 643x100: avatar 52 + name (22) + role "UI/UX Designer" (all four) ; 5 stars (136x24) under it at y=76 ; "a year ago" right aligned (74x24-26) ; quote below at y=164 (643 x 72-78, 3 lines):
  1. **PurePearl Studio** - "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!" (in quotes)
  2. **Albert Flores** - "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!"
  3. **Cody Fisher** - "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process."
  4. **Brooklyn Simmons** - "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout."
  Card 1 quote is wrapped in straight double quotes, cards 2-4 are not (Figma inconsistency - use none or all).
Footer y=2924.
Reusable: `TestimonialCard`-like (avatar/name/role/quote) -> new `ReviewCard`; `ProgressBar` for the bars; star row; `Chip`.

## 8. Creator Profile - `60:1878` (1440 x 2136) and 404 - `63:252` (1440 x 1485)

### Creator Profile
| Section | Node | Abs pos | Size | Content |
|---|---|---|---|---|
| Hero | `60:2155` | (0,0) | 1440 x 592 | blue + grid `60:2454`; Header `78:2766`. Content col `60:2171` at (122,172) 1198 x 338: row 1 (902x252): avatar `60:2175` **96x96** (image) ; name block at x=120,y=8 (406x80): "PurePearl Studio" (295x43, ~36px) + badge "Creator" (103x35 pill, text 55x19 at (24,8)) ; role "Passionate UI/UX, Web designer" (255x29) ; bio para at y=136 (1197x116): "Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together! ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me." (typo "ive" and unfilled `[Creator's Name]` are in the design - fix or copy as is, ask owner). Row 2 (1198x46, y=292): stat pills `3 Products` (140x46) and `12 Followers` (150x46) gap 16 ; button "Follow" (101x46) right aligned at x=1097 |
| Body | `60:1928` | (0,592) | 1440 x 1019 | col at (119,62) 1201 x 896: filter toolbar `60:1930` (1201x48, see 1.7, y=0) ; course grid `78:2503` "Frame 8" at y=88 (1199x808): **6 cards** 3x2, pitch 413 / 424 (same 6 titles) |
| Footer | `78:1506` | (0,1611) | 1440x525 | 1.2 |

Reusable: `Navbar`, `Button` (Follow, lime), `CourseCard` grid (same as Search), filter toolbar, `Footer`; new `CreatorHero`, stat pill (like `Chip`, non-interactive, number + label).
Note: hero content wider than Home (col 1198). The "4 hidden ornaments" pattern is absent here.

### 404 Not Found `63:252`
Hero-like blue frame `63:409` (1440 x 957) with grid overlay `63:410`, Header `78:2779` (full nav), footer `78:1457` at abs y=960 (frame height 1485).
- Giant "404" text `63:643`: **920 x 480 at (260,160)** - text layer, very large (~480px display, font/color/opacity not in metadata; likely huge Poppins/Clash with low-opacity or lime). Verify visually.
- Text block `63:638` (935 x 311 at (253,521)): heading "The page you are looking for doesn’t exist" (935x172, 3 lines? at ~72px, same as Home H1 style, white) ; sub "Try to use a correct url or go back to homepage to start again" (486x29 at (224.5,204), centered) ; button "Back to Home" (163x46 at (386,265) => centered) -> `Button href="/"`.
- Small frame `63:446` (70x28 at (165,704)) leaf, unknown. 4 hidden ornament frames (ignore).
Next.js: implement as `src/app/not-found.tsx`.

## 9. Assets checklist (manual export, download was blocked)

Format rule (from `HANDOFF.md`): photos PNG 2x transparent where cut-out; icons SVG. **All names below are proposals; put under `public/`.**
Existing files to reuse (do not re-export): `images/courses/course-1..6.png` (all card images), `images/avatars/card-1..4.png`, `student-1..7.png`,
`testimonial-1..3.png`, `icons/logo-mark.svg`, `icons/star.svg`, `icons/check-circle.svg`, `icons/signal.svg`, `icons/search.svg`, `icons/bag.svg`,
`icons/facebook.svg`, `icons/google.svg` (already exist - just check they match Figma nodes `50:356` / `50:360`), `images/backgrounds/grid.svg` (grid overlay on every blue hero).

### 9.1 Photos / illustrations (need export)
| Target under `public/` | Node | Format | Size | Notes |
|---|---|---|---|---|
| `images/course/video-thumbnail.png` | `55:4202` (Details; same art in `78:2845`, `78:2914`) | PNG 2x | 720x479 | inner content unknown: **check for baked play button / rounded corners**; if a separate play vector exists export it as `icons/play.svg` |
| `images/course/sneak-peek-1..4.png` | `55:4130`, `55:4131`, `55:4132`, `55:4133` | PNG 2x | 167x125 each | export the image fill only (rectangles) |
| `images/creators/purepearl.png` | `60:2175` | PNG 2x | 96x96 | Creator Profile avatar (circle mask: export raw square) |
| `images/avatars/creator-52.png` | `55:4251` (sidebar mini card; same in `78:2975`, `78:3027`) | PNG 2x | 52x52 | probably the same person as `60:2175`; if identical reuse one file |
| `images/avatars/reviewer-1..4.png` | `60:1377`, `60:1393`, `60:1409`, `60:1425` | PNG 2x | 52x52 | PurePearl, Albert Flores, Cody Fisher, Brooklyn Simmons. Check if they equal `testimonial-1..3.png` (80px) before exporting |
| `images/auth/shape-1.png` | `49:180` (Register) / `49:330` (Login) | PNG 2x transparent | 175x175 | inner "Mask Group" + 2500-wide Rectangle: export the **frame**, not the rectangle |
| `images/auth/shape-2.png` | `49:185` / `49:335` ("Cone", 146x146) | PNG 2x transparent | 146x146 | |
| `images/auth/shape-3.png` | `49:190` / `49:340` ("Cone", 188x188) | PNG 2x transparent | 188x188 | rename to torus / pyramid / spring after looking at them |
| `images/backgrounds/page-ornament.png` (optional) | `55:856` (Search hero, 332x331 at (-97,149)) | PNG 2x transparent | 332x331 | only if visible in the design; the other 4 ornament frames are hidden |

### 9.2 Icons (SVG). All are instances named `Style=Outlined` or `Style=Filled` (Material Symbols style, 24x24). Names are guesses from position; verify in Figma.
| Target `icons/...` | Node(s) | Size | Used in |
|---|---|---|---|
| `share.svg` | `55:4200` | 24 | hero Share button |
| `level.svg` (bar chart) | `55:4191` (hero pill) - maybe same as `signal.svg` | 24 | hero pill "Intermediate"; reuse `signal.svg` if same glyph |
| `rating-star.svg` | `55:4194` | 24 | hero pill (may equal `star.svg`) |
| `users.svg` | `55:4197` | 24 | hero pill "199 Students" |
| `filter.svg` | `55:171` (Search), `60:1933` (Creator) | 24 | toolbar |
| `level-filter.svg` | `55:174`, `60:1936` | 24 | toolbar "Level" |
| `category.svg` | `55:177`, `60:1939` | 24 | toolbar "Category" |
| `sort.svg` (Filled) | `55:180`, `60:1942` | 24 | "Most relevant" |
| `chevron-down.svg` (Filled) | `55:865` | 24 | Courses dropdown |
| `chevron-left.svg`, `chevron-right.svg` | `55:836`, `55:843` | 24 | pagination |
| `search.svg` (Search hero input) | `55:861` | 24 | reuse `search.svg` if same |
| `check-circle-filled.svg` | `55:4137` (Key Points, `Style=Filled`) | 24 | reuse `check-circle.svg` if same glyph |
| `include-resources.svg`, `include-video.svg`, `include-certificate.svg`, `include-consultation.svg` | `55:4237`, `55:4240`, `55:4243`, `55:4246` | 24 | sidebar "This course include" (same nodes exist in Lessons/Reviews: `78:2961`.. / `78:3013`..) |
| `module-video.svg` | `60:630` (Lessons row 1, 40x40; rows 2-6: `60:636`, `60:642`, `60:648`, `60:654`, `60:660`) | 40 | lesson list icon (likely video camera) |
| `star-filled.svg` | `60:1304` (Reviews), `60:1359` (filter pill), `60:1382` (review cards) | 24 | review star rows (probably identical to `star.svg`, recolor via CSS `currentColor`) |
| `facebook.svg`, `google.svg` | `50:356`, `50:360` (40x40 frames in the 72x72 buttons) | 40 | Login social buttons - already in `public/icons/` |
| `bag.svg` | `78:2787` etc. | 24 | reuse |
| play button | not identified (metadata leaf) | - | see video thumbnail note |

Tip: since all the "Style=Filled/Outlined" icons come from one icon set, exporting each instance from its **Outlined/Filled** variant with "Export as SVG" in Figma is enough; set `fill="currentColor"` when saving.

### 9.3 Baked-in artifacts to watch (same problem as hero-main / course thumbnails)
- Course card images on Search/Creator/Register/Login: same 6 images as Home. Do not re-export; the Home `course-N.png` files are being re-exported *without* pills.
- Video thumbnail `55:4202`: may include a play button, gradient or rounded mask baked into the image fill: hide those child layers before export.
- 3D shape frames on Login/Register are "Mask Group" + a 2500px-wide rectangle (the crop mask is much wider than the shape): export the frame node so the mask crops it correctly; transparent background needed.
- Avatars are circles (`Ellipse` with image fill): export the raw image (square) and round with CSS.

## 10. New tokens / values not yet in `globals.css`
Metadata has no style data, so only *structural* values can be listed (all consistent with existing tokens where noted):
- Form/auth: card 579x784 at right; inner padding 63/61; input 453x52 (`px24 py12`, radius likely `rounded-card` 24); label 17px tall (~14px text); social button 72x72 (radius? verify); auth headings ~44px; card 373x384 unchanged.
- Course pages: content column 723-725 wide; sidebar 412 wide, padding 40, radius 24 likely; sneak-peek tile 167x125 (radius probably `image` 12, verify); lesson tile 72x72 (radius 16 or 24, verify); progress bar 8px tall (existing `ProgressBar`); review card padding 40; pill height 40; toolbar buttons 48 tall; tab 43 tall; pagination button 56x48, number text ~24px.
- 404: display "404" 920x480 (~480px type) - new size, colors unknown.
- No new colors or shadows are *known*; anything else (active tab fill, disabled/border colors, "Creator" badge fill, stat pill color) must be checked visually.

## 11. Repeating components -> reusable + data-driven

| Component | Where | Existing? | Data |
|---|---|---|---|
| `Navbar` (+ logo-only variant) | all pages | exists; needs variant | - |
| `Footer` | 7 pages | exists | reuse `footer` data |
| `Button` (lime), `Chip`, `Rating`, `AvatarStack`, `ProgressBar`, `FloatingCard` | many | exist | - |
| `CourseCard` grid | Search (18), Creator (6), Register/Login (2 decorative) | exists | `courses` data (repeat 3x for Search) |
| `HappyStudentsCard` | Register, Login | exists | - |
| `CourseHero` (title, subtitle, by, 3 pills, share, video) | Details, Lessons, Reviews | new | course object |
| `CourseSidebar` | Details, Lessons, Reviews | new | lessons preview, includes list, creator |
| `CourseTabs` | Details, Lessons, Reviews | new (uses `Chip` styling) | 3 tabs |
| `CheckList` | Key Points, sidebar includes | new (similar to GrowthRow list) | string arrays |
| `ModuleRow` | Lessons | new | 6 modules |
| `RatingSummary` (+ bar rows), `ReviewCard`, `RatingFilter` | Reviews | new | reviews data |
| `FilterToolbar`, `SortButton`, `Pagination`, `SearchBar` | Search, Creator | new (`SearchBar` from Hero) | - |
| `CreatorHero`, stat pill | Creator | new | creator object |
| `AuthCard`, `FormField`, social buttons | Login, Register | new | - |
| `not-found.tsx` | 404 | new | - |

Suggested data files: `src/data/course-details.ts` (hero, sidebar, description, key points, sneak peeks), `modules.ts`, `reviews.ts`, `creator.ts`, `auth.ts`.
