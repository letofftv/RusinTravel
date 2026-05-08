import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ContactForm } from '../components/ContactForm';
import { Phone, Mail, Send, MapPin } from 'lucide-react';

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
          <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-8">Контакты</h1>
          <p className="text-xl text-charcoal/70 max-w-3xl leading-relaxed mb-20">
            Напишите, если хотите забронировать экскурсию, уточнить дату, подобрать маршрут для семьи, школьной группы или гостей отеля.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="lg:pr-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-white rounded-3xl border border-sand/20 shadow-sm hover:shadow-xl transition-all duration-500 group">
                  <div className="w-12 h-12 bg-marine/10 flex items-center justify-center rounded-2xl text-marine mb-6 group-hover:bg-marine group-hover:text-white transition-colors duration-500">
                    <Phone size={24} />
                  </div>
                  <h4 className="font-sans font-bold uppercase tracking-widest text-xs text-marine mb-4">Телефон / Звонки</h4>
                  <a href="tel:+79787051954" className="text-2xl font-sans font-bold text-charcoal hover:text-marine transition-colors block mb-2">
                    +7 (978) 705-19-54
                  </a>
                  <p className="text-sm text-charcoal/40 leading-relaxed">Николай Русин. Для быстрой связи лучше использовать мессенджеры.</p>
                </div>

                <div className="p-8 bg-white rounded-3xl border border-sand/20 shadow-sm hover:shadow-xl transition-all duration-500 group">
                  <div className="w-12 h-12 bg-marine/10 flex items-center justify-center rounded-2xl text-marine mb-6 group-hover:bg-marine group-hover:text-white transition-colors duration-500">
                    <Send size={24} />
                  </div>
                  <h4 className="font-sans font-bold uppercase tracking-widest text-xs text-marine mb-4">Telegram</h4>
                  <a href="https://t.me/nikolay_alushta" target="_blank" rel="noopener noreferrer" className="text-2xl font-sans font-bold text-charcoal hover:text-marine transition-colors block mb-2">
                    @nikolay_alushta
                  </a>
                  <p className="text-sm text-charcoal/40 leading-relaxed">Напишите в Telegram — я отвечу максимально оперативно.</p>
                </div>

                <div className="p-8 bg-white rounded-3xl border border-sand/20 shadow-sm hover:shadow-xl transition-all duration-500 group">
                  <div className="w-12 h-12 bg-marine/10 flex items-center justify-center rounded-2xl text-marine mb-6 group-hover:bg-marine group-hover:text-white transition-colors duration-500">
                    <Mail size={24} />
                  </div>
                  <h4 className="font-sans font-bold uppercase tracking-widest text-xs text-marine mb-4">Электронная почта</h4>
                  <a href="mailto:info@rusintravel.ru" className="text-xl font-sans font-bold text-charcoal hover:text-marine transition-colors block mb-2">
                    info@rusintravel.ru
                  </a>
                  <p className="text-sm text-charcoal/40 leading-relaxed">Для официальных запросов и предложений о сотрудничестве.</p>
                </div>

                <div className="p-8 bg-white rounded-3xl border border-sand/20 shadow-sm hover:shadow-xl transition-all duration-500 group">
                  <div className="w-12 h-12 bg-marine/10 flex items-center justify-center rounded-2xl text-marine mb-6 group-hover:bg-marine group-hover:text-white transition-colors duration-500">
                    <MapPin size={24} />
                  </div>
                  <h4 className="font-sans font-bold uppercase tracking-widest text-xs text-marine mb-4">Локация</h4>
                  <p className="text-2xl font-sans font-bold text-charcoal mb-2">Алушта, Крым</p>
                  <p className="text-sm text-charcoal/40 leading-relaxed">Провожу прогулки по Алуште и Южному берегу Крыма.</p>
                </div>
              </div>

              <div className="mt-12 p-8 bg-charcoal rounded-[40px] text-cream relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-marine/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
                <div className="relative z-10">
                  <h4 className="font-serif text-3xl mb-8">Николай Русин в соцсетях</h4>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://vk.ru/rusin_alushta" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl text-sm font-bold transition-all">
                      Группа VK
                    </a>
                    <a href="https://vk.ru/rusinick" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl text-sm font-bold transition-all">
                      Николай VK
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-sand/20 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-sand/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-marine/5 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-4xl font-serif text-charcoal mb-2">Написать Николаю</h3>
                <p className="text-slate-400 text-sm mb-10">Обычно ответ приходит в течение часа</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
