export const metadata = {
  title: 'Empresa | Zinguería Adaro',
  description:
    'Conocé la historia, el oficio y la forma de trabajo de Zinguería Adaro, especialistas en soluciones de chapa y zinguería para obra.',
};

export default function EmpresaPage() {
  return (
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
    </section>
  );
}
