import React from 'react';
import { Code, Palette, Database, Globe, Award, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Frontend Development', level: 95, icon: Code, color: 'bg-primary-500' },
    { name: 'UI/UX Design', level: 88, icon: Palette, color: 'bg-secondary-500' },
    { name: 'Backend Development', level: 90, icon: Database, color: 'bg-accent-500' },
    { name: 'DevOps & Cloud', level: 82, icon: Globe, color: 'bg-success-500' },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovation Corp',
      description: 'Leading development of scalable web applications using React, Node.js, and AWS.',
      icon: Code,
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Inc',
      description: 'Developed and maintained multiple client projects with focus on performance and user experience.',
      icon: Globe,
    },
    {
      year: '2020',
      title: 'Frontend Developer',
      company: 'Creative Agency',
      description: 'Specialized in creating responsive and interactive user interfaces using modern frameworks.',
      icon: Palette,
    },
    {
      year: '2018',
      title: 'Computer Science Degree',
      company: 'University of Technology',
      description: 'Graduated with honors, specializing in software engineering and web technologies.',
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer with over 5 years of experience creating digital solutions 
            that combine beautiful design with robust functionality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story & Skills */}
          <div className="space-y-12">
            {/* Personal Story */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey
              </h3>
              <div className="prose prose-lg text-gray-600 dark:text-gray-300">
                <p className="mb-6">
                  My passion for technology started early, and I've been fortunate to turn that passion 
                  into a career. I believe in writing clean, maintainable code and creating user experiences 
                  that are both functional and delightful.
                </p>
                <p className="mb-6">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge through blog posts and community talks. I'm always eager to 
                  take on new challenges and collaborate with amazing teams.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Skills & Expertise
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${skill.color} text-white group-hover:scale-110 transition-transform`}>
                            <IconComponent size={20} />
                          </div>
                          <span className="font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.2}s`
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Experience & Education
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="relative flex items-start gap-6 group animate-fade-in"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      {/* Timeline Icon */}
                      <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 border-4 border-primary-500 rounded-full group-hover:scale-110 transition-transform">
                        <IconComponent size={20} className="text-primary-500" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 group-hover:shadow-lg transition-shadow">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-medium rounded-full">
                            <Calendar size={14} />
                            {item.year}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                          {item.company}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;