import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { TOURS } from '../constants';
import { ExcursionCard } from '../components/ExcursionCard';

export const Excursions = () => {
  const [activeFilter, setActiveFilter] = useState('Все');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Экскурсии | Николай Русин</title>
        <meta name="description" content="Авторские пешеходные, семейные, сборные и индивидуальные экскурсии по Алуште. Исторический центр, Профессорский уголок, набережная, старые фото и необычные маршруты." />
      </Helmet>

      <section className="pt-32 pb-16 bg-cream border-b border-sand/30">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">Экскурсии по Алуште и Южному берегу</h1>
          <p className="text-xl text-charcoal/70 max-w-3xl leading-relaxed mb-12">
            Выберите маршрут под свой ритм: спокойное знакомство с Алуштой, прогулку по Профессорскому уголку, рассвет на набережной, интерактивную игру с городскими историями или формат для школьной группы.
          </p>

          {/* Simple filter UI placeholder */}
          <div className="flex flex-wrap gap-3 mb-8">
            {['Все', 'Индивидуальные', 'Сборные', 'Семейные', 'Детские и школьные', 'Сезонные', 'Пешеходные', 'Велоформат', 'Лекции и встречи'].map((filter, i) => (
              <button 
                key={i} 
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-2xl text-sm font-medium transition-colors ${activeFilter === filter ? 'bg-charcoal text-cream' : 'border border-sand text-charcoal hover:bg-sand'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {(activeFilter === 'Все' ? TOURS : TOURS.filter(t => t.category.includes(activeFilter))).map((tour) => (
              <ExcursionCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 author-gradient">
        <div className="max-w-7xl mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">Не знаете, что выбрать?</h2>
          <p className="text-lg text-charcoal/70 leading-relaxed mb-10">
            Если вы впервые в Алуште, начните со «Знакомства с Алуштой». Если хочется атмосферы старых дач и курортной истории, выбирайте Профессорский уголок. Если вы уже были на обычных маршрутах, обратите внимание на «Нетуристическую Алушту».
          </p>
          <a href="/kontakty" className="px-8 py-3 bg-marine text-cream rounded-2xl font-medium hover:bg-marine/90 transition-colors">
            Спросить Николая
          </a>
        </div>
      </section>
    </>
  );
};
