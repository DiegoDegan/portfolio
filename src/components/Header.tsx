import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  GithubLogo,
  LinkedinLogo,
  Phone,
  EnvelopeSimple,
  Sun,
  Moon,
  List,
  X,
  TerminalWindow,
} from '@phosphor-icons/react';
import { SOCIAL_LINKS } from '../constants';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Header() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Bio', path: '/bio' },
    { name: 'Projetos', path: '/projetos' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/90 bg-white/85 backdrop-blur-xl transition-colors duration-300 dark:border-[#1a2336] dark:bg-[#080b11]/85">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Identity */}
          <div className="flex items-center gap-3">
            <Link to="/" className="group flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/10 text-orange-600 transition-all group-hover:border-orange-500/60 group-hover:bg-orange-500/20 dark:text-orange-400">
                <TerminalWindow size={19} weight="duotone" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-base font-bold tracking-tight text-slate-900 dark:text-white">
                  Diego Degan
                </span>
                <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Ciência de Dados
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-1 rounded-full border border-slate-200/90 bg-slate-100/70 p-1 dark:border-[#1a2336] dark:bg-[#0f1422]/80">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={cn(
                        "rounded-full px-4 py-1.5 text-xs font-semibold transition-all block",
                        isActive
                          ? "bg-white text-slate-900 shadow-xs dark:bg-[#1b2438] dark:text-orange-400"
                          : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Socials & Theme Toggle */}
          <div className="hidden items-center space-x-3 md:flex">
            <div className="flex items-center space-x-1 border-r border-slate-200 pr-3 dark:border-[#1a2336]">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-[#131929] dark:hover:text-white"
                title="GitHub"
              >
                <GithubLogo size={18} weight="duotone" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-orange-500 dark:text-slate-400 dark:hover:bg-[#131929] dark:hover:text-orange-400"
                title="LinkedIn"
              >
                <LinkedinLogo size={18} weight="duotone" />
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-[#131929] dark:hover:text-white"
                title="E-mail"
              >
                <EnvelopeSimple size={18} weight="duotone" />
              </a>
              <a
                href={`tel:${SOCIAL_LINKS.phone}`}
                className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-[#131929] dark:hover:text-white"
                title="Telefone"
              >
                <Phone size={18} weight="duotone" />
              </a>
            </div>
            <button
              onClick={toggleTheme}
              className="rounded-lg border border-slate-200 bg-slate-100/80 p-2 text-slate-700 transition-colors hover:bg-slate-200 dark:border-[#1a2336] dark:bg-[#101522] dark:text-slate-300 dark:hover:bg-[#172033]"
              aria-label="Alternar tema"
              title={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
            >
              {isDark ? (
                <Sun size={18} weight="duotone" className="text-orange-400" />
              ) : (
                <Moon size={18} weight="duotone" className="text-violet-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="rounded-lg border border-slate-200 bg-slate-100 p-2 text-slate-700 transition-colors dark:border-[#1a2336] dark:bg-[#101522] dark:text-slate-300"
              aria-label="Alternar tema"
            >
              {isDark ? (
                <Sun size={18} weight="duotone" className="text-orange-400" />
              ) : (
                <Moon size={18} weight="duotone" className="text-violet-600" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-[#101522]"
            >
              {isMenuOpen ? <X size={22} /> : <List size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 dark:border-[#1a2336] dark:bg-[#080b11] md:hidden">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block rounded-lg px-3 py-2.5 text-sm font-semibold",
                  location.pathname === link.path
                    ? "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-[#101522]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-4 border-t border-slate-200 pt-4 dark:border-[#1a2336]">
            <div className="flex items-center justify-around">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                <GithubLogo size={20} weight="duotone" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-orange-500 dark:text-slate-400 dark:hover:text-orange-400">
                <LinkedinLogo size={20} weight="duotone" />
              </a>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                <EnvelopeSimple size={20} weight="duotone" />
              </a>
              <a href={`tel:${SOCIAL_LINKS.phone}`} className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                <Phone size={20} weight="duotone" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
