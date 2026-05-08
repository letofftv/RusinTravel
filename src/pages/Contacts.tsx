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
            <div>
              <div className="space-y-12">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-marine/10 flex items-center justify-center rounded-xl text-marine">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal mb-1 text-xl">Телефон / Max</h4>
                    <a href="tel:+79787051954" className="text-charcoal/70 hover:text-marine transition-colors text-2xl font-sans font-medium">+7 (978) 705-19-54</a>
                    <p className="text-sm text-charcoal/40 mt-1">Звонки принимаются по возможности, лучше писать в Telegram.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-marine/10 flex items-center justify-center rounded-xl text-marine">
                    <Send size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal mb-1 text-xl">Мессенджеры</h4>
                    <div className="flex flex-col gap-3">
                      <a href="https://t.me/nikolay_alushta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-charcoal/70 hover:text-marine transition-colors text-lg">
                        <span className="font-medium">Telegram:</span>
                        <span>@nikolay_alushta</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-marine/10 flex items-center justify-center rounded-xl text-marine">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal mb-1 text-xl">Почта</h4>
                    <a href="mailto:info@rusintravel.ru" className="text-charcoal/70 hover:text-marine transition-colors text-lg">info@rusintravel.ru</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-marine/10 flex items-center justify-center rounded-xl text-marine">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal mb-1 text-xl">Регион работы</h4>
                    <p className="text-charcoal/70 text-lg">Алушта, Республика Крым</p>
                    <p className="text-sm text-charcoal/40 mt-2">Точка старта каждой экскурсии обсуждается индивидуально.</p>
                  </div>
                </div>
              </div>

              <div className="mt-20 p-10 bg-marine/5 rounded-3xl border border-marine/10">
                <h4 className="font-serif text-2xl text-charcoal mb-6">Социальные сети</h4>
                <div className="flex gap-4">
                  <a href="https://vk.ru/rusin_alushta" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-marine hover:text-white hover:border-marine transition-all">
                    Группа VK
                  </a>
                  <a href="https://vk.ru/rusinick" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-marine hover:text-white hover:border-marine transition-all">
                    Николай VK
                  </a>
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
