---
name: Modern Minimalist Profile
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#1d4ed8'
  on-secondary: '#ffffff'
  secondary-container: '#4069f2'
  on-secondary-container: '#fffbff'
  tertiary: '#4e565d'
  on-tertiary: '#ffffff'
  tertiary-container: '#676e76'
  on-tertiary-container: '#eaf1fa'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b7c4ff'
  on-secondary-fixed: '#001551'
  on-secondary-fixed-variant: '#0039b5'
  tertiary-fixed: '#dce3ec'
  tertiary-fixed-dim: '#c0c7d0'
  on-tertiary-fixed: '#151c23'
  on-tertiary-fixed-variant: '#40484f'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 3.75rem
    fontWeight: '600'
    lineHeight: 4.25rem
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 2.5rem
    fontWeight: '600'
    lineHeight: 3rem
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 1.75rem
    fontWeight: '500'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 1.25rem
    fontWeight: '500'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.875rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.625rem
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.375rem
  label-md:
    fontFamily: Space Grotesk
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system crafts an intentional, high-end editorial identity for senior craftspeople, engineers, and design leaders. Rooted in structured minimalism, it strips away visual clutter to let intellectual capital, project impact, and refined case studies lead the experience. 

The aesthetic marries Swiss-style typographic clarity with modern digital precision. The UI evokes poise, rigorous craft, deliberate calm, and effortless authority. By pairing expansive whitespace with strict layout discipline, subtle micro-borders, and deep slate typography, the system achieves distinction without ostentation.

## Colors

The palette leverages high-contrast foundational slates anchored by purposeful cobalt and royal accents:

- **Canvas & Surfaces**: The root viewport alternates between pure white (`#FFFFFF`) for primary content canvases and subtle slate wash (`#F8FAFC`) for contextual background shifts and tiered card backgrounds.
- **Brand Accents**: Primary action blue (`#2563EB`) guides interactive states and primary focus markers. Deep royal blue (`#1D4ED8`) handles active interactions and hovered states. Soft blue tint (`#EFF6FF`) provides gentle, low-friction fills for tags, badges, and highlighted text blocks.
- **Typography & Structure**: Deep dark slate (`#0F172A`) commands high-contrast typographic priority, while muted slate (`#64748B`) establishes secondary metadata, captions, and structural descriptions. 
- **Borders & Dividers**: Structural boundaries utilize hair-thin slate borders (`#E2E8F0`), maintaining crisp division without high visual weight.

## Typography

The typographic hierarchy pairs the architectural, geometric presence of Space Grotesk for display headlines and key technical labels with the neutral, ergonomic legibility of Inter for body text.

- **Headlines (`Space Grotesk`)**: Tightly kerned with negative letter-spacing to yield an authoritative editorial presence. Large display sizes command hero sections and project titles.
- **Body (`Inter`)**: Set with generous line-height to ensure frictionless reading across lengthy case studies, career timelines, and personal essays.
- **Labels & Metrics (`Space Grotesk`)**: Monospaced-leaning technical styling across category pills, datestamps, and metrics provides structure against fluid prose.

## Layout & Spacing

The system runs on a 12-column responsive fluid grid structured inside a constrained maximum container width of `1200px` for optimal typographic line-lengths and framed card grids:

- **Desktop (1024px+)**: 12-column layout with `2rem` gutters and `4rem` outer canvas padding. Section gaps expand to `space-2xl` (`4rem`) to allow deliberate visual pacing.
- **Tablet (768px - 1023px)**: 8-column layout with `1.5rem` gutters and `2.5rem` outer margins. Multi-card grids compress from 3 columns down to 2 columns.
- **Mobile (< 768px)**: 4-column layout with `1rem` gutters and `1.25rem` margins. Navigation converts into a sticky bottom or top header overlay; multi-column content stacks linearly.

## Elevation & Depth

Visual hierarchy favors clean planar layering and soft luminous diffusion over dark, aggressive skeuomorphism:

- **Level 0 (Flat Ground)**: Base application canvas in `#FFFFFF` or `#F8FAFC`. Zero elevation, zero shadows.
- **Level 1 (Cards, Modules, Feeds)**: Solid `#FFFFFF` surfaces bounded by a crisp 1px border (`#E2E8F0`) paired with an ultra-subtle ambient drop shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)`.
- **Level 2 (Interactive Hover & Popovers)**: Cards on hover gently elevate with a focused soft blue glow: `0 10px 25px -5px rgba(37, 99, 235, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)`.
- **Floating Navigation Bar**: Semi-transparent frosted ground with `backdrop-filter: blur(12px)`, background fill of `rgba(255, 255, 255, 0.85)`, and 1px border in `rgba(226, 232, 240, 0.8)`.

## Shapes

The design system adopts a balanced, refined radius scale (`roundedness: 2`):

- **Micro Controls**: Checkboxes, badges, and code snippets use `rounded` (`0.5rem`).
- **Cards & Media**: Work previews, featured story modules, and test containers utilize `rounded-lg` (`1rem`) to keep layouts structured yet soft.
- **Primary Buttons & Action Pills**: Interactive CTA buttons and category chips adopt full capsule pill styling (`9999px`) to create an immediate ergonomic contrast with rectangular content cards.

## Components

### Buttons
- **Primary**: Solid blue fill (`#2563EB`) with white text (`#FFFFFF`), pill-shaped geometry, padding of `0.75rem 1.5rem`, using `label-md` font weight. On hover: shifts background to `#1D4ED8` with a subtle elevation shift.
- **Secondary / Ghost**: Transparent fill with a 1px border (`#E2E8F0`), text in `#0F172A`. On hover: background shifts to `#F8FAFC`, border darkens to `#CBD5E1`.
- **Minimal Text Link**: Understated `#2563EB` text with a forward directional arrow glyph (`→`) that translates 4px horizontally on hover.

### Chips & Badges
- **Status Badges**: Capsule tags with background `#EFF6FF`, border `1px solid rgba(37, 99, 235, 0.15)`, text `#1D4ED8` in `label-sm` tracking.
- **Skill & Tech Pills**: Muted slate tags (`#F8FAFC`) with borders in `#E2E8F0` and copy in `#64748B`.

### Portfolio & Project Cards
- Pure white container (`#FFFFFF`) with a 1px border (`#E2E8F0`) and `rounded-lg` radius. Aspect ratio on preview media is locked to `16:10` with subtle zoom on card hover (`scale(1.02)` within an overflow-hidden frame).
- Body copy uses `headline-sm` in `#0F172A` paired with `body-sm` in `#64748B`.

### Navigation Header
- Floating docked bar with `rounded-full` curvature, translucent glass finish (`rgba(255, 255, 255, 0.8)`), and soft border. Navigation items feature quiet slate text `#64748B`, transitioning to `#0F172A` with an active pill indicator in `#EFF6FF`.

### Form Controls & Inputs
- Text inputs use `rounded` geometry (`0.5rem`), light background (`#FFFFFF`), 1px border (`#E2E8F0`), and inner padding `0.75rem 1rem`. Focus state triggers an outline ring: `2px solid #2563EB` with `0 0 0 4px #EFF6FF`.