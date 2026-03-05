# Development Guide

## Project Structure Explained

```
My Portfolio/
├── app/
│   ├── layout.tsx              # Root layout - wraps all pages
│   │                           # Contains metadata, fonts, global setup
│   ├── page.tsx                # Main SPA page - orchestrates all sections
│   │                           # Imports and assembles all components
│   └── globals.css             # Global styles & Tailwind directives
│                               # Custom classes, animations, utilities
│
├── components/
│   ├── Navigation.tsx          # Fixed header with mobile menu
│   │                           # - Router: uses smooth scroll
│   │                           # - Mobile: hamburger menu with toggle
│   │                           # - Sticky: remains on top while scrolling
│   │
│   ├── Hero.tsx                # Welcome section with introduction
│   │                           # - Large animated gradient text
│   │                           # - Social media links with hover effects
│   │                           # - Call-to-action button
│   │                           # - Animated background elements
│   │
│   ├── About.tsx               # Personal information & skills showcase
│   │                           # - Biography text
│   │                           # - Skill categories (grids)
│   │                           # - Statistics cards
│   │
│   ├── Experience.tsx          # Timeline of education & work
│   │                           # - Timeline visual with icons
│   │                           # - Alternating layout
│   │                           # - Color-coded cards
│   │                           # - Different category types
│   │
│   ├── Projects.tsx            # Featured projects showcase
│   │                           # - Grid layout
│   │                           # - Project cards with gradients
│   │                           # - Tech stack badges
│   │                           # - Links to GitHub & live demos
│   │
│   ├── Contact.tsx             # Contact information & form
│   │                           # - Multiple contact methods
│   │                           # - Contact form with validation
│   │                           # - Email integration
│   │
│   ├── Footer.tsx              # Site footer
│   │                           # - Quick links
│   │                           # - Social media
│   │                           # - Copyright info
│   │
│   └── index.ts                # Component exports
│
├── public/                     # Static assets (images, fonts, icons)
│
├── package.json                # Dependencies & scripts
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS plugins
├── next.config.js              # Next.js configuration
├── vercel.json                 # Vercel deployment config
│
├── .env.local                  # Local environment variables
├── .env.example                # Environment template
├── .gitignore                  # Git ignore rules
├── .eslintrc.json              # ESLint configuration
│
├── README.md                   # Project documentation
├── DEPLOYMENT.md               # Deployment guide to Vercel
├── GIT_WORKFLOW.md             # Git workflow guidelines
└── SETUP_CHECKLIST.md          # Setup & maintenance checklist
```

## Component Hierarchy

```
Home (page.tsx)
├── Navigation
│   └── Mobile Menu (conditional)
├── Hero
│   ├── Animated Background
│   ├── Main Content
│   └── Social Links
├── About
│   ├── Biography
│   └── Skills Grid
│       ├── Language Cards
│       └── Skill Badges
├── Experience
│   ├── Timeline Line
│   └── Timeline Items (repeated)
│       ├── Icon
│       ├── Title & Organization
│       └── Description
├── Projects
│   └── Project Grid
│       ├── Project Card (repeated)
│       │   ├── Header Gradient
│       │   ├── Title
│       │   ├── Description
│       │   ├── Tech Stack
│       │   └── Action Links
│       └── CTA Section
├── Contact
│   ├── Contact Methods
│   │   └── Contact Card (repeated)
│   ├── Contact Form
│   │   ├── Input Fields
│   │   └── Submit Button
│   └── Privacy Notice
└── Footer
    ├── Brand Info
    ├── Quick Links
    └── Social Links
```

## Development Workflow

### Starting Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Dev Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - Navigate to `http://localhost:3000`
   - Keep browser open during development
   - Changes hot-reload automatically

### Making Changes

#### Add New Skill
File: `components/About.tsx`
```tsx
{
  title: 'New Category',
  skills: ['Skill 1', 'Skill 2', 'Skill 3'],
}
```

#### Add New Project
File: `components/Projects.tsx`
```tsx
{
  title: 'Project Name',
  description: 'Project description...',
  technologies: ['Tech1', 'Tech2'],
  github: 'https://github.com/...',
  live: 'https://deployed-link.com',
  highlight: 'Key Feature',
  gradient: 'from-color-500 to-color-500',
}
```

