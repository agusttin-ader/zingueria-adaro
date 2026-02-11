"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

const IMAGES = [
  '/images/claraboya-1.jpg',
  '/images/claraboya-2.jpg',
  '/images/techo-1.jpg',
];

export default function TrabajosRealizados() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % IMAGES.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="work-gallery" aria-labelledby="work-gallery-heading">
      <header className="work-gallery__header">
        <h2 className="work-gallery__title" id="work-gallery-heading">Trabajos realizados</h2>
        <p className="work-gallery__lead">Algunos trabajos destacados en los que intervenimos.</p>
      </header>

      <div className="carousel" role="region" aria-roledescription="carrusel">
        <button
          className="carousel__nav carousel__nav--prev"
          aria-label="Anterior"
          onClick={() => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length)}
        >
          ‹
        </button>

        <div className="carousel__viewport">
          <div className="carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {IMAGES.map((src, i) => (
              <div className="carousel__slide" key={src} aria-hidden={i !== index}>
                <Image
                  src={src}
                  alt={`Trabajo ${i + 1}`}
                  width={1600}
                  height={520}
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="carousel__img"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel__nav carousel__nav--next"
          aria-label="Siguiente"
          onClick={() => setIndex((i) => (i + 1) % IMAGES.length)}
        >
          ›
        </button>

        <div className="carousel__controls">
          <div className="carousel__indicators">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                className={i === index ? 'active' : ''}
                aria-label={`Ir al slide ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
