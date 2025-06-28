import React from 'react';
import { Heart, Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react';
import YourName from './YourName';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com',
      label: 'Twitter',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:alex.johnson@example.com',
      label: 'Email',
      color: 'hover:text-primary-600'
    }
  ];

  const quickLinks = [
    { label: 'About', href: 'about' },
    { label: 'Projects', href: 'projects' },
    { label: 'Blog', href: 'blog' },
    { label: 'Contact', href: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <YourName />
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Full Stack Developer passionate about creating exceptional digital experiences 
              with clean code and innovative solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-800 dark:bg-gray-900 rounded-lg transition-all duration-300 hover:scale-110 text-gray-400 ${social.color}`}
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-3 text-gray-300">
              <p>San Francisco, CA</p>
              <p>alex.johnson@example.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300">
              © {currentYear} <YourName />. Made with{' '}
              <Heart className="inline w-4 h-4 text-red-500 mx-1" fill="currentColor" />{' '}
              using React & TypeScript.
            </p>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-all duration-300 hover:scale-105"
              aria-label="Scroll to top"
            >
              Back to Top
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;