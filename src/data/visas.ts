import { CountryInfo, SurveyQuestion } from '../types';

export const countriesData: CountryInfo[] = [
  {
    code: 'USA',
    name: 'Estados Unidos',
    flag: '🇺🇸',
    tagline: 'Vistos Oficiais e Autorização de Entrada nos Estados Unidos da América',
    bannerImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=85',
    desc: 'O sistema de imigração dos Estados Unidos oferece vistos baseados em laços de trabalho, estudos ou turismo de lazer. Todas as concessões necessitam de avaliação individual de segurança nacional pelas repartições consulares americanas antes de permitir viagens.',
    visas: [
      {
        id: 'us_eb2_niw',
        name: 'Visto de Residência Permanente por Interesse Nacional (Sem Patrocinador)',
        subtitle: 'Caminho para obtenção direta do cartão de residência permanente (Green Card)',
        group: 'PERMANENTE',
        difficulty: 'Médio',
        difficultyScore: 70,
        description: 'Este visto permite que profissionais com ensino superior avançado ou habilidades de destaque solicitem a residência permanente nos Estados Unidos de forma autônoma. Diferente de vistos de emprego comuns, este dispensa a necessidade de você ter uma proposta de trabalho prévia ou uma empresa americana atuando como patrocinador oficial.',
        typicalAgeGroup: '25 a 55 anos',
        idealProfile: 'Profissionais graduados com mais de 5 anos de experiência demonstrável (ou com mestrado/doutorado) e projetos de relevância técnica ou científica.',
        requirements: [
          'Possuir diploma de graduação (como Bacharelado) somado a pelo menos 5 anos de atuação profissional comprovada, ou títulos de pós-graduação como Mestrado e Doutorado.',
          'Demonstrar que o seu plano de projeto profissional possui mérito relevante e utilidade nacional para o desenvolvimento dos Estados Unidos.',
          'Comprovar que você detém conhecimento, equipe ou histórico consolidado de projetos de relevância no setor de engenharia, negócios, saúde ou tecnologia para executar seu plano.',
          '⚠️ Importante: Este visto NÃO garante entrada imediata ou definitiva. O processo confere apenas a autorização legal para solicitar correspondência consular. A decisão final de aprovação é individual de cada autoridade do Consulado.'
        ],
        steps: [
          {
            title: 'Passo 1: Preparação Completa e Tradução de sua Documentação Técnica',
            desc: 'Primeiro, providencie as traduções juramentadas para o inglês de todos os seus diplomas e históricos. Emita cartas de recomendação detalhadas assinadas por especialistas da sua área de atuação constatando sua competência relevante.'
          },
          {
            title: 'Passo 2: Elaboração Detalhada do seu Projeto de Atuação Profissional',
            desc: 'Gere um documento de Plano de Negócios ou Proposta de Projeto Profissional descrevendo em português e inglês como seu trabalho nos Estados Unidos trará impacto e desenvolvimento de interesse nacional.'
          },
          {
            title: 'Passo 3: Submissão de Petição e Quitação de Taxas Governamentais',
            desc: 'Abonando as guias de arrecadação do governo, pague a taxa da petição oficial de interesse nacional do Serviço de Cidadania e Imigração dos Estados Unidos (conhecida como Formulário I-140).'
          },
          {
            title: 'Passo 4: Agendamento de Impressões Digitais e Entrevista Presencial',
            desc: 'Após a análise favorável da petição pelo governo americano, realize o pagamento da taxa consular obrigatória, faça os exames médicos regulamentares com profissionais credenciados e realize a entrevista pessoal de segurança no Consulado Americano no Brasil.'
          }
        ],
        officialLink: 'https://br.usembassy.gov/pt/visas-pt/',
        officialLinkText: 'Canal Oficial da Embaixada e Consulados dos EUA no Brasil',
        processingTime: '12 a 18 meses',
        applicationFee: 'US$ 715 de taxa base do formulário (com opção de US$ 2.800 adicionais para análise rápida prioritária)',
        requiredDocuments: [
          'Documento 1: Certificados de graduação universitária e laudo de equivalência de diplomas expedidos por órgãos oficiais.',
          'Documento 2: Cartas de recomendação de ex-empregadores especificando suas atribuições civis técnicas pregressas.',
          'Documento 3: Currículo profissional atualizado estruturado sem uso de siglas técnicas.',
          'Documento 4: Proposta de Projeto Profissional de cunho nacional detalhando sua futura atuação em solo estrangeiro.',
          'Documento 5: Traduções oficiais juramentadas de todos os certificados e declarações nacionais para o idioma inglês.'
        ],
        detailedFees: [
          { item: 'Etapa 1: Taxa da Petição de Análise do Processo perante o Serviço de Cidadania e Imigração', cost: 'US$ 715' },
          { item: 'Etapa 2: Taxa Opcional de Julgamento Rápido em 45 dias (Taxa de Processamento Rápido)', cost: 'US$ 2.800' },
          { item: 'Etapa 3: Taxa de Processamento Consular no Centro Nacional de Vistos (Formulário DS-260)', cost: 'US$ 345' },
          { item: 'Etapa 4: Tarifa de Confecção do Cartão Físico de Imigrante (Cartão do Green Card)', cost: 'US$ 220' },
          { item: 'Etapa 5: Custo Estimativo Geral de Exame Clínico com Médico Credenciado no Brasil', cost: 'Média de R$ 1.800' }
        ],
        systemOverview: 'Este caminho de visto avalia se a sua profissão e capacidade profissional merecem a dispensa do processo de certificação de trabalho comum, que exige que uma empresa prove que não encontrou candidatos americanos para o cargo antes de te contratar. Se aprovado, garante o direito de residir permanentemente em busca de projetos lícitos de trabalho.'
      },
      {
        id: 'us_f1',
        name: 'Visto de Estudante Acadêmico (Visto F-1)',
        subtitle: 'Autorização de residência temporária enquanto durarem os estudos presenciais',
        group: 'TEMPORARIO',
        difficulty: 'Fácil',
        difficultyScore: 35,
        description: 'Visto voltado para cidadãos brasileiros matriculados em cursos acadêmicos aprovados de nível superior, universidades, escolas preparatórias ou escolas de idiomas credenciadas pelo órgão de imigração nos Estados Unidos.',
        typicalAgeGroup: '15 a 35 anos',
        idealProfile: 'Jovens estudantes ou profissionais que necessitam aprimorar sua fluência idiomática ou obter um título acadêmico de ensino superior internacional nos Estados Unidos.',
        requirements: [
          'Estar matriculado em regime integral presencial em uma escola que possua autorização federal para receber alunos de fora do país.',
          'Apresentar fundos financeiros robustos em contas bancárias que comprovem que você tem o dinheiro necessário para pagar todas as despesas da escola e de subsistência diária sem precisar trabalhar por lá.',
          'Demonstrar laços fortes de moradia estável no Brasil e a real intenção de retornar para o país após o término do seu curso.',
          '⚠️ Importante: O visto de estudante apenas te permite viajar até a alfândega e requerer a entrada. Ele NÃO garante a sua entrada no país; o agente de imigração na fronteira fará a validação final da documentação e pode recusar.'
        ],
        steps: [
          {
            title: 'Passo 1: Aprovação de Matrícula na Instituição de Ensino',
            desc: 'Primeiro, faça o processo de inscrição e seja aceito pela escola de sua escolha nos Estados Unidos. A escola enviará a você um Certificado Oficial de Registro de Estudante (conhecido pelo termo técnico de Formulário I-20).'
          },
          {
            title: 'Passo 2: Quitação da Taxa Governamental de Cadastro de Estudante',
            desc: 'Depois do recebimento do seu formulário escolar, acesse o portal de taxas federais do governo americano e pague a Taxa de segurança do Sistema de Informação de Vistos de Estudante (chamada de Taxa SEVIS).'
          },
          {
            title: 'Passo 3: Envio de Formulário Consular e Agendamento',
            desc: 'Preencha o formulário eletrônico consular oficial de não-imigrante dos Estados Unidos (chamado de Formulário DS-160) detalhando suas informações sem uso de siglas. E pague a Taxa Consular de Solicitação de Visto.'
          },
          {
            title: 'Passo 4: Entrevista Consular com Comprovantes de Renda',
            desc: 'Compareça à coleta de dados e à entrevista presencial na Embaixada ou nos Consulados Americanos no Brasil, carregando o I-20 original, comprovantes de quitação de taxas e os extratos da sua conta bancária de liquidez.'
          }
        ],
        officialLink: 'https://br.usembassy.gov/pt/visas-pt/',
        officialLinkText: 'Site de Vistos e Embaixadas dos Estados Unidos no Brasil',
        processingTime: '1 a 2 meses',
        applicationFee: 'US$ 185 (Taxa Consular do Consulado) + US$ 350 (Taxa SEVIS de Cadastro de Estudante)',
        requiredDocuments: [
          'Documento 1: Certificado de Elegibilidade original emitido pela universidade ou escola americana credenciada (Formulário I-20).',
          'Documento 2: Comprovante de quitação bancária de taxa técnica federal de registro de estudante no sistema de segurança.',
          'Documento 3: Página impressa de confirmação de envio eletrônico de formulário de vistos do governo (DS-160).',
          'Documento 4: Extratos bancários reais dos últimos três meses detalhando que o candidato ou patrocinador possui liquidez para custeio.',
          'Documento 5: Passaporte recente com validade restante superior a seis meses do seu plano de voo.'
        ],
        detailedFees: [
          { item: 'Etapa 1: Taxa Federal Governamental de Cadastro no Sistema de Informação de Vistos de Estudante', cost: 'US$ 350' },
          { item: 'Etapa 2: Taxa Consular Oficial de Agendamento da Entrevista no Brasil', cost: 'US$ 185' },
          { item: 'Etapa 3: Custo Médio do Curso de Idiomas ou Mensalidades (Varia segundo cada instituição selecionada)', cost: 'Estimativa livre por semestre' }
        ],
        systemOverview: 'A permissão baseia-se na frequência escolar regular com notas aceitáveis. Garante o direito temporário de permanência na localidade escolar e, após a diplomação em graduações superiores, concede o direito de requerer o Programa de Treinamento Prático Opcional para trabalhar legalmente por até 12 ou 36 meses na sua área de formação.'
      },
      {
        id: 'us_b1_b2',
        name: 'Visto de Visitante para Turismo e Negócios (Visto B1/B2)',
        subtitle: 'Para viagens curtas de passeio, lazer ou tratamentos de saúde',
        group: 'VISITANTE',
        difficulty: 'Médio',
        difficultyScore: 50,
        description: 'Visto de curta duração voltado para cidadãos que desejam passear por cidades turísticas, visitar familiares, estabelecer contatos comerciais de curto prazo (como fechar acordos e assistir conferências de negócios) ou realizar tratamentos clínicos hospitalares nos Estados Unidos.',
        typicalAgeGroup: 'Todas as idades',
        idealProfile: 'Cidadãos brasileiros em atividade profissional habitual estável, empregados com registro formal de carteira, proprietários de empresas estruturadas ou aposentados com renda declarada.',
        requirements: [
          'Comprovar vínculos estáveis no Brasil por meio de trabalho fixo registrado, bens físicos, ou laços de estudo ativos.',
          'Apresentar capacidade de financiamento próprio ou familiar para arcar com as despesas de passagem aérea, hotéis e alimentação para o seu roteiro pretendido.',
          'Ter conduta social ilibada e sem incidentes penais declarados em território nacional.',
          '⚠️ Importante: A posse do visto NÃO dá passe livre na fronteira americana. O oficial da Patrulha de Controle Aduaneiro possui autoridade para verificar suas malas, analisar seus celulares e vetar seu ingresso se suspeitar de desvio de conduta.'
        ],
        steps: [
          {
            title: 'Passo 1: Preenchimento de Formulário de Informações Pessoais',
            desc: 'Preencha detalhadamente o formulário oficial unificado de solicitação de visto no site do Centro Consular Eletrônico de Aplicações dos Estados Unidos.'
          },
          {
            title: 'Passo 2: Quitação Bancária de Taxa MRV de Agendamento Consular',
            desc: 'Emita a sua guia de pagamento e realize o pagamento da taxa consular de solicitação de vistos de turista perante os bancos autorizados do Brasil.'
          },
          {
            title: 'Passo 3: Agendamento das Duas Datas de Atendimento no Brasil',
            desc: 'Gere sua conta no portal de agendamentos oficiais do Brasil e escolha as datas: a primeira para coleta de impressões digitais e foto (Centro de Atendimento ao Solicitante de Visto) e a segunda para sua entrevista consulares.'
          },
          {
            title: 'Passo 4: Apresentação Presencial para Entrevista de Visto',
            desc: 'Compareça pessoalmente munido da página impressa de comprovação do seu formulário, do passaporte físico recente e de documentos comprobatórios de renda mensal, propriedades imobiliárias e comprovante de imposto de renda.'
          }
        ],
        officialLink: 'https://br.usembassy.gov/pt/visas-pt/',
        officialLinkText: 'Site Oficial do Consulado dos EUA - Vistos de Turismo',
        processingTime: 'Variável segundo fila consular local',
        applicationFee: 'US$ 185',
        requiredDocuments: [
          'Documento 1: Página física impressa contendo código de barras de confirmação do envio do formulário DS-160.',
          'Documento 2: Passaporte nacional físico original com validade correspondente.',
          'Documento 3: Extratos bancários emitidos das contas correntes acumulando saldos suficientes de liquidez recente.',
          'Documento 4: Declaração de Rendimentos de Imposto de Renda de Pessoa Física unida à respectiva certidão de entrega cadastral.',
          'Documento 5: Comprovação de emprego fixo estável no Brasil como holerites, carteira de trabalho ou registro comercial de empresa.'
        ],
        detailedFees: [
          { item: 'Etapa Única: Taxa Consular Governamental de Agendamento do Visto MRV', cost: 'US$ 185' }
        ],
        systemOverview: 'Esse visto temporário concede o privilégio de viajar até as barreiras alfandegárias de desembarque americano em múltiplas viagens ao longo de até 10 anos de vigência. Na fronteira de cada viagem, o oficial aduaneiro inspecionará suas intenções e determinará sua estadia autorizada específica, cujo padrão máximo regular é de até 180 dias por viagem.'
      }
    ]
  },
  {
    code: 'PRT',
    name: 'Portugal',
    flag: '🇵🇹',
    tagline: 'Imigração Legal, Cidadania Europeia e Vistos em Portugal',
    bannerImage: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1600&q=85',
    desc: 'O governo de Portugal oferece diversos vistos nacionais e de residência temporária ou permanente para cidadãos que pretendem morar, estudar ou empreender no espaço europeu.',
    visas: [
      {
        id: 'pt_d7',
        name: 'Visto D7 (Rendimentos Próprios e Aposentadoria)',
        subtitle: 'Para aposentados, pensionistas ou portadores de renda passiva comprovada',
        group: 'PERMANENTE',
        difficulty: 'Médio',
        difficultyScore: 45,
        description: 'Visto voltado para aposentados legais ou cidadãos que sobrevivam exclusivamente de receitas passivas acumuladas em seu país de origem, tais como lucros de investimentos, aluguéis de imóveis registrados, direitos autorais de livros ou dividendos recorrentes originários fora de Portugal.',
        typicalAgeGroup: '45 a 80 anos ou investidores autônomos de capital próprio',
        idealProfile: 'Aposentados com proventos regulares, proprietários de bens imobiliários alugados que possuam valores lícitos depositados em contas do exterior.',
        requirements: [
          'Comprovar o recebimento estável mensal de renda passiva equivalente a pelo menos 1 Salário Mínimo Vigente em Portugal.',
          'Obter número de identificação fiscal em território português e abrir uma conta bancária com depósitos de poupança.',
          'Ter garantias sólidas de alojamento residencial de longa permanência contratado por 1 ano em solo português.',
          '⚠️ Importante: Esse visto é preliminar e serve apenas como permissão de viagem para se apresentar nas instalações governamentais de Portugal para análise. A concessão cabal da residência de longo termo depende de aprovação presencial futura.'
        ],
        steps: [
          {
            title: 'Passo 1: Obtenção do CPF Português e Conta Bancária Lusa',
            desc: 'Primeiro, providencie através de representantes fiscais autorizados ou de forma física a emissão do seu Número de Identificação Fiscal português (CPF Português) e faça a abertura e transferência de recursos para sua nova conta bancária em Portugal.'
          },
          {
            title: 'Passo 2: Assinatura do Contrato de Moradia Habitacional',
            desc: 'Providencie e assine um contrato formal de aluguel habitacional de longa duração (no mínimo 12 meses registrados em cartório português) ou conte com um termo de responsabilidade de alojamento emitido por cidadão residente legal de Portugal.'
          },
          {
            title: 'Passo 3: Entrega do Processo e Pagamentos no Consulado',
            desc: 'Organize toda a pasta física de comprovantes de renda passiva estável, certidões penais apostiladas e seguro internacional de saúde e envie o pedido através do Centro de Visto credenciado oficial (VFS Global) no Brasil, efetuando o pagamento das respetivas taxas.'
          },
          {
            title: 'Passo 4: Comparecimento e Coleta Biométrica na Agência de Migrações em Portugal',
            desc: 'Viaje a Portugal utilizando a folha do visto fixada em seu passaporte oficial. Compareça presencialmente na Agência para a Integração, Migrações e Asilo de Portugal, colha fotos e biometrias detalhadas e retire seu Título de Residência Oficial definitivo.'
          }
        ],
        officialLink: 'https://vistos.mne.gov.pt/pt/',
        officialLinkText: 'Site Oficial de Vistos Nacionais - Ministério dos Negócios Estrangeiros de Portugal',
        processingTime: '3 a 5 meses',
        applicationFee: 'Aprox. € 90 de taxa consular + tarifas acessórias da agência concessionária VFS no Brasil',
        requiredDocuments: [
          'Documento 1: Comprovações financeiras de renda estável e folha de Declaração do Imposto de Renda no Brasil recomendando rentabilidades.',
          'Documento 2: Contrato formal registrado de arrendamento imobiliário assinado pelo prazo mínimo de 12 meses em Portugal.',
          'Documento 3: Atestado oficial de Antecedentes Criminais expedido de forma digital pela Polícia Federal do Brasil provido do respectivo Apostilamento de Haia.',
          'Documento 4: Certidão de saldo bancário ativo emitido pela instituição financeira portuguesa demonstrando fundos mínimos de garantia (€ 10.000 ou superior).',
          'Documento 5: Seguro de Saúde de Viagem com cobertura mínima ou Certificado de Atendimento Médico de Acordo Bilateral do SUS com Portugal (PB4 brasileiro).'
        ],
        detailedFees: [
          { item: 'Etapa 1: Taxa Administrativa Consular de Análise Consular (Cobrada no Brasil)', cost: '€ 90 (Nacional Português)' },
          { item: 'Etapa 2: Taxa de Processamento e Triagem de Documentos da Central Parceira Consular (VFS Global)', cost: 'Aprox. R$ 450' },
          { item: 'Etapa 3: Emissão do Cartão Físico do Título de Residência no Agendamento Presencial em Portugal', cost: '€ 155' }
        ],
        systemOverview: 'O visto D7 dá direito a uma autorização inicial de residência de 2 anos, renovável por mais 3 anos. Cumprindo 5 anos residenciais ininterruptos lícitos em Portugal de acordo com a tabela do governo, você adquire plena faculdade jurídica de se inscrever para o pleito de Cidadania Portuguesa completa obtendo passaporte comunitário.'
      },
      {
        id: 'pt_d8',
        name: 'Visto D8 (Visto de Nômade Digital para Trabalho Remoto)',
        subtitle: 'Para trabalhadores com contrato de emprego remoto, autônomos ou prestadores de serviços de TI',
        group: 'TEMPORARIO',
        difficulty: 'Médio',
        difficultyScore: 55,
        description: 'Visto desenvolvido pelo governo português para conceder direito de residência a profissionais que desenvolvem suas carreiras de TI, design, engenharia ou administração de forma 100% remota com empresas e contratantes sediados fora de Portugal.',
        typicalAgeGroup: '20 a 45 anos',
        idealProfile: 'Programadores de software, engenheiros de TI, designers de interfaces digitais, redatores ou profissionais remotos contratados por empresas multinacionais.',
        requirements: [
          'Prestar serviços remotos habituais e demonstrar renda recorrente mensal individual lícita equivalente a pelo menos 4 vezes o Salário Mínimo de Portugal.',
          'Contrato de prestação de serviços remoto ativo ou contrato CLT comprovando o vínculo estrangeiro do contratante externo.',
          'Contratar alojamento imobiliário residencial em Portugal por tempo longo registrado.',
          '⚠️ Importante: O visto D8 preliminar é uma chancela temporária no passaporte. O ingresso completo e legalização necessitam agendamento de segurança alfandegária individual em Portugal.'
        ],
        steps: [
          {
            title: 'Passo 1: Regularização Cadastral e Financeira',
            desc: 'Primeiro, requisite seu Número de Identificação Fiscal português através de procurações regulamentares, abra uma conta bancária em Portugal e transfira parcelas de fundos comprovando sua estabilidade de recursos.'
          },
          {
            title: 'Passo 2: Compilação Completa de Contratos Remotos Ativos',
            desc: 'Agrupe todos os seus contratos formais de regime de trabalho remoto e os extratos acumulados de recebimento salarial emitidos pela empresa ou de fonte estrangeira compatível.'
          },
          {
            title: 'Passo 3: Aplicação Oficial do Visto através da VFS Global',
            desc: 'Preencha os dados no sistema nacional de vistos de Portugal, recolha a guia, pague a taxa consular e agende a entrega da documentação e biometria no centro parceiro de triagem consular no Brasil.'
          },
          {
            title: 'Passo 4: Registro em Portugal e Obtenção do Título de Residência',
            desc: 'Desembarque no país com o passaporte autenticado e compareça no agendamento de segurança presencial do órgão de migrações (Agência para a Integração, Migrações e Asilo) para gerar seu cartão de residente nacional.'
          }
        ],
        officialLink: 'https://vistos.mne.gov.pt/pt/',
        officialLinkText: 'Site de Vistos Nacionais de Trabalho Remoto - Ministério de Portugal',
        processingTime: '2 a 4 meses',
        applicationFee: 'Aprox. € 90 + taxas administrativas da VFS local brasileira',
        requiredDocuments: [
          'Documento 1: Contrato de trabalho CLT ativo ou contratos múltiplos de consultoria de serviços autônomos com empresas estrangeiras.',
          'Documento 2: Extratos consolidados de recebimento bancário internacional dos últimos 12 meses somando valores mínimos exigidos pela lei.',
          'Documento 3: NIF de Portugal emitido e conta bancária lusa aberta com fundos suficientes.',
          'Documento 4: Certidão civil de Antecedentes Criminais da Polícia Federal brasileira apostilada e autenticada.',
          'Documento 5: Comprovante de moradia estável por no mínimo 12 meses assinado perante a imobiliária ou proprietário em Portugal.'
        ],
        detailedFees: [
          { item: 'Etapa 1: Taxa Governamental Nacional Consular de Portugal (Cobrada na VFS)', cost: '€ 90 (Nacional)' },
          { item: 'Etapa 2: Taxa Operacional de Recepção do Processo da Central Consular (VFS Brasil)', cost: 'Aprox. R$ 450' },
          { item: 'Etapa 3: Taxa de Registro e Emissão do Cartão Físico de Residência no Posto Governamental (AIMA)', cost: '€ 155' }
        ],
        systemOverview: 'Esse visto flexível permite moradia livre e isenção fiscal em Portugal enquanto os trabalhadores de tecnologia usufruem do espaço Schengen de trânsito livre europeu sem perder suas taxas salariais multinacionais.'
      }
    ]
  },
  {
    code: 'AUS',
    name: 'Austrália',
    flag: '🇦🇺',
    tagline: 'Imigração Austrália, Vistos por Relevância e Tabela de Pontos',
    bannerImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=85',
    desc: 'O sistema nacional de imigração da Austrália opera por planilhas de competências priorizando profissionais do mundo inteiro cujas carreiras profissionais possuam escassez de engenharia civis, médica ou tecnológica regional.',
    visas: [
      {
        id: 'au_subclass_189',
        name: 'Visto de Residência Permanente para Trabalhador Técnico Independente (Visto Subclass 189)',
        subtitle: 'Residência Permanente definitiva concedida com base em ranking de pontos profissionais',
        group: 'PERMANENTE',
        difficulty: 'Muito Difícil',
        difficultyScore: 85,
        description: 'Visto definitivo baseado em pontuação eletrônica. Ele permite que profissionais qualificados de áreas de engenharia civil, computação, saúde e ciências humanas vivam e trabalhem permanentemente em qualquer parte da Austrália de maneira 100% autônoma, sem precisar de patrocínio de uma empresa patrocinadora estrangeira.',
        typicalAgeGroup: '18 a 44 anos',
        idealProfile: 'Profissionais especialistas em engenharia, profissionais de ciências da computação, programadores de computadores, médicos de hospitais com excelente nível linguístico de inglês.',
        requirements: [
          'Deter cargo listado ativamente no Rol Oficial de Ocupações de Extrema Escassez na Austrália.',
          'Atingir pontuação mínima de 65 pontos calculados por idade, ementas letivas de universidades e anos de registro trabalhista qualificado.',
          'Garantir aproveitamento ótimo em prova oficial de proficiência linguística do inglês como o IELTS ou similar registrado.',
          '⚠️ Importante: A inscrição no banco de talentos (Pool de Candidatos) NÃO é garantia alguma de concessão. Trata-se de um cadastro de candidatos. A aprovação depende de ser convocado pelo governo e pagar as correspondentes taxas federais.'
        ],
        steps: [
          {
            title: 'Passo 1: Solicitação do Relatório Técnico de Equivalência Profissional (Skills Assessment)',
            desc: 'Primeiro, envie suas ementas escolares de graduação e cartas dos cargos pregressos do Brasil especificamente para a autarquia reguladora da sua profissão na Austrália (por exemplo, Engineers Australia para engenheiros ou Australian Computer Society para profissionais de computação) para comprovação técnica oficial.'
          },
          {
            title: 'Passo 2: Realização e Validação do Exame de Inglês',
            desc: 'Estude e realize o teste linguístico oficial de idioma inglês certificado aceito pelo governo australiano (Exame de Proficiência em Inglês). A nota alcançada é essencial para a soma de pontos na tabela federal.'
          },
          {
            title: 'Passo 3: Cadastro Consular de Expressão de Interesse',
            desc: 'Com as aprovações técnicas do seu diploma e sua nota de inglês, registre suas informações de forma digital no sistema de concorrência australiano oficial (Portal SkillSelect da Austrália) e pague as guias aplicáveis.'
          },
          {
            title: 'Passo 4: Submissão Completa e Pagamento do Visto Pós Convite',
            desc: 'Se sua pontuação alcançar a média nos sorteios quinzenais do governo, você receberá a carta oficial chamada Convite para Candidatar-se. Pague a considerável taxa oficial do governo australiano de imigração e providencie a documentação de antecedentes criminais cadastrados no Brasil.'
          }
        ],
        officialLink: 'https://brazil.embassy.gov.au',
        officialLinkText: 'Site Oficial do Governo e Embaixada da Austrália no Brasil',
        processingTime: '9 a 14 meses',
        applicationFee: 'AUD$ 4.640 de taxa governamental compulsória de imigração',
        requiredDocuments: [
          'Documento 1: Laudo definitivo favorável de equivalência técnica emitido pela respectiva autarquia regulamentar da Austrália.',
          'Documento 2: Certidão de aproveitamento em exame de proficiência linguística do inglês atestando nota técnica.',
          'Documento 3: Ementas letivas e diplomas de bacharelado devidamente apostilados e certificados por tradutores habilitados.',
          'Documento 4: Cartas formais assinadas e com carimbo das empresas brasileiras passadas certificando seus anos de carreira profissional.',
          'Documento 5: Atestado de Antecedentes Criminais completo apostilado emitido pela Polícia Federal do Brasil.'
        ],
        detailedFees: [
          { item: 'Etapa 1: Emissão do Laudo Técnico de Carreira perante Associação de Ofício Australiana', cost: 'AUD$ 500 a AUD$ 1.200 (Variável)' },
          { item: 'Etapa 2: Agendamento e Realização de Exame de Inglês Certificado', cost: 'Aprox. AUD$ 410' },
          { item: 'Etapa 3: Taxa Governamental Oficial para Aplicação do Visto (Após receber o Convite Oficial)', cost: 'AUD$ 4.640' }
        ],
        systemOverview: 'O processo baseia-se puramente na concorrência do ranking de pontos (SkillSelect). Não há loteria de sorteios; quem detém mais pontos acumulados de capacidade curricular ganha o convite do Ministério de Assuntos Internos para se radicar permanentemente.'
      }
    ]
  },
  {
    code: 'CAN',
    name: 'Canadá',
    flag: '🇨🇦',
    tagline: 'Imigração ao Canadá, Entrada Expressa e Permissões de Estudos',
    bannerImage: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1600&q=85',
    desc: 'O Canadá utiliza regimes dinâmicos de pontuação global para incentivar a fixação permanente de profissionais qualificados de engenharia civile, médicos corporativos ou tecnólogos através do programa de Entrada Expressa.',
    visas: [
      {
        id: 'can_express_entry',
        name: 'Entrada Expressa para Trabalhadores Qualificados (Express Entry)',
        subtitle: 'Residência Permanente definitiva com base no ranking de CRS (Comprehensive Ranking System)',
        group: 'PERMANENTE',
        difficulty: 'Difícil',
        difficultyScore: 78,
        description: 'Programa oficial do governo do canadá que concede de forma direta o direito de residência permanente aos candidatos que acumulam excelentes faixas de idade, educação superior de alta categoria, anos de carteira profissional assinada e bom letramento em inglês.',
        typicalAgeGroup: '20 a 40 anos',
        idealProfile: 'Bacharéis ou especialistas corporativos sob carreira contínua que dominem fluentemente o idioma inglês ou francês.',
        requirements: [
          'Deter nota certificada oficial provando seu letramento na língua inglesa através de exames oficiais como o IELTS na modalidade geral.',
          'Obter um laudo formal de equivalência e compatibilidade dos diplomas de universidades brasileiras perante órgão credenciado pelo governo canadense (como o WES).',
          'Alcançar pelo menos 67 pontos pontuados conforme folha referencial do governo sobre histórico e idades.',
          '⚠️ Importante: Ingressar no Express Entry significa inscrever seu nome em uma lista de talentos. Isso NÃO assegura sua aprovação ou imigração; o governo apenas convida os primeiros colocados a pagarem as taxas oficiais para residirem lá.'
        ],
        steps: [
          {
            title: 'Passo 1: Conquista do Laudo de Equivalência Acadêmica',
            desc: 'Primeiro, envie suas ementas escolares de graduação e cópias de diplomas brasileiros para o Serviço de Educação Mundial (conhecido mundialmente como WES) para obter o relatório de atestado de equivalência canadense.'
          },
          {
            title: 'Passo 2: Realização e Emissão da Certidão do Exame de Inglês ou Francês',
            desc: 'Realize o teste oficial de idiomas aprovado pelo órgão oficial (como IELTS General) garantindo altos níveis para amplificação dos seus pontos gerais.'
          },
          {
            title: 'Passo 3: Cadastro Técnico de Perfil no Pool de Seleção de Talentos',
            desc: 'Preencha detalhadamente o perfil digital unificado do site do Departamento de Imigração, Refugiados e Cidadania do Canadá, inserindo suas correspondentes notas de diplomas e prova de idiomas para o cálculo de pontuação automática.'
          },
          {
            title: 'Passo 4: Emissão de Antecedentes e Submissão Consular Unificada',
            desc: 'Se sua nota for selecionada nas rodadas de seleção, você receberá a carta convite (ita). Em até 60 dias, faça os exames clínicos obrigatórios com médicos credenciados, apresente certidão judiciária do Brasil, e realize o pagamento da taxa de processamento final de vistos de residência.'
          }
        ],
        officialLink: 'https://www.international.gc.ca/country-pays/brazil-bresil/index.aspx?lang=por',
        officialLinkText: 'Site Oficial do Canadá para brasileiros - Apoio Consular e Imigração',
        processingTime: '6 a 8 meses',
        applicationFee: 'CAN$ 1.525 de taxa administrativa governamental unificada de vistos',
        requiredDocuments: [
          'Documento 1: Relatório físico conclusivo de equivalência e compatibilidade escolar homologado pelo WES.',
          'Documento 2: Certificado original impresso de prova oficial linguística contendo as respectivas notas mínimas regulares.',
          'Documento 3: Cartas formais emitidas por gerentes e ex-diretores de trabalho comprovando escopo técnico de cargos passados.',
          'Documento 4: Extrato unificado de conta bancária mostrando poupança lícita mínima de imigração estipulada pelo governo canadense.',
          'Documento 5: Atestados criminais de antecedentes civis emitidos pela Polícia Federal do Brasil apostilados.'
        ],
        detailedFees: [
          { item: 'Etapa 1: Taxa da Avaliação de Diploma pelo Serviço de Educação Mundial (WES)', cost: 'Aprox. CAN$ 250' },
          { item: 'Etapa 2: Custo das Notas Oficiais de Prova Internacional de Línguas (IELTS)', cost: 'Aprox. CAN$ 330' },
          { item: 'Etapa 3: Taxas Oficiais Governamentais de Processamento e Análise de Imigração', cost: 'CAN$ 955' },
          { item: 'Etapa 4: Taxa Final Compensatória de Direito à Concessão de Residência Permanente', cost: 'CAN$ 585' },
          { item: 'Etapa 5: Taxa do Provedor Consular para Coleta de Impressões Digitais Consulares', cost: 'CAN$ 85' }
        ],
        systemOverview: 'Caminho baseado puramente nas habilidades e qualificação de carência produtiva do trabalhador. Concedido pelo ministério canadense, garante o trânsito livre de pouso de residência e acesso aos benefícios de saúde regionais e facilidade de passaporte futuro.'
      },
      {
        id: 'can_study_permit',
        name: 'Permissão Temporária de Estudos com Permissão de Trabalho (Study Permit)',
        subtitle: 'Para cursar o ensino superior e eventualmente obter direito ao trabalho expandido',
        group: 'TEMPORARIO',
        difficulty: 'Fácil',
        difficultyScore: 30,
        description: 'Visto temporário para indivíduos aceitos em cursos superiores (como faculdades técnicas, pós-graduações, mestrados e universidades federais) no Canadá, em instituições que tenham cadastro governamental para recepção de alunos de fora de suas fronteiras.',
        typicalAgeGroup: '18 a 35 anos',
        idealProfile: 'Estudantes interessados em educação em Colleges federais canadenses como tática de inserção acadêmica lícita inicial.',
        requirements: [
          'Possuir Carta de Aceitação Oficial definitiva emitida pela instituição de ensino designada canadense.',
          'Comprovantes bancários de dinheiro acumulado em conta para arcar com o valor das mensalidades escolares do ano inicial de estudos unidas a pelo menos CAN$ 20.635 de subsistência diária pessoal.',
          'Apresentar passaporte nacional com validade ao longo de toda a extensão planejada de estudos.',
          '⚠️ Importante: A carta de estudos é apenas uma pré-autorização consular. A concessão final da permissão residencial e de trabalho é dada pelo oficial aduaneiro no porto físico de pouso do Canadá.'
        ],
        steps: [
          {
            title: 'Passo 1: Candidatura e Obtenção da Aprovação de Matrícula',
            desc: 'Primeiro, candidate-se ao plano de curso escolhido em uma instituição designada e receba a sua correspondente Carta de Aceitação do College ou Universidade.'
          },
          {
            title: 'Passo 2: Constituição de Pasta Financeira de Subsistência lícita',
            desc: 'Organize as declarações financeiras e poupanças em contas mostrando que você possui os depósitos necessários para moradia e custos do primeiro período letivo sem recorrer a auxílios do governo canadense.'
          },
          {
            title: 'Passo 3: Envio Eletrônico das Informações no Portal Governamental',
            desc: 'Crie sua conta no portal do governo do Canadá, preencha as ementas, anexe fotos do passaporte, junte as cartas de intenção e realize a quitação das respectivas taxas de visto estudantil.'
          },
          {
            title: 'Passo 4: Registro de Dados Biométricos nos Postos Locais',
            desc: 'Compareça ao local estipulado para coleta de impressões digitais adicionais após requisitado eletronicamente pelo consulado.'
          }
        ],
        officialLink: 'https://www.canada.gov/en/immigration-refugees-citizenship/services/study-canada.html',
        officialLinkText: 'Site Oficial do Governo do Canadá - Detalhamento Completo de Estudos',
        processingTime: '6 a 12 semanas',
        applicationFee: 'CAN$ 150 + CAN$ 85 (Taxa de Coleta de Impressões Digitais)',
        requiredDocuments: [
          'Documento 1: Carta de Aceitação oficial emitida pela universidade ou College canadense.',
          'Documento 2: Carta de Intenção Pessoal explicando seus planos de carreira e os motivos de retorno ao Brasil após as aulas.',
          'Documento 3: Extratos bancários reais do estudante ou fiadores justificando as respectivas poupanças estáveis.',
          'Documento 4: Exame físico de saúde previamente avaliado e validado por profissional de medicina clínica certificado.',
          'Documento 5: Fotos de identificação física no modelo estabelecido pelo governo do Canadá.'
        ],
        detailedFees: [
          { item: 'Etapa 1: Taxa Administrativa Consular de Pedido de Permissão de Estudos', cost: 'CAN$ 150' },
          { item: 'Etapa 2: Taxa Consular Governamental de Biometria e Rastreamento Digital', cost: 'CAN$ 85' },
          { item: 'Etapa 3: Estimativa Média Semestral de Custos ou Mensalidades das Faculdades', cost: 'De CAN$ 7.000 a CAN$ 13.000 (Variação de College)' }
        ],
        systemOverview: 'Esse visto vincula você às diretrizes letivas da escola autorizando o estudante a desenvolver trabalho remunerado paralelo de forma regulada em meio-período (máximo de 24 horas semanais). Concedido sob cursos compatíveis, abre no futuro a oportunidade para requerimento de vistos de trabalho pós-graduação estendidos.'
      }
    ]
  }
];

