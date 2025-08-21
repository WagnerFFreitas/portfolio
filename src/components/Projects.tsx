import type { ReactElement } from 'react';
import { Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
}

interface ProjectCategory {
  title: string;
  description: string;
  items: Project[];
}

const categories: ProjectCategory[] = [
  {
    title: 'Projetos em Destaque',
    description: 'Projetos pessoais e de impacto social desenvolvidos durante minha jornada',
    items: [
      {
        title: 'Jogos',
        description: 'Primeiro projeto prático, criado inicialmente para meu sobrinho. A ideia do Jogo da Forca surgiu a partir das sugestões dele, tornando o processo mais divertido e colaborativo. O projeto evoluiu como exercício de programação e aplicação de lógica e design em algo interativo.',
        image: '/images/jogos.jpg',
        tags: ['JavaScript', 'HTML', 'CSS', 'Jogos', 'Interatividade'],
        github: 'https://github.com/WagnerFFreitas/Jogos'
      },
      {
        title: 'Bíblia',
        description: 'Projeto desenvolvido para propagar a Palavra de Deus e apoiar igrejas em seus cultos, oferecendo recursos úteis em uma aplicação web. Une tecnologia e fé em uma solução que contribui social e espiritualmente.',
        image: '/images/biblia.jpg',
        tags: ['React', 'TypeScript', 'API', 'Frontend', 'Espiritual'],
        github: 'https://github.com/WagnerFFreitas/biblia'
      }
    ]
  },
  {
    title: 'Repositórios de Estudo',
    description: 'Repositórios que documentam minha jornada de aprendizado em diferentes tecnologias',
    items: [
      {
        title: 'Curso Eurocurso e Alfamidia',
        description: 'Estudos e projetos desenvolvidos durante o curso, focando em desenvolvimento web e programação.',
        image: '/images/web-dev.jpg',
        tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        github: 'https://github.com/WagnerFFreitas/Curso_Eurocurso_e_Alfamidia'
      },
      {
        title: 'Curso Cultura Educacional',
        description: 'Exercícios e projetos práticos em desenvolvimento web.',
        image: '/images/education.jpg',
        tags: ['HTML', 'CSS', 'Web Development'],
        github: 'https://github.com/WagnerFFreitas/Curso_Cultura_Educacional'
      },
      {
        title: 'Curso Cubo Academy - Ifood',
        description: 'Projetos e desafios do bootcamp de programação.',
        image: '/images/coding.jpg',
        tags: ['Lógica', 'Algoritmos', 'Programação'],
        github: 'https://github.com/WagnerFFreitas/Curso_Cubo_Academy_Ifood'
      },
      {
        title: 'Curso Fundação Bradesco',
        description: 'Materiais e exercícios de lógica de programação.',
        image: '/images/logic.jpg',
        tags: ['Lógica', 'Algoritmos', 'Fundamentos'],
        github: 'https://github.com/WagnerFFreitas/Curso_Fundacao_Bradesco'
      },
      {
        title: 'Curso em Vídeo',
        description: 'Estudos e projetos desenvolvidos durante os cursos do Guanabara.',
        image: '/images/python.jpg',
        tags: ['Python', 'JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/WagnerFFreitas/Curso_em_video'
      },
      {
        title: 'Desafios DIO',
        description: 'Coleção de desafios e projetos da Digital Innovation One.',
        image: '/images/challenges.jpg',
        tags: ['Bootcamp', 'Programação', 'Desafios'],
        github: 'https://github.com/WagnerFFreitas/desafio_dio'
      }
    ]
  }
];

const Projects = (): ReactElement => {
  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Projetos e Repositórios
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ao longo da minha jornada de aprendizado em programação e tecnologia, 
            desenvolvi projetos pessoais e de impacto social, além de manter repositórios 
            de estudos que registram minha evolução.
          </p>
        </div>

        <div className="space-y-20">
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((project, index) => (
                  <div
                    key={index}
                    className="bg-slate-900 rounded-xl overflow-hidden hover:bg-slate-900/90 transition-all duration-300"
                  >
                    <div className="relative h-48">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    </div>

                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h4>
                      <p className="text-slate-300 mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-sm bg-slate-800 text-slate-300 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-slate-400 hover:text-white transition-colors">
                          <Github className="w-5 h-5 mr-2" />
                          <span>Ver no GitHub</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;