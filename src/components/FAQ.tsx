// DECISÃO CRIATIVA: Fundo Névoa Celestial (#E8EDF5). Minimalismo absoluto.
// AnimatePresence height 0→auto + opacity (NÃO max-height CSS).
// ZERO boxes/cards nas perguntas. Apenas border-b. Seta com rotate-180.

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FadeIn } from '../App'

const faqs = [
  {
    q: 'Já tentei outras terapias energéticas e não funcionou. Por que essa seria diferente?',
    a: 'Porque a maioria das terapias energéticas trabalha com sensação, não com parâmetro. Eu uso a Radiônica como técnica de acesso ao campo e a frequência de 350 Hz como métrica de resultado. Não é sobre sentir algo. É sobre medir. Se você já tentou outras abordagens e não teve resultado tangível, é possível que nunca tenham identificado a raiz real do bloqueio.',
  },
  {
    q: 'O atendimento é online?',
    a: 'Sim. A Radiônica permite acesso ao campo energético independente da distância física. O atendimento online tem a mesma eficácia do presencial, com a vantagem de você estar no conforto do seu próprio espaço.',
  },
  {
    q: 'Qual é o investimento?',
    a: 'Conversaremos sobre valores e formato na primeira conversa, com total transparência. O investimento depende do seu momento e da profundidade do trabalho necessário. O que posso adiantar: o custo de continuar travada é sempre maior.',
  },
  {
    q: 'Em quanto tempo vejo resultado?',
    a: 'Muitas pessoas relatam leveza já na primeira sessão. A transformação profunda acontece ao longo de 2 a 3 meses de processo. Não prometo tempo exato porque cada campo é único. Prometo técnica, presença e compromisso com o seu processo.',
  },
  {
    q: 'O que é Radiônica? É seguro?',
    a: 'Radiônica é uma técnica de acesso e ajuste do campo energético humano. Não envolve rituais, dogmas, medicamentos ou qualquer prática invasiva. É completamente segura, ética e respeita seu livre-arbítrio. Eu não faço nada sem sua autorização e presença consciente.',
  },
]

function FAQItem({ faq, isOpen, onToggle }: {
  faq: { q: string; a: string }
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className="border-b"
      style={{ borderColor: 'rgba(13, 27, 62, 0.1)' }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 md:py-8 text-left cursor-pointer gap-6 group"
        aria-expanded={isOpen}
      >
        <span
          className="text-xl md:text-2xl font-light leading-snug group-hover:opacity-100 transition-opacity"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--color-text)',
            opacity: isOpen ? 1 : 0.85
          }}
        >
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0"
          style={{ color: 'var(--color-accent)' }}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              className="pb-8 pr-12 text-xl leading-relaxed font-light"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-text)',
                opacity: 0.85,
              }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function handleToggle(i: number) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section
      id="faq"
      className="relative overflow-hidden section-padding-lg"
      style={{ backgroundColor: 'var(--color-bg-warm)' }}
    >
      <div className="container-ultra">

        {/* Layout Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 mb-32">

          {/* Coluna Esquerda: Título */}
          <div className="lg:sticky lg:top-32 h-fit">
            <FadeIn>
              <p
                className="uppercase tracking-[0.25em] text-[10px] md:text-xs mb-6 font-light"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.5 }}
              >
                Esclarecimentos
              </p>
              <h2
                className="leading-[1.1] font-display"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  color: 'var(--color-text)',
                  letterSpacing: '-0.02em'
                }}
              >
                O que você{' '}
                <span className="italic font-light block mt-2" style={{ color: 'var(--color-primary)' }}>
                  precisa saber.
                </span>
              </h2>
            </FadeIn>
          </div>

          {/* Coluna Direita: Acordeões */}
          <div className="border-t" style={{ borderColor: 'rgba(13, 27, 62, 0.1)' }}>
            <FadeIn delay={0.1}>
              <div>
                {faqs.map((faq, i) => (
                  <FAQItem
                    key={i}
                    faq={faq}
                    isOpen={openIndex === i}
                    onToggle={() => handleToggle(i)}
                  />
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

      </div>
    </section>
  )
}
