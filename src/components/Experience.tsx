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
    company: 'MULT TEC Assistência Técnica',
    role: 'Prestador de serviço autônomo como técnico de TI e Eletrônica',
    period: '2020 - Atual',
    location: 'Rio de Janeiro, RJ',
    description: 'Especialista em sistemas de CFTV, suporte técnico em TI e manutenção eletrônica com foco em soluções de segurança e monitoramento.',
    responsibilities: [
      'Diagnóstico e resolução de problemas de hardware e software para clientes',
      'Implementação e manutenção de sistemas de CFTV para segurança e monitoramento',
      'Reparos em aparelhos eletrônicos'
    ]
  },
  {
    company: 'Suporte Informática Ltda. (Grupo Globex - Ponto Frio)',
    role: 'Técnico de Software, Rede e Help Desk',
    period: '2018 - 2020',
    location: 'Rio de Janeiro, RJ',
    description: 'Atuação como técnico de eletrônica, software, rede e Help Desk, prestando suporte tanto no depósito quanto nas lojas do grupo.',
    responsibilities: [
      'Suporte técnico (Help Desk) para usuários nas lojas e depósito central',
      'Manutenção de infraestrutura de rede local e configuração de ativos',
      'Resolução de incidentes de software e conectividade',
      'Garantia da operacionalidade dos sistemas corporativos'
    ]
  },
  {
    company: 'Data Duque Informática',
    role: 'Instrutor de TI e Técnico de Manutenção',
    period: '2016 - 2018',
    location: 'Rio de Janeiro, RJ',
    description: 'Instrutor de cursos de informática e responsável pela manutenção de equipamentos e implementação de redes.',
    responsibilities: [
      'Ministração de treinamentos em Pacote Office, CorelDraw e Photoshop',
      'Ensino de Access Básico e sistemas operacionais (DOS)',
      'Montagem e manutenção de computadores para clientes corporativos',
      'Implementação de redes estruturadas e capacitação de dezenas de alunos'
    ]
  },
  {
    company: 'Externato Cruzeiro do Sul',
    role: 'Professor',
    period: '2014 - 2016',
    location: 'Rio de Janeiro, RJ',
    description: 'Professor de informática do ensino fundamental até o segundo ano do ensino médio, desenvolvendo material didático e acompanhamento pedagógico.',
    responsibilities: [
      'Ensino de disciplinas de informática',
      'Desenvolvimento de material didático personalizado',
      'Acompanhamento pedagógico individualizado',
      'Gestão de turmas e avaliação de desempenho acadêmico'
    ]
  },
  {
    company: 'Curso Eletrohm',
    role: 'Instrutor de Equipamentos de Áudio',
    period: '2006 - 2014',
    location: 'Rio de Janeiro, RJ',
    description: 'Instrutor especializado em cursos técnicos de eletrônica com foco em equipamentos de áudio profissional.',
    responsibilities: [
      'Ensino de eletrônica básica e avançada',
      'Instrução especializada em equipamentos de áudio',
      'Desenvolvimento de material didático técnico',
      'Capacitação de técnicos em eletrônica de áudio',
      'Recondicionamento de alto-falantes e tweeter'
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
            com especialização em sistemas de segurança, suporte técnico e desenvolvimento de soluções.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-700 rounded-lg">
                  <Building2 className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
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