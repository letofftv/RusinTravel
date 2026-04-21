# Implementation Plan - RusinTravel MVP

The goal is to evolve the current landing page into a full multi-page React application as specified in the `Info/` directory. The current implementation is a high-quality landing page, but it lacks routing, individual excursion pages, and full gallery/blog functionality.

## Proposed Changes

### [Architecture & Foundation]

#### [MODIFY] [package.json](file:///Users/letoff_tv/GIT%20Clones/RusinTravel/package.json)
- Add `react-router-dom` for navigation.
- Add `react-helmet-async` for SEO management.

#### [NEW] Folder Structure
Organize components and pages:
- `src/pages/` - Home, ExcursionDetail, Gallery, Blog, About, Contacts.
- `src/components/layout/` - Header, Footer, PageLayout.

### [Phase 1: Routing & Navigation]

#### [MODIFY] [App.tsx](file:///Users/letoff_tv/GIT%20Clones/RusinTravel/src/App.tsx)
- Implement `BrowserRouter`, `Routes`, and `Route`.
- Define path mappings: `/`, `/ekskursii/:slug`, `/o-nikolae`, `/galereya`, `/blog`, `/kontakty`.

#### [MODIFY] [Header.tsx](file:///Users/letoff_tv/GIT%20Clones/RusinTravel/src/components/Header.tsx)
- Update navigation links to use `Link` or `NavLink` instead of hash anchors (except for section scrolling on the Home page).

### [Phase 2: Individual Excursion Pages]

#### [NEW] [ExcursionDetail.tsx](file:///Users/letoff_tv/GIT%20Clones/RusinTravel/src/pages/ExcursionDetail.tsx)
- Create a dynamic page that scales based on the tour data in `constants.ts`.
- Include all blocks from TZ Section 8: Highlights, Route points, FAQ, and Booking form.

### [Phase 3: Content & SEO Expansion]

#### [MODIFY] [constants.ts](file:///Users/letoff_tv/GIT%20Clones/RusinTravel/src/constants.ts)
- Expand tour data to include all fields needed for detailed pages (Route points, FAQ per tour, etc.).
- Add full content for the 2 other tours mentioned in the Tech TZ but not yet in the code.

#### [MODIFY] [SEO Implementation]
- Use `Helmet` on every page to set title and meta descriptions from `Teksty_sayta_Nikolay_Rusin.md`.

### [Phase 4: Functional Enhancements]

#### [MODIFY] [ContactForm.tsx](file:///Users/letoff_tv/GIT%20Clones/RusinTravel/src/components/ContactForm.tsx)
- Ensure form fields match TZ requirements.
- Prepare for Bitrix24 integration (hooks for CRM submission).

## Open Questions

- **CRM Integration**: Should we implement a real Bitrix24 webhook now, or keep it as a simulated success for the MVP phase?
- **Images**: I will use high-quality generated images or Unsplash/Picsum placeholders matching the "Warm, vintage archival" aesthetic. Do you have specific photos of Nikolay to include?

## Verification Plan

### Automated Tests
- `npm run lint` to check for TS errors.
- Visual check of all routes.

### Manual Verification
- Verify that every SEO title matches the requirements in `Teksty_sayta_Nikolay_Rusin.md`.
- Test form validation and success states on mobile and desktop.
