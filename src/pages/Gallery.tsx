import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Галерея | Николай Русин</title>
        <meta name="description" content="Фото с экскурсий Николая Русина, старая Алушта, архитектурные детали, архивные снимки, артефакты и виды маршрутов." />
      </Helmet>

      <section className="pt-32 pb-16 bg-cream border-b border-sand/30">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">Галерея маршрутов и старой Алушты</h1>
          <p className="text-xl text-charcoal/70 max-w-3xl leading-relaxed mb-12">
            Здесь будут фотографии с прогулок, виды Алушты, старые снимки, архитектурные детали и артефакты из коллекции Николая. Галерея нужна не только для красоты. Она помогает увидеть, из чего складываются маршруты: из домов, лиц, линий улиц, старых открыток и маленьких городских находок.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {['Все', 'Маршруты', 'Старая Алушта', 'Архитектура', 'Артефакты', 'До и после'].map((filter, i) => (
              <button 
                key={i} 
                className={`px-5 py-2 rounded-2xl text-xs font-medium transition-colors ${i === 0 ? 'bg-charcoal text-cream' : 'border border-sand text-charcoal hover:bg-sand'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white min-h-[40vh] flex items-center justify-center">
        <div className="text-center px-6">
          <p className="text-xl text-charcoal/50 font-serif italic mb-4">Галерея скоро пополнится.</p>
          <p className="text-charcoal/40">Николай готовит фотографии маршрутов, старой Алушты и архивных материалов.</p>
        </div>
      </section>
    </>
  );
};
