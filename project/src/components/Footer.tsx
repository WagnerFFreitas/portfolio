import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-slate-400 flex items-center justify-center">
            Feito com 
            <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" /> 
            por João Developer • {currentYear}
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Todos os direitos reservados. Este portfolio foi criado com React, TypeScript e Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;