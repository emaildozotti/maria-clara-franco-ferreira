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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#3D1A4A' }}
    >
      {/* Header desktop sticky */}
      <header
        className="hidden md:block fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
        style={{ backgroundColor: 'rgba(61,26,74,0.85)', borderColor: 'rgba(255,189,89,0.12)' }}
      >
        <div className="container-ultra flex items-center justify-between py-5">
          <span
            className="font-display text-lg tracking-tight italic"
            style={{ color: '#F8F2F7' }}
          >
            Clara Aguiar
          </span>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-[10px] uppercase tracking-[0.22em] font-light transition-opacity hover:opacity-100"
            style={{ fontFamily: 'var(--font-sans)', color: '#FFBD59', opacity: 0.85 }}
          >
            Agendar sessão
          </button>
        </div>
      </header>

      {/* ── Aurora blobs ── */}
      {/* Blob 1 — roxo grande, canto superior esquerdo */}
      <div
        className="blur-orb w-[700px] h-[700px] -top-40 -left-48"
        style={{
          backgroundColor: 'rgba(203,108,230,0.40)',
          animation: 'aurora-1 18s ease-in-out infinite',
        }}
        aria-hidden="true"
      />
      {/* Blob 2 — dourado, lado direito */}
      <div
        className="blur-orb w-[500px] h-[500px] top-1/3 -right-40"
        style={{
          backgroundColor: 'rgba(255,189,89,0.18)',
          animation: 'aurora-2 22s ease-in-out infinite',
          animationDelay: '2s',
        }}
        aria-hidden="true"
      />
      {/* Blob 3 — roxo médio, parte inferior */}
      <div
        className="blur-orb w-[500px] h-[500px] bottom-0 left-1/4"
        style={{
          backgroundColor: 'rgba(203,108,230,0.28)',
          animation: 'aurora-3 26s ease-in-out infinite',
          animationDelay: '4s',
        }}
        aria-hidden="true"
      />
      {/* Blob 4 — halo central difuso para preencher o centro */}
      <div
        className="blur-orb w-[900px] h-[500px] top-1/2 left-1/2"
        style={{
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(203,108,230,0.08)',
          animation: 'aurora-1 30s ease-in-out infinite reverse',
          animationDelay: '6s',
        }}
        aria-hidden="true"
      />

      {/* Grain texture overlay — profundidade premium */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          opacity: 0.035,
        }}
        aria-hidden="true"
      />

      {/* Conteúdo principal */}
      <div
        className="relative z-10 container-ultra mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
        style={{ paddingTop: '5rem', paddingBottom: '4rem' }}
      >

        {/* Coluna de Texto */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-7 md:gap-9">

          {/* Linha decorativa + eyebrow */}
          <FadeIn direction="down" delay={0}>
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div style={{ width: '32px', height: '1px', backgroundColor: '#FFBD59', opacity: 0.7 }} />
              <p
                className="uppercase tracking-[0.3em] text-[10px] font-light"
                style={{ fontFamily: 'var(--font-sans)', color: '#FFBD59', opacity: 0.9 }}
              >
                Quando algo invisível trava tudo
              </p>
            </div>
          </FadeIn>

          {/* H1 */}
          <FadeIn delay={0.15}>
            <h1
              className="font-display leading-[1.08] tracking-tight"
              style={{
                fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)',
                color: '#F8F2F7',
              }}
            >
              Você faz tudo certo.{' '}
              <br className="hidden lg:block" />
              <span
                className="italic font-light"
                style={{ color: '#FFBD59' }}
              >
                E alguma coisa, sempre,{' '}
                <br className="hidden lg:block" />
                te puxa para trás.
              </span>
            </h1>
          </FadeIn>

          {/* Subtítulo */}
          <FadeIn delay={0.30}>
            <p
              className="max-w-lg leading-relaxed font-light"
              style={{
                fontFamily: 'var(--font-sub)',
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                color: 'rgba(248,242,247,0.80)',
              }}
            >
              Relacionamentos que afundam, dinheiro que some, sonhos que travam no último minuto. Não é azar. Tem{' '}
              <span style={{ color: '#FFBD59', fontStyle: 'italic' }}>algo invisível</span>{' '}
              no seu caminho, e eu sei exatamente o que é.
            </p>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.45}>
            <motion.button
              onClick={() => scrollToSection('pain')}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-shimmer mt-2"
            >
              Quero entender o que me prende
            </motion.button>
          </FadeIn>
        </div>

        {/* Coluna da Imagem */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <FadeIn delay={0.35} direction="left" className="relative">
            <div style={{ maxWidth: '420px', width: '100%', position: 'relative' }}>

              {/* Moldura decorativa offset — elemento premium */}
              <div
                className="absolute -top-3 -right-3 -bottom-3 -left-3 pointer-events-none"
                style={{
                  border: '1px solid rgba(255,189,89,0.18)',
                  borderRadius: '2px',
                }}
              />

              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: '3/4',
                  borderRadius: '2px',
                  border: '1px solid rgba(255,189,89,0.45)',
                  boxShadow: '0 32px 64px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,189,89,0.08)',
                }}
              >
                {/* Overlay sutil escuro — não lavanda */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(61,26,74,0.15) 0%, transparent 50%)' }}
                />

                <img
                  src="/foto-maria-clara.jpg"
                  alt="Clara Aguiar"
                  className="w-full h-full object-cover object-center transition-transform duration-[2s] ease-out hover:scale-103"
                />

                {/* Gradiente inferior — escuro, não lavanda */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-2/5 z-20 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, #3D1A4A 0%, rgba(61,26,74,0.4) 50%, transparent 100%)' }}
                />
              </div>

              {/* Badge decorativo — frequência */}
              <div
                className="absolute -bottom-4 -left-4 z-30 px-4 py-2"
                style={{
                  backgroundColor: '#3D1A4A',
                  border: '1px solid rgba(255,189,89,0.4)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.25em] font-light"
                  style={{ fontFamily: 'var(--font-sans)', color: '#FFBD59' }}
                >
                  350 Hz ✦ Frequencial
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <FadeIn delay={1.6} className="hidden md:flex absolute bottom-10 flex-col items-center gap-3 cursor-pointer z-20">
        <div
          onClick={() => scrollToSection('pain')}
          className="flex flex-col items-center gap-3 hover:opacity-70 transition-opacity"
        >
          <span
            className="text-[9px] uppercase tracking-[0.3em]"
            style={{ color: '#FFBD59', opacity: 0.6 }}
          >
            Descubra
          </span>
          <div className="line-separator h-10" />
        </div>
      </FadeIn>

      {/* Gradiente inferior — escuro puro, sem lavanda */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #3D1A4A, transparent)' }}
        aria-hidden="true"
      />
    </section>
  )
}
