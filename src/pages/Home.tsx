import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS, SOCIAL_LINKS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import {
  ArrowRight,
  Database,
  ChartLineUp,
  Brain,
  Trophy,
  Briefcase,
  GraduationCap,
  Cpu,
  CheckCircle,
  LinkedinLogo,
  EnvelopeSimple,
  CaretRight,
} from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import homeImg from '../images/home.png';

export default function Home() {
  const expertiseBento = [
    {
      colSpan: 'md:col-span-6',
      icon: <ChartLineUp size={24} weight="duotone" className="text-orange-500 dark:text-orange-400" />,
      title: 'Análise de Dados & BI',
      desc: 'Organização de bases, criação de relatórios e construção de dashboards para facilitar a visualização e o acompanhamento de indicadores.',
      tags: [
        'Excel Avançado',
        'Power Query',
        'VBA',
        'Power BI',
        'Streamlit',
      ],
    },
    {
      colSpan: 'md:col-span-6',
      icon: <Database size={24} weight="duotone" className="text-violet-500 dark:text-violet-400" />,
      title: 'Programação & Banco de Dados',
      desc: 'Uso de SQL para extração de dados em nuvem e Python para limpeza, manipulação e análise exploratória no dia a dia.',
      tags: [
        'Python',
        'Pandas',
        'NumPy',
        'SQL',
        'NoSQL (Neo4J)',
        'Git/GitHub',
      ],
    },
    {
      colSpan: 'md:col-span-6',
      icon: <Brain size={24} weight="duotone" className="text-sky-500 dark:text-sky-400" />,
      title: 'Machine Learning & Estatística',
      desc: 'Aplicação prática dos conceitos de estatística, testes de hipótese e modelos preditivos que venho estudando na graduação.',
      tags: [
        'Regressão Linear',
        'Random Forest',
        'XGBoost',
        'K-Means',
        'Scikit-Learn',
        'Statsmodels',
      ],
    },
    {
      colSpan: 'md:col-span-6',
      icon: <Cpu size={24} weight="duotone" className="text-amber-500 dark:text-amber-400" />,
      title: 'IA Generativa & Automação',
      desc: 'Estudos práticos com engenharia de prompt, agentes de IA e criação de scripts para automatizar tarefas repetitivas.',
      tags: [
        'Engenharia de Prompt',
        'Agentes de IA',
        'LangChain',
        'RAG',
        'Selenium',
        'PyAutoGUI',
      ],
    },
  ];

  const journeyTimeline = [
    {
      period: 'Jul 2026 – Presente',
      role: 'Estagiário em Método, Modelo e Riscos',
      company: 'Itaú Unibanco',
      badge: 'ESTÁGIO',
      badgeColor: 'border-orange-500/40 bg-orange-500/10 text-orange-600 dark:text-orange-400',
      icon: <Briefcase size={18} weight="duotone" className="text-orange-500 dark:text-orange-400" />,
      description:
        'Atuo no apoio à equipe de riscos das agências físicas, colocando em prática o que aprendo na faculdade em um ambiente real de dados.',
      highlights: [
        'Extração e manipulação de bases de dados usando SQL e Excel.',
        'Apoio em análises estatísticas e checagem de consistência de indicadores internos.',
        'Automação de planilhas e relatórios de rotina utilizando Power Query e VBA.',
        'Auxílio na montagem de dashboards e apresentações para acompanhamento da área.',
      ],
    },
    {
      period: 'Ago 2025 – Ago 2027 (em curso)',
      role: 'Graduação em Ciência de Dados',
      company: 'FIAP',
      badge: 'FORMAÇÃO ACADÊMICA',
      badgeColor: 'border-violet-500/40 bg-violet-500/10 text-violet-600 dark:text-violet-400',
      icon: <GraduationCap size={18} weight="duotone" className="text-violet-500 dark:text-violet-400" />,
      description:
        'Onde venho construindo minha base em estatística, programação, modelagem de dados e Machine Learning através de projetos práticos.',
      highlights: [
        'Participação em desafios acadêmicos em grupo, conquistando o 3º lugar no FIAP NEXT 2026 (projeto MotorForeSig) e nota 10 na Global Solution (projeto S.ENSO).',
        'Cursos complementares pela USP/ESALQ, Alura e Santander/IE University para aprofundar conhecimentos em Python, BI e IA.',
      ],
    },
    {
      period: 'Abr 2012 – Mai 2023',
      role: 'Coordenador de Operações',
      company: 'Rota 12 Express (Franquia Jadlog)',
      badge: 'EXPERIÊNCIA ANTERIOR • TRANSIÇÃO',
      badgeColor: 'border-slate-500/30 bg-slate-500/10 text-slate-600 dark:text-slate-400',
      icon: <Trophy size={18} weight="duotone" className="text-amber-500 dark:text-amber-400" />,
      description:
        'Trabalhei por 15 anos na área operacional de logística. Foi acompanhando as metas e planilhas da operação que descobri minha vontade de migrar para a área de dados.',
      highlights: [
        'Acompanhamento diário de indicadores da operação (prazos de entrega, volume e ocorrências) e coordenação da equipe.',
        'Organização das faixas de CEP usando Excel e SQL para melhorar a separação de rotas e reduzir erros na triagem.',
      ],
    },
  ];

  return (
    <div className="flex flex-col space-y-24 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-200/90 bg-obsidian-glow pt-12 pb-20 dark:border-[#1a2336] md:pt-16 md:pb-24">
        {/* Ambient Subtle Glows */}
        <div className="pointer-events-none absolute -top-20 left-1/3 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl dark:bg-orange-500/15" />
        <div className="pointer-events-none absolute right-10 bottom-0 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl dark:bg-violet-600/10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              {/* Headline */}
              <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem] dark:text-white">
                Olá, sou o Diego. Estudante de{' '}
                <span className="text-orange-500 dark:text-orange-400">
                  Ciência de Dados pela FIAP
                </span>{' '}
                com objetivo de me tornar Engenheiro de ML & IA.
              </h1>

              {/* Simple Summary */}
              <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                Depois de 15 anos trabalhando na área de logística, decidi mudar de carreira para a tecnologia. Hoje curso Ciência de Dados na{' '}
                <strong className="font-semibold text-slate-900 dark:text-white">FIAP</strong> e sou estagiário no{' '}
                <strong className="font-semibold text-slate-900 dark:text-white">Itaú Unibanco</strong>, aprendendo e aplicando na prática Python, SQL, análise estatística e automação de dados.
              </p>

              {/* CTAs */}
              <div className="mb-10 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/projetos"
                  className="inline-flex items-center rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600"
                >
                  Ver Projetos
                  <ArrowRight size={17} weight="bold" className="ml-2" />
                </Link>
                <Link
                  to="/bio"
                  className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100 dark:border-[#1a2336] dark:bg-[#101522] dark:text-slate-200 dark:hover:bg-[#161c2d]"
                >
                  Minha Trajetória
                  <CaretRight size={16} weight="bold" className="ml-1 text-slate-400" />
                </Link>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200/90 bg-slate-100/70 px-4 py-3.5 text-sm font-semibold text-slate-700 transition-colors hover:border-orange-500/40 hover:text-orange-500 dark:border-[#1a2336] dark:bg-[#101522]/60 dark:text-slate-300 dark:hover:text-orange-400"
                >
                  <LinkedinLogo size={17} weight="duotone" />
                  LinkedIn
                </a>
              </div>

              {/* Tech Stack Strip */}
              <div className="border-t border-slate-200/80 pt-6 dark:border-[#1a2336]">
                <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Principais ferramentas que estudo e utilizo
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Python',
                    'SQL',
                    'Excel & Power Query',
                    'VBA',
                    'Power BI',
                    'Pandas & Scikit-Learn',
                    'NoSQL (Neo4J)',
                    'Git/GitHub',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-200 bg-white px-2.5 py-1 font-mono text-xs font-medium text-slate-700 dark:border-[#1a2336] dark:bg-[#0c101a] dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Clean Summary Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-xl backdrop-blur-xl dark:border-[#1a2336] dark:bg-[#101522]/90">
                {/* Visual Banner */}
                <div className="relative mb-4 h-48 overflow-hidden rounded-xl border border-slate-200/60 dark:border-[#1a2336]">
                  <img
                    src={homeImg}
                    alt="Ciência de Dados"
                    className="h-full w-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080b11] via-[#080b11]/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-orange-400">
                        RESUMO
                      </span>
                      <p className="font-display text-sm font-bold text-white">
                        Estudante & Estagiário na Área de Dados
                      </p>
                    </div>
                    <span className="rounded-md border border-white/15 bg-white/10 px-2 py-1 font-mono text-[11px] font-semibold text-white backdrop-blur-md">
                      São Paulo, SP
                    </span>
                  </div>
                </div>

                {/* Simple Info Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5 dark:border-[#1a2336] dark:bg-[#0c101a]">
                    <span className="font-mono text-[10px] font-semibold uppercase text-orange-600 dark:text-orange-400">
                      ESTÁGIO
                    </span>
                    <p className="mt-1 font-display text-sm font-bold text-slate-900 dark:text-white">
                      Itaú Unibanco
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      Método, Modelo e Riscos
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5 dark:border-[#1a2336] dark:bg-[#0c101a]">
                    <span className="font-mono text-[10px] font-semibold uppercase text-violet-600 dark:text-violet-400">
                      FACULDADE
                    </span>
                    <p className="mt-1 font-display text-sm font-bold text-slate-900 dark:text-white">
                      FIAP (2º Ano)
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      Tecnólogo em Ciência de Dados
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5 dark:border-[#1a2336] dark:bg-[#0c101a]">
                    <span className="font-mono text-[10px] font-semibold uppercase text-sky-600 dark:text-sky-400">
                      PROJETOS FIAP
                    </span>
                    <p className="mt-1 font-display text-sm font-bold text-slate-900 dark:text-white">
                      Destaques
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      Top 3 no NEXT e Nota 10 na Global Solution
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5 dark:border-[#1a2336] dark:bg-[#0c101a]">
                    <span className="font-mono text-[10px] font-semibold uppercase text-amber-600 dark:text-amber-400">
                      BAGAGEM
                    </span>
                    <p className="mt-1 font-display text-sm font-bold text-slate-900 dark:text-white">
                      15 Anos em Logística
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      Vivência com rotina operacional e metas
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. BENTO GRID DE ESTUDOS E FERRAMENTAS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            O que venho estudando e praticando
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-400">
            Principais áreas e ferramentas que fazem parte da minha rotina na faculdade, no estágio e nos meus projetos de portfólio.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-12">
          {expertiseBento.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`${item.colSpan} group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all hover:border-orange-500/40 dark:border-[#1a2336] dark:bg-[#101522]/80 dark:hover:border-orange-500/40`}
            >
              <div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50 dark:border-[#1a2336] dark:bg-[#0c101a]">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 border-t border-slate-100 pt-4 dark:border-[#1a2336]">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-200/80 bg-slate-50 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-700 dark:border-[#1a2336] dark:bg-[#0c101a] dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. TRAJETÓRIA (TIMELINE SIMPLES E DIRETA) */}
      <section id="jornada" className="scroll-mt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-10 dark:border-[#1a2336] dark:bg-[#0d121c]/80">
          <div className="mb-10 max-w-2xl">
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Minha Trajetória
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-400">
              Um resumo da minha transição da área operacional de logística para os estudos e estágio na área de dados.
            </p>
          </div>

          <div className="relative space-y-6 before:absolute before:top-4 before:bottom-4 before:left-4 before:w-px before:bg-slate-200 md:before:left-8 dark:before:bg-[#1a2336]">
            {journeyTimeline.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="relative pl-12 md:pl-20"
              >
                <div className="absolute top-1 left-0 flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white shadow-xs md:left-4 dark:border-[#1a2336] dark:bg-[#0c101a]">
                  {step.icon}
                </div>

                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 dark:border-[#1a2336] dark:bg-[#101522]/80">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold ${step.badgeColor}`}>
                      {step.badge}
                    </span>
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                      {step.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {step.role}{' '}
                    <span className="font-normal text-slate-500 dark:text-slate-400">
                      • {step.company}
                    </span>
                  </h3>

                  <p className="mt-1.5 mb-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>

                  <ul className="space-y-1.5">
                    {step.highlights.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2 text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-400"
                      >
                        <CheckCircle size={15} weight="duotone" className="mt-1 shrink-0 text-orange-500 dark:text-orange-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-orange-500/30 bg-orange-500/5 p-5 dark:border-orange-500/30 dark:bg-orange-500/10">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Quer ler o relato mais completo sobre a minha mudança de área?
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/bio"
                className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-slate-800 dark:bg-orange-500 dark:text-white dark:hover:bg-orange-600"
              >
                Ver página de Bio
                <ArrowRight size={14} weight="bold" className="ml-1.5" />
              </Link>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-100 dark:border-[#1a2336] dark:bg-[#101522] dark:text-slate-200 dark:hover:bg-[#161c2d]"
              >
                <EnvelopeSimple size={15} weight="duotone" />
                Contato
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJETOS EM DESTAQUE */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="mb-1 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Projetos em Destaque
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Alguns dos projetos práticos que desenvolvi durante meus estudos.
            </p>
          </div>
          <Link
            to="/projetos"
            className="hidden items-center font-mono text-xs font-bold text-orange-600 transition-colors hover:text-orange-500 dark:text-orange-400 md:flex"
          >
            Ver todos
            <ArrowRight size={15} weight="bold" className="ml-1" />
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            to="/projetos"
            className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold transition-colors hover:bg-slate-100 dark:border-[#1a2336] dark:hover:bg-[#101522]"
          >
            Ver todos os projetos
            <ArrowRight size={18} weight="bold" className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
