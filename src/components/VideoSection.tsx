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
            style={{
              width: '300px',
              maxWidth: '100%',
              aspectRatio: '9 / 16',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid #C5A55A',
              boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.6)',
              backgroundColor: '#000',
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/TOGJwI9oAcw"
              title="VSL Maria Clara Franco Ferreira"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            />
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
