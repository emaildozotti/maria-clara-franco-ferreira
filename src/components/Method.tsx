// DECISÃO CRIATIVA: Fundo claro (#F5F7FA). Numeração decorativa '01' '02' '03' em
// Cormorant Garamond 8rem opacity-6% como signature element. 350 Hz como referência.

import { motion } from 'motion/react'
import { FadeIn } from '../App'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const pillars = [
  {
    num: '01',
    title: 'Radiestesia Acessa, Radiônica Corrige',
    text: 'A Radiestesia acessa seu campo e identifica o que está bloqueado. Com a Radiônica, se corrige o que for necessário. Diagnóstico e ajuste em um só processo.',
  },
  {
    num: '02',
    title: 'Limpeza de Campo',
    text: 'Limpeza do campo vibracional via Radiestesia, Radiônica e Energy Healing. Camadas de emoções negativas, padrões herdados e frequências que não são suas — removidas.',
  },
  {
    num: '03',
    title: 'Calibragem para Acima de 350 Hz',
    text: '350 Hz é a frequência da Aceitação e da Prontidão. Abaixo disso, o corpo opera em modo de sobrevivência. A calibragem leva seu campo para um patamar onde a vida começa a fluir.',
  },
  {
    num: '04',
    title: 'Base Integrativa e Holística',
    text: 'Descobri as Terapias Integrativas e holísticas e aprendi a combiná-las: a Radiestesia, a Radiônica, a Ciência das Frequências, a Chakroterapia e outras abordagens que se complementam.',
  },
]

export default function Method() {
  return (
    <section
      id="method"
      className="relative overflow-hidden section-padding-lg"
      style={{ backgroundColor: 'var(--color-bg-light)' }}
    >
      <div className="container-ultra relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <FadeIn>
            <p
              className="uppercase tracking-[0.2em] text-[10px] md:text-xs mb-8 font-light"
              style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.8 }}
            >
              Método
            </p>
            <h2
              className="leading-[1.15] mb-8 font-display"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: 'var(--color-text)',
                letterSpacing: '-0.02em'
              }}
            >
              O que eu faço é tornar o{' '}
              <span className="italic font-light" style={{ color: 'var(--color-accent)' }}>
                invisível, visível.
              </span>
            </h2>
            <p
              className="text-xl md:text-2xl leading-relaxed font-light max-w-2xl"
              style={{ fontFamily: 'var(--font-sub)', color: 'var(--color-text)', opacity: 0.9 }}
            >
              Eu não prometo cura milagrosa. A cura é um processo de busca mútua: eu entro com a técnica, você entra com a presença. O que eu posso garantir é que vou encontrar o que está travando e calibrar seu campo para que a vida volte a fluir.
            </p>
          </FadeIn>
        </div>

        {/* 3 Pilares com numeração decorativa */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
          {pillars.map((pillar, i) => (
            <FadeIn key={i} delay={i * 0.15} direction="up">
              <div
                className="card-on-light relative p-10 h-full rounded-sm transition-shadow duration-500 hover:shadow-xl"
              >
                {/* Numeração decorativa (signature element) */}
                <span
                  className="absolute top-4 left-6 leading-none pointer-events-none select-none font-display"
                  style={{
                    fontSize: '8rem',
                    fontWeight: 300,
                    opacity: 0.06,
                    color: 'var(--color-text)',
                  }}
                  aria-hidden="true"
                >
                  {pillar.num}
                </span>

                <div className="relative z-10">
                  <h3
                    className="text-xl md:text-2xl mb-6 leading-tight font-display"
                    style={{ color: 'var(--color-text)', fontWeight: 600 }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-lg leading-relaxed font-light"
                    style={{ color: 'var(--color-text)', opacity: 0.9 }}
                  >
                    {pillar.text}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* O que NÃO prometo */}
        <FadeIn delay={0.2}>
          <div
            className="max-w-2xl mx-auto text-center p-10"
            style={{ borderTop: '1px solid rgba(13, 27, 62, 0.08)' }}
          >
            <p
              className="text-base md:text-lg leading-relaxed font-light"
              style={{ color: 'var(--color-text)', opacity: 0.9 }}
            >
              Não prometo milagres. Não substituo tratamento médico. Não atendo terceiros sem autorização. Respeito absoluto ao seu livre-arbítrio. A transformação exige que você esteja presente e comprometida com o processo.
            </p>
          </div>
        </FadeIn>

        {/* Transição */}
        <FadeIn delay={0.3}>
          <div className="text-center mt-16">
            <p
              className="text-xl md:text-2xl italic font-light mb-8"
              style={{ fontFamily: 'var(--font-sub)', color: 'var(--color-text)', opacity: 0.9 }}
            >
              Por que eu escolhi esse caminho? Porque vivi a transformação primeiro.
            </p>
            <motion.button
              onClick={() => scrollToSection('about')}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-shimmer-light"
            >
              Conheça minha história
            </motion.button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
