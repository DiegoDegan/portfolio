import React from 'react';
import { motion } from 'motion/react';
import { SOCIAL_LINKS } from '../constants';
import { EnvelopeSimple, LinkedinLogo, MapPin } from '@phosphor-icons/react';

export default function Bio() {
  const paragraphs = [
    <>
      Trabalhei por <span className="font-semibold text-slate-900 dark:text-white">15 anos na área operacional de logística</span> (Rota 12 Express / Jadlog), coordenando equipes e acompanhando uma rotina de 25 a 30 mil entregas por mês. Ao longo desse tempo, percebi que o que mais gostava de fazer no dia a dia era analisar as planilhas da operação, entender os indicadores e usar esses números para resolver problemas práticos, como melhorar a separação de rotas por CEP.
    </>,
    <>
      Em 2023 decidi encerrar esse ciclo na logística para buscar uma <span className="font-semibold text-slate-900 dark:text-white">transição de carreira para a tecnologia</span>. Comecei estudando Python e SQL por conta própria e logo percebi que muito do que eu já fazia acompanhando metas e indicadores tinha tudo a ver com a área de dados.
    </>,
    <>
      Hoje sou estudante de <span className="font-semibold text-slate-900 dark:text-white">Ciência de Dados na FIAP</span> (conclusão prevista para 2027) e atuo como <span className="font-semibold text-orange-600 dark:text-orange-400">Estagiário na área de Método, Modelo e Riscos de Agências no Itaú Unibanco</span>. No estágio, tenho a oportunidade de aprender diariamente em um ambiente corporativo, trabalhando com consultas SQL, análises de consistência de dados, automações em Excel/Power Query/VBA, construção de relatórios e construção de slides para apresentar em Comitês com a diretoria.
    </>,
    <>
      Na faculdade e nos estudos paralelos, venho colocando em prática projetos de análise de dados, Machine Learning e Inteligência Artificial Generativa. Dois trabalhos em grupo que me deram muito orgulho recentemente foram o <em>MotorForeSig</em> (<span className="font-semibold text-amber-500">3º lugar no FIAP NEXT 2026</span>) e o <em>S.ENSO</em> (<span className="font-semibold text-violet-500 dark:text-violet-400">nota 10 na Global Solution</span>).
    </>,
    <>
      Criei este portfólio para organizar meus estudos, compartilhar os projetos que venho desenvolvendo e registrar minha evolução passo a passo nessa nova jornada profissional.
    </>,
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl"
      >
        {/* Page Title */}
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl dark:text-white">
            Minha História
          </h1>
          <p className="font-mono text-xs font-medium text-slate-500 dark:text-slate-400">
            São Paulo, SP • Estudante de Ciência de Dados & Estagiário no Itaú Unibanco
          </p>

          {/* Pill Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-2xs transition-all hover:border-orange-500/50 hover:text-orange-600 dark:border-[#1a2336] dark:bg-[#0c101a] dark:text-slate-300 dark:hover:border-orange-500/50 dark:hover:text-orange-400"
            >
              <LinkedinLogo size={15} weight="duotone" />
              LinkedIn
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-2xs transition-all hover:border-orange-500/50 hover:text-orange-600 dark:border-[#1a2336] dark:bg-[#0c101a] dark:text-slate-300 dark:hover:border-orange-500/50 dark:hover:text-orange-400"
            >
              <EnvelopeSimple size={15} weight="duotone" />
              {SOCIAL_LINKS.email}
            </a>
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100/80 px-4 py-2 text-xs font-bold text-slate-600 dark:border-[#1a2336] dark:bg-[#101522] dark:text-slate-400">
              <MapPin size={15} weight="duotone" />
              São Paulo, SP
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm sm:p-12 dark:border-[#1a2336] dark:bg-[#101522]/90">
          <div className="space-y-6">
            {paragraphs.map((content, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300"
              >
                {content}
              </p>
            ))}

            {/* Signature Section */}
            <div className="mt-10 flex flex-col items-end border-t border-slate-100 pt-6 dark:border-[#1a2336]">
              <p className="font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Diego Degan
              </p>
              <span className="mt-0.5 font-mono text-xs text-orange-600 dark:text-orange-400">
                Ciência de Dados • FIAP
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
