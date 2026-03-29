import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS, SOCIAL_LINKS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { ArrowRight, Database, LineChart, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';
import homeImg from '../images/home.png';

export default function Home() {
  return (
    <div className="flex flex-col space-y-24 pb-24">
      {/* Hero / Bio */}
      <section className="relative overflow-hidden bg-brand-light py-24 dark:bg-brand-dark dark:text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
                Olá, eu sou um <span className="text-gray-500 italic">Profissional Full Stack em Dados em formação</span>, focado em resultados.
              </h1>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                Transformo dados complexos em insights acionáveis e modelos preditivos de alto impacto.
                Com experiência em Machine Learning, DataViz e Análise Estatística, com o objetivo de ajudar empresas a tomarem
                decisões baseadas em evidências.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projetos"
                  className="inline-flex items-center rounded-lg bg-brand-dark px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-brand-dark dark:hover:bg-gray-200"
                >
                  Ver Projetos
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src={homeImg}
                alt="Data Science Visualization"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">Minha Expertise</h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Especializado em ferramentas e técnicas modernas para extrair valor de grandes volumes de dados.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: <BrainCircuit className="h-8 w-8 text-gray-300" />,
              title: 'Machine Learning',
              desc: 'Desenvolvimento de modelos preditivos e sistemas de recomendação escaláveis.',
            },
            {
              icon: <Database className="h-8 w-8 text-gray-300" />,
              title: 'Engenharia de Dados',
              desc: 'Criação de pipelines robustos para processamento e limpeza de dados em larga escala.',
            },
            {
              icon: <LineChart className="h-8 w-8 text-gray-300" />,
              title: 'Visualização de Dados',
              desc: 'Dashboards interativos e storytelling com dados para facilitar a tomada de decisão.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl border border-gray-100 bg-gray-900 p-8 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-bold">Projetos em Destaque</h2>
            <p className="text-gray-600 dark:text-gray-400">Uma seleção dos meus trabalhos mais recentes.</p>
          </div>
          <Link
            to="/projetos"
            className="hidden items-center text-sm font-bold text-gray-900 transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-400 md:flex"
          >
            Ver todos
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-12 flex justify-center md:hidden">
          <Link
            to="/projetos"
            className="inline-flex items-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            Ver todos os projetos
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>


    </div>
  );
}
