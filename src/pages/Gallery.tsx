import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';

const galleryItems = [
  { id: 1, src: '/PHOTOS/tour-znakomstvo-s-alushtoy.jpg', category: 'Маршруты', title: 'Знакомство с Алуштой' },
  { id: 2, src: '/PHOTOS/tour-professorskiy-ugolok.jpg', category: 'Архитектура', title: 'Профессорский уголок' },
  { id: 3, src: '/PHOTOS/about-vintage-photo.jpg', category: 'Старая Алушта', title: 'Детали истории' },
  { id: 4, src: '/PHOTOS/tour-rassvetnaya-naberezhnaya.jpg', category: 'Маршруты', title: 'Рассвет у моря' },
  { id: 5, src: '/PHOTOS/tour-bezuezdnyy-gorod.jpg', category: 'Архитектура', title: 'Старые виллы' },
  { id: 6, src: '/PHOTOS/tour-ne-vydumannye-istorii.jpg', category: 'Артефакты', title: 'Городские находки' },
  { id: 7, src: '/PHOTOS/blog-odna-staraya-fotografiya.jpg', category: 'Старая Алушта', title: 'Архивные кадры' },
  { id: 8, src: '/PHOTOS/tour-kraevedcheskaya-veloprogulka.jpg', category: 'Маршруты', title: 'Велопрогулка' },
  { id: 9, src: '/PHOTOS/tour-alushta-v-kino.jpg', category: 'Маршруты', title: 'Места съёмок' },
];

export const Gallery = () => {
  const [filter, setFilter] = useState('Все');
  const filters = ['Все', 'Маршруты', 'Старая Алушта', 'Архитектура', 'Артефакты'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredItems = filter === 'Все' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <>
      <Helmet>
        <title>Галерея | Николай Русин</title>
        <meta name="description" content="Фото с экскурсий Николая Русина, старая Алушта, архитектурные детали, архивные снимки, артефакты и виды маршрутов." />
      </Helmet>

      <section className="pt-32 pb-16 bg-cream border-b border-sand/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">Галерея</h1>
            <p className="text-xl text-charcoal/70 max-w-3xl leading-relaxed mb-12">
              Атмосфера маршрутов, детали старой Алушты и архивные материалы. Галерея помогает увидеть город внимательнее — через лица, дома, линии улиц и маленькие городские находки.
            </p>

            <div className="flex flex-wrap gap-3">
              {filters.map((f) => (
                <button 
                  key={f} 
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${filter === f ? 'bg-marine text-cream shadow-lg shadow-marine/20' : 'bg-white text-charcoal/50 hover:bg-sand/20 border border-sand/30'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="aspect-square rounded-2xl overflow-hidden group relative bg-cream shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-turquoise mb-2">{item.category}</span>
                    <h3 className="text-xl font-serif text-white">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-charcoal/40 font-serif italic">В этой категории пока нет фото.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
