import React from 'react';
import { SOCIAL_LINKS } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-brand-dark py-12 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-sm">
            © {new Date().getFullYear()} Diego Degan. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-white">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
