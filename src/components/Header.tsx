import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </h1>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-slate-300 hover:text-white transition-colors duration-200 px-3 py-2 text-sm font-medium">
                Início
              </a>
              <a href="#experience" className="text-slate-300 hover:text-white transition-colors duration-200 px-3 py-2 text-sm font-medium">
                Experiência
              </a>
              <a href="#certificates" className="text-slate-300 hover:text-white transition-colors duration-200 px-3 py-2 text-sm font-medium">
                Certificações
              </a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-200 px-3 py-2 text-sm font-medium">
                Contato
              </a>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:contato@example.com" className="text-slate-400 hover:text-white transition-colors duration-200">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;