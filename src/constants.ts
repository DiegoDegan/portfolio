import { Project, SocialLinks } from './types';
import cardmmm from './images/cardmmm.png';
import projetostreamlit from './images/projetostreamlit.png';
import mfsCardChallenge from './images/mfs_card_challenge.png';
import sensoCover from './images/senso_cover.png';

export const SOCIAL_LINKS: SocialLinks = {
  github: 'https://github.com/DiegoDegan',
  linkedin: 'https://www.linkedin.com/in/diego-degan-de-melo-ab9767250/',
  phone: '(11) 96347-7704',
  email: 'degan.ctrlz@gmail.com',
};

export const PROJECTS: Project[] = [
  {
    id: 'motor-foresig',
    title: 'Motor ForeSig (MFS) — Risco de Crédito para FIDCs',
    description:
      'Esteira preditiva de risco de crédito para antecipação de recebíveis (FIDCs), combinando Machine Learning (Random Forest + SHAP) e análise de redes em grafos (NoSQL Neo4J).',
    longDescription:
      'Projeto desenvolvido em parceria acadêmica com a Núclea e premiado em 3º lugar no FIAP NEXT 2026. Avalia o risco de inadimplência e o prazo esperado de atraso de boletos antes da antecipação pelo fundo.',
    tags: ['Python', 'Random Forest', 'NoSQL (Neo4J)', 'SHAP'],
    imageUrl: mfsCardChallenge,
    imageFit: 'cover',
    highlightBadge: '3º Lugar FIAP NEXT',
    githubUrl: 'https://github.com/DiegoDegan',
    demoUrl: 'https://youtu.be/3FXUcSbAgAE',
    youtubeUrl: 'https://www.youtube.com/embed/3FXUcSbAgAE',
    date: 'Out 2026',
  },
  {
    id: 'senso-risco-climatico',
    title: 'S.ENSO — Sistema Preditivo de Risco Agrícola e Climático',
    description:
      'Sistema de alerta antecipado (3 a 6 meses) que conecta dados climáticos do fenômeno El Niño (NOAA e INMET) aos impactos na agricultura e Defesa Civil em municípios brasileiros.',
    longDescription:
      'Projeto desenvolvido para a Global Solution 2026.1 da FIAP (avaliado com nota máxima 10/10). Traduz anomalias de temperatura dos oceanos Pacífico e Atlântico em um Score de Risco (0 a 100) para apoiar pequenos agricultores e gestores da Defesa Civil.',
    tags: ['Python', 'Regressão OLS', 'Machine Learning', 'Estatística'],
    imageUrl: sensoCover,
    imageFit: 'contain',
    highlightBadge: 'Nota 10/10 Global Solution',
    githubUrl: 'https://github.com/DiegoDegan',
    demoUrl: 'https://www.youtube.com/watch?v=e_fN2mBd4WA',
    youtubeUrl: 'https://www.youtube.com/embed/e_fN2mBd4WA',
    date: '2026',
  },
  {
    id: 'marketing-mix-modeling',
    title: 'Otimização de Mix de Marketing (MMM)',
    description:
      'Modelo de Regressão Linear em Python para medir o impacto dos investimentos em mídia (TV, Rádio e Jornal) nas vendas e simular a melhor redistribuição de orçamento.',
    longDescription:
      'Estudo prático de Marketing Mix Modeling (MMM) focado em responder qual o impacto real de cada canal nas vendas e como realocar a verba publicitária para aumentar o retorno sem gastar mais.',
    tags: ['Python', 'Regressão Linear', 'Estatística', 'Marketing Analytics'],
    imageUrl: cardmmm,
    imageFit: 'cover',
    highlightBadge: '+25.8% Simulação What-If',
    githubUrl: 'https://github.com/DiegoDegan/MMM-Otimizacao-Investimento-Midia',
    demoUrl: 'https://colab.research.google.com/drive/19Iv3WDvVDgt5YX_j4AhFCCG5tW5SjFnR?usp=sharing',
    date: '2026',
  },
  {
    id: 'analise-de-salarios-streamlit',
    title: 'Análise de Salários na Área de Dados',
    description:
      'Dashboard interativo em Streamlit para explorar e comparar médias salariais globais na área de tecnologia por cargo, senioridade e modelo de trabalho.',
    longDescription:
      'Dashboard interativo desenvolvido durante a Imersão Dados da Alura para analisar tendências de remuneração no mercado global de dados.',
    tags: ['Python', 'Pandas', 'Streamlit', 'Plotly'],
    imageUrl: projetostreamlit,
    imageFit: 'cover',
    githubUrl: 'https://github.com/DiegoDegan/Imersao-Dados-Alura-2026',
    demoUrl: 'https://degan-imersao-dados-alura.streamlit.app/?embed=true',
    date: '2026',
  },
];
