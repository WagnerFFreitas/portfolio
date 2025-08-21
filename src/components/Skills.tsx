import React from 'react';
import type { ReactElement } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Code2, Cpu, Server, Brain, Users } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  tags: string[];
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

const Skills = (): ReactElement => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Desenvolvimento',
      icon: Code2,
      skills: [
        { 
          name: 'Python', 
          level: 90, 
          tags: ['Automação', 'Data Science', 'FastAPI', 'Django'] 
        },
        { 
          name: 'JavaScript/TypeScript', 
          level: 85, 
          tags: ['React', 'Node.js', 'Next.js', 'Tailwind CSS'] 
        },
        { 
          name: 'SQL', 
          level: 88, 
          tags: ['MySQL', 'PostgreSQL', 'SQL Server', 'SQLite'] 
        },
        { 
          name: 'Git & DevOps', 
          level: 85, 
          tags: ['GitHub', 'GitLab', 'CI/CD', 'Docker'] 
        }
      ]
    },
    {
      title: 'Cloud & Infraestrutura',
      icon: Server,
      skills: [
        { 
          name: 'Microsoft Azure', 
          level: 85, 
          tags: ['AZ-900', 'Cloud Services', 'IaaS', 'PaaS'] 
        },
        { 
          name: 'Security', 
          level: 80, 
          tags: ['SC-900', 'Identity', 'Compliance', 'IAM'] 
        },
        { 
          name: 'Infraestrutura', 
          level: 85, 
          tags: ['Windows Server', 'Redes', 'Active Directory'] 
        },
        { 
          name: 'Virtualização', 
          level: 80, 
          tags: ['VMware', 'Hyper-V', 'Containers'] 
        }
      ]
    },
    {
      title: 'Automação Industrial',
      icon: Cpu,
      skills: [
        { 
          name: 'PLCs', 
          level: 90, 
          tags: ['Siemens', 'Allen-Bradley', 'Mitsubishi', 'Ladder'] 
        },
        { 
          name: 'Robótica', 
          level: 85, 
          tags: ['FANUC', 'ABB', 'Programação', 'Manutenção'] 
        },
        { 
          name: 'SCADA', 
          level: 85, 
          tags: ['Elipse', 'WonderWare', 'Indusoft', 'HMI'] 
        },
        { 
          name: 'Eletrônica', 
          level: 85, 
          tags: ['Microcontroladores', 'Sensores', 'Instrumentação'] 
        }
      ]
    },
    {
      title: 'Data Science & IA',
      icon: Brain,
      skills: [
        { 
          name: 'Machine Learning', 
          level: 80, 
          tags: ['Scikit-learn', 'TensorFlow', 'Modelos Preditivos'] 
        },
        { 
          name: 'Data Analysis', 
          level: 85, 
          tags: ['Pandas', 'NumPy', 'Jupyter', 'Visualização'] 
        },
        { 
          name: 'Power BI', 
          level: 90, 
          tags: ['DAX', 'ETL', 'Dashboards', 'Relatórios'] 
        },
        { 
          name: 'Excel Avançado', 
          level: 85, 
          tags: ['VBA', 'Macros', 'Fórmulas', 'Pivot Tables'] 
        }
      ]
    },
    {
      title: 'Gestão & Metodologias',
      icon: Users,
      skills: [
        { 
          name: 'Gestão de Projetos', 
          level: 85, 
          tags: ['Scrum', 'Kanban', 'PMBOK', 'Agile'] 
        },
        { 
          name: 'Documentação', 
          level: 85, 
          tags: ['Markdown', 'UML', 'Diagramas', 'Wiki'] 
        },
        { 
          name: 'SAP', 
          level: 80, 
          tags: ['SAP Básico', 'PM', 'MM', 'SD'] 
        },
        { 
          name: 'Liderança', 
          level: 85, 
          tags: ['Gestão de Equipes', 'Mentoria', 'Treinamentos'] 
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas e eficientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-700/50 rounded-xl p-6 backdrop-blur-sm border border-slate-600/30 hover:bg-slate-700/70 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mr-4">
                  {category.icon && React.createElement(category.icon, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
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

export default Skills;