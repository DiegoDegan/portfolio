import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Phone, Mail, Sun, Moon, Menu, X } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
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
    <header className="sticky top-0 z-50 w-full bg-brand-dark text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center">
            <Link to="/" className="font-display text-xl font-bold tracking-tight">
              Diego Degan
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-gray-300",
                      location.pathname === link.path ? "text-white underline underline-offset-4" : "text-gray-400"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials & Theme Toggle */}
          <div className="hidden items-center space-x-4 md:flex">
            <div className="flex items-center space-x-3 border-r border-gray-700 pr-4">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Github size={18} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-gray-300">
                <Mail size={18} />
              </a>
              <a href={`tel:${SOCIAL_LINKS.phone}`} className="hover:text-gray-300">
                <Phone size={18} />
              </a>
            </div>
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-gray-800">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-2 text-base font-medium",
                  location.pathname === link.path ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-800 pb-3 pt-4">
            <div className="flex items-center justify-around px-5">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Github size={20} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-gray-400 hover:text-white">
                <Mail size={20} />
              </a>
              <a href={`tel:${SOCIAL_LINKS.phone}`} className="text-gray-400 hover:text-white">
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
