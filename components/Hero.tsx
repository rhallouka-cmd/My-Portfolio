'use client'

import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

/**
 * Hero Component - Welcome Section
 * Displays the main introduction with name, title, and call-to-action
 */
export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 px-4 md:px-0">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Main Content */}
        <div className="space-y-6">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block text-light">Rabab</span>
            <span className="block gradient-text mt-2">HALLOUKA</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-blue-300 font-medium animate-slide-up">
            Software Engineering Student @ ESISA
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Crafting innovative technological solutions with a passion for AI and web development. 
            Bridging the gap between engineering excellence and business strategy.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-4">
          <a
            href="https://www.linkedin.com/in/rabab-hallouka/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-12 w-12 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
            <span className="absolute bottom-full mb-2 text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              LinkedIn
            </span>
          </a>

          <a
            href="https://github.com/rhallouka-cmd/AI_exam"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-12 w-12 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6 text-slate-300 group-hover:text-light" />
            <span className="absolute bottom-full mb-2 text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              GitHub
            </span>
          </a>

          <a
            href="mailto:haloukarabab@gmail.com"
            className="group relative h-12 w-12 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
            aria-label="Email Contact"
          >
            <Mail className="w-6 h-6 text-orange-400 group-hover:text-orange-300" />
            <span className="absolute bottom-full mb-2 text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Email
            </span>
          </a>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <button
            onClick={() => scrollToSection('about')}
            className="group px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-primary hover:shadow-glow hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            Explore My Work
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-blue-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
