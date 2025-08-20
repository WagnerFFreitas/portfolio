import React from 'react';
import { Code2, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Next.js', level: 82 }
      ]
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', level: 87 },
        { name: 'Python', level: 83 },
        { name: 'Express', level: 85 },
        { name: 'FastAPI', level: 80 }
      ]
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'Supabase', level: 88 }
      ]
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: 'React Native', level: 82 },
        { name: 'Flutter', level: 78 },
        { name: 'iOS (Swift)', level: 70 },
        { name: 'Android (Kotlin)', level: 72 }
      ]
    },
    {
      title: 'DevOps',
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'CI/CD', level: 82 },
        { name: 'Kubernetes', level: 75 }
      ]
    },
    {
      title: 'Design',
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'UI/UX', level: 88 },
        { name: 'Prototyping', level: 83 }
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
                  {category.icon}
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