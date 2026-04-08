import React from 'react';
import { motion } from 'motion/react';
import { SOCIAL_LINKS } from '../constants';
import { Mail, Linkedin, MapPin, Sparkles } from 'lucide-react';

export default function Bio() {
  const paragraphs = [
    <>Tenho 34 anos e construí mais de <span className="font-semibold text-white">15 anos de carreira em logística last mile</span>, chegando a coordenar todo o setor operacional de uma empresa, com uma equipe de até 20 pessoas e dezenas de milhares de entregas por mês. Ao longo desse tempo, descobri que o que mais me motivava não era só fazer a operação rodar, mas entender os números por trás dela e transformar dados em decisão.</>,
    <>Em 2023 decidi encerrar esse ciclo na logística para perseguir um sonho antigo: <span className="font-semibold text-white">transição para trabalhar diretamente com tecnologia</span>. Desde muito novo sempre tive facilidade com esse universo, e em 2024 comecei a estudar Python por conta própria, entendendo na prática que grande parte do que eu já fazia no dia a dia era, na verdade, trabalhar com dados.</>,
    <>Hoje sou <span className="font-semibold text-white">graduando em Ciência de Dados na FIAP</span>, com foco em estatística, modelagem de dados e storytelling aplicado a problemas reais. No passado eu já utilizava Power BI para monitorar KPIs da operação sem nem saber que existia a profissão “cientista de dados”; agora, estudo para fazer disso a minha nova carreira.</>,
    <>A Inteligência Artificial tem sido uma aliada constante na minha jornada, desde organizar minha trilha de estudos até funcionar como uma espécie de mentor para tirar ideias do papel.</>,
    <>Meu interesse passa por todas as frentes de dados — análise, ciência e engenharia — e meu objetivo é me tornar um profissional cada vez mais completo, um verdadeiro <span className="font-semibold text-white">“Data Full Stack”</span>.</>,
    <>No médio prazo, quero me aprofundar ainda mais em dados e IA, com planos de seguir para uma pós-graduação em Machine Learning assim que concluir a graduação. Em 2026 decidi colocar em prática o que venho aprendendo, e este portfólio nasce justamente com esse propósito: documentar minha transição de carreira, compartilhar projetos robustos e bem estruturados e mostrar, mês a mês, a evolução de alguém que está construindo uma nova história em dados.</>
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl"
      >
        {/* Page Title */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Minha História</h1>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            São Paulo, Brasil · Ciência de Dados
          </p>

          {/* Pill Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-4 py-2 text-xs font-bold text-gray-300 transition-all hover:border-white hover:bg-gray-800"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-4 py-2 text-xs font-bold text-gray-300 transition-all hover:border-white hover:bg-gray-800"
            >
              <Mail size={14} />
              Email
            </a>
            <div className="flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-4 py-2 text-xs font-bold text-gray-300">
              <MapPin size={14} />
              São Paulo
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-900 p-8 shadow-xl dark:border-gray-800 sm:p-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {paragraphs.map((content, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="text-lg leading-relaxed text-gray-400 md:text-xl font-light"
              >
                {content}
              </motion.p>
            ))}

            {/* Signature Section */}
            <motion.div
              variants={itemVariants}
              className="mt-16 flex flex-col items-end"
            >
              <div className="mb-4 h-px w-32 bg-gradient-to-l from-gray-700 to-transparent" />
              <p className="font-serif text-3xl italic text-gray-300">
                Diego Degan
              </p>

            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex justify-center text-gray-400 dark:text-gray-600"
        >
          <Sparkles size={24} className="opacity-20" />
        </motion.div>
      </motion.div>
    </div>
  );
}
