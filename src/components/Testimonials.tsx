import { FadeIn } from '../App'

const videos = [
  { src: 'https://drive.google.com/file/d/1eCw7mbJLrKvqIyhlqmVFIE6aIYxYHTYJ/preview' },
  { src: 'https://drive.google.com/file/d/1O6RvfVBYkuEnR1y3CHa1B9cAd4hIpGZU/preview' },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden section-padding-lg"
      style={{ backgroundColor: '#3D1A4A' }}
    >
      {/* Linha decorativa dourada no topo */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, #FFBD59, transparent)' }}
      />

      <div className="container-ultra relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <FadeIn>
            <p
              className="uppercase tracking-[0.3em] text-xs mb-6 font-light"
              style={{ fontFamily: 'var(--font-sans)', color: '#FFBD59', opacity: 0.8 }}
            >
              Vozes Reais
            </p>
            <h2
              className="leading-[1.1] font-display"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: '#F8F2F7',
                letterSpacing: '-0.02em',
              }}
            >
              Quem já tornou{' '}
              <span className="italic font-light" style={{ color: '#FFBD59' }}>
                o invisível, visível.
              </span>
            </h2>
          </FadeIn>
        </div>

        {/* Vídeos lado a lado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {videos.map((video, i) => (
            <FadeIn key={i} delay={i * 0.15} direction="up">
              <div
                className="relative w-full overflow-hidden"
                style={{
                  aspectRatio: '9/16',
                  border: '1px solid rgba(255,189,89,0.25)',
                  boxShadow: '0 24px 48px -8px rgba(0,0,0,0.5)',
                }}
              >
                <iframe
                  src={video.src}
                  className="w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                  frameBorder={0}
                  title={`Depoimento ${i + 1}`}
                  style={{ display: 'block' }}
                />
              </div>
            </FadeIn>
          ))}
        </div>

      </div>

      {/* Linha decorativa dourada no rodapé */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,189,89,0.4), transparent)' }}
      />
    </section>
  )
}
