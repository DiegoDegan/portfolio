import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  GithubLogo,
  ArrowSquareOut,
  Trophy,
  Target,
  Database,
  ChartBar,
  Stack,
  CheckCircle,
  PlayCircle,
  Image as ImageIcon,
  Camera,
} from '@phosphor-icons/react';

// Imagens MMM
import heatmapImg from '../images/heatmap.png';
import regplotImg from '../images/regplot.png';
import modelPerfImg from '../images/model_performance.png';
import whatifImg from '../images/whatif.png';
import shapiroImg from '../images/shapiro.png';

// Imagens Motor ForeSig
import mfsKaplanImg from '../images/mfs_kaplan_meier.png';
import mfsPalcoImg from '../images/mfs_palco.jpg';
import mfsTela1Img from '../images/mfs_tela1.png';
import mfsTela3Img from '../images/mfs_tela3.png';
import mfsTela4Img from '../images/mfs_tela4.png';
import mfsNeo4jImg from '../images/mfs_neo4j.png';

// Imagens S.ENSO
import sensoScoreImg from '../images/senso_score.png';
import sensoQuadrantesImg from '../images/senso_quadrantes.png';
import sensoMlImg from '../images/senso_ml.png';
import sensoLagImg from '../images/senso_lag.png';

interface KpiItem {
  value: string;
  label: string;
  sublabel: string;
}

interface GalleryItem {
  src?: string;
  title: string;
  caption: string;
  placeholderText?: string;
}

interface StackItem {
  name: string;
  role: string;
}

interface StandardizedProjectContent {
  badge: string;
  subtitle: string;
  kpis: KpiItem[];
  awardHighlight?: {
    title: string;
    description: string;
    photoCaption: string;
    photoPlaceholderHint?: string;
    photoSrc?: string;
  };
  contextTitle: string;
  contextParagraphs: string[];
  contextBullets: string[];
  methodologyTitle: string;
  methodologyParagraphs: string[];
  methodologyBullets: string[];
  resultsTitle: string;
  resultsParagraphs: string[];
  resultsBullets: string[];
  gallery: GalleryItem[];
  videoSection?: {
    title: string;
    description: string;
    embedUrl?: string;
    placeholderHint?: string;
  };
  liveEmbedUrl?: string;
  stack: StackItem[];
  secondaryLinkLabel?: string;
}

