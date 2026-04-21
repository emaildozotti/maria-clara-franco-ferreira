// DECISÃO CRIATIVA: Fundo Névoa Celestial (#E8EDF5). Texto ANTES da foto no mobile.
// Foto com moldura dourada (photo treatment B). Blockquote editorial.

import { FadeIn } from '../App'

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden section-padding-lg"
      style={{ backgroundColor: 'var(--color-bg-warm)' }}
    >
      <div className="container-ultra relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Texto — order-2 md:order-1 (texto antes da foto no mobile) */}
          <div className="order-2 md:order-1">
            <FadeIn>
              <p
                className="uppercase tracking-[0.2em] text-[10px] md:text-xs mb-8 font-light"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.6 }}
              >
                Sobre Clara Aguiar
              </p>

              {/* Antes */}
              <p
                className="text-xl md:text-2xl leading-relaxed font-light mb-6"
                style={{ color: 'var(--color-text)', opacity: 0.85 }}
              >
                Eu vim do Serviço Social. Passei anos tentando ajudar pessoas com soluções externas. Programas, encaminhamentos, orientações. E percebi que não era suficiente. As mesmas pessoas voltavam com os mesmos problemas. Algo mais profundo precisava ser acessado.
              </p>

              {/* Virada */}
              <p
                className="text-xl md:text-2xl leading-relaxed font-light mb-6"
                style={{ color: 'var(--color-text)', opacity: 0.85 }}
              >
                A pandemia foi o catalisador. Quando o mundo parou, eu olhei para dentro. Descobri as Terapias Integrativas, a Radiônica, a ciência das frequências. E entendi que o ser humano é um sistema energético. Que as soluções externas não funcionam quando o campo interno está bloqueado.
              </p>

              {/* Hoje */}
              <p
                className="text-xl md:text-2xl leading-relaxed font-light mb-10"
                style={{ color: 'var(--color-text)', opacity: 0.85 }}
              >
                Hoje, eu combino a sensibilidade de quem trabalhou com pessoas em vulnerabilidade por anos com o rigor técnico da Radiônica. Eu não sou mais uma terapeuta holística. Eu sou a profissional que trouxe métrica para o invisível.
              </p>

              {/* Citação editorial */}
              <blockquote
                className="pl-6 italic font-light mb-10"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                  color: 'var(--color-text)',
                  borderLeft: '2px solid var(--color-accent)',
                  lineHeight: 1.4,
                }}
              >
                "Só você pode transformar sua realidade. Eu te ajudo a tornar o invisível, visível."
              </blockquote>

              {/* Credenciais */}
              <p
                className="text-base font-light"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.75 }}
              >
                Formação em Serviço Social. Especialização em Radiônica, Chacraterapia e Reprogramação Vibracional. Estudo constante em terapias integrativas e ciência das frequências.
              </p>
            </FadeIn>
          </div>

          {/* Foto — order-1 md:order-2 (foto depois do texto no mobile) */}
          <div className="order-1 md:order-2 flex justify-center">
            <FadeIn delay={0.2} direction="left">
              <div
                className="relative max-w-[400px] w-full"
              >
                <div
                  className="relative aspect-[3/4] overflow-hidden rounded-sm"
                  style={{
                    border: '2px solid #FFBD59',
                    boxShadow: '0 20px 40px -8px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  <img
                    src="/foto-maria-clara-sobre.jpg"
                    alt="Clara Aguiar"
                    className="w-full h-full object-cover object-center client-photo"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
                        svg.setAttribute('viewBox', '0 0 600 800')
                        svg.setAttribute('class', 'w-full h-full')
                        svg.innerHTML = '<rect fill="#CB6CE6" width="600" height="800"/><text fill="#FFBD59" font-size="28" x="300" y="400" text-anchor="middle" font-family="serif">Clara Aguiar</text>'
                        parent.appendChild(svg)
                      }
                    }}
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Transição */}
        <FadeIn delay={0.3}>
          <div className="text-center mt-20">
            <p
              className="text-xl md:text-2xl font-normal"
              style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.9 }}
            >
              E como funciona, na prática, o processo comigo?
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
