import type { ReactElement } from 'react';
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  description: string;
  period?: string;
  location?: string;
  responsibilities?: string[];
}

const experiences: Experience[] = [
  {
    company: 'MULT TEC Assistência técnica',
    role: 'Técnico de TI e Eletrônica',
    period: '2020 - Atual',
    location: 'Belo Horizonte, MG',
    description: 'Especialista em sistemas de CFTV, suporte técnico em TI e manutenção eletrônica.',
    responsibilities: [
      'Instalação e manutenção de sistemas de CFTV',
      'Suporte técnico em TI para clientes',
      'Diagnóstico e reparo de equipamentos eletrônicos'
    ]
  },
  {
    company: 'Suporte Informática Ltda.',
    role: 'Técnico de Suporte',
    period: '2018 - 2020',
    location: 'Belo Horizonte, MG',
    description: 'Atuação como técnico de eletrônica, software, redes e Help Desk para o grupo Globex (Ponto Frio).',
    responsibilities: [
      'Suporte técnico em hardware e software',
      'Manutenção de redes e sistemas',
      'Atendimento em depósito e lojas do grupo'
    ]
  },
  {
    company: 'Eletrônica Alfa',
    role: 'Técnico em Áudio e Vídeo',
    period: '2016 - 2018',
    location: 'Belo Horizonte, MG',
    description: 'Especialização em manutenção e reparo de equipamentos de áudio e vídeo.',
    responsibilities: [
      'Reparo de equipamentos de áudio profissional',
      'Manutenção de sistemas de vídeo',
      'Instalação de sistemas de som'
    ]
  },
  {
    company: 'Data Duque Informática',
    role: 'Instrutor de TI',
    period: '2014 - 2016',
    location: 'Belo Horizonte, MG',
    description: 'Instrutor de cursos de informática e tecnologia.',
    responsibilities: [
      'Ensino de pacote Office, CorelDraw e Photoshop',
      'Instrutor de Access Básico e DOS',
      'Manutenção de equipamentos e redes',
      'Desenvolvimento de material didático'
    ]
  },
  {
    company: 'Externato Cruzeiro do Sul',
    role: 'Professor',
    period: '2012 - 2014',
    location: 'Belo Horizonte, MG',
    description: 'Professor do ensino fundamental e médio.',
    responsibilities: [
      'Ensino de disciplinas básicas',
      'Desenvolvimento de material didático',
      'Acompanhamento pedagógico'
    ]
  },
  {
    company: 'Eletrônica Santa Helena',
    role: 'Técnico em Áudio e Vídeo',
    period: '2010 - 2012',
    location: 'Belo Horizonte, MG',
    description: 'Especialista em manutenção e reparo de equipamentos de áudio e vídeo.',
    responsibilities: [
      'Reparo de equipamentos de áudio',
      'Manutenção de sistemas de vídeo',
      'Instalação de equipamentos'
    ]
  },
  {
    company: 'Microhard Informática',
    role: 'Técnico de Suporte',
    period: '2008 - 2010',
    location: 'Belo Horizonte, MG',
    description: 'Suporte técnico em informática e redes.',
    responsibilities: [
      'Manutenção de computadores',
      'Implementação de redes',
      'Instalação de software'
    ]
  },
  {
    company: 'Curso Eletrohm',
    role: 'Instrutor',
    period: '2006 - 2008',
    location: 'Belo Horizonte, MG',
    description: 'Instrutor de cursos técnicos em eletrônica.',
    responsibilities: [
      'Ensino de eletrônica básica',
      'Instrução em equipamentos de áudio',
      'Desenvolvimento de material didático'
    ]
  }
];

const Experience = (): ReactElement => {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Experiência Profissional
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Mais de 15 anos de experiência em tecnologia, eletrônica e educação,
            sempre buscando aprender e compartilhar conhecimento.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-700 rounded-lg">
                  <Building2 className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {exp.company}
                  </h3>
                  <p className="text-blue-400 font-medium mb-2">{exp.role}</p>
                  <div className="flex gap-4 text-sm text-slate-400 mb-3">
                    {exp.period && (
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    )}
                    {exp.location && (
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-slate-300 mb-4">{exp.description}</p>
                  {exp.responsibilities && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-white">Responsabilidades:</p>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
