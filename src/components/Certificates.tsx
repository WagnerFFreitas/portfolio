import type { ReactElement } from 'react';
import type { LucideIcon } from 'lucide-react';
import { GraduationCap, Brain, Cloud, Code, Cog, Users } from 'lucide-react';

interface BasicCertification {
  title: string;
  description: string;
  document: string;
  type?: 'basic';
}

interface DetailedCertification {
  title: string;
  certifications: string[];
  documents: string[];
  type?: 'detailed';
}

interface CertificationSection {
  title: string;
  icon: LucideIcon;
  items: (BasicCertification | DetailedCertification)[];
}

type Certifications = Record<string, CertificationSection>;

const isBasicCertification = (item: BasicCertification | DetailedCertification): item is BasicCertification => {
  return 'document' in item;
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
          description: "Diploma de graduação em engenharia da computação",
          document: "Diploma de graduacao a engenharia da computacao.pdf"
        },
        {
          title: "Harvard CC50",
          description: "Certificado de Introdução à Ciência da Computação - Harvard University",
          document: "Certificado de Introducao da Ciencia da Computacao de Harvard_CC50 Fundacao.pdf"
        }
      ]
    },
    microsoft: {
      title: "Certificações Microsoft",
      icon: Cloud,
      items: [
        {
          title: "Microsoft Azure",
          certifications: [
            "Azure Fundamentals (AZ-900)",
            "Security, Compliance and Identity (SC-900) - 03/09/2022",
            "Security, Compliance and Identity (SC-900) - 11/11/2023"
          ],
          documents: [
            "Certificado KA Microsoft Azure Fundamentals AZ-900.pdf",
            "Certificado KA Microsoft security_Compliance and identity fundamentals SC900 03092022.pdf",
            "Certificado KA Microsoft security_Compliance and identity fundamentals SC900 11112023.pdf"
          ]
        }
      ]
    },
    development: {
      title: "Desenvolvimento",
      icon: Code,
      items: [
        {
          title: "Desenvolvimento Web",
          certifications: [
            "HTML e CSS (Cultura Educacional Brasil)",
            "HTML e CSS Básico (EuCurso e AlfaMidia)",
            "MySQL (EuCurso e AlfaMidia)",
            "PHP (EuCurso e AlfaMidia)",
            "Site com HTML, CSS e JavaScript (Escola do Trabalhador 4.0)"
          ],
          documents: [
            "Certificado Cultura Educacional Brasil em HTML.pdf",
            "Certificado EuCurso e AlfaMidia HTML e CSS basico.pdf",
            "Certificado EuCurso e AlfaMidia de MySQL.pdf",
            "Certificado EuCurso e AlfaMidia de PHP.pdf",
            "Certificado Escola do trabalahdor 4.0 Crie um site simples usando HTML_CSS e JavaScript.pdf"
          ]
        },
        {
          title: "Lógica e Programação",
          certifications: [
            "Lógica de Programação (Bradesco)",
            "Lógica de Programação (Cubos Academy)",
            "Lógica em 5 semanas (EuCurso e AlfaMidia)",
            "Lógica de Programação (Potência Tech e Cubo Academy)"
          ],
          documents: [
            "Certificado Bradesco Logica de programcao.pdf",
            "Certificado Cubos Acvademy Minicurso de logica de programacao.pdf",
            "Certificado EuCurso e AlfaMidia Logica de programacao em cinco semanas.pdf",
            "Certificado Potencia Tech e Cubo Academy_Logica de programacao.pdf"
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
            "Introdução à engenharia de prompts"
          ],
          documents: [
            "Certificado DIO Bootcamp Microsoft AI for Tech - Criando Prroompts Inteligentes.pdf",
            "Certificado DIO Escrevendo prompt eficazes.pdf",
            "Certificado DIO Ferramentas e plataformas da Microsoft Essenciais para a engenharia de prompts.pdf",
            "Certificado DIO Introducao a engenharia de prompts.pdf"
          ]
        },
        {
          title: "Fundamentos e Aplicações de IA",
          certifications: [
            "Algoritmos e Aprendizado de Máquina",
            "Aplicações e Impacto da IA no Mundo Atual",
            "Introdução à Inteligência Artificial",
            "Processamento de Linguagem Natural"
          ],
          documents: [
            "Certificado DIO Algoritmos e aprendizado de maquina.pdf",
            "Certificado DIO Aplicacoes e impacto da IA no mundo atual.pdf",
            "Certificado DIO Introducao a Inteligencia artificial.pdf",
            "Certificado DIO Processamento de linguagem natural.pdf"
          ]
        },
        {
          title: "Data Science e Analytics",
          certifications: [
            "Woman in Data Sciences (WiDS)",
            "Data Universe III",
            "Data Universe IV - Data Literacy IA",
            "XPE Data Universe 8ED"
          ],
          documents: [
            "Certificado de participacao Womam in data Sciences_Wids.pdf",
            "Certificado IGTI Data Universe III.jpg",
            "Certificado IGTI Data Universe IV_Data Literacy IA.pdf",
            "Certificado XPE Data Universe 8ED.pdf"
          ]
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
            "Visualização de Dados em Chão de Fábrica"
          ],
          documents: [
            "Certificado de participacao Webinar da Mitsubish_Como a automacao esta transformando a produtividade e eficiencia do agronegocio.PDF",
            "Certificado de participacao Webinar da Mitsubish_Saiba como a automacao impulsiona o setor de alimentos e bebidas.PDF",
            "Certificado de participacao Webinar da Mitsubish_Robos colaborativos ou industriais.PDF",
            "Certificado de participacao Webinar da Mitsubish_Servo Acionamentos ou Inversor de frequencia onde e qual utilizar.PDF",
            "Certificado de participacao Webinar da Mitsubish_Como conectar e visualizar os dados de chao de fabrica de formasimples e eficiente.jpg"
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
            "Curso Oficina Conectada_SETE Modulo 27 Gerenciamento eletrônico do motor 2.0 Multijet II.pdf",
            "Curso Oficina Conectada_SETE Modulo 43 Gerenciamento eletrônico do motor Renault Kwid.pdf",
            "Curso Oficina Conectada_SETE modulo 44 Hyndai HB20.pdf",
            "Curso Oficina Conectada_SETE modulo 45 Mobi e Argo Gerenciamento eletronico dos motores Fireevo e Firefly.pdf",
            "Curso Oficina Conectada_SETE modulo 55 Eletronica embarcada_Eletroeletronicaa automotiva.pdf"
          ]
        }
      ]
    },
    management: {
      title: "Gestão e Liderança",
      icon: Users,
      items: [
        {
          title: "Gestão e Metodologias",
          certifications: [
            "SAP Fundamentos Básicos",
            "Scrum Overview",
            "Power BI - Visão Geral",
            "ABNT NBR ISO/IEC 17025:2017",
            "Gestão Exponencial Digital Day"
          ],
          documents: [
            "Certificado KA SAP Fundamentos basicos.pdf",
            "Certificado KA Scrum Overiew.pdf",
            "Certificado KA Visao Geral do Power BI.pdf",
            "Certificado I minicurso sobre ABNT NBR ISO IEC 17025 2017 Biochemie.pdf",
            "Certificado IGTI Gestao Expomicial Digital Day.pdf"
          ]
        },
        {
          title: "Liderança e Empreendedorismo",
          certifications: [
            "Liderança Extraordinária (AVEC)",
            "Desmistificando o Empreendedorismo (FIA)",
            "Case Jungle XP (Saint Paul)",
            "Gestão de Equipes e Liderança"
          ],
          documents: [
            "Certificado Lideraca Extraordinaria_AVEC.pdf",
            "Certificado FIA Desmistificando o Empreendedorismo.pdf",
            "Certificado Saint Paul Case Jungle XP_O uso de dados e a saude mental dos colaboradores .PDF"
          ]
        }
      ]
    }
  };

  return (
    <section id="certificates" className="py-20 bg-slate-900">
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
              <div key={key} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
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
                          <p className="text-sm text-slate-400">{item.document}</p>
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
                              {item.documents[certIndex] && (
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