const PROJECT_CONTENT: Record<string, StandardizedProjectContent> = {
  'motor-foresig': {
    badge: '🏆 3º LUGAR NO FIAP NEXT 2026 • PARCERIA NÚCLEA',
    subtitle:
      'Esteira preditiva para avaliar o risco de inadimplência e estimar atrasos em operações de antecipação de recebíveis (FIDCs), unindo Machine Learning, explicabilidade com SHAP e análise de grafos em NoSQL (Neo4J).',
    kpis: [
      {
        value: '3º Lugar',
        label: 'Premiação FIAP NEXT 2026',
        sublabel: 'Reconhecido entre os melhores projetos do desafio Núclea',
      },
      {
        value: '0.995 AUC',
        label: 'Desempenho do Modelo (KS 0.948)',
        sublabel: 'Classificação de risco com Random Forest na base histórica',
      },
      {
        value: '4.612 Empresas',
        label: 'Mapeadas em Grafo (7.118 Boletos)',
        sublabel: 'Análise de contágio e conexões entre pagadores e cedentes',
      },
    ],
    awardHighlight: {
      title: 'Destaque no FIAP NEXT 2026 — 3º Melhor Projeto',
      description:
        'Este projeto foi desenvolvido em grupo durante o 1º ano da graduação em Ciência de Dados na FIAP, respondendo a um desafio real proposto pela Núclea. Levamos a solução para apresentação presencial no festival de inovação FIAP NEXT e conquistamos o 3º lugar geral da turma.',
      photoCaption: 'Premiação 3º Lugar no FIAP NEXT 2026 — Equipe Motor ForeSig',
      photoSrc: mfsPalcoImg,
    },
    contextTitle: '1. O Problema e Objetivo do Projeto',
    contextParagraphs: [
      'No mercado de Fundos de Investimento em Direitos Creditórios (FIDCs), empresas antecipam o recebimento de boletos e duplicatas. O desafio é avaliar o risco de calote (default) ou atraso desses títulos antes da compra pelo fundo.',
      'Na análise tradicional, cada CNPJ costuma ser avaliado de forma isolada, sem enxergar a rede de clientes e fornecedores ao redor e sem explicar de forma simples o motivo de uma recusa para a mesa de crédito.',
    ],
    contextBullets: [
      'Avaliar se um boleto tem risco de atrasar mais de 60 dias (Probabilidade de Default) e estimar quantos dias de atraso podem ocorrer.',
      'Identificar o efeito dominó (contágio na rede): entender se um fornecedor depende de pagadores que já estão atrasando pagamentos.',
      'Traduzir o resultado do modelo em uma justificativa clara para os analistas da mesa de crédito usando SHAP.',
    ],
    methodologyTitle: '2. Como Foi Construído (Dados, Grafo e Modelos)',
    methodologyParagraphs: [
      'Construímos uma esteira em Python que organiza as bases brutas de boletos, extrai métricas da rede de transações entre empresas e alimenta dois modelos de Machine Learning em conjunto com regras de negócio.',
      'Para garantir que o pipeline funcionasse em qualquer ambiente, configuramos o banco de grafos NoSQL (Neo4J) via Docker com um fallback automático em NetworkX (em memória) caso o container não esteja ativo.',
    ],
    methodologyBullets: [
      'Análise de Redes com NoSQL (Neo4J) e NetworkX: cálculo de PageRank, centralidade e exposição a sacados com histórico de atraso.',
      'Modelagem Dupla com Random Forest: um modelo classificador para a Probabilidade de Default (PD) e um modelo regressor para prever os dias de atraso.',
      'Cascata de Regras + IA: filtros de setores críticos (CNAE) e cedentes reincidentes combinados com as faixas de aprovação automática, análise de mesa ou reprovação.',
      'Explicabilidade com SHAP: geração de pareceres indicando quais variáveis mais pesaram na nota de risco de cada boleto.',
    ],
    resultsTitle: '3. Principais Resultados e Entregas',
    resultsParagraphs: [
      'A análise em grafo permitiu mapear 4.612 empresas (1.158 beneficiárias e 3.454 pagadoras) em 7.118 operações, identificando cadeias longas de dependência financeira e 34 casos de emissões bilaterais (empresas emitindo boletos entre si).',
      'Além do pipeline em Python e da API em FastAPI, construímos um dashboard em React dividido em 6 telas: Visão Geral (Cockpit), Risco de Rede, PD & Perda Estimada, Concentração, Mesa de Crédito e Governança (monitoramento de estabilidade com PSI e curva de sobrevivência Kaplan-Meier).',
    ],
    resultsBullets: [
      'Separação consistente das faixas de risco na base histórica (AUC-ROC de 0.995 e KS de 0.948).',
      'Monitoramento de estabilidade dos dados (PSI = 0.0014) e curva de sobrevivência Kaplan-Meier para apoiar estratégias de cobrança preventiva.',
      'Interface completa para simulação da rotina de uma mesa de crédito.',
    ],
    gallery: [
      {
        src: mfsTela1Img,
        title: 'Dashboard: Visão Geral (Cockpit Executivo)',
        caption: 'Métricas macro do portfólio, volume exposto, ticket médio e distribuição setorial por CNAE.',
      },
      {
        src: mfsNeo4jImg,
        title: 'Banco de Dados em Grafo (NoSQL Neo4J)',
        caption: 'Modelagem da rede de pagadores e beneficiários, identificando conexões e hubs de contágio financeiro.',
      },
      {
        src: mfsTela3Img,
        title: 'Dashboard: PD & Perda Estimada (Expected Loss)',
        caption: 'Cálculo quantitativo de provisão de risco, dispersão de probabilidade de default e rating do lastro.',
      },
      {
        src: mfsTela4Img,
        title: 'Dashboard: Política de Rejeição & Mesa de Crédito',
        caption: 'Simulação interativa de regras de corte, travas de contágio na rede e esteira de decisão operacional.',
      },
    ],
    videoSection: {
      title: '4. Vídeo de Apresentação e Demonstração',
      description:
        'Assista ao vídeo demonstrando o funcionamento completo da esteira de dados, a visualização do grafo e as telas do painel do Motor ForeSig:',
      embedUrl: 'https://www.youtube.com/embed/3FXUcSbAgAE',
    },
    stack: [
      { name: 'Python (Pandas, NumPy)', role: 'Limpeza de dados, regras de negócio e orquestração da esteira.' },
      { name: 'Scikit-Learn (Random Forest)', role: 'Modelos preditivos de Probabilidade de Default (PD) e dias de atraso.' },
      { name: 'SHAP (Explainable AI)', role: 'Tradução do peso das variáveis em justificativas para a mesa de crédito.' },
      { name: 'NoSQL (Neo4J) & NetworkX', role: 'Modelagem em grafos, PageRank e detecção de risco de contágio na rede.' },
      { name: 'FastAPI & Docker', role: 'API REST para servir os modelos e containerização do banco de grafos.' },
      { name: 'React, Vite & TailwindCSS', role: 'Construção do dashboard interativo com as 6 visões de risco.' },
    ],
    secondaryLinkLabel: 'Assistir no YouTube',
  },

  'senso-risco-climatico': {
    badge: '⭐ NOTA 10/10 • FIAP GLOBAL SOLUTION 2026.1',
    subtitle:
      'Sistema preditivo que conecta indicadores climáticos dos oceanos Pacífico e Atlântico (El Niño / La Niña) a dados locais de chuva, safra e Defesa Civil para gerar alertas com 3 a 6 meses de antecedência.',
    kpis: [
      {
        value: 'Nota 10/10',
        label: 'Avaliação Global Solution',
        sublabel: 'Nota máxima no desafio interdisciplinar da FIAP (2026.1)',
      },
      {
        value: '3 a 6 Meses',
        label: 'Horizonte de Antecedência',
        sublabel: 'Uso de anomalias oceânicas antes do impacto meteorológico local',
      },
      {
        value: '+80,9% Chuvas',
        label: 'Impacto Mediano no Sul (El Niño)',
        sublabel: 'Aumento identificado na primavera em Lajeado-RS vs. anos neutros',
      },
    ],
    contextTitle: '1. O Problema e Objetivo do Projeto',
    contextParagraphs: [
      'O Brasil sofre impactos opostos durante o fenômeno El Niño: enquanto o sertão nordestino enfrenta secas severas que prejudicam a agricultura familiar, a região Sul sofre com chuvas extremas e enchentes.',
      'Os alertas meteorológicos comuns costumam avisar com apenas 24h a 72h de antecedência, quando já não há tempo para proteger a safra ou organizar ações preventivas maiores. Porém, as mudanças de temperatura nos oceanos Pacífico e Atlântico dão sinais claros de 3 a 6 meses antes.',
    ],
    contextBullets: [
      'Unir séries históricas de 2006 a 2025 da NOAA (índices oceânicos ONI, AMM e GPAT), INMET (chuvas), IBGE SIDRA (produção agrícola) e S2iD (decretos de emergência).',
      'Analisar dois municípios reais com perfis opostos: Quixadá-CE (seca na produção de milho) e Lajeado-RS (enchentes no Vale do Taquari e impacto no trigo).',
      'Criar um Score de Risco de 0 a 100 dividido em quatro níveis (Verde, Amarelo, Laranja e Vermelho) para orientar decisões práticas.',
    ],
    methodologyTitle: '2. Como Foi Construído (Análise Estatística e Modelos)',
    methodologyParagraphs: [
      'Realizamos o tratamento das séries temporais preservando os extremos reais de chuva (winsorização no percentil 99,9%) e aplicamos codificação cíclica de seno e cosseno para representar a sazonalidade dos meses do ano.',
      'Testamos o tempo de resposta (lag) entre o aquecimento dos oceanos e a chegada do impacto em cada região, além de comparar modelos de Regressão Linear (OLS), Random Forest e XGBoost usando validação temporal (TimeSeriesSplit).',
    ],
    methodologyBullets: [
      'Análise de Defasagem (Lag): identificamos que Lajeado-RS responde quase imediatamente ao Pacífico (Lag = 0), enquanto Quixadá-CE depende fortemente do Atlântico Tropical (Lag de 0 a 5 meses).',
      'Testes de Hipótese (Mann-Whitney U e Kolmogorov-Smirnov): validação estatística das diferenças de volume de chuva entre períodos neutros e de El Niño forte.',
      'Comparação de Modelos: em séries mensais menores, a Regressão Linear (OLS) evitou sobreajuste e teve melhor capacidade de generalização (R² de 0,54 em Quixadá e 0,28 em Lajeado).',
      'Cálculo da Velocidade de Aquecimento (ΔONI): inclusão da variação mensal do índice oceânico para compor a fórmula final do Score de Risco.',
    ],
    resultsTitle: '3. Principais Resultados e Interfaces Desenvolvidas',
    resultsParagraphs: [
      'O estudo mostrou na prática o efeito "gangorra" entre os oceanos: mesmo em anos de El Niño, quando o Atlântico Sul permanece mais quente, ele ajuda a amenizar a seca no Ceará — explicando variações reais ocorridas na região.',
      'Como entrega final, desenvolvemos uma aplicação web (MVP em Vite e TailwindCSS) com três visões: uma página explicativa do projeto, um painel mobile pensado para o pequeno agricultor familiar e um painel desktop para gestores da Defesa Civil.',
    ],
    resultsBullets: [
      'Lajeado-RS registrou média histórica de 4,3 decretos de emergência por ano durante episódios de El Niño contra 0,7 em anos de La Niña.',
      'Calibração do gatilho operacional em 25 pontos no Score de Risco para equilibrar prevenção e evitar alarmes falsos.',
      'Prototipação de telas adaptadas à realidade de cada usuário (linguagem simples no campo e indicadores técnicos para a gestão pública).',
    ],
    gallery: [
      {
        src: sensoScoreImg,
        title: 'Projeção do Score de Risco (0 a 100)',
        caption: 'Simulação dos níveis de alerta (Verde, Amarelo e Laranja) para Quixadá-CE e Lajeado-RS.',
      },
      {
        src: sensoQuadrantesImg,
        title: 'Interação Pacífico × Atlântico (Efeito Gangorra)',
        caption: 'Análise em quadrantes mostrando como o Atlântico modula o impacto do El Niño no Nordeste.',
      },
      {
        src: sensoLagImg,
        title: 'Correlação e Tempo de Resposta (Lag)',
        caption: 'Estudo da defasagem em meses entre as anomalias oceânicas e a precipitação local.',
      },
      {
        src: sensoMlImg,
        title: 'Comparativo de Modelos (TimeSeriesSplit)',
        caption: 'Avaliação entre Regressão Linear (OLS), Random Forest e XGBoost sem vazamento temporal.',
      },
    ],
    videoSection: {
      title: '4. Vídeo de Apresentação e Demonstração',
      description:
        'Assista ao vídeo explicativo com a apresentação detalhada do projeto S.ENSO, seus fundamentos estatísticos e a demonstração das interfaces:',
      embedUrl: 'https://www.youtube.com/embed/e_fN2mBd4WA',
    },
    stack: [
      { name: 'Python (Pandas, NumPy)', role: 'Coleta, limpeza e cruzamento das séries históricas (2006–2025).' },
      { name: 'Statsmodels & SciPy', role: 'Regressão OLS e testes estatísticos não-paramétricos (Mann-Whitney U e KS).' },
      { name: 'Scikit-Learn', role: 'Validação temporal (TimeSeriesSplit) e comparação com Random Forest e XGBoost.' },
      { name: 'Matplotlib & Seaborn', role: 'Geração das matrizes de correlação, boxplots e curvas de risco.' },
      { name: 'Vite & TailwindCSS', role: 'Desenvolvimento das interfaces do protótipo (Agricultor e Defesa Civil).' },
      { name: 'Docker', role: 'Empacotamento do frontend para fácil execução.' },
    ],
    secondaryLinkLabel: 'Assistir no YouTube',
  },

  'marketing-mix-modeling': {
    badge: '📈 MARKETING ANALYTICS • SIMULAÇÃO WHAT-IF',
    subtitle:
      'Aplicação de Regressão Linear Multivariada em Python para medir o impacto real dos investimentos em mídia (TV, Rádio e Jornal) nas vendas e simular uma redistribuição mais eficiente do orçamento.',
    kpis: [
      {
        value: '+25,8%',
        label: 'Potencial de Aumento nas Vendas',
        sublabel: 'Resultado estimado na simulação sem aumentar o orçamento total',
      },
      {
        value: '0.93 R²',
        label: 'Ajuste do Modelo (RMSE 1.32)',
        sublabel: 'O modelo explica 93% da variação histórica das vendas na base',
      },
      {
        value: '+$3.58M',
        label: 'Receita Adicional Estimada',
        sublabel: 'Salto de $13.86M para $17.43M realocando a verba de Jornal',
      },
    ],
    contextTitle: '1. O Problema e Objetivo do Projeto',
    contextParagraphs: [
      'Muitas vezes a divisão da verba de marketing entre diferentes canais é feita por hábito ou intuição. O objetivo deste projeto de Marketing Mix Modeling (MMM) foi usar dados históricos de orçamento e receita para entender o retorno de cada canal.',
      'A partir da base Advertising Sales Dataset (Kaggle), buscamos responder três perguntas diretas de negócio:',
    ],
    contextBullets: [
      'Qual é o impacto real de cada mídia (TV, Rádio e Jornal) no faturamento final?',
      'Quanto a empresa venderia de forma orgânica (vendas base) sem investimento em anúncios?',
      'Como realocar a mesma verba atual para aumentar o retorno sobre o investimento (ROI)?',
    ],
    methodologyTitle: '2. Como Foi Construído (Análise e Modelagem)',
    methodologyParagraphs: [
      'Iniciamos com uma análise exploratória utilizando matriz de correlação e gráficos de dispersão (Regplot) para observar o comportamento de cada canal em relação às vendas.',
      'Em seguida, treinamos e validamos um modelo de Regressão Linear Multivariada em Python, separando os dados em treino e teste e auditando os resíduos do modelo com o teste estatístico de Shapiro-Wilk.',
    ],
    methodologyBullets: [
      'Identificação de Relevância: TV e Rádio mostraram forte correlação positiva e previsibilidade nas vendas.',
      'Detecção de Ineficiência: o canal Jornal apresentou coeficiente próximo de zero e alta dispersão, indicando baixo retorno.',
      'Vendas Base (Intercepto): o modelo estimou em $2.64M o volume médio de vendas orgânicas.',
      'Auditoria de Resíduos (Shapiro-Wilk): verificação da normalidade dos erros para entender os limites da regressão linear simples.',
    ],
    resultsTitle: '3. Simulação "What-If" e Próximos Passos (V2)',
    resultsParagraphs: [
      'Com os coeficientes do modelo, realizamos uma simulação prática ("What-If"): zeramos o orçamento que antes ia para o canal Jornal e dividimos esse valor igualmente entre TV e Rádio.',
      'Também documentamos uma limitação importante: o teste de Shapiro-Wilk apontou p-valor < 0.05 nos resíduos, mostrando que na prática canais de mídia sofrem saturação (retornos decrescentes). Como evolução planejada (V2), o próximo passo é aplicar transformações logarítmicas e efeito Adstock.',
    ],
    resultsBullets: [
      'Cenário Atual: faturamento médio de $13.86M com a divisão original de verba.',
      'Cenário Simulado (What-If): faturamento projetado de $17.43M (+25,81% / +$3.58M) mantendo o mesmo custo total.',
      'Aprendizado Técnico: importância de testar as premissas estatísticas dos resíduos além de olhar apenas para o R².',
    ],
    gallery: [
      {
        src: heatmapImg,
        title: 'Matriz de Correlação',
        caption: 'Relação linear entre os investimentos em TV, Rádio, Jornal e o volume de vendas.',
      },
      {
        src: regplotImg,
        title: 'Dispersão e Tendência por Canal',
        caption: 'Comparativo visual mostrando a previsibilidade de TV e Rádio frente à dispersão do Jornal.',
      },
      {
        src: modelPerfImg,
        title: 'Performance do Modelo (Real vs. Previsto)',
        caption: 'Validação das previsões do modelo de Regressão Linear (R² = 0.9338).',
      },
      {
        src: whatifImg,
        title: 'Simulação de Cenário "What-If"',
        caption: 'Comparativo de faturamento antes e depois da realocação da verba do canal Jornal.',
      },
      {
        src: shapiroImg,
        title: 'Validação Estatística (Teste de Shapiro-Wilk)',
        caption: 'Análise de distribuição dos resíduos para identificar efeitos de saturação de mídia.',
      },
    ],
    stack: [
      { name: 'Python', role: 'Linguagem principal utilizada para todo o estudo e simulações.' },
      { name: 'Pandas & NumPy', role: 'Manipulação da base de dados e cálculos de realocação orçamentária.' },
      { name: 'Scikit-Learn', role: 'Divisão treino/teste, treinamento da Regressão Linear e cálculo de R² e RMSE.' },
      { name: 'SciPy & Statsmodels', role: 'Aplicação do teste de normalidade de Shapiro-Wilk e análise de p-valor.' },
      { name: 'Seaborn & Matplotlib', role: 'Construção dos gráficos de regressão, correlação e comparativos.' },
    ],
    secondaryLinkLabel: 'Abrir no Google Colab',
  },

  'analise-de-salarios-streamlit': {
    badge: '📊 DATA VISUALIZATION • APLICAÇÃO INTERATIVA',
    subtitle:
      'Dashboard interativo construído com Python, Plotly e Streamlit para explorar tendências salariais globais na área de dados por cargo, senioridade, país e regime de trabalho.',
    kpis: [
      {
        value: 'Live App',
        label: 'Publicação no Streamlit Cloud',
        sublabel: 'Painel interativo acessível diretamente pelo navegador',
      },
      {
        value: 'Base Global',
        label: 'Salários Padronizados em USD',
        sublabel: 'Conversão monetária para comparação justa entre diferentes países',
      },
      {
        value: '4 Filtros',
        label: 'Exploração Dinâmica',
        sublabel: 'Recortes por ano, senioridade, tipo de contrato e porte da empresa',
      },
    ],
    contextTitle: '1. O Problema e Objetivo do Projeto',
    contextParagraphs: [
      'Este projeto foi desenvolvido durante a Imersão Dados da Alura com o objetivo de transformar uma base bruta de salários da área de tecnologia em um painel visual fácil de consultar.',
      'A ideia foi permitir que qualquer pessoa interessada na área de dados pudesse filtrar os números e entender como a remuneração varia conforme a evolução na carreira e a modalidade de trabalho.',
    ],
    contextBullets: [
      'Reunir indicadores rápidos de média salarial, maior salário registrado e cargos mais frequentes.',
      'Comparar as 10 funções com maiores médias salariais no mercado global.',
      'Visualizar a distribuição entre trabalho remoto, híbrido e presencial.',
    ],
    methodologyTitle: '2. Como Foi Construído (Tratamento e Interface)',
    methodologyParagraphs: [
      'O processamento inicial foi feito em Python com a biblioteca Pandas para limpar registros inconsistentes, traduzir categorias e padronizar todos os valores salariais em dólar americano (USD).',
      'Para a visualização, utilizamos gráficos interativos do Plotly Express integrados a uma aplicação web criada com o framework Streamlit.',
    ],
    methodologyBullets: [
      'Limpeza e Padronização: tratamento de dados ausentes e unificação da moeda para USD.',
      'Gráficos Interativos: criação de histogramas de distribuição salarial, rankings por cargo e gráficos de proporção.',
      'Deploy na Nuvem: publicação do projeto no Streamlit Cloud para acesso público.',
    ],
    resultsTitle: '3. Principais Funcionalidades Entregues',
    resultsParagraphs: [
      'O painel permite combinar filtros na barra lateral e atualiza todos os gráficos instantaneamente, servindo como uma ferramenta prática de consulta sobre o mercado de dados.',
    ],
    resultsBullets: [
      'Cartões de resumo (KPIs) atualizados em tempo real conforme os filtros selecionados.',
      'Gráfico interativo com o Top 10 cargos de maior remuneração média.',
      'Histograma detalhando a concentração das faixas salariais anuais.',
    ],
    gallery: [],
    liveEmbedUrl: 'https://degan-imersao-dados-alura.streamlit.app/?embed=true',
    stack: [
      { name: 'Python & Pandas', role: 'Limpeza, tratamento e padronização monetária da base de dados.' },
      { name: 'Plotly Express', role: 'Criação dos gráficos interativos de barras, distribuição e proporção.' },
      { name: 'Streamlit', role: 'Construção da interface web com filtros dinâmicos e deploy da aplicação.' },
      { name: 'Git & GitHub', role: 'Versionamento do código e integração com o Streamlit Cloud.' },
    ],
    secondaryLinkLabel: 'Abrir Dashboard em Nova Aba',
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = PROJECTS.find((p) => p.id === id);
  const content = id ? PROJECT_CONTENT[id] : undefined;

  if (!project || !content) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
        <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
          Projeto não encontrado
        </h2>
        <Link
          to="/projetos"
          className="rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-orange-600"
        >
          Voltar para projetos
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Botão Voltar Padronizado */}
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate(-1)}
        className="mb-8 inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-orange-500/40 hover:text-orange-600 dark:border-[#1a2336] dark:bg-[#101522] dark:text-slate-300 dark:hover:border-orange-500/50 dark:hover:text-orange-400"
      >
        <ArrowLeft size={15} />
        Voltar para Projetos
      </motion.button>

      {/* 1. CABEÇALHO PADRONIZADO (HERO DO PROJETO) */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-10 dark:border-[#1a2336] dark:bg-[#101522]"
      >
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-orange-500/35 bg-orange-500/10 px-3 py-1 font-mono text-xs font-semibold text-orange-600 dark:text-orange-400">
            {content.badge}
          </span>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200/80 bg-slate-100/80 px-3 py-1 font-mono text-xs font-medium text-slate-600 dark:border-[#1b2438] dark:bg-[#080b11] dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
          {project.title}
        </h1>

        <p className="mb-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
          {content.subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-3 border-t border-slate-100 pt-6 dark:border-[#1a2336]">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              <GithubLogo size={17} weight="duotone" />
              Ver Repositório no GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-orange-500/35 bg-orange-500/10 px-5 py-2.5 text-xs font-bold text-orange-600 transition-colors hover:bg-orange-500/20 dark:text-orange-400"
            >
              <ArrowSquareOut size={17} weight="duotone" />
              {content.secondaryLinkLabel || 'Acessar Demonstração'}
            </a>
          )}
        </div>
      </motion.section>

      {/* 2. INDICADORES-CHAVE PADRONIZADOS (3 KPI CARDS) */}
      <section className="mb-10 grid gap-4 sm:grid-cols-3">
        {content.kpis.map((kpi, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs dark:border-[#1a2336] dark:bg-[#101522]"
          >
            <p className="font-display text-2xl font-bold text-orange-600 sm:text-3xl dark:text-orange-400">
              {kpi.value}
            </p>
            <p className="mt-1 font-display text-sm font-bold text-slate-900 dark:text-white">
              {kpi.label}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              {kpi.sublabel}
            </p>
          </motion.div>
        ))}
      </section>

      {/* DESTAQUE ESPECIAL DE PREMIAÇÃO + ESPAÇO PARA FOTO (MOTOR FORESIG - 3º LUGAR NEXT) */}
      {content.awardHighlight && (
        <section className="mb-10 overflow-hidden rounded-3xl border border-orange-500/35 bg-gradient-to-br from-orange-500/10 via-white to-white p-6 shadow-xs sm:p-8 dark:from-orange-500/15 dark:via-[#101522] dark:to-[#101522]">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/15 px-3 py-1 font-mono text-xs font-bold text-orange-700 dark:text-orange-300">
                <Trophy size={15} weight="duotone" />
                RECONHECIMENTO ACADÊMICO • FIAP NEXT 2026
              </div>
              <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
                {content.awardHighlight.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
                {content.awardHighlight.description}
              </p>
            </div>

            {/* Espaço Padronizado para a Foto do Evento */}
            <div className="lg:col-span-6">
              {content.awardHighlight.photoSrc ? (
                <div className="overflow-hidden rounded-2xl border border-orange-500/35 bg-slate-950 shadow-md">
                  <img
                    src={content.awardHighlight.photoSrc}
                    alt={content.awardHighlight.photoCaption}
                    className="aspect-video w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="border-t border-orange-500/20 bg-slate-900/90 px-4 py-2.5 text-center dark:bg-[#080b11]/95">
                    <p className="font-mono text-xs font-medium text-orange-300">
                      {content.awardHighlight.photoCaption}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex aspect-video flex-col items-center justify-center rounded-2xl border-2 border-dashed border-orange-500/40 bg-slate-950/5 p-6 text-center dark:bg-[#080b11]">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/15 text-orange-500">
                    <Camera size={24} weight="duotone" />
                  </div>
                  <p className="font-display text-sm font-bold text-slate-800 dark:text-slate-200">
                    {content.awardHighlight.photoCaption}
                  </p>
                  <p className="mt-1 max-w-md font-mono text-xs text-slate-500 dark:text-slate-400">
                    {content.awardHighlight.photoPlaceholderHint}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 3. CORPO PADRONIZADO DO ESTUDO DE CASO */}
      <div className="space-y-8">
        {/* Seção 1: Contexto e Objetivo */}
        <section className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8 dark:border-[#1a2336] dark:bg-[#101522]">
          <div className="mb-4 flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-orange-500/25 bg-orange-500/10 text-orange-600 dark:text-orange-400">
              <Target size={19} weight="duotone" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
              {content.contextTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {content.contextParagraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5 dark:border-[#1a2336]">
            {content.contextBullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
              >
                <CheckCircle size={17} weight="duotone" className="mt-0.5 shrink-0 text-orange-500 dark:text-orange-400" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Seção 2: Metodologia e Construção */}
        <section className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8 dark:border-[#1a2336] dark:bg-[#101522]">
          <div className="mb-4 flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/25 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Database size={19} weight="duotone" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
              {content.methodologyTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {content.methodologyParagraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5 dark:border-[#1a2336]">
            {content.methodologyBullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
              >
                <CheckCircle size={17} weight="duotone" className="mt-0.5 shrink-0 text-emerald-500 dark:text-emerald-400" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Seção 3: Resultados e Descobertas */}
        <section className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8 dark:border-[#1a2336] dark:bg-[#101522]">
          <div className="mb-4 flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-500/25 bg-violet-500/10 text-violet-600 dark:text-violet-400">
              <ChartBar size={19} weight="duotone" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
              {content.resultsTitle}
            </h2>
          </div>

          <div className="space-y-4">
            {content.resultsParagraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5 dark:border-[#1a2336]">
            {content.resultsBullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
              >
                <CheckCircle size={17} weight="duotone" className="mt-0.5 shrink-0 text-violet-500 dark:text-violet-400" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Galeria Padronizada de Gráficos e Imagens */}
          {content.gallery.length > 0 && (
            <div className="mt-8 border-t border-slate-100 pt-8 dark:border-[#1a2336]">
              <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Gráficos e Visualizações do Projeto
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {content.gallery.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 dark:border-[#1a2336] dark:bg-[#080b11]"
                  >
                    {item.src ? (
                      <div className="mb-3 overflow-hidden rounded-xl border border-slate-200/60 bg-white p-2 dark:border-[#1b2438] dark:bg-[#101522]">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="h-56 w-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="mb-3 flex h-56 flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-white/50 p-4 text-center dark:border-[#1b2438] dark:bg-[#101522]/50">
                        <ImageIcon size={28} weight="duotone" className="mb-2 text-slate-400" />
                        <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                          {item.placeholderText || 'Espaço reservado para imagem'}
                        </span>
                      </div>
                    )}
                    <div>
                      <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Seção 4 (Opcional): Vídeo do YouTube ou Espaço para Vídeo */}
        {content.videoSection && (
          <section className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8 dark:border-[#1a2336] dark:bg-[#101522]">
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-rose-500/25 bg-rose-500/10 text-rose-600 dark:text-rose-400">
                <PlayCircle size={19} weight="duotone" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
                {content.videoSection.title}
              </h2>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
              {content.videoSection.description}
            </p>

            {content.videoSection.embedUrl ? (
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-md dark:border-[#1a2336]">
                <iframe
                  src={content.videoSection.embedUrl}
                  title={project.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="flex aspect-video w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center dark:border-[#1a2336] dark:bg-[#080b11]">
                <PlayCircle size={36} weight="duotone" className="mb-3 text-slate-400" />
                <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  {content.videoSection.placeholderHint || 'Espaço reservado para vídeo do YouTube'}
                </p>
              </div>
            )}
          </section>
        )}

        {/* Seção 4 Alternativa: Aplicação Interativa Incorporada (Streamlit) */}
        {content.liveEmbedUrl && (
          <section className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8 dark:border-[#1a2336] dark:bg-[#101522]">
            <h2 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
              4. Painel Interativo (Demonstração ao Vivo)
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
              Interaja diretamente com o dashboard abaixo para testar os filtros de ano, senioridade e modelo de trabalho em tempo real:
            </p>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 dark:border-[#1a2336]">
              <iframe
                src={content.liveEmbedUrl}
                className="aspect-[16/10] w-full"
                loading="lazy"
                title={project.title}
              />
            </div>
          </section>
        )}

        {/* Seção Final: Tecnologias e Ferramentas Padronizadas */}
        <section className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8 dark:border-[#1a2336] dark:bg-[#101522]">
          <div className="mb-5 flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-orange-500/25 bg-orange-500/10 text-orange-600 dark:text-orange-400">
              <Stack size={19} weight="duotone" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
              Tecnologias e Ferramentas Utilizadas
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {content.stack.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 dark:border-[#1a2336] dark:bg-[#080b11]"
              >
                <p className="font-mono text-xs font-bold text-orange-600 dark:text-orange-400">
                  {item.name}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Final Padronizado */}
        <section className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-slate-200/90 bg-slate-100/80 p-6 sm:flex-row sm:p-8 dark:border-[#1a2336] dark:bg-[#101522]">
          <div>
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              Quer conferir o código-fonte deste projeto?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Acesse o repositório completo ou navegue pelos outros projetos do portfólio.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
              >
                <GithubLogo size={17} weight="duotone" />
                Repositório GitHub
              </a>
            )}
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 rounded-xl border border-orange-500/35 bg-orange-500/10 px-5 py-2.5 text-xs font-bold text-orange-600 transition-colors hover:bg-orange-500/20 dark:text-orange-400"
            >
              Ver Todos os Projetos
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
