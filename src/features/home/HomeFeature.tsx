import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Button from '@/components/Button';
import RevealOnScroll from '@/components/RevealOnScroll';

// Server Component por defecto
export default function HomeFeature() {
  return (
    <>
      <Hero />

      <section className="home-block">
        <Services />

        <RevealOnScroll>
          <section className="home-cta" aria-labelledby="home-cta-heading">
            <div className="home-cta__content">
              <h2 id="home-cta-heading">Hablemos de tu proyecto</h2>
              <p>Escribinos con calma y vemos juntos qué necesitás en zinguería.</p>
            </div>
            <div className="home-cta__actions">
              <Button href="#contacto">Solicitar presupuesto</Button>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="home-extra" aria-labelledby="home-extra-categorias-heading">
            <header className="home-extra__header">
              <h2 id="home-extra-categorias-heading">Trabajos por categoría</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae risus vitae
                nibh consectetur interdum.
              </p>
            </header>
            <div className="home-extra__grid">
              <article className="home-extra__item">
                <h3 className="home-extra__item-title">Viviendas unifamiliares</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus sit amet
                  lacus luctus mollis. Curabitur vulputate, urna in fermentum maximus, velit orci
                  efficitur dui, id dictum sapien dui a lorem.
                </p>
              </article>
              <article className="home-extra__item">
                <h3 className="home-extra__item-title">Comercios y locales</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                  curae; Nullam porttitor, justo non facilisis efficitur, ligula velit pretium
                  lectus.
                </p>
              </article>
              <article className="home-extra__item">
                <h3 className="home-extra__item-title">Obras industriales</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec purus dictum,
                  consectetur justo id, ultrices est. Vivamus id gravida lorem, vitae vulputate
                  dolor. Praesent eget ex ut eros gravida vestibulum.
                </p>
              </article>
            </div>
          </section>
        </RevealOnScroll>
      </section>
    </>
  );
}
