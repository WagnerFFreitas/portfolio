import type { ReactElement } from 'react';
import type { LucideIcon } from 'lucide-react';
import { GraduationCap, Brain, Cog } from 'lucide-react';

interface BasicCertification {
  title: string;
  description: string;
  document?: string;
  type?: 'basic';
}

interface DetailedCertification {
  title: string;
  certifications: string[];
  documents?: string[];
  type?: 'detailed';
}

interface CertificationSection {
  title: string;
  icon: LucideIcon;
  items: (BasicCertification | DetailedCertification)[];
}

type Certifications = Record<string, CertificationSection>;

const isBasicCertification = (item: BasicCertification | DetailedCertification): item is BasicCertification => {
  return 'document' in item || 'description' in item;
};

const isDetailedCertification = (item: BasicCertification | DetailedCertification): item is DetailedCertification => {
  return 'certifications' in item && 'documents' in item;
};

const Certificates = (): ReactElement => {
  const certifications: Certifications = {
    education: {
      title: "Formação Principal",
      icon: GraduationCap,
      items: [
        {
          title: "Engenharia da Computação",
          description: "Bacharel em Engenharia da Computação pela Universidade Candido Mendes, Rio de Janeiro - RJ. Conclusão: 2024 | Colação de Grau: 2025",
          document: "Diploma de graduação em engenharia da computação.pdf"
        },
        {
          title: "Harvard CS50 - Introdução à Ciência da Computação",
          description: "Certificado de Introdução à Ciência da Computação - Harvard University (CC50 Fundação)",
          document: "Certificado de Introdução da Ciência da Computação de Harvard_CC50 Fundação.pdf"
        }
      ]
    },
    automation: {
      title: "Automação e Sistemas",
      icon: Cog,
      items: [
        {
          title: "Automação Industrial (Mitsubishi)",
          description: "Especialização em automação industrial com foco em PLCs, robótica, servo acionamentos e visualização de dados em chão de fábrica. Conhecimento em aplicações para agronegócio e setor alimentício.",
          document: "Webinars Mitsubishi - Automação Industrial (7 certificados)"
        },
        {
          title: "Eletrônica Automotiva (SETE)",
          description: "Especialização em sistemas eletrônicos automotivos, gerenciamento de motores e eletrônica embarcada. Conhecimento em diagnóstico e manutenção de veículos modernos.",
          document: "Curso Oficina Conectada SETE (5 módulos)"
        }
      ]
    },
    ai: {
      title: "Inteligência Artificial e Data Science",
      icon: Brain,
      items: [
        {
          title: "Microsoft AI e Machine Learning",
          description: "Especialização em engenharia de prompts, ferramentas Microsoft AI e desenvolvimento de soluções inteligentes. Foco em criação de prompts eficazes e documentação automatizada.",
          document: "Bootcamp Microsoft AI for Tech - DIO (7 certificados)"
        },
        {
          title: "Fundamentos e Aplicações de IA",
          description: "Base sólida em algoritmos de machine learning, processamento de linguagem natural e modelos baseados em transformers. Conhecimento em aplicações práticas e impacto da IA.",
          document: "Cursos DIO - Fundamentos de IA (7 certificados)"
        },
        {
          title: "Data Science e Analytics",
          description: "Experiência em análise de dados, data literacy e geração de insights com IA. Participação em eventos de data science e aplicação prática em relatórios de vendas.",
          document: "Eventos IGTI, XPE e WiDS (6 certificados)"
        }
      ]
    }
  };

  return (
    <section id="certificates" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Certificações e Formação
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Qualificações e conhecimentos técnicos adquiridos ao longo da carreira
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(certifications).map(([key, section]) => {
            const IconComponent = section.icon;
            return (
              <div key={key} className="bg-slate-900 rounded-xl p-6 hover:bg-slate-900/70 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <IconComponent className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-semibold text-white">{section.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {section.items.map((item, index) => (
                    <div key={index} className="border-l-2 border-blue-500 pl-4">
                      <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                      {isBasicCertification(item) && (
                        <>
                          <p className="text-slate-300 mb-3">{item.description}</p>
                          {item.document && (
                            <p className="text-sm text-slate-400">{item.document}</p>
                          )}
                        </>
                      )}
                      {isDetailedCertification(item) && (
                        <ul className="space-y-1">
                          {item.certifications.map((cert, certIndex) => (
                            <li key={certIndex} className="text-slate-300 flex flex-col">
                              <span className="flex items-center">
                                <span className="text-blue-400 mr-2">•</span>
                                <span>{cert}</span>
                              </span>
                              {item.documents && item.documents[certIndex] && (
                                <span className="text-sm text-slate-400 ml-4">{item.documents[certIndex]}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;