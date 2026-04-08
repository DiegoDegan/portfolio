import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

/* ── helpers ─────────────────────────────────────────── */

function wrapLabel(label: string): string | string[] {
  if (label.length <= 16) return label;
  const words = label.split(' ');
  const lines: string[] = [];
  let cur = words[0];
  for (let i = 1; i < words.length; i++) {
    if (cur.length + 1 + words[i].length <= 16) {
      cur += ' ' + words[i];
    } else {
      lines.push(cur);
      cur = words[i];
    }
  }
  lines.push(cur);
  return lines;
}

const tooltipConfig = {
  callbacks: {
    title(items: any[]) {
      const label = items[0].chart.data.labels[items[0].dataIndex];
      return Array.isArray(label) ? label.join(' ') : label;
    },
  },
};

/* ── reusable chart hook ─────────────────────────────── */

function useChart(config: any) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const chart = new Chart(ref.current, config);
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return ref;
}

/* ── sub-components ──────────────────────────────────── */

function ContextTactic({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 rounded-lg bg-slate-800/50 p-4 transition-colors hover:bg-slate-800">
      <div className="text-2xl" aria-hidden="true">{emoji}</div>
      <div>
        <h4 className="font-bold text-white">{title}</h4>
        <p className="mt-1 text-sm text-slate-400">{desc}</p>
      </div>
    </div>
  );
}

