'use client'

import { ExternalLink, Github } from 'lucide-react'

/**
 * Projects Component - Portfolio Projects Showcase
 * Grid layout displaying major projects with descriptions and links
 */
export default function Projects() {
  const projects = [
    {
      title: 'Professor AI',
      description: 'An innovative web application designed to assist professors with schedule management, student communication, and academic planning. Built with modern web technologies and optimized for Vercel deployment.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'VS Code', 'GitHub Copilot', 'Vercel'],
      github: 'https://github.com/rhallouka-cmd/AI_exam',
      live: 'https://professor-ai.vercel.app',
      highlight: 'AI-Powered Education',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Atelier dar lbenna - Visual Identity',
      description: 'Complete visual identity creation for a traditional Moroccan pastry business. Includes logo design, business cards, and brand guidelines showcasing traditional craftsmanship with modern design principles.',
      technologies: ['Digital Design', 'Branding', 'Adobe Creative Suite', 'UI/UX Principles'],
      link: '#',
      highlight: 'Branding & Design',
      gradient: 'from-orange-500 to-rose-500',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-gradient-to-b from-primary via-secondary to-primary">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-slate-400">Innovative solutions showcasing my skills</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              {/* Project Header with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-white/80 text-sm font-semibold">{project.highlight}</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 space-y-6">
                {/* Title */}
                <div>
                  <h3 className="text-2xl font-bold text-light group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-blue-400/20 hover:border-blue-400/50 rounded-full text-xs text-blue-300 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Links */}
                <div className="flex gap-3 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300 group/link"
                    >
                      <Github className="w-4 h-4 group-hover/link:text-blue-400" />
                      <span className="text-sm font-medium">View Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-medium hover:shadow-glow transition-all duration-300 group/link"
                    >
                      <span className="text-sm">Live Demo</span>
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <div className="glass p-8 rounded-2xl border border-blue-400/20 text-center">
          <p className="text-slate-300 text-lg">
            More projects coming soon! Follow my
            <a
              href="https://github.com/rhallouka-cmd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-cyan-400 mx-1 font-semibold transition-colors"
            >
              GitHub profile
            </a>
            for latest updates.
          </p>
        </div>
      </div>
    </section>
  )
}
