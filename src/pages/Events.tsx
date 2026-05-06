import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useData } from '../context/DataContext';
import { EventCard } from '../components/EventCard';
import { motion } from 'motion/react';

export const Events = () => {
  const { events, isLoading } = useData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="pt-40 pb-24 text-center">
        <div className="animate-spin w-10 h-10 border-4 border-marine border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-charcoal/50 font-serif">Загрузка событий...</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>События и афиша экскурсий | Николай Русин</title>
        <meta name="description" content="Расписание групповых прогулок, кинопоказов и тематических встреч в Алуште. Выбирайте дату и бронируйте места онлайн." />
      </Helmet>

      <section className="pt-32 pb-16 bg-cream border-b border-sand/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">События и афиша</h1>
            <p className="text-xl text-charcoal/70 max-w-3xl leading-relaxed">
              Здесь собраны прогулки в составе сборных групп, тематические встречи, кинопоказы и специальные форматы на конкретные даты. 
              Индивидуальные экскурсии можно забронировать на любую свободную дату через каталог.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white min-h-[50vh]">
        <div className="max-w-5xl mx-auto px-6">
          {events.length > 0 ? (
            <div className="space-y-8">
              {events.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-cream/30 rounded-3xl border border-dashed border-sand/50">
              <p className="text-xl text-charcoal/40 font-serif italic mb-2">Ближайшие события уточняются.</p>
              <p className="text-sm text-charcoal/30">Загляните сюда позже или напишите Николаю напрямую.</p>
            </div>
          )}

          <div className="mt-20 p-8 bg-marine/5 rounded-2xl border border-marine/10 text-center">
            <h3 className="text-2xl font-serif text-charcoal mb-4">Нужен индивидуальный формат?</h3>
            <p className="text-charcoal/70 mb-8 max-w-xl mx-auto">
              Если вы хотите провести время только своей компанией или семьей, выберите любой маршрут из каталога и предложите удобную вам дату.
            </p>
            <a 
              href="/ekskursii" 
              className="inline-block px-8 py-3 bg-marine text-cream rounded-xl font-medium hover:bg-turquoise transition-colors"
            >
              Перейти к каталогу
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