function PipelineStep({
  step, title, desc, color,
}: {
  step: number; title: string; desc: string; color: string;
}) {
  const c = color; // indigo | cyan | emerald | purple
  return (
    <div className={`flex-1 rounded-xl border bg-${c}-900/30 border-${c}-500/50 p-6 text-center w-full`}>
      <div className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-${c}-500 text-xl font-bold text-white shadow-lg shadow-${c}-500/30`}>
        {step}
      </div>
      <h3 className={`text-lg font-bold text-${c}-300`}>{title}</h3>
      <p className="mt-2 text-xs text-slate-400" dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-sm text-emerald-400">
        ✔
      </span>
      <span className="text-slate-300">{text}</span>
    </li>
  );
}

/* ── main page ───────────────────────────────────────── */

export default function ArtigoAntigravity() {
  /* Charts */

  const radarRef = useChart({
    type: 'radar' as const,
    data: {
      labels: [
        'Raciocínio Lógico e Arquitetural',
        'Velocidade de Geração de Código',
        'Economia de Tokens e Custo',
        'Capacidade de Análise de Refatoração Complexa',
        'Tratamento de Contexto Massivo',
      ].map(wrapLabel),
      datasets: [
        {
          label: 'Gemini 3.1 Pro / High',
          data: [95, 60, 40, 90, 85],
          backgroundColor: 'rgba(99, 102, 241, 0.2)',
          borderColor: '#8b5cf6',
          pointBackgroundColor: '#8b5cf6',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#8b5cf6',
          borderWidth: 2,
        },
        {
          label: 'Gemini 3.1 Flash / Lite',
          data: [60, 95, 95, 55, 65],
          backgroundColor: 'rgba(6, 182, 212, 0.2)',
          borderColor: '#06b6d4',
          pointBackgroundColor: '#06b6d4',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#06b6d4',
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'top' as const, labels: { color: '#e2e8f0', padding: 20, font: { weight: 'bold' as const } } },
        tooltip: tooltipConfig,
      },
      scales: {
        r: {
          angleLines: { color: 'rgba(148, 163, 184, 0.2)' },
          grid: { color: 'rgba(148, 163, 184, 0.2)' },
          pointLabels: { color: '#cbd5e1', font: { size: 11 } },
          ticks: { display: false },
          min: 0,
          max: 100,
        },
      },
    },
  });

  const doughnutRef = useChart({
    type: 'doughnut' as const,
    data: {
      labels: [
        'Implementação de Código (Flash)',
        'Planejamento e Arquitetura (Pro)',
        'Documentação e Testes (Flash-Lite)',
        'Correções e Refatorações Leves (Flash)',
      ].map(wrapLabel),
      datasets: [{
        data: [45, 20, 15, 20],
        backgroundColor: ['#0ea5e9', '#8b5cf6', '#10b981', '#38bdf8'],
        borderColor: '#0f172a',
        borderWidth: 3,
        hoverOffset: 4,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '70%',
      plugins: { legend: { display: false }, tooltip: tooltipConfig },
    },
  });

  const barRef = useChart({
    type: 'bar' as const,
    data: {
      labels: [
        'Sem Checklist e Planejamento',
        'Com Checklist e Planejamento Prévio',
      ].map(wrapLabel),
      datasets: [
        { label: 'Gasto de Tokens (Relativo)', data: [100, 35], backgroundColor: '#f43f5e', borderRadius: 6 },
        { label: 'Produtividade (Entregas)', data: [40, 95], backgroundColor: '#10b981', borderRadius: 6 },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: tooltipConfig },
      scales: {
        y: { beginAtZero: true, grid: { color: 'rgba(148, 163, 184, 0.1)' }, ticks: { display: false } },
        x: { grid: { display: false }, ticks: { color: '#cbd5e1' } },
      },
    },
  });

  /* ── Set page title ─────────────────────────────────── */
  useEffect(() => {
    document.title = 'Economia de Tokens: Antigravity + Gemini';
  }, []);

  /* ── render ─────────────────────────────────────────── */

  return (
    <div className="min-h-screen bg-slate-100 pb-20 text-[#f8fafc] dark:bg-[#0f172a]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-5xl px-6 pb-12 pt-16 text-center"
      >
        <div className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-900/50 px-4 py-1 text-sm font-semibold text-cyan-400">
          Guia de Otimização &amp; Produtividade
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-black dark:text-[#f8fafc] md:text-6xl">
          Estratégias de Economia de Tokens no{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Antigravity
          </span>
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-400 md:text-xl">
          Maximize a qualidade do seu código e minimize os custos operacionais dominando a orquestração dos modelos
          Gemini 3.1 High/Pro e Flash/Flash-Lite.
        </p>
      </motion.header>

      {/* Main Grid */}
      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

        {/* ─ Section 1: Golden Rule ─ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-panel relative col-span-1 overflow-hidden rounded-2xl p-8 shadow-2xl lg:col-span-2"
        >
          <div className="absolute -mr-20 -mt-20 right-0 top-0 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold md:text-3xl">
            <span className="text-purple-400" aria-hidden="true">❖</span>
            A Regra de Ouro: O Modelo Certo para a Fase Certa
          </h2>
          <p className="mb-8 text-lg text-slate-300">
            A maior perda de tokens ocorre ao utilizar modelos de alta capacidade (e custo) para tarefas triviais,
            ou modelos rápidos para arquiteturas complexas. A chave é a segmentação inteligente do fluxo de trabalho.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Radar Chart */}
            <div
              className="relative mx-auto w-full max-w-lg"
              style={{ height: 450, maxHeight: 500 }}
              role="img"
              aria-label="Gráfico radar comparando Gemini Pro e Flash em cinco dimensões"
            >
              <canvas ref={radarRef} />
            </div>

            {/* Model Cards */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="rounded-xl border border-indigo-500/20 bg-slate-800/80 p-5">
                <h3 className="mb-2 text-xl font-bold text-indigo-400">Gemini 3.1 High / Pro</h3>
                <p className="mb-3 text-sm leading-relaxed text-slate-300">
                  Possui uma janela de contexto robusta e raciocínio profundo. Seu custo por token é mais elevado, mas entrega decisões precisas.
                </p>
                <ul className="space-y-1 text-sm text-slate-400">
                  <li>▶ Planejamento de novas features</li>
                  <li>▶ Compreensão de projetos legados extensos</li>
                  <li>▶ Decisões de arquitetura e refatorações complexas</li>
                  <li>▶ Revisões de qualidade e segurança</li>
                </ul>
              </div>
              <div className="rounded-xl border border-cyan-500/20 bg-slate-800/80 p-5">
                <h3 className="mb-2 text-xl font-bold text-cyan-400">Gemini 3.1 Flash / Lite</h3>
                <p className="mb-3 text-sm leading-relaxed text-slate-300">
                  Otimizados para velocidade e baixo custo. Ideais para volume de geração quando a lógica já foi previamente estabelecida.
                </p>
                <ul className="space-y-1 text-sm text-slate-400">
                  <li>▶ Geração de código de planos estruturados</li>
                  <li>▶ Pequenas correções de bugs localizados</li>
                  <li>▶ Geração de docstrings, testes e READMEs</li>
                  <li>▶ Refatorações triviais (ex: renomear variáveis)</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ─ Section 2: Context Tactics ─ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-panel rounded-2xl p-8 shadow-xl"
        >
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-emerald-400">
            <span aria-hidden="true">⚡</span> Táticas Avançadas de Contexto
          </h2>
          <p className="mb-6 text-slate-300">
            Além de escolher o modelo, gerenciar o que é enviado na janela de contexto previne o consumo excessivo e
            o efeito de "alucinação" por excesso de dados.
          </p>
          <div className="space-y-4">
            <ContextTactic
              emoji="✂️"
              title="Escopo Cirúrgico"
              desc='Nunca peça para "refatorar o projeto inteiro". Peça "adapte a função X no módulo Y". Solicitações granulares economizam contexto e reduzem bugs.'
            />
            <ContextTactic
              emoji="♻️"
              title="Reaproveitamento de Sessão"
              desc='Use referências em vez de repetições. "Com base no plano elaborado acima, implemente a etapa 3". O histórico já está na memória do modelo.'
            />
            <ContextTactic
              emoji="📝"
              title="Edições baseadas em Diff"
              desc="Ao corrigir um arquivo longo, exija que o modelo retorne apenas a parte do código alterada com marcadores de contexto, não o arquivo inteiro novamente."
            />
          </div>
        </motion.section>

        {/* ─ Section 3: Usage Distribution ─ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-panel flex flex-col rounded-2xl p-8 shadow-xl"
        >
          <h2 className="mb-4 text-2xl font-bold text-rose-400">Distribuição Ideal de Uso</h2>
          <p className="mb-6 text-sm text-slate-300">
            A alocação de tempo e recursos em um projeto otimizado deve seguir um padrão claro, delegando a maior
            parte do processamento pesado aos modelos Flash.
          </p>
          <div
            className="relative mx-auto w-full max-w-sm flex-grow"
            style={{ height: 350, maxHeight: 400 }}
            role="img"
            aria-label="Gráfico doughnut mostrando distribuição ideal de uso"
          >
            <canvas ref={doughnutRef} />
          </div>
          {/* Legend */}
          <div className="mx-auto mt-4 grid max-w-sm grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {[
              { color: '#0ea5e9', label: 'Implementação (Flash) – 45%' },
              { color: '#8b5cf6', label: 'Planejamento (Pro) – 20%' },
              { color: '#10b981', label: 'Documentação (Lite) – 15%' },
              { color: '#38bdf8', label: 'Correções (Flash) – 20%' },
            ].map((item) => (
              <div key={item.color} className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-full" style={{ background: item.color }} />
                <span className="text-slate-300">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center text-sm text-slate-400">
            Uma arquitetura eficiente delega ~70% do processamento de código aos modelos Flash.
          </div>
        </motion.section>

        {/* ─ Section 4: Pipeline ─ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-panel col-span-1 rounded-2xl p-8 shadow-2xl lg:col-span-2"
        >
          <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
            O Pipeline de Engenharia "Plan &amp; Execute"
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-slate-400">
            "Codar primeiro, pensar depois" é o inimigo número um da economia de tokens. Siga este fluxo restrito
            para garantir o máximo de eficiência.
          </p>

          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 lg:flex-row">
            <PipelineStep step={1} title="Planejar" desc="Modelo: Gemini Pro<br>Peça a arquitetura sem código." color="indigo" />
            <div className="rotate-90 text-2xl font-bold text-slate-500 lg:rotate-0">➔</div>
            <PipelineStep step={2} title="Revisar" desc="Humano + Pro<br>Ajuste as etapas e lógica do plano gerado." color="cyan" />
            <div className="rotate-90 text-2xl font-bold text-slate-500 lg:rotate-0">➔</div>
            <PipelineStep step={3} title="Executar" desc="Modelo: Gemini Flash<br>Implemente uma etapa por vez." color="emerald" />
            <div className="rotate-90 text-2xl font-bold text-slate-500 lg:rotate-0">➔</div>
            <PipelineStep step={4} title="Polir" desc="Modelo: Flash Lite<br>Gere documentação, docstrings e tipagem." color="purple" />
          </div>
        </motion.section>

        {/* ─ Section 5: Checklist ─ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="col-span-1 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-8 shadow-2xl lg:col-span-2"
        >
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-1">
              <h2 className="mb-4 text-3xl font-bold text-white">Checklist Pré-Voo</h2>
              <p className="mb-6 text-slate-400">
                Antes de iniciar uma sessão longa de desenvolvimento no Antigravity, valide mentalmente ou fisicamente
                esta lista para garantir que seus recursos não serão desperdiçados com retrabalho e prompts confusos.
              </p>
              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-6">
                <ul className="space-y-4">
                  <CheckItem text="Defini claramente o objetivo exato da feature ou refatoração?" />
                  <CheckItem text="O escopo está limitado a um único módulo ou funcionalidade específica?" />
                  <CheckItem text="Selecionei o modelo correto para o desafio atual (Pro vs Flash)?" />
                  <CheckItem text='Eu solicitei um planejamento estratégico em vez de apenas "faça o código"?' />
                  <CheckItem text="Revisei e ajustei o plano gerado pela IA antes de pedir a implementação real?" />
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="relative h-64 w-full" role="img" aria-label="Gráfico de barras comparando gasto de tokens e produtividade">
                <canvas ref={barRef} />
              </div>
              <p className="mt-2 text-center text-xs text-slate-500">
                Impacto do Checklist na Redução de Retrabalho (Baseado em pesquisas de economia de tokens)
              </p>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="pb-8 pt-16 text-center text-sm text-slate-600">
        <p>Desenvolvido para Otimização de Produtividade no Antigravity.</p>
        <nav className="mt-2">
          <Link to="/" className="text-slate-500 transition-colors hover:text-cyan-400">
            ← Voltar ao portfólio
          </Link>
        </nav>
      </footer>
    </div>
  );
}
