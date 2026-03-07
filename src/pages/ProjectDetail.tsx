import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  Tag,
  TrendingUp,
  Zap,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Target,
  Lightbulb,
  BarChart3
} from 'lucide-react';
import heatmapImg from '../images/heatmap.png';
import regplotImg from '../images/regplot.png';
import modelPerfImg from '../images/model_performance.png';
import impactoImg from '../images/impacto.png';
import whatifImg from '../images/whatif.png';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'stack' | 'metodologia'>('stack');
  const [isAccordionOpen, setIsAccordionOpen] = useState({ stack: true, metodologia: false });

  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
        <h2 className="mb-4 text-2xl font-bold">Projeto não encontrado</h2>
        <Link to="/projetos" className="text-brand-dark underline dark:text-gray-300">
          Voltar para projetos
        </Link>
      </div>
    );
  }

  const isMMM = id === 'marketing-mix-modeling';

  if (isMMM) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <ArrowLeft size={16} className="mr-1" />
          Voltar
        </motion.button>

        {/* 1. Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center lg:text-left"
        >
          <div className="mb-4 flex flex-wrap justify-center gap-2 lg:justify-start">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">Data Science</span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Marketing Analytics</span>
            <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">ROI Optimization</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Otimização de Mix de Marketing com Regressão Linear
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-400 lg:mx-0">
            Como uma realocação estratégica de budget projetou um aumento de <span className="font-bold text-emerald-600 dark:text-emerald-400">25.8%</span> no faturamento anual.
          </p>
        </motion.section>

        {/* 2. Results Dashboard (Bento Grid) */}
        <section className="mb-24 grid gap-6 md:grid-cols-3">
          <motion.div
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-center rounded-3xl border border-gray-800 bg-gray-900 p-8 text-center"
          >
            <div className="mb-4 rounded-full bg-emerald-900/40 p-3 text-emerald-400">
              <TrendingUp size={32} />
            </div>
            <div className="text-3xl font-bold text-emerald-400">+25.8%</div>
            <div className="text-sm font-medium text-emerald-400/60">Crescimento Estimado</div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-center rounded-3xl border border-gray-800 bg-gray-900 p-8 text-center"
          >
            <div className="mb-4 rounded-full bg-blue-900/40 p-3 text-blue-400">
              <Zap size={32} />
            </div>
            <div className="text-3xl font-bold text-blue-400">0.93</div>
            <div className="text-sm font-medium text-blue-400/60">R² Score (Precisão)</div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="flex flex-col items-center justify-center rounded-3xl border border-gray-800 bg-gray-900 p-8 text-center"
          >
            <div className="mb-4 rounded-full bg-purple-900/40 p-3 text-purple-400">
              <DollarSign size={32} />
            </div>
            <div className="text-3xl font-bold text-purple-400">$3.58M</div>
            <div className="text-sm font-medium text-purple-400/60">Incremento em Receita</div>
          </motion.div>
        </section>

        {/* 3. Narrative (Z-Layout) */}
        <div className="space-y-32">
          {/* O Problema */}
          <section className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center gap-2 text-brand-dark dark:text-white">
                <Target size={24} />
                <h2 className="text-2xl font-bold">O Problema</h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                A análise inicial revelou uma ineficiência crítica no canal <strong>"Newspaper"</strong>.
                Ao analisar o heatmap de correlação, percebemos que o investimento neste canal não refletia
                um aumento proporcional nas vendas, indicando um alto custo de aquisição e baixo retorno real.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <img src={heatmapImg} alt="Heatmap de Correlação" className="w-full h-auto" />
              <p className="mt-2 text-center text-xs text-gray-400 italic">Análise de Correlação: Variáveis de Investimento vs. Vendas</p>
            </motion.div>
          </section>

          {/* A Solução */}
          <section className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 overflow-hidden rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 lg:order-1"
            >
              <img src={regplotImg} alt="Regressão Linear" className="w-full h-auto" />
              <p className="mt-2 text-center text-xs text-gray-400 italic">Regplot: Linha de Tendência e Dispersão dos Dados</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="mb-4 flex items-center gap-2 text-brand-dark dark:text-white">
                <Lightbulb size={24} />
                <h2 className="text-2xl font-bold">A Solução</h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                Utilizamos o <strong>Regplot</strong> para visualizar a força da relação linear entre cada canal e as vendas.
                Isso confirmou estatisticamente quais mídias eram mais elásticas e quais estavam saturadas.
                A modelagem permitiu uma visão clara de onde cada real investido trazia o maior retorno marginal.
              </p>
            </motion.div>
          </section>

          {/* Performance do Modelo */}
          <section className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center gap-2 text-brand-dark dark:text-white">
                <Zap size={24} />
                <h2 className="text-2xl font-bold">Performance & Impacto</h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                O modelo alcançou uma precisão excelente, validada pela métrica <strong>R² de 0.93</strong>.
                A análise de importância das features (Impacto) mostrou que a TV e o Rádio eram os principais drivers
                de conversão, enquanto o Jornal tinha um peso quase irrelevante na decisão de compra do cliente.
              </p>
            </motion.div>
            <div className="grid gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl shadow-md border border-gray-100 dark:border-gray-800"
              >
                <img src={modelPerfImg} alt="Performance do Modelo" className="w-full h-auto" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="overflow-hidden rounded-2xl shadow-md border border-gray-100 dark:border-gray-800"
              >
                <img src={impactoImg} alt="Importância das Variáveis" className="w-full h-auto" />
              </motion.div>
            </div>
          </section>

          {/* A Recomendação */}
          <section className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 overflow-hidden rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 lg:order-1"
            >
              <img src={whatifImg} alt="Análise What-If" className="w-full h-auto" />
              <p className="mt-2 text-center text-xs text-gray-400 italic">Simulação: Previsão de Vendas em Cenários de Investimento</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="mb-4 flex items-center gap-2 text-brand-dark dark:text-white">
                <BarChart3 size={24} />
                <h2 className="text-2xl font-bold">A Recomendação</h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                A aplicação da técnica <strong>"What-if"</strong> permitiu simular diferentes cenários.
                A recomendação final foi zerar o investimento em Jornal e realocá-lo proporcionalmente
                entre TV e Rádio, o que projetou um faturamento anual recorde sem necessidade de aporte extra.
              </p>
            </motion.div>
          </section>
        </div>

        {/* 4. Technical Section (Accordion) */}
        <section className="mt-32">
          <h2 className="mb-8 text-center text-3xl font-bold">Detalhes Técnicos</h2>
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900">
              <button
                onClick={() => setIsAccordionOpen(prev => ({ ...prev, stack: !prev.stack }))}
                className="flex w-full items-center justify-between p-6 text-left font-bold text-white"
              >
                Stack Tecnológico
                {isAccordionOpen.stack ? <ChevronUp /> : <ChevronDown />}
              </button>
              <AnimatePresence>
                {isAccordionOpen.stack && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="px-6 pb-6 text-gray-400"
                  >
                    <ul className="list-inside list-disc space-y-2">
                      <li><strong>Python:</strong> Linguagem principal para análise e modelagem.</li>
                      <li><strong>Pandas & NumPy:</strong> Manipulação e tratamento de dados.</li>
                      <li><strong>Scikit-Learn:</strong> Implementação do modelo de Regressão Linear.</li>
                      <li><strong>Matplotlib & Seaborn:</strong> Visualização de dados e heatmaps.</li>
                      <li><strong>Statsmodels:</strong> Análise estatística detalhada (p-values, intervalos de confiança).</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900">
              <button
                onClick={() => setIsAccordionOpen(prev => ({ ...prev, metodologia: !prev.metodologia }))}
                className="flex w-full items-center justify-between p-6 text-left font-bold text-white"
              >
                Metodologia & Validação
                {isAccordionOpen.metodologia ? <ChevronUp /> : <ChevronDown />}
              </button>
              <AnimatePresence>
                {isAccordionOpen.metodologia && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="px-6 pb-6 text-gray-400"
                  >
                    <p className="mb-4">
                      O processo seguiu as melhores práticas de Ciência de Dados:
                    </p>
                    <ul className="list-inside list-disc space-y-2">
                      <li><strong>Split Treino/Teste:</strong> 80% dos dados para treino e 20% para validação final.</li>
                      <li><strong>Tratamento de Outliers:</strong> Identificação e tratamento de picos de vendas anômalos.</li>
                      <li><strong>Engenharia de Atributos:</strong> Criação de variáveis de lag para capturar o efeito residual da propaganda.</li>
                      <li><strong>Validação Estatística:</strong> Verificação de multicolinearidade (VIF) e homocedasticidade dos resíduos.</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* 5. Call to Action */}
        <section className="mt-24 rounded-3xl bg-gray-900 p-12 text-center text-white dark:bg-white dark:text-gray-900">
          <h2 className="mb-8 text-3xl font-bold">Explore o Código</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-gray-900 transition-transform hover:scale-105 dark:bg-gray-900 dark:text-white"
            >
              <Github size={20} /> Ver Repositório
            </a>
            <a
              href={project.demoUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-bold transition-transform hover:scale-105 dark:border-gray-900/20"
            >
              <ExternalLink size={20} /> Abrir no Google Colab
            </a>
          </div>
        </section>

        {/* Reflexão de Negócio */}
        <section className="mt-24 border-t border-gray-100 pt-16 dark:border-gray-800">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 text-2xl font-serif italic text-gray-700 dark:text-gray-300">
              "Como especialista com 15 anos em operações, entendo que dados sem ação são apenas números.
              Este modelo foi construído não apenas para prever vendas, mas para servir como uma ferramenta
              de decisão para diretores de marketing que precisam justificar cada real investido."
            </p>
            <div className="font-bold">— Diego Degan</div>
          </div>
        </section>
      </div>
    );
  }

  // Default Template for other projects
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate(-1)}
        className="mb-8 flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      >
        <ArrowLeft size={16} className="mr-1" />
        Voltar
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="mb-8 aspect-video overflow-hidden rounded-2xl shadow-xl">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="mb-12">
          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1.5" />
              {project.date}
            </div>
            <div className="flex items-center">
              <Tag size={16} className="mr-1.5" />
              {project.tags.join(', ')}
            </div>
          </div>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">{project.title}</h1>
          <div className="flex flex-wrap gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-brand-dark px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-brand-dark dark:hover:bg-gray-200"
              >
                <Github size={18} className="mr-2" />
                Ver no GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                <ExternalLink size={18} className="mr-2" />
                Demo ao Vivo
              </a>
            )}
          </div>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2 className="text-2xl font-bold mb-4">Sobre o Projeto</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
            {project.longDescription}
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">Tecnologias Utilizadas</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
