import { Project, SocialLinks } from './types';
import cardmmm from './images/cardmmm.png';
import construcao from './images/construcao.jpg';

export const SOCIAL_LINKS: SocialLinks = {
  github: 'Https://github.com/DiegoDegan',
  linkedin: 'https://www.linkedin.com/in/diego-degan-de-melo-ab9767250/',
  phone: '(11) 96347-7704',
  email: 'degan.ctrlz@gmail.com',
};

export const PROJECTS: Project[] = [
  {
    id: 'marketing-mix-modeling',
    title: 'Otimização de Mix de Marketing (MMM)',
    description: 'Análise de impacto de investimentos em mídia tradicional (TV, Rádio e Jornal) no volume de vendas.',
    longDescription: 'Este projeto utiliza Modelagem de Mix de Marketing (Marketing Mix Modeling - MMM) para quantificar a eficácia de diferentes canais de marketing. Focado em mídias offline como TV, Rádio e Jornal, o modelo ajuda a entender o ROI de cada canal e a otimizar a alocação de orçamento para maximizar o retorno sobre o investimento.\n\nUtilizei técnicas de regressão multivariada e análise de séries temporais para isolar o efeito de cada mídia, considerando sazonalidade e fatores externos de mercado. O resultado permitiu uma redistribuição estratégica de verba, aumentando a eficiência das campanhas em 12% sem acréscimo de custo.',
    tags: ['Python', 'Estatística', 'Marketing Analytics', 'Regressão'],
    imageUrl: cardmmm,
    githubUrl: 'https://github.com/DiegoDegan/MMM-Otimizacao-Investimento-Midia',
    demoUrl: 'https://colab.research.google.com/drive/19Iv3WDvVDgt5YX_j4AhFCCG5tW5SjFnR?usp=sharing',
    date: 'Mar 2024',
  },
  {
    id: 'em-construcao-1',
    title: 'EM CONSTRUÇÃO',
    description: 'Este projeto está sendo desenvolvido e em breve estará disponível.',
    longDescription: 'Em breve trarei detalhes sobre este novo projeto de Ciência de Dados. Fique atento!',
    tags: ['Em breve'],
    imageUrl: construcao,
    githubUrl: '',
    date: '-',
  },
  {
    id: 'em-construcao-2',
    title: 'EM CONSTRUÇÃO',
    description: 'Este projeto está sendo desenvolvido e em breve estará disponível.',
    longDescription: 'Em breve trarei detalhes sobre este novo projeto de Ciência de Dados. Fique atento!',
    tags: ['Em breve'],
    imageUrl: construcao,
    githubUrl: '',
    date: '-',
  },
];
