import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
          Meus Projetos
        </h1>
        <p className="mx-auto max-w-2xl text-base text-slate-600 dark:text-slate-300">
          Projetos acadêmicos e pessoais onde coloco em prática meus estudos em Python, análise estatística, Machine Learning e visualização de dados.
        </p>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
