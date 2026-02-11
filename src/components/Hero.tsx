import Button from '@/components/Button';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function Hero() {
  return (
    <RevealOnScroll>
      <section className="hero">
        <div className="hero__media" aria-hidden>
          <video
            className="hero__video"
            src="/images/videos/hero-video.mp4"
            poster="/images/techo-1.jpg"
            preload="metadata"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <div className="hero__content">
          <h1 className="hero__title">Más de 60 años de experiencia en trabajos de zinguería</h1>
          <p className="hero__subtitle">Soluciones a medida para viviendas y comercios.</p>
          <div className="hero__actions">
            <Button href="/contacto">Consultar</Button>
            <p className="hero__secondary-contact">
              También podés escribirnos a{' '}
              <a href="mailto:contacto@zingueriaadaro.com">contacto@zingueriaadaro.com</a>.
            </p>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
}
