import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

/**
 * Main Page - Single Page Application (SPA)
 * Aggregates all components to create the complete portfolio experience
 * 
 * This Next.js App Router layout provides:
 * - Sticky Navigation
 * - Hero Section
 * - About & Skills Section
 * - Experience & Timeline
 * - Featured Projects
 * - Contact Section
 * - Footer
 * 
 * Optimized for Vercel deployment with smooth animations and responsive design
 */
export default function Home() {
  return (
    <main className="w-full min-h-screen bg-primary">
      {/* Navigation - Fixed Header */}
      <Navigation />

      {/* Main Content Sections */}
      <div className="pt-16 md:pt-20">
        {/* Hero Section */}
        <Hero />

        {/* About & Skills Section */}
        <About />

        {/* Experience & Timeline Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
