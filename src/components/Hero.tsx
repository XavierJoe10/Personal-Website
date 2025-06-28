import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';
import YourName from './YourName';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'Full Stack Developer',
    'React Specialist',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];

  useEffect(() => {
    if (isTyping) {
      if (displayText.length < roles[currentIndex].length) {
        const timer = setTimeout(() => {
          setDisplayText(roles[currentIndex].slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayText, currentIndex, isTyping, roles]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200 dark:bg-primary-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary-200 dark:bg-secondary-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent-200 dark:bg-accent-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 p-1 animate-glow">
              <img
                src="https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Alex Johnson Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
            Hi, I'm{' '}
            <YourName />
          </h1>

          {/* Typing Animation */}
          <div className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-12 flex items-center justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="font-medium">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            I craft exceptional digital experiences with clean code and innovative solutions. 
            Passionate about creating user-centric applications that make a difference.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
              Download Resume
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Skills Preview */}
          <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">
              Technologies I work with
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
                  style={{ animationDelay: `${1 + index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors animate-bounce"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;