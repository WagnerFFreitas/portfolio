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
          certifications: [
            "Automação e Produtividade no Agronegócio",
            "Automação no Setor de Alimentos e Bebidas",
            "Robôs Colaborativos e Industriais",
            "Servo Acionamentos e Inversores",
            "Visualização de Dados em Chão de Fábrica",
            "Aumento de Desempenho de Máquinas e Dispositivos",
            "Importância de Escolher o Servo Correto"
          ],
          documents: [
            "Certificado de participação Webinar da Mitsubishi_Como a automação está transformando a produtividade e eficiência do agronegócio.PDF",
            "Certificado de participação Webinar da Mitsubishi_Saiba como a automação impulsiona o setor de alimentos e bebidas.PDF",
            "Certificado de participação Webinar da Mitsubishi_Robôs colaborativos ou industriais.PDF",
            "Certificado de participação Webinar da Mitsubishi_Servo Acionamentos ou Inversor de frequência onde e qual utilizar.PDF",
            "Certificado de participação Webinar da Mitsubishi_Como conectar e visualizar os dados de chão de fábrica de forma simples e eficiente.jpg",
            "Certificado de participação Webinar da Mitsubishi_Aumente o desempenho de máquinas e dispositivos de montagem com servo acionamentos.pdf",
            "Certificado de participação Webinar da Mitsubishi_A Importância de escolher o servo correto na sua aplicação.jpg"
          ]
        },
        {
          title: "Eletrônica Automotiva (SETE)",
          certifications: [
            "Gerenciamento Eletrônico Motor 2.0 Multijet II",
            "Gerenciamento Eletrônico Renault Kwid",
            "Hyundai HB20",
            "Mobi e Argo - Motores Fireevo e Firefly",
            "Eletrônica Embarcada Automotiva"
          ],
          documents: [
            "Curso Oficina Conectada_SETE Módulo 27 Gerenciamento eletrônico do motor 2.0 Multijet II.pdf",
            "Curso Oficina Conectada_SETE Módulo 43 Gerenciamento eletrônico do motor Renault Kwid.pdf",
            "Curso Oficina Conectada_SETE módulo 44 Hyundai HB20.pdf",
            "Curso Oficina Conectada_SETE módulo 45 Mobi e Argo Gerenciamento eletrônico dos motores Fireevo e Firefly.pdf",
            "Curso Oficina Conectada_SETE módulo 55 Eletrônica embarcada_Eletroeletrônica automotiva.pdf"
          ]
        }
      ]
    },
    ai: {
      title: "Inteligência Artificial e Data Science",
      icon: Brain,
      items: [
        {
          title: "Microsoft AI e Machine Learning",
          certifications: [
            "Microsoft AI for Tech - Criando Prompts Inteligentes",
            "Escrevendo prompts eficazes",
            "Ferramentas e plataformas da Microsoft Essenciais",
            "Introdução à engenharia de prompts",
            "Introdução à criação de prompts Inteligentes com a Microsoft",
            "Técnicas de engenharia de prompt",
            "Documentando projetos automáticos utilizando IA"
          ],
          documents: [
            "Certificado DIO Bootcamp Microsoft AI for Tech - Criando Prompts Inteligentes.pdf",
            "Certificado DIO Escrevendo prompt eficazes.pdf",
            "Certificado DIO Ferramentas e plataformas da Microsoft Essenciais para a engenharia de prompts.pdf",
            "Certificado DIO Introdução à engenharia de prompts.pdf",
            "Certificado DIO Introdução à criação de prompts Inteligentes com a Microsoft.pdf",
            "Certificado DIO Técnica de engenharia de prompt.pdf",
            "Certificado DIO Documentando projetos automáticos utilizando IA.pdf"
          ]
        },
        {
          title: "Fundamentos e Aplicações de IA",
          certifications: [
            "Algoritmos e Aprendizado de Máquina",
            "Aplicações e Impacto da IA no Mundo Atual",
            "Introdução à Inteligência Artificial",
            "Processamento de Linguagem Natural",
            "Aplicações práticas da inteligência artificial",
            "Introdução a modelo de linguagem baseados em transformers",
            "Natura ou fake natty: Como vencer na era das IAs generativas"
          ],
          documents: [
            "Certificado DIO Algoritmos e aprendizado de máquina.pdf",
            "Certificado DIO Aplicações e impacto da IA no mundo atual.pdf",
            "Certificado DIO Introdução à Inteligência artificial.pdf",
            "Certificado DIO Processamento de linguagem natural.pdf",
            "Certificado DIO Aplicações práticas da inteligência artificial.pdf",
            "Certificado DIO Introdução a modelo de linguagem baseados em transformers.pdf",
            "Certificado DIO Natura ou fake natty_Como vencer na eras das IAs generativas.pdf"
          ]
        },
        {
          title: "Data Science e Analytics",
          certifications: [
            "Woman in Data Sciences (WiDS)",
            "Data Universe III",
            "Data Universe IV - Data Literacy IA",
            "XPE Data Universe 8ED",
            "AI Today",
            "Utilizando prompt para gerar insights relatórios de vendas"
          ],
          documents: [
            "Certificado de participação Woman in data Sciences_Wids.pdf",
            "Certificado IGTI Data Universe III.jpg",
            "Certificado IGTI Data Universe IV_Data Literacy IA.pdf",
            "Certificado XPE Data Universe 8ED.pdf",
            "Certificado IGTI AI Today.pdf",
            "Certificado DIO Utilizando prompt para gerar insights relatórios de vendas.pdf"
          ]
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