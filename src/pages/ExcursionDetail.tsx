import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { TOURS } from '../constants';
import { Clock, Users, Tag, MapPin, ChevronLeft, Check } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { motion } from 'motion/react';

export const ExcursionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const tour = TOURS.find(t => t.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!tour) {
    return (
      <div className="py-40 text-center bg-cream min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif mb-6 text-charcoal">Экскурсия не найдена</h1>
        <Link to="/ekskursii" className="px-6 py-2 bg-marine text-cream rounded-2xl font-medium">К списку экскурсий</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{tour.title} | Николай Русин</title>
        <meta name="description" content={tour.shortDescription} />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sand/20 -skew-x-12 transform origin-top-right mix-blend-multiply" />
        
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/ekskursii" className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/60 hover:text-marine mb-8 transition-colors">
            <ChevronLeft size={16} />
            Все экскурсии
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative z-10">
              <div className="flex flex-wrap gap-2 mb-6">
                {tour.category.map(cat => (
                  <span key={cat} className="px-3 py-1 bg-marine/10 text-marine text-xs font-bold uppercase tracking-wider rounded-2xl">
                    {cat}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-6 leading-tight">
                {tour.title}
              </h1>
              <p className="text-xl text-charcoal/70 mb-10 leading-relaxed font-serif italic">
                {tour.subtitle}
              </p>

              <div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-10">
                <div className="flex items-start gap-4">
                  <Clock className="text-sand shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-charcoal/50 font-bold mb-1">Длительность</h4>
                    <p className="font-medium text-charcoal">{tour.duration}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="text-sand shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-charcoal/50 font-bold mb-1">Группа</h4>
                    <p className="font-medium text-charcoal">{tour.groupSize}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-sand shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-charcoal/50 font-bold mb-1">Место старта</h4>
                    <p className="font-medium text-charcoal">{tour.startPoint}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Tag className="text-sand shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-charcoal/50 font-bold mb-1">Стоимость</h4>
                    <p className="font-medium text-charcoal">{tour.price}</p>
                    {tour.priceNote && <p className="text-xs text-charcoal/50 mt-0.5">{tour.priceNote}</p>}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#booking" className="px-8 py-4 bg-charcoal text-cream rounded-2xl font-medium hover:bg-marine transition-colors">
                  Забронировать
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-charcoal/15 relative">
                <img 
                  src={tour.imageUrl} 
                  alt={tour.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-[8px] border-cream/15 rounded-2xl pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-serif text-charcoal mb-8">О прогулке</h2>
              <div className="text-lg text-charcoal/70 leading-relaxed mb-12">
                <p>{tour.fullDescription}</p>
              </div>

              <h3 className="text-2xl font-serif text-charcoal mb-6">Что увидим на маршруте</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 border-t border-b border-sand/30 py-8">
                {tour.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-charcoal/80">
                    <div className="w-1.5 h-1.5 bg-marine rounded-full mt-2 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-serif text-charcoal mb-6">Особенности</h3>
              <div className="flex flex-wrap gap-3">
                {tour.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-cream text-charcoal text-sm font-medium rounded-lg border border-sand/50">
                    <Check size={16} className="text-marine" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 p-8 bg-cream rounded-xl border border-sand/50">
                <h3 className="font-serif text-2xl text-charcoal mb-6">Организационные детали</h3>
                <div className="space-y-6">
                  {tour.features.includes('Можно с детьми') && (
                    <p className="text-sm text-charcoal/70 leading-relaxed">
                      <strong className="text-charcoal block mb-1">С детьми:</strong>
                      Маршрут спокойный и подходит для семей. Интерактивные элементы помогут удержать внимание младших участников.
                    </p>
                  )}
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    <strong className="text-charcoal block mb-1">Расписание:</strong>
                    Индивидуально по согласованию. Желательно бронировать за 24 часа. Для сборных групп даты анонсируются отдельно.
                  </p>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    <strong className="text-charcoal block mb-1">Погода:</strong>
                    В случае сильного штормового предупреждения возможен перенос по согласованию.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Overlay */}
      <section id="booking" className="py-24 author-gradient">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">Забронировать дату</h2>
            <p className="text-charcoal/70 text-lg mb-8 leading-relaxed">
              Оставьте заявку, чтобы согласовать детали. Николай свяжется с вами и предложит доступное время для экскурсии «{tour.title}».
            </p>
            <div className="bg-white p-6 rounded-xl border border-sand/40 max-w-sm">
              <p className="text-sm text-charcoal/50 mb-2 uppercase tracking-wide font-bold">Вы выбрали:</p>
              <p className="font-serif text-xl text-marine">{tour.title}</p>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};