#### Add New Timeline Entry
File: `components/Experience.tsx`
```tsx
{
  type: 'work', // or 'education', 'certification', 'leadership'
  icon: Briefcase, // or GraduationCap, Award, Users
  title: 'Position Title',
  organization: 'Organization Name',
  period: '2024 - Present',
  description: 'Brief description...',
  color: 'from-color-500 to-color-500',
}
```

### Styling Guidelines

#### Using Tailwind Classes

```tsx
// Main container
<div className="max-w-6xl mx-auto px-4 md:px-8">

// Typography
<h1 className="text-5xl md:text-7xl font-bold">
<p className="text-lg text-slate-300">

// Spacing
<div className="space-y-8">
<div className="gap-6 grid">

// Colors
<div className="bg-primary text-light border-blue-400/20">

// Responsive
<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// Effects
<div className="glass">  {/* predefined glassmorphism */}
<div className="hover:scale-105 transition-transform duration-300">
```

#### Custom CSS Classes

Located in `app/globals.css`:

```css
.glass             /* Glassmorphism effect */
.transition-all    /* Smooth transitions */
.gradient-text     /* Gradient text color */
```

### Color Scheme

Primary Colors (from tailwind.config.js):
- **primary**: `#0f172a` (Dark navy background)
- **secondary**: `#1e293b` (Dark slate)
- **accent**: `#3b82f6` (Blue)
- **light**: `#f1f5f9` (Light text)

### Animation Classes

Available animations:
- `animate-fade-in` - Fade in effect
- `animate-slide-up` - Slide up effect
- `animate-bounce-subtle` - Subtle bounce
- `group-hover:` - Hover effects

## Testing

### Local Testing

```bash
# Development mode
npm run dev

# Production build
npm run build
npm start

# Linting
npm run lint
```

### Testing Checklist

- [ ] All links work correctly
- [ ] Navigation scrolls smoothly
- [ ] Responsive on mobile (320px), tablet (768px), desktop (1280px)
- [ ] Contact form submits correctly
- [ ] All images load
- [ ] No console errors
- [ ] Page loads in <3s
- [ ] All animations perform smoothly

## Performance Optimization

### Images

- Use WebP format when possible
- Compress large images
- Use Next.js Image component for optimization

### Code

- Lazy load heavy components
- Tree-shake unused code
- Minimize re-renders with React.memo

### Styling

- Tailwind purges unused styles in production
- Custom CSS kept minimal
- Global CSS used for shared styles only

## Debugging

### Browser DevTools

1. Open DevTools (F12)
2. Check Console for errors
3. Use Network tab to monitor requests
4. Performance tab for profiling

### Building

```bash
# Check for build errors
npm run build

# This will show:
- TypeScript errors
- ESLint warnings
- Build optimization info
```

### Common Issues

**Tailwind styles not applying**
- Ensure `globals.css` imported in layout
- Check className strings have Tailwind classes
- Verify tailwind.config.js content paths

**Images not showing**
- Check file path in public folder
- Verify image format supported
- Check console for 404 errors

**Navigation not working**
- Verify section IDs match href values
- Check smooth scroll behavior enabled
- Test without JavaScript disabled

## TypeScript

All components are fully typed:

```tsx
// Component with props
interface ComponentProps {
  title: string
  items: Array<{ id: string; name: string }>
}

export default function Component({ title, items }: ComponentProps) {
  // Implementation
}
```

## Version Management

Current versions:
- Next.js: 14.x
- React: 18.2.x
- TypeScript: 5.3.x
- Tailwind: 3.3.x

To update:
```bash
npm update
npm outdated  # Check what can be updated
```

## Contributing & Improvements

Ideas for enhancement:
1. Add blog section
2. Add dark/light theme
3. Add PDF resume download
4. Add project filtering
5. Add testimonials section
6. Add animated code examples
7. Add certificate showcase
8. Add skills progress bars

## Resources

- Component Patterns: Check existing components in `components/` folder
- Styling: Check `tailwind.config.js` and `app/globals.css`
- Data: All portfolio data in component files themselves

## Quick Tips

1. **Hot Reload**: Changes automatically refresh browser
2. **Path Aliases**: Use `@/` to import from root
3. **Build Locally**: Run `npm run build` before deploying
4. **Type Safety**: Let TypeScript catch errors
5. **Tailwind IntelliSense**: VS Code suggests Tailwind classes
6. **Mobile First**: Design mobile first, add md: breakpoints

---

Happy coding! 💻
