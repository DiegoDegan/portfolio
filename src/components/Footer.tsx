import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import {
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
  TerminalWindow,
} from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/90 bg-white py-12 text-slate-500 transition-colors duration-300 dark:border-[#1a2336] dark:bg-[#080b11] dark:text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/10 text-orange-600 dark:text-orange-400">
              <TerminalWindow size={16} weight="duotone" />
            </div>
            <div>
              <p className="font-display text-sm font-bold text-slate-900 dark:text-slate-100">
                Diego Degan de Melo
              </p>
              <p className="font-mono text-xs text-slate-500 dark:text-slate-500">
                Estudante de Ciência de Dados • São Paulo, SP
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-medium">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              <GithubLogo size={15} weight="duotone" />
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-orange-500 dark:hover:text-orange-400"
            >
              <LinkedinLogo size={15} weight="duotone" />
              LinkedIn
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              <EnvelopeSimple size={15} weight="duotone" />
              {SOCIAL_LINKS.email}
            </a>
          </div>

          <div className="font-mono text-xs text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} Diego Degan.
          </div>
        </div>
      </div>
    </footer>
  );
}
