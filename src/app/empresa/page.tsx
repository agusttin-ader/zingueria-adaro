import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata = {
  title: 'Empresa | Zinguería Adaro',
  description:
    'Conocé la historia, el oficio y la forma de trabajo de Zinguería Adaro, especialistas en soluciones de chapa y zinguería para obra.',
};

export default function EmpresaPage() {
  return (
    <RevealOnScroll>
      <section className="empresa">
        <header className="empresa__header">
          <h1 className="empresa__title">Empresa</h1>
          <p className="empresa__lead">
            Más de 60 años de trayectoria combinando trabajo artesanal con tecnología para resolver
            trabajos de zinguería en viviendas y comercios.
          </p>
        </header>
        <div className="empresa__grid">
          <section>
            <h2 className="empresa__subtitle">Oficio y precisión</h2>
            <p>
              Cada pieza se corta, pliega e instala a medida, cuidando encuentros, pendientes y terminaciones
              para que la zinguería funcione bien cuando la obra tiene que responder a la lluvia y al uso
              diario.
            </p>
          </section>

          <section>
            <h2 className="empresa__subtitle">Tecnología aplicada al taller</h2>
            <p>
              Sumamos máquinas y procesos que mejoran la repetición y el acabado, sin perder el control del
              oficio. Así podemos resolver trabajos para viviendas y comercios con plazos claros y buena
              terminación.
            </p>
          </section>
        </div>

        <section className="empresa-extra" aria-labelledby="empresa-extra-heading">
          <header className="empresa-extra__header">
            <h2 id="empresa-extra-heading">Líneas de trabajo</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae risus vitae nibh
              consectetur interdum.
            </p>
          </header>
          <div className="empresa-extra__grid">
            <article className="empresa-extra__item">
              <h3 className="empresa-extra__item-title">Proyectos a medida</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus sit amet lacus
                luctus mollis. Curabitur vulputate, urna in fermentum maximus, velit orci efficitur dui,
                id dictum sapien dui a lorem.
              </p>
            </article>
            <article className="empresa-extra__item">
              <h3 className="empresa-extra__item-title">Mantenimiento y ajustes</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam
                porttitor, justo non facilisis efficitur, ligula velit pretium lectus.
              </p>
            </article>
            <article className="empresa-extra__item">
              <h3 className="empresa-extra__item-title">Asesoramiento técnico</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec purus dictum, consectetur
                justo id, ultrices est. Vivamus id gravida lorem, vitae vulputate dolor. Praesent eget ex ut
                eros gravida vestibulum.
              </p>
            </article>
          </div>
        </section>

        <section className="empresa-categories" aria-labelledby="empresa-categories-heading">
          <header className="empresa-categories__header">
            <h2 id="empresa-categories-heading">Cómo trabajamos</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae risus vitae nibh
              consectetur interdum.
            </p>
          </header>
          <div className="empresa-categories__grid">
            <article className="empresa-categories__item">
              <h3 className="empresa-categories__item-title">Valores de la empresa</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus sit amet lacus
                luctus mollis. Curabitur vulputate, urna in fermentum maximus, velit orci efficitur dui,
                id dictum sapien dui a lorem.
              </p>
            </article>
            <article className="empresa-categories__item">
              <h3 className="empresa-categories__item-title">Proceso de trabajo</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam
                porttitor, justo non facilisis efficitur, ligula velit pretium lectus.
              </p>
            </article>
            <article className="empresa-categories__item">
              <h3 className="empresa-categories__item-title">Materiales y calidad</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec purus dictum, consectetur
                justo id, ultrices est. Vivamus id gravida lorem, vitae vulputate dolor. Praesent eget ex ut
                eros gravida vestibulum.
              </p>
            </article>
            <article className="empresa-categories__item">
              <h3 className="empresa-categories__item-title">Experiencia y trayectoria</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis egestas. Integer tempor, justo sed
                suscipit ultrices, ipsum mi cursus lectus, at consequat nisi erat non ipsum.
              </p>
            </article>
          </div>
        </section>
      </section>
    </RevealOnScroll>
  );
}
