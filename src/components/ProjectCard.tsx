import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { motion } from 'motion/react';
import { ArrowRight, Trophy } from '@phosphor-icons/react';

interface ProjectCardProps {
  project: Project;
  key?: string | number;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isContain = project.imageFit === 'contain';

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all hover:border-orange-500/50 hover:shadow-xl dark:border-[#1a2336] dark:bg-[#101522]/90 dark:hover:border-orange-500/50"
    >
      <Link to={`/projeto/${project.id}`} className="flex h-full flex-col">
        <div className="relative aspect-video overflow-hidden border-b border-slate-100 bg-[#080b11] dark:border-[#1a2336]">
          {isContain && (
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,112,0,0.15),transparent_70%)]" />
          )}
          <img
            src={project.imageUrl}
            alt={project.title}
            className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
              isContain ? 'object-contain p-1' : 'object-cover'
            }`}
            referrerPolicy="no-referrer"
          />
          {project.highlightBadge && (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md border border-amber-500/40 bg-[#080b11]/90 px-2.5 py-1 font-mono text-[11px] font-semibold text-amber-400 backdrop-blur-md">
              <Trophy size={13} weight="duotone" />
              {project.highlightBadge}
            </span>
          )}
          {project.date && project.date !== '-' && (
            <span className="absolute right-3 top-3 rounded-md border border-slate-700/60 bg-[#080b11]/85 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-200 backdrop-blur-md">
              {project.date}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <div className="mb-3 flex flex-wrap gap-1.5">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-orange-500/25 bg-orange-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-orange-700 dark:text-orange-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-orange-500 dark:text-white dark:group-hover:text-orange-400">
              {project.title}
            </h3>
            <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {project.description}
            </p>
          </div>
          <div className="flex items-center font-mono text-xs font-semibold text-orange-600 dark:text-orange-400">
            Ver detalhes do projeto
            <ArrowRight size={14} weight="bold" className="ml-1.5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
