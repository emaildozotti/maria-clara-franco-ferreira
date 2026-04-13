// DECISÃO CRIATIVA: Split-Layout Editorial (Opção A). Fundo Índigo Profundo (#1A365D).
// Aurora blobs em azul/dourado. Número 350 Hz destacado em dourado como diferenciador.

import { motion } from 'motion/react'
import { FadeIn } from '../App'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-primary section-padding"
    >
      {/* Header desktop sticky */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-sm border-b border-white/5">
        <div className="container-ultra flex items-center justify-between py-4">
          <span
            className="font-display text-lg tracking-tight italic"
            style={{ color: 'var(--color-bg-light)' }}
          >
            Maria Clara Franco Ferreira
          </span>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-[10px] uppercase tracking-[0.2em] font-sans transition-opacity hover:opacity-100"
            style={{ color: 'var(--color-accent)', opacity: 0.7 }}
          >
            Agendar sessão
          </button>
        </div>
      </header>

      {/* Aurora blobs */}
      <div
        className="blur-orb w-[600px] h-[600px] -top-32 -left-40"
        style={{
          backgroundColor: '#1A365D55',
          animation: 'aurora-1 18s ease-in-out infinite',
        }}
        aria-hidden="true"
      />
      <div
        className="blur-orb w-[500px] h-[500px] top-1/2 -right-32"
        style={{
          backgroundColor: '#C5A55A33',
          animation: 'aurora-2 22s ease-in-out infinite',
          animationDelay: '2s',
        }}
        aria-hidden="true"
      />
      <div
        className="blur-orb w-[400px] h-[400px] -bottom-24 left-1/3"
        style={{
          backgroundColor: '#4A6FA522',
          animation: 'aurora-3 26s ease-in-out infinite',
          animationDelay: '4s',
        }}
        aria-hidden="true"
      />

      {/* Conteúdo Split-Layout */}
      <div className="relative z-10 container-ultra mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20 mt-12 lg:mt-0">

        {/* Coluna de Texto */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-8 md:gap-10">

          {/* Callout */}
          <FadeIn direction="down" delay={0}>
            <p
              className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-light"
              style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-accent)' }}
            >
              Quando algo invisível trava tudo
            </p>
          </FadeIn>

          {/* H1 */}
          <FadeIn delay={0.15}>
            <h1
              className="font-display leading-[1.1] max-w-2xl tracking-tight"
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
                color: 'var(--color-bg-light)',
              }}
            >
              Você faz tudo certo.{' '}
              <span
                className="italic font-light"
                style={{ color: 'var(--color-accent)' }}
              >
                E alguma coisa, sempre, te puxa para trás.
              </span>
            </h1>
          </FadeIn>

          {/* Subtítulo */}
          <FadeIn delay={0.30}>
            <p
              className="max-w-xl text-lg md:text-xl leading-relaxed text-white/70 font-light"
              style={{ fontFamily: 'var(--font-sub)' }}
            >
              Relacionamentos que afundam, dinheiro que some, sonhos que travam no último minuto. Não é azar. Tem{' '}
              <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>algo invisível</span>{' '}
              no seu caminho, e eu sei exatamente o que é.
            </p>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.45}>
            <motion.button
              onClick={() => scrollToSection('pain')}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-shimmer mt-4 lg:mt-8"
            >
              Quero entender o que me prende
            </motion.button>
          </FadeIn>
        </div>

        {/* Coluna da Imagem */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <FadeIn delay={0.4} direction="left" className="w-full max-w-[280px] md:max-w-sm lg:max-w-[420px] relative">
            <div
              className="relative aspect-[3/4] overflow-hidden rounded-sm"
              style={{
                border: '2px solid #C5A55A',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
              }}
            >
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 pointer-events-none" />

              <img
                src="/foto-maria-clara.jpg"
                alt="Maria Clara Franco Ferreira"
                className="w-full h-full object-cover object-center transition-transform duration-[2s] ease-out hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
                    svg.setAttribute('viewBox', '0 0 800 1000')
                    svg.setAttribute('class', 'w-full h-full')
                    svg.innerHTML = '<rect fill="#1A365D" width="800" height="1000"/><text fill="#C5A55A" font-size="32" x="400" y="500" text-anchor="middle" font-family="serif">Maria Clara</text>'
                    parent.appendChild(svg)
                  }
                }}
              />

              <div
                className="absolute bottom-0 left-0 right-0 h-1/2 z-20 pointer-events-none"
                style={{ background: 'linear-gradient(to top, var(--color-primary) 0%, transparent 100%)' }}
              />

              <div className="absolute inset-0 border border-white/10 z-30 pointer-events-none" />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator — hidden on mobile (Bug #5) */}
      <FadeIn delay={1.4} className="hidden md:flex absolute bottom-12 flex-col items-center gap-4 cursor-pointer z-20">
        <div onClick={() => scrollToSection('pain')} className="flex flex-col items-center gap-4 hover:opacity-70 transition-opacity">
          <span
            className="text-[10px] uppercase tracking-[0.2em] opacity-50"
            style={{ color: 'var(--color-accent)' }}
          >
            Descubra
          </span>
          <div className="line-separator h-12" />
        </div>
      </FadeIn>

      {/* Gradiente de base */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, var(--color-primary), transparent)' }}
        aria-hidden="true"
      />
    </section>
  )
}
