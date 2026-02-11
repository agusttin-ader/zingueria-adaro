import Button from '@/components/Button';
import RevealOnScroll from '@/components/RevealOnScroll';

const SERVICES = [
  {
    title: 'Canaletas y desagües pluviales',
    description: 'Fabricación y colocación a medida para conducir el agua sin dañar frentes ni paredes.',
  },
  {
    title: 'Extractores eólicos',
    description: 'Instalación de extractores que renuevan el aire en galpones y locales.',
  },
  {
    title: 'Claraboyas',
    description: 'Fabricación e instalación de claraboyas que suman luz natural y cuidan la aislación.',
  },
  {
    title: 'Colocación de membranas',
    description: 'Aplicación de membranas en techos planos o inclinados para reducir filtraciones.',
  },
  {
    title: 'Reemplazo de chapas',
    description: 'Cambio de chapas plásticas y galvanizadas dañadas por piezas nuevas bien fijadas.',
  },
];

export default function Services() {
  return (
    <RevealOnScroll>
      <section className="services" aria-labelledby="services-heading">
        <header className="services__header">
          <h2 id="services-heading" className="services__title">
            Servicios principales
          </h2>
          <p className="services__lead">
            Zinguería para obras que necesitan piezas a medida, bien calculadas y bien instaladas.
          </p>
        </header>

        <div className="services__grid">
          {SERVICES.map((service) => (
            <article key={service.title} className="services__item">
              <h3 className="services__item-title">{service.title}</h3>
              <p className="services__item-text">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="services__cta">
          <Button href="/contacto">
            Ver más servicios
          </Button>
        </div>
      </section>
    </RevealOnScroll>
  );
}
