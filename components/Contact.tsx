'use client'

import { Mail, Linkedin, Github, MessageCircle, Send } from 'lucide-react'
import { useState } from 'react'

/**
 * Contact Component - Contact Information & Get In Touch
 * Displays multiple ways to connect and a contact form
 */
export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link
    const mailtoLink = `mailto:haloukarabab@gmail.com?subject=Portfolio Contact from ${formState.name}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`
    
    window.location.href = mailtoLink
    
    // Reset form
    setFormState({ name: '', email: '', message: '' })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'haloukarabab@gmail.com',
      link: 'mailto:haloukarabab@gmail.com',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Rabab HALLOUKA',
      link: 'https://www.linkedin.com/in/rabab-hallouka/',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'rhallouka-cmd',
      link: 'https://github.com/rhallouka-cmd',
      color: 'from-slate-700 to-slate-900',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-primary relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-slate-400 text-lg">
            I'm always open to new opportunities, collaborations, and interesting conversations.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, idx) => {
            const IconComponent = method.icon

            return (
              <a
                key={idx}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-8 rounded-xl hover:bg-white/15 transition-all duration-300 group text-center hover:scale-105"
              >
                <div className={`bg-gradient-to-r ${method.color} h-16 w-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-light mb-2">{method.title}</h3>
                <p className="text-slate-300 text-sm break-all group-hover:text-blue-300 transition-colors">
                  {method.value}
                </p>
              </a>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="glass p-8 md:p-12 rounded-2xl max-w-2xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-bold text-light">Send me a Message</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-light placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-light placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all"
                placeholder="john@example.com"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Your Message
              </label>
              <textarea
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-light placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all resize-none"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold text-primary hover:shadow-glow hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="text-xs text-slate-400 text-center mt-4">
            Your email won't be shared. I'll reply as soon as possible.
          </p>
        </div>
      </div>
    </section>
  )
}
