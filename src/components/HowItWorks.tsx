import { motion } from 'motion/react'
import { FadeIn } from '../App'

const WHATSAPP_URL = 'https://wa.me/5522988393631?text=Oi%2C%20acabei%20de%20vir%20da%20p%C3%A1gina%20da%20Clara%20e%20quero%20agendar%20uma%20consulta.'

const includes = [
  'Análise completa do seu campo energético',
  'Alinhamento dos chakras',
  'Limpeza do campo vibracional',
  'Investigação dos bloqueios',
  'Acompanhamento por 15 dias após a consulta',
]

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative overflow-hidden section-padding-lg"
      style={{ backgroundColor: '#3D1A4A' }}
    >
      {/* Linha decorativa dourada no topo */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, #FFBD59, transparent)' }} />

      {/* Glow sutil de fundo */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(203,108,230,0.08) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="container-ultra relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <FadeIn>
            <p
              className="uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 font-light"
              style={{ fontFamily: 'var(--font-sans)', color: '#FFBD59' }}
            >
              A Consulta
            </p>
            <h2
              className="leading-[1.15] font-display"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: '#FFFFFF',
                letterSpacing: '-0.02em'
              }}
            >
              Tudo o que você precisa,{' '}
              <span className="italic font-light" style={{ color: '#FFBD59' }}>
                em uma sessão.
              </span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* O que inclui */}
          <FadeIn delay={0.1} direction="up">
            <div className="card-on-dark p-10 rounded-sm h-full">
              <p
                className="uppercase tracking-[0.25em] text-[10px] mb-8 font-semibold"
                style={{ fontFamily: 'var(--font-sans)', color: '#CB6CE6' }}
              >
                O que está incluído
              </p>
              <ul className="flex flex-col gap-5">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-1 text-sm flex-shrink-0" style={{ color: '#FFBD59' }}>✦</span>
                    <p
                      className="text-lg leading-relaxed"
                      style={{ fontFamily: 'var(--font-sans)', color: '#1A0A2E', fontWeight: 400 }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Investimento + Como agendar */}
          <div className="flex flex-col gap-8">

            {/* Investimento */}
            <FadeIn delay={0.2} direction="up">
              <div className="card-on-dark p-10 rounded-sm">
                <p
                  className="uppercase tracking-[0.25em] text-[10px] mb-6 font-semibold"
                  style={{ fontFamily: 'var(--font-sans)', color: '#CB6CE6' }}
                >
                  Investimento
                </p>
                <p
                  className="font-display leading-none mb-5"
                  style={{
                    fontSize: 'clamp(2.8rem, 5vw, 3.8rem)',
                    color: '#FFBD59',
                    letterSpacing: '-0.02em',
                  }}
                >
                  R$ 600
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)', color: '#2D1B33', opacity: 0.85, fontWeight: 400 }}
                >
                  Pode ser feito de forma antecipada ou com um sinal para garantir a vaga. O valor precisa estar totalmente quitado antes da consulta.
                </p>
              </div>
            </FadeIn>

            {/* Como agendar */}
            <FadeIn delay={0.3} direction="up">
              <div className="card-on-dark p-10 rounded-sm">
                <p
                  className="uppercase tracking-[0.25em] text-[10px] mb-6 font-semibold"
                  style={{ fontFamily: 'var(--font-sans)', color: '#CB6CE6' }}
                >
                  Como agendar
                </p>
                <p
                  className="text-lg leading-relaxed mb-8"
                  style={{ fontFamily: 'var(--font-sans)', color: '#2D1B33', fontWeight: 400 }}
                >
                  Entre em contato com a equipe pelo WhatsApp para tirar dúvidas e finalizar o agendamento.
                </p>
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-shimmer inline-block"
                >
                  Falar com a equipe pelo WhatsApp
                </motion.a>
              </div>
            </FadeIn>

          </div>
        </div>

      </div>

      {/* Linha decorativa dourada no rodapé */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, #FFBD5940, transparent)' }} />
    </section>
  )
}