// Configuration for questionnaire/eligibility survey
export const surveyQuestionsData: SurveyQuestion[] = [
  {
    id: 'age',
    text: 'Qual é a sua faixa etária atual?',
    subtitle: 'A idade influencia diretamente na pontuação ou robustez das petições analisadas.',
    options: [
      {
        label: '18 a 25 anos',
        value: 'young',
        points: { us_eb2_niw: 30, us_f1: 100, us_b1_b2: 70, pt_d7: 10, pt_d8: 60, au_subclass_189: 80, can_express_entry: 60, can_study_permit: 100 }
      },
      {
        label: '26 a 35 anos',
        value: 'prime',
        points: { us_eb2_niw: 90, us_f1: 80, us_b1_b2: 80, pt_d7: 30, pt_d8: 90, au_subclass_189: 100, can_express_entry: 100, can_study_permit: 80 }
      },
      {
        label: '36 a 50 anos',
        value: 'mature',
        points: { us_eb2_niw: 100, us_f1: 50, us_b1_b2: 90, pt_d7: 60, pt_d8: 80, au_subclass_189: 70, can_express_entry: 80, can_study_permit: 50 }
      },
      {
        label: 'Mais de 50 anos',
        value: 'senior',
        points: { us_eb2_niw: 60, us_f1: 30, us_b1_b2: 100, pt_d7: 100, pt_d8: 50, au_subclass_189: 30, can_express_entry: 30, can_study_permit: 30 }
      }
    ]
  },
  {
    id: 'education',
    text: 'Qual é o seu nível de instrução escolar ou acadêmica concluído?',
    subtitle: 'As titulações escolares são essenciais nos regimes de migração do trabalho.',
    options: [
      {
        label: 'Doutorado / Curso de Especialização Superior Pós-Graduação',
        value: 'phd_doctor',
        points: { us_eb2_niw: 100, us_f1: 70, us_b1_b2: 90, pt_d7: 50, pt_d8: 70, au_subclass_189: 100, can_express_entry: 100, can_study_permit: 70 }
      },
      {
        label: 'Mestrado ou Pós-Graduação Concluída',
        value: 'masters',
        points: { us_eb2_niw: 90, us_f1: 80, us_b1_b2: 85, pt_d7: 50, pt_d8: 80, au_subclass_189: 90, can_express_entry: 90, can_study_permit: 80 }
      },
      {
        label: 'Ensino Superior Completo (Bacharelado ou Licenciatura)',
        value: 'bachelors',
        points: { us_eb2_niw: 60, us_f1: 90, us_b1_b2: 80, pt_d7: 50, pt_d8: 90, au_subclass_189: 75, can_express_entry: 75, can_study_permit: 90 }
      },
      {
        label: 'Ensino Médio Completo ou Ensino Técnico Profissionalizante',
        value: 'high_school',
        points: { us_eb2_niw: 10, us_f1: 100, us_b1_b2: 70, pt_d7: 50, pt_d8: 50, au_subclass_189: 20, can_express_entry: 20, can_study_permit: 100 }
      }
    ]
  },
  {
    id: 'experience',
    text: 'Quantos anos de experiência de trabalho qualificado você possui?',
    subtitle: 'O tempo total de carreira contribui para preencher quesitos de relevância técnica ou científica.',
    options: [
      {
        label: 'Nenhuma ou menos de 2 anos de trabalho',
        value: 'beginner',
        points: { us_eb2_niw: 10, us_f1: 100, us_b1_b2: 75, pt_d7: 50, pt_d8: 40, au_subclass_189: 10, can_express_entry: 10, can_study_permit: 100 }
      },
      {
        label: 'De 2 a 5 anos de trabalho ativo',
        value: 'mid',
        points: { us_eb2_niw: 50, us_f1: 80, us_b1_b2: 85, pt_d7: 60, pt_d8: 80, au_subclass_189: 60, can_express_entry: 65, can_study_permit: 80 }
      },
      {
        label: 'De 5 a 10 anos de trabalho ativo consolidado',
        value: 'senior',
        points: { us_eb2_niw: 90, us_f1: 50, us_b1_b2: 90, pt_d7: 70, pt_d8: 95, au_subclass_189: 90, can_express_entry: 90, can_study_permit: 50 }
      },
      {
        label: 'Mais de 10 anos de trabalho estável no setor',
        value: 'expert',
        points: { us_eb2_niw: 100, us_f1: 30, us_b1_b2: 100, pt_d7: 85, pt_d8: 100, au_subclass_189: 100, can_express_entry: 100, can_study_permit: 30 }
      }
    ]
  },
  {
    id: 'financial',
    text: 'Qual é a sua disponibilidade de poupança bancária ou renda lícita demonstrável?',
    subtitle: 'As demonstrações financeiras eliminam riscos de recusos arbitrários alfandegários.',
    options: [
      {
        label: 'Consigo manter minhas contas básicas (Sem poupança relevante)',
        value: 'low_savings',
        points: { us_eb2_niw: 30, us_f1: 50, us_b1_b2: 60, pt_d7: 30, pt_d8: 40, au_subclass_189: 50, can_express_entry: 40, can_study_permit: 50 }
      },
      {
        label: 'Renda recorrente mensal acima de R$ 9.000 ou poupança de R$ 30k+',
        value: 'mid_savings',
        points: { us_eb2_niw: 60, us_f1: 80, us_b1_b2: 85, pt_d7: 70, pt_d8: 80, au_subclass_189: 75, can_express_entry: 75, can_study_permit: 80 }
      },
      {
        label: 'Renda recorrente acima de R$ 25.000 ou poupança de R$ 100k+',
        value: 'high_savings',
        points: { us_eb2_niw: 100, us_f1: 100, us_b1_b2: 100, pt_d7: 100, pt_d8: 100, au_subclass_189: 90, can_express_entry: 95, can_study_permit: 100 }
      },
      {
        label: 'Possuo patrimônio financeiro expressivo disponível para alocação flexível',
        value: 'investor_savings',
        points: { us_eb2_niw: 90, us_f1: 100, us_b1_b2: 100, pt_d7: 100, pt_d8: 100, au_subclass_189: 80, can_express_entry: 80, can_study_permit: 100 }
      }
    ]
  }
];
