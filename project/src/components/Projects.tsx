import React from 'react';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com React, Node.js e Stripe para pagamentos. Inclui painel administrativo, gestão de estoque e analytics em tempo real.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      github: 'https://github.com/usuario/ecommerce',
      demo: 'https://ecommerce-demo.vercel.app',
      stars: 156,
      forks: 42
    },
    {
      title: 'Task Management App',
      description: 'Aplicativo de gerenciamento de tarefas com colaboração em tempo real, usando React, Socket.io e MongoDB. Interface intuitiva com drag & drop.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Socket.io', 'MongoDB', 'Express', 'Tailwind'],
      github: 'https://github.com/usuario/task-manager',
      demo: 'https://taskmanager-demo.vercel.app',
      stars: 89,
      forks: 23
    },
    {
      title: 'Weather Dashboard',
      description: 'Dashboard meteorológico com previsões detalhadas, mapas interativos e alertas personalizados. Integração com múltiplas APIs climáticas.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'Python', 'FastAPI', 'Chart.js', 'OpenWeather'],
      github: 'https://github.com/usuario/weather-dashboard',
      demo: 'https://weather-demo.vercel.app',
      stars: 234,
      forks: 67
    },
    {
      title: 'Social Media Analytics',
      description: 'Ferramenta de análise de redes sociais com dashboards interativos, métricas avançadas e relatórios automatizados para empresas.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'TypeScript', 'D3.js', 'Prisma', 'Vercel'],
      github: 'https://github.com/usuario/social-analytics',
      demo: 'https://analytics-demo.vercel.app',
      stars: 312,
      forks: 89
    },
    {
      title: 'Fitness Tracker Mobile',
      description: 'Aplicativo mobile para acompanhamento de exercícios e nutrição com React Native, sincronização offline e gamificação.',
      image: 'https://images.pexels.com/photos/416754/pexels-photo-416754.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'SQLite', 'Redux', 'Expo'],
      github: 'https://github.com/usuario/fitness-tracker',
      demo: 'https://apps.apple.com/fitness-tracker',
      stars: 178,
      forks: 45
    },
    {
      title: 'AI Image Generator',
      description: 'Gerador de imagens com IA usando modelos de deep learning, interface web moderna e sistema de créditos para usuários.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Python', 'TensorFlow', 'AWS', 'Stripe'],
      github: 'https://github.com/usuario/ai-image-gen',
      demo: 'https://ai-images-demo.vercel.app',
      stars: 445,
      forks: 123
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Uma seleção dos meus melhores projetos, demonstrando habilidades técnicas e criatividade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-700 text-slate-300 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span className="text-sm">{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="w-4 h-4" />
                      <span className="text-sm">{project.forks}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;