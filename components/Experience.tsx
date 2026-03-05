'use client'

import { GraduationCap, Briefcase, Users, Award } from 'lucide-react'

/**
 * Experience Component - Education, Certifications & Work Experience
 * Timeline-style layout showcasing career progression
 */
export default function Experience() {
  const experiences = [
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Software Engineering Student',
      organization: 'ESISA - École Supérieure d\'Ingénierie en Sciences Appliquées',
      period: '2025 - 2030',
      description: '1st Year - Engineering Cycle in Software Engineering (Génie Logiciel)',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      type: 'certification',
      icon: Award,
      title: 'C Programming Basics',
      organization: 'Simplilearn / Skillup',
      period: '2024',
      description: 'Professional certification in fundamental C programming concepts',
      color: 'from-purple-500 to-pink-500',
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'E-commerce & Dropshipping Specialist',
      organization: 'Cash on Delivery (COD Network)',
      period: '2022 - 2024 (2 years)',
      description: 'Managed multiple online stores on Youcan.shop platform. Handled inventory, customer operations, and business development.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      type: 'work',
      icon: Briefcase,
      title: 'Digital Marketing Manager',
      organization: 'Self-employed',
      period: '2022 - 2024 (2 years)',
      description: 'Managed advertising campaigns across Meta Ads and TikTok Ads. Optimized targeting, budget allocation, and conversion rates.',
      color: 'from-orange-500 to-red-500',
    },
    {
      type: 'leadership',
      icon: Users,
      title: 'Keynote Speaker',
      organization: 'ESISA',
      period: '2024',
      description: 'Delivered presentation on "Using AI to Excel as a Software Engineering Student" to first-year cohort.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      type: 'leadership',
      icon: Users,
      title: 'Active Member',
      organization: 'ESISA Community Clubs',
      period: '2024 - Present',
      description: 'Contributing member of ESISA Creators, Charity Club, Sports Club, Trading Club, ESISA Elites, and RNR Club.',
      color: 'from-rose-500 to-pink-500',
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-primary">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-slate-400">Education, Experience & Leadership</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => {
              const IconComponent = exp.icon
              const isEven = idx % 2 === 0

              return (
                <div
                  key={idx}
                  className={`flex gap-6 md:gap-0 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 md:flex ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                    <div className="glass p-6 md:p-8 rounded-xl max-w-sm hover:bg-white/15 transition-all duration-300 group">
                      {/* Icon & Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`bg-gradient-to-r ${exp.color} p-3 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <IconComponent className="text-white w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-light">{exp.title}</h3>
                          <p className="text-sm text-blue-300">{exp.period}</p>
                        </div>
                      </div>

                      {/* Organization & Description */}
                      <div className="space-y-2">
                        <p className="text-slate-400 font-semibold text-sm">{exp.organization}</p>
                        <p className="text-slate-300 text-sm leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="flex justify-center md:flex-1">
                    <div className="absolute left-3 md:left-1/2 top-[30px] md:top-auto md:-translate-x-1/2">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} border-4 border-primary`} />
                    </div>
                  </div>

                  {/* Spacer for alternate layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
