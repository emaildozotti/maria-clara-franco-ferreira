// DECISÃO CRIATIVA: Carrossel Ultra Premium com crossfade AnimatePresence.
// Fundo Índigo Profundo (#1A365D). 3 depoimentos curados. Aspa decorativa 120px.

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FadeIn } from '../App'

const testimonials = [
  {
    text: 'Eu sentia que fazia tudo certo e nada mudava. Em dois meses de trabalho com Maria Clara, a escassez financeira que me acompanhava há anos começou a se dissolver. Não foi mágica. Foi técnica. Pela primeira vez, alguém me mostrou o que estava invisível.',
    name: 'Fernanda R.',
    role: 'Empresária, Rio de Janeiro',
  },
  {
    text: 'Cheguei cética. Já tinha tentado reiki, constelação, terapia floral. Nada mudava de verdade. Maria Clara foi diferente. Me mostrou um número, me explicou o processo, me pediu presença. Em três meses, meus relacionamentos pararam de repetir o mesmo padrão.',
    name: 'Juliana M.',
    role: 'Professora, Campos dos Goytacazes',
  },
  {
    text: 'O cansaço que eu sentia não era físico. Era do campo. Depois da primeira sessão de Radiônica com Maria Clara, acordei leve pela primeira vez em anos. Literalmente. Não é exagero. É o que acontece quando o campo é limpo.',
    name: 'Patrícia S.',
    role: 'Advogada, Macaé',
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden section-padding-lg bg-primary"
    >
      <div className="container-ultra relative z-10 flex flex-col items-center">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-16 md:mb-24">
          <FadeIn>
            <p
              className="uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 font-light"
              style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-accent)', opacity: 0.8 }}
            >
              Vozes Reais
            </p>
            <h2
              className="leading-[1.1] font-display"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: 'var(--color-bg-light)',
                letterSpacing: '-0.02em'
              }}
            >
              O que dizem as pessoas{' '}
              <span className="italic font-light block mt-2" style={{ color: 'var(--color-accent)', opacity: 0.9 }}>
                que tornaram o invisível, visível.
              </span>
            </h2>
          </FadeIn>
        </div>

        {/* Carrossel */}
        <FadeIn delay={0.2} className="w-full max-w-4xl mx-auto relative px-4 md:px-16">
          {/* Aspa decorativa */}
          <span
            className="absolute -top-10 md:-top-16 left-0 md:left-8 leading-none select-none font-display text-[6rem] md:text-[8rem]"
            style={{
              color: 'var(--color-accent)',
              opacity: 0.1,
            }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <div className="relative min-h-[300px] md:min-h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col justify-center items-center text-center"
              >
                <p
                  className="text-xl md:text-3xl leading-relaxed mb-10 font-light"
                  style={{
                    fontFamily: 'var(--font-sub)',
                    color: 'var(--color-bg-light)',
                    opacity: 0.95
                  }}
                >
                  {testimonials[currentIndex].text}
                </p>
                <footer className="flex flex-col gap-2 items-center">
                  <div className="w-8 h-px opacity-40 mb-2" style={{ backgroundColor: 'var(--color-accent)' }} />
                  <p
                    className="text-sm md:text-base uppercase tracking-widest font-medium"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--color-accent)',
                    }}
                  >
                    {testimonials[currentIndex].name}
                  </p>
                  <p
                    className="text-xs md:text-sm font-light tracking-wide"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--color-bg-light)',
                      opacity: 0.4
                    }}
                  >
                    {testimonials[currentIndex].role}
                  </p>
                </footer>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-center gap-8 mt-16 md:mt-24 relative z-20">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-105"
              style={{ borderColor: 'rgba(197, 165, 90, 0.3)', color: 'var(--color-accent)' }}
              aria-label="Depoimento Anterior"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${i === currentIndex ? 'scale-125' : 'opacity-30'}`}
                  style={{ backgroundColor: 'var(--color-accent)' }}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-105"
              style={{ borderColor: 'rgba(197, 165, 90, 0.3)', color: 'var(--color-accent)' }}
              aria-label="Próximo Depoimento"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
