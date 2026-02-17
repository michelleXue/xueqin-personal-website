# Academic Website Documentation

## Table of Contents
1. [Overview](#overview)
2. [Technology Stack](#technology-stack)
3. [File Structure](#file-structure)
4. [UI Layout & Components](#ui-layout--components)
5. [Design System](#design-system)
6. [Content Management](#content-management)
7. [Deployment Guide](#deployment-guide)
8. [Customization Guide](#customization-guide)
9. [Maintenance & Updates](#maintenance--updates)

---

## Overview

This is a modern, responsive academic portfolio website built for an Assistant Professor specializing in CS, SE, and AI. The site showcases research projects, teaching activities, publications, and provides contact information.

**Target Audience:**
- Primary: Prospective students looking for research opportunities
- Secondary: Academic collaborators, industry partners, general public

**Key Features:**
- Modern, minimalist design with custom color scheme
- Fully responsive (mobile, tablet, desktop)
- Animated interactions using Framer Motion
- Dynamic content structure for easy updates
- Project detail pages with routing

---

## Technology Stack

### Core Technologies
- **React 18+** - Frontend framework
- **TypeScript/JSX** - Component development
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Animations and transitions

### Key Libraries
- **lucide-react** - Icon library
- **react-router-dom** - Client-side routing (for project details)
- **motion/react** - Animation library (formerly Framer Motion)

### Build System
- Modern ES modules
- No build configuration needed (uses Figma Make's build system)

---

## File Structure

```
/
├── App.tsx                          # Main application entry point
├── styles/
│   └── globals.css                  # Global styles & Tailwind configuration
├── components/
│   ├── Header.tsx                   # Navigation header
│   ├── Hero.tsx                     # Hero/About section
│   ├── ActivityFeed.tsx             # News & activities with filters
│   ├── ProjectShowcase.tsx          # Research projects grid
│   ├── ProjectDetail.tsx            # Individual project detail pages
│   ├── Teaching.tsx                 # Courses section
│   ├── Contact.tsx                  # Contact information & footer
│   └── figma/
│       └── ImageWithFallback.tsx    # Protected image component
└── DOCUMENTATION.md                 # This file
```

---

## UI Layout & Components

### 1. Header Component (`/components/Header.tsx`)
**Purpose:** Fixed navigation bar with smooth scrolling

**Features:**
- Fixed position with backdrop blur
- Smooth scroll to sections
- Links: About, Activities, Projects, Teaching, Contact
- Responsive: Hamburger menu on mobile

**Customization Points:**
- Update navigation links (line 8-12)
- Adjust logo/name (line 29-34)

---

### 2. Hero Section (`/components/Hero.tsx`)
**Purpose:** Introduction and primary call-to-action

**Layout:**
- Two-column grid (text left, image right)
- Responsive: Stacks on mobile

**Content Elements:**
- Main headline with gradient text
- Introduction paragraph with university link
- Two CTA buttons: "Find Opportunity" and "View Projects"
- Professional headshot (circular)

**Customization Points:**
- Line 20-26: Main headline
- Line 28-40: Introduction text
- Line 79: Profile image URL
- Line 50-62: CTA buttons

---

### 3. Activity Feed (`/components/ActivityFeed.tsx`)
**Purpose:** Display recent news, publications, and achievements

**Features:**
- Category filters: All, News, Publications, Awards, Talks
- Animated cards with date, title, description, and links
- Chronological ordering (newest first)

**Data Structure:**
```typescript
{
  id: string,
  date: string,           // Format: "Month Year"
  category: string,       // 'news' | 'publication' | 'award' | 'talk'
  title: string,
  description: string,
  link?: string,
  linkText?: string
}
```

**Customization Points:**
- Line 5-105: `activities` array - Add/edit activities here
- Update categories in filter buttons (line 113-122)

---

### 4. Project Showcase (`/components/ProjectShowcase.tsx`)
**Purpose:** Display research projects with overview cards

**Features:**
- Grid layout (3 columns on desktop, responsive)
- Status badges: Active Development (blue), Evaluation & Validation (yellow), Disseminated (green)
- Keyword tags
- Links to detailed project pages

**Data Structure:**
```typescript
{
  id: string,
  title: string,
  description: string,    // Short overview
  status: string,         // Status badge text
  statusColor: string,    // 'blue' | 'yellow' | 'green'
  keywords: string[],     // Topic tags
  image: string,          // Project image URL
  details: {
    fullDescription: string,
    papers: Array<{
      title: string,
      authors: string,
      venue: string,
      year: number,
      link: string
    }>,
    tools: Array<{
      name: string,
      description: string,
      link: string,
      github?: string
    }>
  }
}
```

**Customization Points:**
- Line 5-180: `projects` array - Add/edit projects here
- Status colors (line 27-29): Modify badge colors

---

### 5. Project Detail Pages (`/components/ProjectDetail.tsx`)
**Purpose:** Show comprehensive information about individual projects

**Features:**
- Full project description
- Separate sections for Papers and Tools
- Distinct icons (FileText for papers, Wrench for tools)
- Back button to return to showcase
- External links to papers and GitHub repos

**Layout:**
- Full-width header with title and status
- Description section
- Papers grid (if any)
- Tools grid (if any)

**Routing:**
- URL pattern: `/project/:projectId`
- Uses React Router for navigation

---

### 6. Teaching Section (`/components/Teaching.tsx`)
**Purpose:** Display current and past courses

**Features:**
- Grid layout (3 columns on desktop)
- Simplified course cards with:
  - Course code (e.g., "CSC 2400")
  - Course title
  - Description
  - Syllabus link

**Data Structure:**
```typescript
{
  id: string,
  code: string,           // Course number
  title: string,
  description: string,
  syllabusUrl: string
}
```

**Customization Points:**
- Line 5-60: `courses` array - Add/edit courses here
- Update syllabus URLs

---

### 7. Contact Section (`/components/Contact.tsx`)
**Purpose:** Provide contact information and social media links

**Layout:**
- Centered content with contact info at top
- Three-column grid: Email, Phone, Office
- Social media icons in a row:
  - Google Scholar
  - ORCID iD
  - ResearchGate
  - LinkedIn
- Footer with copyright and last updated date

**Customization Points:**
- Line 32-34: Email address
- Line 39: Phone number
- Line 48-52: Office address
- Line 60-100: Social media links
- Line 106: Copyright and update date

---

## Design System

### Color Palette

**Primary Color:**
- `#002663` - Deep navy blue (primary brand color)
- `#003d99` - Medium blue (gradient accent)
- `#1a1a2e` - Dark navy (gradient backgrounds)

**Secondary Colors:**
- `#e6eaf0` - Light blue-gray (backgrounds, subtle highlights)
- `#b3c5d6` - Muted blue (secondary text on dark backgrounds)
- `#ccd4e0` - Soft blue-gray (hover states, borders)

**Status Colors:**
- Blue: Active Development (#3b82f6 / blue-500)
- Yellow/Amber: Evaluation & Validation (#f59e0b / amber-500)
- Green: Disseminated (#10b981 / green-500)

**Neutral Colors:**
- Gray scale from Tailwind (gray-100 through gray-900)
- White backgrounds for cards and content areas

### Typography

**Font Family:**
- System font stack (defined in `/styles/globals.css`)
- Default: `-apple-system, BlinkMacSystemFont, 'Segoe UI', ...`

**Font Sizes:**
- Headings: Use default sizes from `/styles/globals.css`
- Body text: `text-base` (16px), `text-lg` (18px), `text-xl` (20px)
- Small text: `text-sm` (14px), `text-xs` (12px)

**Important:** Do not use Tailwind font size classes unless specifically changing from defaults, as custom typography is defined in globals.css.

### Spacing & Layout

**Sections:**
- Padding: `py-20 px-6` (vertical: 80px, horizontal: 24px)
- Max width: `max-w-7xl mx-auto` (1280px centered)

**Cards:**
- Padding: `p-6` or `p-8` (24px / 32px)
- Border radius: `rounded-xl` (12px) or `rounded-2xl` (16px)
- Shadow: `shadow-sm` normal, `shadow-xl` on hover

**Grids:**
- Projects: `grid md:grid-cols-2 lg:grid-cols-3 gap-6`
- Teaching: `grid md:grid-cols-2 lg:grid-cols-3 gap-6`
- Contact info: `grid md:grid-cols-3 gap-8`

### Animations

**Entrance Animations:**
```javascript
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

**Scroll-triggered:**
```javascript
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: index * 0.1 }}
```

**Hover States:**
- Cards: `hover:shadow-xl transition-all`
- Buttons: `hover:shadow-lg transition-all`
- Links: `hover:underline` or `hover:opacity-80`

---

## Content Management

### How to Update Content

#### 1. Adding a New Activity
**File:** `/components/ActivityFeed.tsx`

```typescript
// Add to the activities array (line 5-105)
{
  id: 'unique-id',
  date: 'January 2025',
  category: 'news', // or 'publication', 'award', 'talk'
  title: 'Your Activity Title',
  description: 'Brief description of the activity or achievement.',
  link: 'https://external-link.com', // optional
  linkText: 'Read More' // optional
}
```

#### 2. Adding a New Project
**File:** `/components/ProjectShowcase.tsx`

```typescript
// Add to the projects array (line 5-180)
{
  id: 'project-slug',
  title: 'Project Title',
  description: 'Short overview for the card (2-3 sentences)',
  status: 'Active Development', // or 'Evaluation & Validation', 'Disseminated'
  statusColor: 'blue', // or 'yellow', 'green'
  keywords: ['Keyword1', 'Keyword2', 'Keyword3'],
  image: 'https://image-url.com/image.jpg',
  details: {
    fullDescription: 'Comprehensive project description with multiple paragraphs...',
    papers: [
      {
        title: 'Paper Title',
        authors: 'Author1, Author2, Author3',
        venue: 'Conference/Journal Name',
        year: 2024,
        link: 'https://paper-link.com'
      }
    ],
    tools: [
      {
        name: 'Tool Name',
        description: 'Tool description',
        link: 'https://tool-website.com',
        github: 'https://github.com/username/repo' // optional
      }
    ]
  }
}
```

**Image Guidelines:**
- Recommended size: 1200x800px or similar aspect ratio
- Format: JPG or PNG
- Use Unsplash or similar for placeholder images

#### 3. Adding a New Course
**File:** `/components/Teaching.tsx`

```typescript
// Add to the courses array (line 5-60)
{
  id: 'unique-id',
  code: 'CSC 1234',
  title: 'Course Title',
  description: 'Brief course description highlighting main topics and learning outcomes.',
  syllabusUrl: 'https://link-to-syllabus.pdf'
}
```

#### 4. Updating Contact Information
**File:** `/components/Contact.tsx`

- **Email:** Line 32-34
- **Phone:** Line 39
- **Office Address:** Line 48-52
- **Social Media Links:** Line 60-100
- **Last Updated Date:** Line 106

#### 5. Updating Profile Image
**File:** `/components/Hero.tsx`

```typescript
// Line 79: Replace the image src
<img
  src="YOUR_IMAGE_URL_HERE"
  alt="Your Name"
  className="relative w-full max-w-md aspect-square mx-auto rounded-full shadow-2xl object-cover"
/>
```

---

## Deployment Guide

### Prerequisites
1. A domain name (e.g., `www.yourname.edu`)
2. Web hosting service (see options below)
3. Updated content with your actual information

### Recommended Hosting Options

#### Option 1: Vercel (Recommended for React Apps)
**Pros:** Free tier, automatic deployments, fast CDN, easy setup

**Steps:**
1. Create account at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm install -g vercel`
3. From project directory, run: `vercel`
4. Follow prompts to deploy
5. Connect custom domain in Vercel dashboard

**Cost:** Free for personal use

---

#### Option 2: Netlify
**Pros:** Free tier, continuous deployment, built-in forms

**Steps:**
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your build folder, OR
3. Connect Git repository for auto-deployment
4. Configure custom domain in site settings

**Cost:** Free for personal use

---

#### Option 3: GitHub Pages
**Pros:** Free, integrated with GitHub, good for static sites

**Steps:**
1. Create GitHub repository for your site
2. Push your code to the repository
3. Enable GitHub Pages in repository settings
4. Configure custom domain in settings

**Cost:** Free

---

#### Option 4: University Hosting
**Pros:** Official .edu domain, institutional support

**Steps:**
1. Contact your university's IT department
2. Request web hosting space (usually provided for faculty)
3. Upload files via FTP/SFTP
4. Your site will be at: `www.university.edu/~yourusername`

**Cost:** Usually free for faculty

---

### Build Process

Since this is built with Figma Make, the build is handled automatically. However, if you need to export for manual deployment:

1. **Export the Code:**
   - Download all files from Figma Make
   - Ensure all components and assets are included

2. **Prepare for Deployment:**
   - Update all content with your actual information
   - Replace placeholder images with real photos
   - Test all links and ensure they work
   - Update social media URLs

3. **Test Locally** (if possible):
   - Open `index.html` in a browser
   - Check responsive behavior on different screen sizes
   - Verify all animations work smoothly

---

### Custom Domain Setup

#### For .edu Domain (via University):
1. Contact university IT for DNS management access
2. Add DNS records provided by your hosting service
3. Wait 24-48 hours for DNS propagation

#### For Personal Domain:
1. Purchase domain from registrar (GoDaddy, Namecheap, etc.)
2. Update DNS settings in registrar dashboard
3. Add CNAME or A records from hosting provider
4. Enable SSL certificate (usually automatic with modern hosts)

---

## Customization Guide

### Changing the Color Scheme

**Primary Color Updates:**
1. Find and replace `#002663` with your new primary color
2. Find and replace `#003d99` with your new accent color
3. Update gradient colors in `/styles/globals.css` if needed

**Files to Update:**
- All component files (search for `#002663`)
- `/styles/globals.css` for global theme colors

---

### Adding New Sections

**Example: Adding a "Publications" Section**

1. Create new component: `/components/Publications.tsx`
```typescript
import { motion } from 'motion/react';

export function Publications() {
  const publications = [
    {
      id: '1',
      title: 'Paper Title',
      authors: 'Author names',
      venue: 'Conference/Journal',
      year: 2024,
      link: 'https://paper-link.com'
    }
  ];

  return (
    <section id="publications" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Publications</h2>
        {/* Add your content here */}
      </div>
    </section>
  );
}
```

2. Import in `/App.tsx`:
```typescript
import { Publications } from './components/Publications';
```

3. Add to the page:
```typescript
<Publications />
```

4. Add navigation link in `/components/Header.tsx`

---

### Modifying Animations

**Speed Up/Slow Down:**
```typescript
// Change duration value (in seconds)
transition={{ duration: 0.6 }} // Slower
transition={{ duration: 0.3 }} // Faster
```

**Remove Animations:**
```typescript
// Remove initial, animate, whileInView props
// Keep only the content
<div className="...">
  {/* content */}
</div>
```

**Add Stagger Effect:**
```typescript
transition={{ duration: 0.5, delay: index * 0.1 }}
// Multiplying index creates staggered animation
```

---

### Making the Site Single-Page vs Multi-Page

**Current Setup:** Single-page with smooth scrolling + project detail pages

**To Make Fully Multi-Page:**
1. Install React Router: Already included
2. Create separate page components
3. Update App.tsx to use Routes
4. Change Header links to use React Router Link components

**To Make Pure Single-Page:**
1. Remove React Router imports
2. Remove ProjectDetail component routing
3. Make project details open in modals instead

---

## Maintenance & Updates

### Regular Updates Needed

**Monthly:**
- Add new activities to Activity Feed
- Update "Last Updated" date in footer (Contact.tsx, line 106)

**Semester:**
- Update teaching courses
- Add new publications
- Update project statuses

**Annually:**
- Update copyright year
- Review and archive old activities
- Update profile photo if needed
- Review all external links for validity

---

### Content Best Practices

#### Writing Descriptions
- **Projects:** 2-3 sentences for card, detailed paragraphs for detail page
- **Activities:** 1-2 sentences, clear and concise
- **Courses:** Focus on learning outcomes and key topics

#### Image Guidelines
- **Profile Photo:** Professional headshot, square crop, high resolution
- **Project Images:** 1200x800px, relevant to project, high quality
- **File Size:** Optimize images (under 500KB recommended)

#### Link Management
- Use HTTPS for all external links
- Add `target="_blank"` and `rel="noopener noreferrer"` for external links
- Test all links periodically for dead links
- Use descriptive link text (not "click here")

---

### Accessibility Checklist

✅ **Images:** All have descriptive alt text
✅ **Links:** Descriptive text (avoid "click here")
✅ **Color Contrast:** Meets WCAG AA standards
✅ **Keyboard Navigation:** All interactive elements accessible via keyboard
✅ **Semantic HTML:** Proper heading hierarchy (h1 → h2 → h3)
✅ **ARIA Labels:** Added to icon-only buttons

**To Test:**
- Use browser's accessibility inspector
- Test with keyboard only (no mouse)
- Use screen reader (VoiceOver on Mac, NVDA on Windows)
- Check contrast ratios with tools like WebAIM

---

### Performance Optimization

**Images:**
- Compress images before uploading
- Use WebP format when possible
- Lazy load images below the fold
- Consider using a CDN (Cloudflare, Imgix)

**Code:**
- Minimize custom JavaScript
- Use Tailwind's purge feature to remove unused CSS
- Enable gzip compression on server
- Use production build for deployment

**Monitoring:**
- Use Google PageSpeed Insights
- Test on Lighthouse (Chrome DevTools)
- Check mobile performance specifically
- Monitor load times regularly

---

### Troubleshooting Common Issues

#### Images Not Loading
- Check image URLs are valid and accessible
- Ensure proper CORS headers if hosting images elsewhere
- Verify image file names match imports

#### Smooth Scrolling Not Working
- Check section IDs match navigation hrefs
- Ensure Header component is rendering
- Verify no JavaScript errors in console

#### Animations Not Running
- Check motion/react is properly imported
- Verify no syntax errors in component
- Test in different browsers

#### Responsive Layout Broken
- Check Tailwind breakpoints are correct
- Test on actual devices, not just browser resize
- Verify all grid layouts have proper responsive classes

---

### Getting Help

**For Technical Issues:**
- Check browser console for error messages
- Review React error boundaries
- Test in different browsers (Chrome, Firefox, Safari)

**For Design Changes:**
- Reference Tailwind CSS documentation: [tailwindcss.com](https://tailwindcss.com)
- Use browser DevTools to inspect elements
- Test changes locally before deploying

**For Hosting Issues:**
- Contact hosting provider support
- Check hosting provider documentation
- Review DNS settings if domain issues

---

## Conclusion

This website is designed to be easily maintainable with clear content structure and modern, accessible design. Regular updates to the activity feed and projects will keep the site fresh and relevant.

**Quick Start Checklist:**
- [ ] Update all personal information (Hero, Contact)
- [ ] Replace placeholder images with real photos
- [ ] Add actual research projects and details
- [ ] Update course information
- [ ] Add recent activities and publications
- [ ] Update all social media links
- [ ] Test all links and buttons
- [ ] Deploy to hosting service
- [ ] Set up custom domain
- [ ] Test on mobile devices
- [ ] Share with colleagues for feedback

**For Questions or Support:**
Document any customizations you make and keep this documentation updated for future reference.

---

*Last Updated: February 2026*
*Website Version: 1.0*
