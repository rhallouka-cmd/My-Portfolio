'use client'

import { Github, Linkedin, Mail, Heart } from 'lucide-react'

/**
 * Footer Component - Site Footer with Links and Copyright
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/50 border-t border-white/10 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Rabab HALLOUKA</h3>
            <p className="text-slate-400 text-sm">
              Software Engineering Student @ ESISA. Crafting innovative solutions with AI and web development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-light">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-light">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/rabab-hallouka/"
                target="_blank"
                rel="noopener noreferrer"
                className="group h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
              </a>
              <a
                href="https://github.com/rhallouka-cmd"
                target="_blank"
                rel="noopener noreferrer"
                className="group h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-slate-300 group-hover:text-light" />
              </a>
              <a
                href="mailto:haloukarabab@gmail.com"
                className="group h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-orange-400 group-hover:text-orange-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>
            © {currentYear} Rabab HALLOUKA. All rights reserved. Deployed on{' '}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-cyan-400 transition-colors"
            >
              Vercel
            </a>
            .
          </p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
