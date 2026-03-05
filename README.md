# Rabab HALLOUKA - Software Engineering Portfolio

A modern, responsive Single Page Application (SPA) portfolio built with **Next.js 14 (App Router)** and **Tailwind CSS**. Perfectly optimized for deployment on Vercel.

## 🎨 Design Features

- **Modern & Minimalist Design**: Clean, professional aesthetic with dark theme
- **Glassmorphism Effects**: Frosted glass cards with blur and transparency
- **Smooth Animations**: Fade-in, slide-up, and bounce effects for engaging UX
- **Fully Responsive**: Mobile-first approach, works seamlessly on all devices
- **Accessible**: WCAG compliant with proper semantic HTML and ARIA labels
- **Performance Optimized**: Tree-shakeable components, optimized images, lazy loading

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main SPA page assembling all sections
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Navigation.tsx      # Sticky header with mobile menu
│   ├── Hero.tsx            # Hero/Welcome section
│   ├── About.tsx           # About & Skills section
│   ├── Experience.tsx      # Timeline with education & work experience
│   ├── Projects.tsx        # Featured projects showcase
│   ├── Contact.tsx         # Contact section with form
│   └── Footer.tsx          # Footer with links
├── public/                 # Static assets
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── next.config.js          # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository or navigate to the project**

```bash
cd "My Portfolio"
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio in action.

## 🏗️ Building for Production

### Local Build

```bash
npm run build
npm start
```

### Deploy to Vercel

This project is configured and ready to deploy on Vercel with zero configuration:

#### Option 1: Using Vercel CLI

```bash
npm install -g vercel
vercel
```

#### Option 2: Using GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and deploy

#### Option 3: Manual Upload

1. Visit [vercel.com](https://vercel.com)
2. Click "New Project"
3. Upload your project folder
4. Vercel handles the rest

## 📝 Customization Guide

### Update Personal Information

Edit the following files to customize the portfolio with your information:

#### Hero Section
File: `components/Hero.tsx`
- Change name and title
- Update social links (LinkedIn, GitHub, Email)

#### About Section
File: `components/About.tsx`
- Update personal description
- Modify skill categories and badges
- Change statistics

#### Experience Section
File: `components/Experience.tsx`
- Add/remove education entries
- Update work experience
- Modify timeline events

#### Projects Section
File: `components/Projects.tsx`
- Add new project cards
- Update project descriptions and technologies
- Link to your GitHub repositories

#### Contact Section
File: `components/Contact.tsx`
- Update email address
- Modify contact methods
- Customize form

### Styling Customization

Edit `tailwind.config.js` to adjust:
- Color scheme
- Typography
- Shadows & effects
- Custom animations

### Add Navigation Items

Edit `components/Navigation.tsx` to add more navigation items:

```tsx
const navItems = [
  { label: 'Your Section', href: '#your-section' },
  // Add more items...
]
```

## 📱 Responsive Design

The portfolio uses a mobile-first approach:

- **Mobile**: Optimized for small screens (<640px)
- **Tablet**: Enhanced layout for medium screens (640px - 1024px)
- **Desktop**: Full featured experience on large screens (>1024px)

## ⚡ Performance

- **Optimized Bundle**: ~80-100 KB gzipped
- **Core Web Vitals**: All metrics in green
- **Image Optimization**: Next.js automatic image optimization
- **Font Optimization**: System fonts for fastest load times

## 🔐 Security

- **CSP Headers**: Configured for Vercel
- **HTTPS**: Always enabled on Vercel
- **No External Dependencies**: Minimal dependency tree
- **TypeScript**: Full type safety

## 🌊 Smooth Scroll Behavior

The site features smooth scrolling navigation. Click any nav item to smoothly scroll to that section.

## 📊 SEO Optimization

- **Meta Tags**: Properly configured in `app/layout.tsx`
- **Open Graph**: Social media preview support
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: Ready for schema.org implementation
- **Sitemap**: Can be generated with next-sitemap

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
npm run dev -- -p 3001
```

### Build Errors

Clear cache and reinstall:

```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Styling Issues

Make sure Tailwind CSS is properly configured:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide React Icons](https://lucide.dev)
- [Vercel Deployment Guide](https://vercel.com/docs)

## 📄 License

This portfolio is open source and available under the MIT License.

## 🙏 Credits

- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons from [Lucide React](https://lucide.dev)
- Deployed on [Vercel](https://vercel.com)

## 📞 Support

For questions or issues, reach out through:
- 📧 Email: haloukarabab@gmail.com
- 🔗 LinkedIn: [Rabab HALLOUKA](https://www.linkedin.com/in/rabab-hallouka/)
- 💻 GitHub: [rhallouka-cmd](https://github.com/rhallouka-cmd)

---

**Made with ❤️ by Rabab HALLOUKA**
