import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ContactForm } from '../components/ContactForm';
import { Phone, MapPin, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Контакты | Николай Русин</title>
        <meta name="description" content="Связаться с Николаем Русиным, задать вопрос и забронировать экскурсию по Алуште или Южному берегу Крыма." />
      </Helmet>

      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">Контакты</h1>
          <p className="text-lg text-charcoal/70 max-w-2xl leading-relaxed mb-14">
            Напишите, если хотите забронировать экскурсию, уточнить дату, подобрать маршрут для семьи, школьной группы или гостей отеля.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-6 bg-white rounded-2xl border border-sand/20 shadow-sm hover:shadow-lg transition-all duration-500 group">
                  <div className="w-10 h-10 bg-marine/10 flex items-center justify-center rounded-xl text-marine mb-4 group-hover:bg-marine group-hover:text-white transition-colors duration-500">
                    <Phone size={20} />
                  </div>
                  <h4 className="font-sans font-bold uppercase tracking-widest text-[11px] text-marine mb-3">Телефон / Max</h4>
                  <a href="tel:+79787051954" className="text-base font-sans font-bold text-charcoal hover:text-marine transition-colors block mb-1.5">
                    +7 (978) 705-19-54
                  </a>
                  <p className="text-xs text-charcoal/40 leading-relaxed">Николай Русин. Звонки и сообщения.</p>
                </div>

                <div className="p-6 bg-white rounded-2xl border border-sand/20 shadow-sm hover:shadow-lg transition-all duration-500 group">
                  <div className="w-10 h-10 bg-marine/10 flex items-center justify-center rounded-xl text-marine mb-4 group-hover:bg-marine group-hover:text-white transition-colors duration-500">
                    <MapPin size={20} />
                  </div>
                  <h4 className="font-sans font-bold uppercase tracking-widest text-[11px] text-marine mb-3">Локация</h4>
                  <p className="text-base font-sans font-bold text-charcoal mb-1.5">Алушта, Крым</p>
                  <p className="text-xs text-charcoal/40 leading-relaxed">Прогулки по Алуште и Южному берегу Крыма.</p>
                </div>
              </div>

              {/* Email */}
              <div className="p-6 bg-white rounded-2xl border border-sand/20 shadow-sm hover:shadow-lg transition-all duration-500 group">
                <div className="w-10 h-10 bg-marine/10 flex items-center justify-center rounded-xl text-marine mb-4 group-hover:bg-marine group-hover:text-white transition-colors duration-500">
                  <Mail size={20} />
                </div>
                <h4 className="font-sans font-bold uppercase tracking-widest text-[11px] text-marine mb-3">Email</h4>
                <p className="text-base font-sans font-bold text-charcoal mb-1.5">Уточняется</p>
                <p className="text-xs text-charcoal/40 leading-relaxed">Электронный адрес будет указан позже.</p>
              </div>

              {/* Соцсети */}
              <div className="p-6 bg-charcoal rounded-2xl text-cream relative overflow-hidden group col-span-1 sm:col-span-2">
                <div className="absolute top-0 right-0 w-24 h-24 bg-marine/20 rounded-full blur-3xl -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-1000" />
                <div className="relative z-10">
                  <h4 className="font-serif text-xl mb-5">Николай Русин в соцсетях</h4>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://vk.ru/rusin_alushta" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl text-sm font-medium transition-all">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.162 18.994c-6.028 0-9.47-4.128-9.613-10.994h3.018c.099 5.04 2.321 7.175 4.085 7.615v-7.615h2.839v4.351c1.737-.186 3.562-2.146 4.177-4.351h2.839c-.454 2.714-2.459 4.674-3.896 5.508 1.437.834 3.753 2.518 4.614 5.486h-3.111c-.672-2.1-2.355-3.722-4.614-3.946v3.946h-.338z"/>
                      </svg>
                      Группа VK
                    </a>
                    <a href="https://vk.ru/rusinick" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl text-sm font-medium transition-all">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.162 18.994c-6.028 0-9.47-4.128-9.613-10.994h3.018c.099 5.04 2.321 7.175 4.085 7.615v-7.615h2.839v4.351c1.737-.186 3.562-2.146 4.177-4.351h2.839c-.454 2.714-2.459 4.674-3.896 5.508 1.437.834 3.753 2.518 4.614 5.486h-3.111c-.672-2.1-2.355-3.722-4.614-3.946v3.946h-.338z"/>
                      </svg>
                      Личная страница
                    </a>
                  </div>
                </div>
              </div>

              {/* QR MAX */}
              <div className="p-6 bg-white rounded-2xl border border-sand/20 shadow-sm col-span-1 sm:col-span-2">
                <h4 className="font-sans font-bold uppercase tracking-widest text-[11px] text-marine mb-4">Написать в MAX</h4>
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-cream rounded-xl flex items-center justify-center border border-sand/30 shrink-0 text-charcoal/30 text-xs text-center font-medium leading-snug p-2">
                    QR<br/>MAX<br/><span className="text-[9px]">скоро</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal mb-1">MAX (Mail.ru)</p>
                    <p className="text-xs text-charcoal/50 leading-relaxed max-w-xs">
                      Отсканируйте QR-код, чтобы написать Николаю напрямую в мессенджер MAX.
                    </p>
                    <a
                      href="tel:+79787051954"
                      className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-marine hover:text-turquoise transition-colors"
                    >
                      +7 (978) 705-19-54
                    </a>
                  </div>
                </div>
              </div>

              {/* Юридическая информация */}
              <div className="p-6 bg-cream/60 rounded-2xl border border-sand/30 col-span-1 sm:col-span-2">
                <h4 className="font-sans font-bold uppercase tracking-widest text-[11px] text-charcoal/50 mb-4">Юридическая информация</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: 'Политика конфиденциальности', href: '/legal/privacy' },
                    { label: 'Публичная оферта', href: '/legal/offer' },
                    { label: 'Обработка персональных данных', href: '/legal/personal-data' },
                    { label: 'Правила бронирования', href: '/legal/booking-rules' },
                  ].map((doc) => (
                    <Link
                      key={doc.href}
                      to={doc.href}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-xl text-xs text-charcoal/60 hover:text-marine hover:shadow-sm border border-sand/20 transition-all"
                    >
                      <ExternalLink size={11} />
                      {doc.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-sand/20 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-sand/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-marine/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h3 className="text-2xl font-serif text-charcoal mb-1">Написать Николаю</h3>
                <p className="text-charcoal/40 text-sm mb-8">Обычно ответ приходит в течение часа</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
