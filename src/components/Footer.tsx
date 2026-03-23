// DECISÃO CRIATIVA: Footer minimalista com CTA WhatsApp. Fundo dark (#0D1B3E).
// Nome como assinatura serifada italic. btn-shimmer no CTA final.

import { motion } from 'motion/react'
import { FadeIn } from '../App'

const WHATSAPP_URL = 'https://wa.me/5522988393631?text=Ol%C3%A1%20Maria%20Clara%2C%20vi%20sua%20p%C3%A1gina%20e%20quero%20saber%20mais%20sobre%20a%20Limpeza%20de%20Campo%20e%20Calibragem%20Frequencial.%20Meu%20nome%20%C3%A9%20'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: 'var(--color-dark)' }}
    >
      <div className="container-ultra relative z-10 flex flex-col items-center gap-12 text-center">

        {/* CTA Principal WhatsApp */}
        <FadeIn>
          <div className="flex flex-col items-center gap-8">
            <p
              className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-light"
              style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-accent)', opacity: 0.7 }}
            >
              Agende sua sessão
            </p>

            <h2
              className="leading-[1.1] font-display max-w-2xl"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--color-bg-light)',
                letterSpacing: '-0.02em',
              }}
            >
              Fale com Maria Clara e agende sua{' '}
              <span className="italic font-light" style={{ color: 'var(--color-accent)' }}>
                limpeza de campo.
              </span>
            </h2>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-shimmer mt-4"
            >
              Falar pelo WhatsApp
            </motion.a>
          </div>
        </FadeIn>

        {/* Separador */}
        <div
          className="w-12 h-px"
          style={{ backgroundColor: 'rgba(197, 165, 90, 0.3)' }}
          aria-hidden="true"
        />

        {/* Assinatura */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col items-center gap-4">
            <h3
              className="leading-none font-display italic"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                color: 'var(--color-bg-light)',
                letterSpacing: '-0.02em',
              }}
            >
              Maria Clara Franco Ferreira
            </h3>
            <p
              className="text-xs uppercase tracking-[0.3em]"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-accent)',
                opacity: 0.6,
              }}
            >
              Reprogramação Frequencial e Radiônica
            </p>
          </div>
        </FadeIn>

        {/* Footer info */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col items-center gap-4">
            <p
              className="text-sm font-light tracking-wide"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-accent)',
                opacity: 0.5,
              }}
            >
              Atendimento online e presencial
            </p>

            <p
              className="text-[10px] sm:text-[11px] uppercase tracking-widest"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-bg-light)',
                opacity: 0.25,
              }}
            >
              &copy; {currentYear} Maria Clara Franco Ferreira &middot; Todos os direitos reservados
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
