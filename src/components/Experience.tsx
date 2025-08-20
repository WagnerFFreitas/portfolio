import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'São Paulo, SP',
      period: '2022 - Presente',
      description: 'Lidero uma equipe de 5 desenvolvedores na criação de aplicações web e mobile de alta performance. Responsável pela arquitetura de sistemas, mentoria técnica e implementação de melhores práticas.',
      achievements: [
        'Reduziu tempo de carregamento das aplicações em 60%',
        'Implementou CI/CD que aumentou velocidade de deploy em 80%',
        'Mentoreou 3 desenvolvedores júniores para nível pleno'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL']
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Inovadora',
      location: 'Remote',
      period: '2020 - 2022',
      description: 'Desenvolvi do zero uma plataforma SaaS para gestão de projetos com mais de 10.000 usuários ativos. Trabalhei em todas as etapas do desenvolvimento, desde o design até o deploy.',
      achievements: [
        'Construiu plataforma que gerou R$ 2M em receita',
        'Implementou sistema de pagamentos integrado',
        'Desenvolveu API REST utilizada por aplicações mobile'
      ],
      technologies: ['Vue.js', 'Python', 'FastAPI', 'MongoDB', 'Stripe']
    },
    {
      title: 'Frontend Developer',
      company: 'Agência Digital',
      location: 'Rio de Janeiro, RJ',
      period: '2018 - 2020',
      description: 'Criei interfaces modernas e responsivas para clientes de diversos segmentos. Especialização em performance, acessibilidade e experiência do usuário.',
      achievements: [
        'Entregou 50+ projetos com 100% de satisfação do cliente',
        'Melhorou Core Web Vitals em 90% dos projetos',
        'Implementou design system reutilizado em 20+ projetos'
      ],
      technologies: ['React', 'TypeScript', 'Sass', 'Figma', 'WordPress']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Experiência Profissional
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Trajetória de crescimento e conquistas no desenvolvimento de software
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-slate-800"></div>
                
                <div className="bg-slate-700/50 rounded-xl p-6 backdrop-blur-sm border border-slate-600/30 hover:bg-slate-700/70 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                      <div className="flex items-center text-blue-400 mb-2">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:items-end text-slate-300 text-sm">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Principais Conquistas:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-slate-300 flex items-start">
                          <span className="text-green-400 mr-2">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-slate-600 text-slate-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;