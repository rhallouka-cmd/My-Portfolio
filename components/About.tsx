'use client'

/**
 * About Component - Personal Information & Skills
 * Displays biography and skill badges organized by categories
 */
export default function About() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C/C++', 'JavaScript', 'HTML/CSS', 'Python'],
    },
    {
      title: 'Frameworks & Tools',
      skills: ['Next.js', 'React', 'Tailwind CSS', 'VS Code', 'MinGW', 'Git', 'GitHub Copilot', 'Vercel', 'Replit'],
    },
    {
      title: 'AI Prompts & Tools',
      skills: ['ChatGPT', 'Gemini', 'Claude'],
    },
    {
      title: 'Other Expertise',
      skills: ['Digital Design', 'E-commerce', 'Digital Marketing', 'Video Editing', 'Print on Demand'],
    },
    {
      title: 'Languages',
      skills: ['Arabic', 'French', 'English'],
    },
  ]

  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-gradient-to-b from-primary via-secondary to-primary">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-slate-400">My Journey & Expertise</p>
        </div>

        {/* Biography */}
        <div className="glass p-8 md:p-12 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6 text-light">Who I Am</h3>
          <p className="text-lg text-slate-300 leading-relaxed">
            I'm a passionate Software Engineering student at ESISA with a diverse skill set spanning AI, web development, 
            and digital marketing. My approach combines technical excellence with business acumen, allowing me to create 
            innovative technological solutions that solve real-world problems. 
            <br />
            <br />
            With experience in e-commerce, digital advertising, and community leadership, I'm driven to bridge the gap 
            between cutting-edge technology and practical business applications. Whether it's developing smart AI solutions, 
            crafting beautiful user interfaces, or leading digital strategies, I bring a holistic perspective to every project.
          </p>
        </div>

        {/* Skills Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-light">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-xl hover:bg-white/15 transition-all duration-300 group"
              >
                <h4 className="text-lg font-semibold text-blue-300 mb-4 group-hover:text-cyan-300 transition-colors">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1 bg-white/10 hover:bg-blue-500/30 border border-blue-400/30 rounded-full text-sm text-slate-200 transition-all duration-200 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: '3+', label: 'Years of Experience' },
            { number: '10+', label: 'Skills Mastered' },
            { number: '2+', label: 'Major Projects' },
            { number: '5+', label: 'Club Memberships' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-lg text-center hover:scale-105 transition-transform duration-300"
            >
              <p className="text-3xl font-bold gradient-text mb-2">{stat.number}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
