import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  key?: string | number;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-900 shadow-sm transition-all hover:shadow-md dark:border-gray-800"
    >
      <Link to={`/projeto/${project.id}`}>
        <div className="aspect-video overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">
            {project.title}
          </h3>
          <p className="mb-4 line-clamp-2 text-sm text-gray-400">
            {project.description}
          </p>
          <div className="flex items-center text-sm font-semibold text-gray-300">
            Ver detalhes
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
