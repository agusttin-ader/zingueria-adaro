import type { Metadata } from 'next';
import RevealOnScroll from '@/components/RevealOnScroll';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Contacto | Zinguería Adaro',
  description:
    'Contactá a Zinguería Adaro por WhatsApp o correo electrónico para presupuestos y consultas de trabajos de zinguería.',
};

export default function ContactPage() {
  return (
    <section className="contact">
      <RevealOnScroll>
        <header className="contact__header">
          <h1 className="contact__title">Contacto</h1>
          <p className="contact__lead">
            Estamos disponibles para ayudarte con consultas y presupuestos de trabajos de zinguería.
            Elegí el medio de contacto que te resulte más cómodo.
          </p>
        </header>
      </RevealOnScroll>

      <div className="contact__grid">
        <RevealOnScroll className="contact__card">
          <h2 className="contact__card-title">WhatsApp</h2>
          <p className="contact__card-text">
            Para respuestas ágiles sobre presupuestos, disponibilidad y detalles técnicos, escribinos por WhatsApp.
          </p>
          <Button
            href="https://wa.me/5491169172539?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto%20de%20zinguer%C3%ADa.%0AEs%20para%20una%20vivienda/comercio%20en%20la%20zona%20de%20%0AQuedo%20atento/a,%20gracias."
          >
            Escribir por WhatsApp
          </Button>
          <p className="contact__meta">Atención de lunes a viernes, horario comercial.</p>
        </RevealOnScroll>

        <RevealOnScroll className="contact__card">
          <h2 className="contact__card-title">Correo electrónico</h2>
          <p className="contact__card-text">
            Si necesitás enviar planos, fotos o un detalle más completo del proyecto, podés escribirnos por mail.
          </p>
          <Button href="mailto:contacto@zingueriaadaro.com">
            Enviar correo
          </Button>
          <p className="contact__meta">Revisamos el correo a lo largo del día hábil.</p>
        </RevealOnScroll>
      </div>

      <RevealOnScroll className="contact__note">
        <p>
          Si preferís otro canal de contacto, indicánoslo en tu mensaje y buscamos la forma más cómoda de seguir la
          conversación.
        </p>
      </RevealOnScroll>
    </section>
  );
}
