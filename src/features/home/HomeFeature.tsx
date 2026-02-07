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
              <h2 id="home-cta-heading">Escribinos por WhatsApp</h2>
              <p>
                Contanos brevemente de tu proyecto y te respondemos con una orientación clara sobre el trabajo de
                zinguería que necesitás.
              </p>
            </div>
            <div className="home-cta__actions">
              <Button
                href="https://wa.me/5491169172539?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto%20de%20zinguer%C3%ADa.%0AEs%20para%20una%20vivienda/comercio%20en%20la%20zona%20de%20%0AQuedo%20atento/a,%20gracias."
              >
                Solicitar presupuesto por WhatsApp
              </Button>
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

        <RevealOnScroll>
          <section className="home-extra" aria-labelledby="home-extra-casos-heading">
            <header className="home-extra__header">
              <h2 id="home-extra-casos-heading">Casos frecuentes</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae risus vitae
                nibh consectetur interdum.
              </p>
            </header>
            <div className="home-extra__grid">
              <article className="home-extra__item">
                <h3 className="home-extra__item-title">Reformas en vivienda existente</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus sit amet
                  lacus luctus mollis. Curabitur vulputate, urna in fermentum maximus, velit orci
                  efficitur dui, id dictum sapien dui a lorem.
                </p>
              </article>
              <article className="home-extra__item">
                <h3 className="home-extra__item-title">Obras nuevas en altura</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                  curae; Nullam porttitor, justo non facilisis efficitur, ligula velit pretium
                  lectus.
                </p>
              </article>
              <article className="home-extra__item">
                <h3 className="home-extra__item-title">Locales a la calle</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec purus dictum,
                  consectetur justo id, ultrices est. Vivamus id gravida lorem, vitae vulputate
                  dolor. Praesent eget ex ut eros gravida vestibulum.
                </p>
              </article>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="home-extra" aria-labelledby="home-extra-detalles-heading">
            <header className="home-extra__header">
              <h2 id="home-extra-detalles-heading">Detalles técnicos</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae risus vitae
                nibh consectetur interdum.
              </p>
            </header>
            <div className="home-extra__grid">
              <article className="home-extra__item">
                <h3 className="home-extra__item-title">Pendientes y desagües</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus sit amet
                  lacus luctus mollis. Curabitur vulputate, urna in fermentum maximus, velit orci
                  efficitur dui, id dictum sapien dui a lorem.
                </p>
              </article>
              <article className="home-extra__item">
                <h3 className="home-extra__item-title">Encuentros con muros y aberturas</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                  curae; Nullam porttitor, justo non facilisis efficitur, ligula velit pretium
                  lectus.
                </p>
              </article>
              <article className="home-extra__item">
                <h3 className="home-extra__item-title">Terminaciones y mantenimiento</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec purus dictum,
                  consectetur justo id, ultrices est. Vivamus id gravida lorem, vitae vulputate
                  dolor. Praesent eget ex ut eros gravida vestibulum.
                </p>
              </article>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="home-extra" aria-labelledby="home-extra-pruebas-uno-heading">
            <header className="home-extra__header">
              <h2 id="home-extra-pruebas-uno-heading">Sección de prueba uno</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae risus vitae
                nibh consectetur interdum.
              </p>
            </header>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="home-extra" aria-labelledby="home-extra-pruebas-dos-heading">
            <header className="home-extra__header">
              <h2 id="home-extra-pruebas-dos-heading">Sección de prueba dos</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae risus vitae
                nibh consectetur interdum.
              </p>
            </header>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="home-extra" aria-labelledby="home-extra-pruebas-tres-heading">
            <header className="home-extra__header">
              <h2 id="home-extra-pruebas-tres-heading">Sección de prueba tres</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae risus vitae
                nibh consectetur interdum.
              </p>
            </header>
          </section>
        </RevealOnScroll>
      </section>
    </>
  );
}
