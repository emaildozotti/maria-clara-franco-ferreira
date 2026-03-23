// DECISÃO CRIATIVA: Fundo dark (#0D1B3E) com vídeo 9:16 centralizado.
// Container vertical com ring dourado e shadow profunda.

import { FadeIn } from '../App'

export default function VideoSection() {
  return (
    <section
      id="video"
      className="relative overflow-hidden section-padding"
      style={{ backgroundColor: 'var(--color-dark)' }}
    >
      <div className="container-ultra relative z-10 flex flex-col items-center text-center">

        {/* Contexto pré-vídeo (1ª pessoa) */}
        <FadeIn className="max-w-2xl mb-16">
          <p
            className="uppercase tracking-[0.3em] text-[10px] md:text-xs mb-8 font-light"
            style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-accent)', opacity: 0.8 }}
          >
            Assista
          </p>
          <p
            className="text-lg md:text-xl leading-relaxed font-light"
            style={{
              fontFamily: 'var(--font-sub)',
              color: 'var(--color-bg-light)',
              opacity: 0.9
            }}
          >
            Eu sei que parece estranho dizer que seu problema tem uma frequência. Que existe um número que explica por que sua vida trava. Mas antes de duvidar, me dê 60 segundos. Neste vídeo, eu explico o que acontece quando seu campo energético opera abaixo de 350 Hz.
          </p>
        </FadeIn>

        {/* Container de vídeo 9:16 */}
        <FadeIn delay={0.2}>
          <div
            className="relative mx-auto"
            style={{ maxWidth: '300px', width: '100%' }}
          >
            <div
              className="relative aspect-[9/16] rounded-sm overflow-hidden ring-1 shadow-2xl"
              style={{
                ringColor: 'var(--color-accent)',
                boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.6)',
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/YOUTUBE_ID_AQUI"
                title="VSL Maria Clara Franco Ferreira"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: 'none' }}
              />
            </div>
          </div>
        </FadeIn>

        {/* Âncora pós-vídeo */}
        <FadeIn delay={0.4} className="max-w-xl mt-16">
          <p
            className="text-base md:text-lg leading-relaxed font-light italic"
            style={{
              fontFamily: 'var(--font-sub)',
              color: 'var(--color-bg-light)',
              opacity: 0.7
            }}
          >
            Se você se reconheceu, o próximo passo é simples. Role para baixo e entenda como funciona o processo.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
