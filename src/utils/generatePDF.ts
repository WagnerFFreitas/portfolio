import jsPDF from 'jspdf';

export const generateCurriculumPDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  const margin = 20;
  let yPosition = 30;

  // Função para adicionar texto com quebra de linha
  const addText = (text: string, fontSize: number = 10, isBold: boolean = false) => {
    doc.setFontSize(fontSize);
    if (isBold) {
      doc.setFont('helvetica', 'bold');
    } else {
      doc.setFont('helvetica', 'normal');
    }
    
    const lines = doc.splitTextToSize(text, pageWidth - 2 * margin);
    doc.text(lines, margin, yPosition);
    yPosition += lines.length * (fontSize * 0.4) + 5;
    
    // Verificar se precisa de nova página
    if (yPosition > 280) {
      doc.addPage();
      yPosition = 30;
    }
  };

  const addSection = (title: string) => {
    yPosition += 10;
    doc.setFillColor(59, 130, 246);
    doc.rect(margin, yPosition - 8, pageWidth - 2 * margin, 12, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(title, margin + 5, yPosition);
    doc.setTextColor(0, 0, 0);
    yPosition += 15;
  };

  // Cabeçalho
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('WAGNER FERREIRA FREITAS', pageWidth / 2, 20, { align: 'center' });
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Engenheiro de Computação | Especialista em Cloud, IA & Automação | PCD', pageWidth / 2, 30, { align: 'center' });

  yPosition = 50;

  // Contato
  addSection('CONTATO');
  addText('📧 Email: wagnerffreitas1973@gmail.com');
  addText('📱 Telefone: (21) 99235-0416');
  addText('🔗 LinkedIn: linkedin.com/in/wagner-ferreira-freitas-2ba65269');
  addText('💻 GitHub: github.com/WagnerFFreitas');
  addText('📍 Localização: Rio de Janeiro, RJ');
  addText('♿ Pessoa com Deficiência (PCD)');

  // Resumo Profissional
  addSection('RESUMO PROFISSIONAL');
  addText('Engenheiro de Computação com sólida base acadêmica e portfólio robusto de certificações oficiais em Cloud (Microsoft Azure, AWS), Cibersegurança (SC-900), Inteligência Artificial e Automação Industrial. Experiência internacional de dois anos nos Estados Unidos e especialização em IA, Data Science e Engenharia de Prompt, com habilidades comprovadas em desenvolvimento Full-Stack (PHP, SQL, JavaScript, Python). Pessoa com Deficiência comprometida com a diversidade e inclusão no ambiente de trabalho.');

  // Formação Acadêmica
  addSection('FORMAÇÃO ACADÊMICA');
  addText('🎓 ENGENHARIA DA COMPUTAÇÃO', 12, true);
  addText('Universidade Candido Mendes, Rio de Janeiro - RJ');
  addText('Conclusão: 2024 | Colação de Grau: 2025');
  
  addText('🎓 HARVARD CS50 - INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO', 12, true);
  addText('Harvard University (CC50 Fundação)');
  addText('• Algoritmos e Estruturas de Dados');
  addText('• Programação em C e Python');
  addText('• SQL e Banco de Dados');
  addText('• Desenvolvimento Web (HTML, CSS, JavaScript)');

  // Experiência Profissional
  addSection('EXPERIÊNCIA PROFISSIONAL');
  
  addText('🏢 MULT TEC ASSISTÊNCIA TÉCNICA', 12, true);
  addText('Prestador de Serviço Autônomo como Técnico de TI e Eletrônica');
  addText('📅 2020 - Atual | 📍 Rio de Janeiro, RJ');
  addText('Especialista em sistemas de CFTV, suporte técnico em TI e manutenção eletrônica com foco em soluções de segurança e monitoramento.');
  addText('• Diagnóstico e resolução de problemas de hardware e software');
  addText('• Implementação e manutenção de sistemas de CFTV');
  addText('• Reparos em aparelhos eletrônicos');

  addText('🏢 SUPORTE INFORMÁTICA LTDA. (GRUPO GLOBEX - PONTO FRIO)', 12, true);
  addText('Técnico de Software, Rede e Help Desk');
  addText('📅 2018 - 2020 | 📍 Rio de Janeiro, RJ');
  addText('• Suporte técnico (Help Desk) para usuários nas lojas e depósito central');
  addText('• Manutenção de infraestrutura de rede local');
  addText('• Resolução de incidentes de software e conectividade');

  addText('🏢 DATA DUQUE INFORMÁTICA', 12, true);
  addText('Instrutor de TI e Técnico de Manutenção');
  addText('📅 2016 - 2018 | 📍 Rio de Janeiro, RJ');
  addText('• Ministração de treinamentos em Pacote Office, CorelDraw e Photoshop');
  addText('• Montagem e manutenção de computadores');
  addText('• Implementação de redes estruturadas');

  addText('🏢 EXTERNATO CRUZEIRO DO SUL', 12, true);
  addText('Professor');
  addText('📅 2014 - 2016 | 📍 Rio de Janeiro, RJ');
  addText('• Ensino de disciplinas de informática');
  addText('• Desenvolvimento de material didático personalizado');
  addText('• Acompanhamento pedagógico individualizado');

  addText('🏢 CURSO ELETROHM', 12, true);
  addText('Instrutor de Equipamentos de Áudio');
  addText('📅 2006 - 2014 | 📍 Rio de Janeiro, RJ');
  addText('• Ensino de eletrônica básica e avançada');
  addText('• Instrução especializada em equipamentos de áudio');
  addText('• Capacitação de técnicos em eletrônica de áudio');

  // Certificações
  addSection('CERTIFICAÇÕES E FORMAÇÃO COMPLEMENTAR');
  
  addText('🔧 AUTOMAÇÃO E SISTEMAS', 12, true);
  addText('• Automação Industrial (Mitsubishi): PLCs, robótica, servo acionamentos');
  addText('• Eletrônica Automotiva (SETE): Sistemas eletrônicos, gerenciamento de motores');
  
  addText('🤖 INTELIGÊNCIA ARTIFICIAL E DATA SCIENCE', 12, true);
  addText('• Microsoft AI: Engenharia de prompts, ferramentas Microsoft AI');
  addText('• Fundamentos de IA: Machine learning, processamento de linguagem natural');
  addText('• Data Science: Análise de dados, data literacy, geração de insights');

  addText('☁️ CLOUD E SEGURANÇA', 12, true);
  addText('• Microsoft Azure Fundamentals (AZ-900)');
  addText('• Microsoft Security, Compliance and Identity (SC-900)');
  addText('• AWS Discovery Day - Cloud Practitioner Essentials');
  addText('• Cisco CCNA R&S - Redes de Computadores');

  addText('💻 DESENVOLVIMENTO E PROGRAMAÇÃO', 12, true);
  addText('• Python: Automação, Data Science, FastAPI, Django');
  addText('• JavaScript/TypeScript: React, Node.js, Next.js');
  addText('• SQL: MySQL, PostgreSQL, SQL Server');
  addText('• Git & DevOps: GitHub, GitLab, CI/CD, Docker');

  // Projetos
  addSection('PROJETOS E REPOSITÓRIOS');
  addText('🎮 PROJETOS EM DESTAQUE:', 12, true);
  addText('• Jogos - Jogo da Forca desenvolvido com JavaScript, HTML e CSS');
  addText('• Bíblia - Aplicação web para propagar a Palavra de Deus');
  
  addText('📚 REPOSITÓRIOS DE ESTUDO:', 12, true);
  addText('• Curso Eurocurso e Alfamidia (HTML, CSS, JavaScript, PHP, MySQL)');
  addText('• Curso Cultura Educacional (HTML, CSS, Web Development)');
  addText('• Desafios DIO (Bootcamp, Programação, Desafios)');

  // Informações Adicionais
  addSection('INFORMAÇÕES ADICIONAIS');
  addText('• Pessoa com Deficiência (PCD) - Comprometido com diversidade e inclusão');
  addText('• Experiência internacional (2 anos nos Estados Unidos)');
  addText('• Certificações oficiais Microsoft Azure, AWS e Harvard CS50');
  addText('• Portfólio de projetos disponível no GitHub: github.com/WagnerFFreitas');
  addText('• Fluência em inglês técnico e conversacional');

  // Salvar o PDF
  doc.save('Curriculo-Wagner-Ferreira-Freitas.pdf');
};