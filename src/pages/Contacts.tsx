import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ContactForm } from '../components/ContactForm';
import { Phone, Mail, Send, MapPin, Map } from 'lucide-react';

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
          <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">Контакты</h1>
          <p className="text-xl text-charcoal/70 max-w-3xl leading-relaxed mb-16">
            Напишите, если хотите забронировать экскурсию, уточнить дату, подобрать маршрут для семьи, школьной группы или гостей отеля.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-marine/10 flex items-center justify-center rounded-xl text-marine">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal mb-1 text-lg">Телефон</h4>
                    <p className="text-charcoal/70 mb-2">+7 (XXX) XXX-XX-XX</p>
                    <p className="text-sm text-charcoal/40">Звонки принимаются по возможности, лучше писать в мессенджеры.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-marine/10 flex items-center justify-center rounded-xl text-marine">
                    <Send size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal mb-1 text-lg">Мессенджеры</h4>
                    <p className="text-charcoal/70 mb-2">Telegram / WhatsApp</p>
                    <a href="#" className="text-marine font-medium hover:underline">@nikolayalushta</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-marine/10 flex items-center justify-center rounded-xl text-marine">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal mb-1 text-lg">Почта</h4>
                    <a href="mailto:info@rusintravel.ru" className="text-charcoal/70 hover:text-marine transition-colors">info@rusintravel.ru</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-marine/10 flex items-center justify-center rounded-xl text-marine">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal mb-1 text-lg">Регион работы</h4>
                    <p className="text-charcoal/70">Алушта, Республика Крым</p>
                    <p className="text-sm text-charcoal/40 mt-2">Точка старта каждой экскурсии обсуждается индивидуально.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-sand/20 relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-sand/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-marine/10 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif text-charcoal mb-8">Задать вопрос или забронировать</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
