import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ExcursionCard } from './components/ExcursionCard';
import { ContactForm } from './components/ContactForm';
import { TOURS, REVIEWS, BLOG_POSTS } from './constants';
import { Camera, Quote, ChevronRight, MapPin, Calendar, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero />

        {/* Philosophy / Intro */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="aspect-square rounded-[3rem] overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/alushtadetail/1000/1000"
                    alt="Детали Алушты"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cream rounded-full border-[12px] border-white flex items-center justify-center p-8 shadow-xl">
                  <p className="text-sm font-serif italic text-charcoal text-center leading-relaxed">
                    "Город становится интереснее, когда начинаешь замечать детали."
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">
                Алушта, которую обычно проходят мимо
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-8 text-balance">
                На первый взгляд Алушта проста: пляж, набережная, горы на горизонте. Но у города есть второй слой. Его видно в старых дачах, неожиданных фамилиях, дореволюционной архитектуре и следах киногрупп.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Истории вместо лекций', desc: 'Николай рассказывает о людях, решениях и случайностях, которые обычно остаются за кадром.' },
                  { title: 'Старые фото на маршруте', desc: 'Архивные снимки помогают увидеть, как менялась Алушта прямо там, где вы стоите.' },
                  { title: 'Спокойный темп', desc: 'Никакой беготни. Можно рассматривать, задавать вопросы и просто вслушиваться в город.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1.5 h-1.5 bg-marine rounded-full mt-2 shrink-0" />
                    <div>
                      <h4 className="font-bold text-charcoal mb-1">{item.title}</h4>
                      <p className="text-sm text-charcoal/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tours Section */}
        <section id="tours" className="py-24 author-gradient">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">Выберите прогулку</h2>
                <p className="text-charcoal/60 text-lg">
                  От обзорных маршрутов до интерактивных встреч рассветов и лекций об архитектуре.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-charcoal text-cream rounded-full text-sm font-medium">Все</button>
                <button className="px-6 py-2 border border-sand text-charcoal hover:bg-sand rounded-full text-sm font-medium transition-colors">Индивидуальные</button>
                <button className="px-6 py-2 border border-sand text-charcoal hover:bg-sand rounded-full text-sm font-medium transition-colors">Сборные</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {TOURS.map((tour) => (
                <ExcursionCard key={tour.id} tour={tour} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-cream overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 relative">
                <div className="aspect-[3/4] bg-sand rounded-[4rem] relative overflow-hidden group">
                  <img
                    src="https://picsum.photos/seed/nikolayrusin/800/1200"
                    alt="Николай Русин"
                    className="w-full h-full object-cover grayscale brightness-110 contrast-110 group-hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-marine/10 mix-blend-multiply" />
                </div>
                {/* Vintage overlay decoration */}
                <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-marine/20 rounded-full flex items-center justify-center -z-10 animate-spin-slow" />
              </div>

              <div className="lg:col-span-7">
                <span className="inline-block px-3 py-1 bg-marine/5 text-marine text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">Ваш гид</span>
                <h2 className="text-5xl md:text-7xl font-serif text-charcoal mb-8">Николай Русин</h2>
                <div className="space-y-6 text-charcoal/70 leading-relaxed text-lg max-w-2xl">
                  <p>
                    Я родился и вырос в Алуште. Для меня это не просто курортный город, где летом много людей и солнца. Это место с характером, странностями, памятью и историями, которые не всегда видны с первого взгляда.
                  </p>
                  <p>
                    Я окончил географический факультет, изучал архитектуру Южного берега и много лет собираю старые фотографии Алушты. В какой-то момент стало понятно: всё это не хочется держать только в архиве.
                  </p>
                  <p>
                    Так появились городские прогулки — без заученного текста и сухих фактов, но с живым интересом к каждой детали.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 border-t border-sand/40 pt-12">
                  <div className="space-y-1">
                    <p className="text-2xl font-serif text-marine">Аттестат</p>
                    <p className="text-[10px] uppercase font-bold text-charcoal/40">аккредитован</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-serif text-marine">География</p>
                    <p className="text-[10px] uppercase font-bold text-charcoal/40">образование</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-serif text-marine">Архив</p>
                    <p className="text-[10px] uppercase font-bold text-charcoal/40">фотоколлекция</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-serif text-marine">Журналист</p>
                    <p className="text-[10px] uppercase font-bold text-charcoal/40">исследователь</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-16 text-center">Что говорят гости</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {REVIEWS.map((review) => (
                <div key={review.id} className="bg-cream rounded-3xl p-10 relative overflow-hidden group">
                  <Quote className="absolute -top-4 -right-4 w-32 h-32 text-charcoal/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                  <p className="text-xl font-serif text-charcoal mb-8 leading-relaxed italic z-10 relative">
                    "{review.text}"
                  </p>
                  <div className="flex items-center justify-between z-10 relative">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-sand rounded-full" />
                      <div>
                        <h4 className="font-bold text-charcoal">{review.author}</h4>
                        <p className="text-xs text-charcoal/40">Источник: {review.source}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a href="#" className="inline-flex items-center gap-2 text-marine font-bold hover:underline">
                Смотреть все отзывы на Sputnik8
                <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section id="gallery" className="py-24 bg-charcoal text-cream overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div>
                <h2 className="text-4xl md:text-6xl font-serif mb-6">Город, фото и детали</h2>
                <p className="text-cream/50 max-w-lg">
                  Галерея маршрутов, старой Алушты и маленьких городских находок, из которых складываются прогулки.
                </p>
              </div>
              <button className="px-8 py-3 border border-cream/20 rounded-full text-sm font-medium hover:bg-cream hover:text-charcoal transition-all">
                Смотреть всю галерею
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/alushta1/600/600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/alushta2/600/1200" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden group relative">
                <img src="https://picsum.photos/seed/alushta3/1200/600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-bold uppercase tracking-widest border border-white px-6 py-2">Старая Алушта</span>
                </div>
              </div>
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/alushta4/600/600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group">
                <img src="https://picsum.photos/seed/alushta5/600/600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section id="blog" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">Истории Алушты</h2>
              <p className="text-charcoal/50">Заметки о городе, который мы редко смотрим внимательно.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {BLOG_POSTS.map((post) => (
                <a key={post.id} href="#" className="group block">
                  <div className="aspect-video rounded-3xl overflow-hidden mb-6 relative">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 text-charcoal text-[10px] font-bold uppercase tracking-wider rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif text-charcoal group-hover:text-marine transition-colors mb-3">
                    {post.title}
                  </h3>
                  <p className="text-charcoal/60 line-clamp-2 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-marine">
                    Читать полностью
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-serif text-charcoal mb-12 text-center">Частые вопросы</h2>
            <div className="space-y-6">
              {[
                { q: "Как забронировать экскурсию?", a: "Выберите маршрут и оставьте заявку на сайте. Николай свяжется с вами, уточнит дату, время и подтвердит бронь." },
                { q: "Что происходит при плохой погоде?", a: "Городские маршруты обычно проводятся по ситуации. Если прогулку нужно перенести, Николай предложит другой вариант." },
                { q: "Есть ли экскурсии для детей?", a: "Да. Есть семейные, детские и школьные форматы. Для детей особенно хорошо подходят интерактивные маршруты." },
                { q: "Где начинается экскурсия?", a: "У каждой экскурсии своя точка старта. Она указана в карточке и дополнительно подтверждается после бронирования." }
              ].map((item, i) => (
                <div key={i} className="border-b border-sand/30 pb-6">
                  <h4 className="font-bold text-charcoal mb-3">{item.q}</h4>
                  <p className="text-sm text-charcoal/60 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / Booking */}
        <section id="contacts" className="py-32 bg-cream relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute bottom-0 right-0 w-1/3 h-full bg-marine/5 -skew-x-12 transform origin-bottom-right" />
          <div className="absolute top-20 left-10 w-24 h-24 border border-marine/10 rounded-full opacity-50" />

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif text-charcoal mb-8">Хотите увидеть Алушту внимательнее?</h2>
              <p className="text-xl text-charcoal/70 mb-12 leading-relaxed">
                Напишите мне, и я подскажу, какая прогулка лучше подойдёт под вашу дату, состав группы и настроение.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-marine/10 flex items-center justify-center rounded-2xl text-marine">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal mb-1">Точка встречи</h4>
                    <p className="text-sm text-charcoal/50">Зависит от маршрута, чаще всего — центр города у Кольца или памятник Грибоедову.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-marine/10 flex items-center justify-center rounded-2xl text-marine">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal mb-1">Расписание</h4>
                    <p className="text-sm text-charcoal/50">Индивидуально, по договорённости. Рекомендую бронировать за 2-3 дня.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-marine/10 flex items-center justify-center rounded-2xl text-marine">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal mb-1">Длительность</h4>
                    <p className="text-sm text-charcoal/50">Обычно 1.5 - 2.5 часа. Оптимальное время, чтобы не устать и всё увидеть.</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
