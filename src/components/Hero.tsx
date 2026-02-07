import Button from '@/components/Button';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Más de 60 años de experiencia en trabajos de zinguería</h1>
        <p className="hero__subtitle">Soluciones a medida para viviendas y comercios.</p>
        <div className="hero__actions">
          <Button href="#contacto">Consultar</Button>
        </div>
      </div>
    </section>
  );
}
