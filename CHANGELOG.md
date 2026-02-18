# Changelog

All notable changes to GrowthToDo are documented in this file.

---

## [2.0.0] - 2025-02-19

### Complete Visual Redesign

Rebuilt the entire site with a modern, dark, Linear.app-inspired design system.

#### Theme & Foundation
- Added custom "linear" dark theme with purple-blue primary (#5e6ad2)
- Integrated Inter font from Google Fonts
- Created consistent color palette: deep dark backgrounds, subtle borders, muted text
- Added CSS utilities: `gradient-text`, `hover-glow`, `animate-fade-in`

#### Component System
- Unified card styling across all pages: `bg-base-200/50`, `border-base-300/50`, `rounded-xl`
- Added hover glow effects with primary color accent
- Consistent button styles: primary CTA with icons, ghost secondary buttons
- Removed old scale hover effects in favor of subtle border glows

#### Page Redesigns

**Homepage**
- New visitor-focused copy: "Too many directions. Not enough clarity. Let's fix that."
- Removed personal intro, proof strip, projects section, latest blog
- Single-screen design with clear CTAs: Book a call, Read the blog
- Added gradient text and fade-in animations

**Consulting**
- New headline: "Cut through the chaos."
- Redesigned "How it works" section with large step numbers
- Engagement cards with icons and clear outcomes
- Testimonials in 2-column grid with avatar initials
- Gradient CTA section at bottom

**Projects**
- Hero section with pill badge and gradient headline
- Card grid layout with live website screenshots via thum.io
- Hover effects with "View project" reveal
- Organized into Active, Upcoming, Past sections

**CV**
- Clean timeline layout with primary color accent on current roles
- Skills section with icons
- Education cards with consistent styling
- Updated: StartGlobal.co ended Dec 2025, reordered timeline

**Academy**
- Picasso quote in styled card
- Principles grid with icons
- Program cards with status badges
- Removed confusing "Get notified" button, replaced with "Book a call"

**Blog**
- New listing design with thumbnail cards
- Post layout with hero image, meta section, back button
- Tag pages with consistent styling
- Pagination with ghost buttons

#### Content Updates
- New blog post: "AI Is a Tool, Not a Substitute for Thinking" (Feb 18, 2025)
- Added unique Unsplash images to all blog posts
- Updated project descriptions (SV Labs, Pupilfirst, HowToCBC)
- Added SimpleScheduleAI to upcoming projects

#### Branding
- New favicon: purple-blue circle with checkmark + growth arrow
- Removed all em dashes from copy site-wide
- Consistent "Book a call" CTA linking to neetocal booking
- Pill badges on all page hero sections

#### Technical
- Pinned @astrojs/sitemap to 3.0.5 (fixes build error)
- Screenshot service for project card images
- Removed HorizontalCard dependency from several pages

---

## [1.0.0] - Previous

Initial Astrofy template with lofi theme.
