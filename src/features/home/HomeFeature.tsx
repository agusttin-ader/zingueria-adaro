import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Button from '@/components/Button';

// Server Component por defecto
export default function HomeFeature() {
  return (
    <>
      <Hero />

      <section className="home-block">
        <Services />

        <section className="home-cta" aria-labelledby="home-cta-heading">
          <div className="home-cta__content">
            <h2 id="home-cta-heading">Hablemos de tu proyecto</h2>
            <p>Escribinos con calma y vemos juntos qué necesitás en zinguería.</p>
          </div>
          <div className="home-cta__actions">
            <Button href="#contacto">Solicitar presupuesto</Button>
          </div>
        </section>
      </section>
    </>
  );
}
