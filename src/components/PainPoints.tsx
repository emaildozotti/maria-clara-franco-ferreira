// DECISÃO CRIATIVA: Fundo Névoa Celestial (#E8EDF5) para contraste com Hero dark.
// Cards editoriais com bordas finas e padding generoso. Numeração decorativa em dourado.

import { FadeIn } from '../App'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const pains = [
  {
    num: '01',
    text: 'Trabalha, tenta, busca. E continua no mesmo lugar, como se pisasse em areia movediça.',
  },
  {
    num: '02',
    text: 'O dinheiro entra e some sem explicação. A escassez virou um padrão que nenhum esforço resolve.',
  },
  {
    num: '03',
    text: 'Acorda cansada mesmo depois de dormir. O corpo pesa, o ânimo some, a vitalidade parece ter sido drenada.',
  },
  {
    num: '04',
    text: 'Os mesmos padrões se repetem nos relacionamentos. Pessoas diferentes, mesma dor, mesmo desfecho.',
  },
]

export default function PainPoints() {
  return (
    <section
      id="pain"
      className="relative overflow-hidden section-padding-lg"
      style={{ backgroundColor: 'var(--color-bg-warm)' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary/20 to-transparent" />

      <div className="relative z-10 container-ultra">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-32 w-full">

          {/* Coluna Esquerda */}
          <div className="lg:w-2/5 lg:sticky lg:top-32">
            <FadeIn>
              <p
                className="uppercase tracking-[0.2em] text-[10px] md:text-xs mb-8 font-light"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.6 }}
              >
                Reconhecimento
              </p>
              <h2
                className="leading-[1.15] mb-8 font-display"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  color: 'var(--color-text)',
                  letterSpacing: '-0.02em'
                }}
              >
                Você sente que faz tudo certo,{' '}
                <span className="italic font-light" style={{ color: 'var(--color-accent)' }}>
                  mas a vida simplesmente não anda?
                </span>
              </h2>

              <div className="mt-16 hidden lg:block">
                <button
                  onClick={() => scrollToSection('video')}
                  className="btn-shimmer-light w-full md:w-auto"
                >
                  Entenda o que te trava
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Coluna Direita — Cards */}
          <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {pains.map((pain, i) => (
              <FadeIn key={i} delay={i * 0.15} direction="up">
                <div
                  className="p-10 h-full flex flex-col justify-between transition-colors duration-500 hover:bg-white"
                  style={{
                    border: '1px solid rgba(13, 27, 62, 0.05)',
                    backgroundColor: 'transparent'
                  }}
                >
                  <span
                    className="font-display text-3xl mb-12 opacity-30"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {pain.num}
                  </span>
                  <p
                    className="text-lg md:text-xl leading-relaxed font-normal"
                    style={{ fontFamily: 'var(--font-sub)', color: 'var(--color-text)' }}
                  >
                    {pain.text}
                  </p>
                </div>
              </FadeIn>
            ))}

            {/* Conclusão FadeIn separado */}
            <FadeIn direction="up" delay={0.3}>
              <div className="pl-6 border-l mt-4 md:mt-8 w-full max-w-lg md:col-span-2" style={{ borderColor: 'var(--color-accent)' }}>
                <p
                  className="text-lg md:text-xl leading-relaxed font-light italic"
                  style={{
                    fontFamily: 'var(--font-sub)',
                    color: 'var(--color-text)',
                    opacity: 0.8
                  }}
                >
                  O que esses quatro sintomas têm em comum? Nenhum deles é visível. E essa é exatamente a razão pela qual você ainda não conseguiu resolver.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="lg:hidden mt-12 w-full flex justify-center">
            <button
              onClick={() => scrollToSection('video')}
              className="btn-shimmer-light w-full"
            >
              Entenda o que te trava
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
