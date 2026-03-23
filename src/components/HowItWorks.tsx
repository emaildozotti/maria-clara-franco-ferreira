// DECISÃO CRIATIVA: Fundo Safira Suave (#4A6FA5) para diferenciação visual.
// Timeline vertical com 3 passos do processo terapêutico. Desmistificação incluída.

import { FadeIn } from '../App'

const steps = [
  {
    num: '01',
    title: 'Limpeza de Campo',
    text: 'Na primeira sessão, uso a Radiônica para acessar e limpar seu campo energético. Removo bloqueios acumulados: emoções negativas, padrões herdados, frequências que não são suas. Você sai mais leve. Literalmente.',
  },
  {
    num: '02',
    title: 'Investigação e Alinhamento',
    text: 'Investigo a raiz do bloqueio. Qual trauma, padrão mental ou crença está gerando a trava? Alinhar os chakras sem entender a causa é como limpar a superfície sem tratar a origem. Aqui, vamos à origem.',
  },
  {
    num: '03',
    title: 'Calibragem e Ferramentas',
    text: 'Calibro seu campo para o patamar mínimo de 350 Hz e te entrego ferramentas para manter a nova frequência. O processo não termina na sessão. Ele continua com você, todos os dias.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative overflow-hidden section-padding-lg"
      style={{ backgroundColor: '#4A6FA5' }}
    >
      <div className="container-ultra relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <FadeIn>
            <p
              className="uppercase tracking-[0.3em] text-[10px] md:text-xs mb-8 font-light"
              style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-bg-light)', opacity: 0.6 }}
            >
              Processo
            </p>
            <h2
              className="leading-[1.15] font-display"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                color: 'var(--color-bg-light)',
                letterSpacing: '-0.02em'
              }}
            >
              Três passos para tornar o{' '}
              <span className="italic font-light" style={{ color: 'var(--color-accent)' }}>
                invisível, visível.
              </span>
            </h2>
          </FadeIn>
        </div>

        {/* Timeline vertical */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.15} direction="up">
              <div
                className="relative pl-16 md:pl-24 pb-16 md:pb-20"
                style={{
                  borderLeft: i < steps.length - 1 ? '1px solid rgba(245, 247, 250, 0.15)' : 'none',
                }}
              >
                {/* Número do passo */}
                <span
                  className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color: 'var(--color-dark)',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {step.num}
                </span>

                <h3
                  className="text-xl md:text-2xl mb-4 font-display"
                  style={{ color: 'var(--color-bg-light)', fontWeight: 600 }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-base leading-relaxed font-light"
                  style={{ color: 'var(--color-bg-light)', opacity: 0.8 }}
                >
                  {step.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Desmistificação (metodo_requer_desmistificacao = true) */}
        <FadeIn delay={0.3}>
          <div
            className="max-w-2xl mx-auto mt-8 p-8 md:p-10 rounded-sm"
            style={{
              backgroundColor: 'rgba(245, 247, 250, 0.08)',
              border: '1px solid rgba(245, 247, 250, 0.1)',
            }}
          >
            <p
              className="text-sm md:text-base leading-relaxed font-light italic"
              style={{ color: 'var(--color-bg-light)', opacity: 0.85 }}
            >
              "Radiônica não é ritual. Não envolve crenças, dogmas ou qualquer prática que fira seu livre-arbítrio. É uma técnica de acesso e ajuste do campo energético humano, usada por profissionais que entendem que o ser humano é, antes de tudo, um sistema de frequências."
            </p>
          </div>
        </FadeIn>

        {/* Remove ansiedade */}
        <FadeIn delay={0.4}>
          <p
            className="text-center text-sm md:text-base font-light mt-12"
            style={{ color: 'var(--color-bg-light)', opacity: 0.6 }}
          >
            Você não precisa acreditar para funcionar. Precisa estar presente.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
