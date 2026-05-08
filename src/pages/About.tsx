import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';
import { motion } from 'motion/react';

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Обо мне | Николай Русин</title>
        <meta name="description" content="Николай Русин, аттестованный экскурсовод, краевед, коллекционер старых фотографий и журналист. Авторские прогулки по Алуште и Южному берегу Крыма." />
      </Helmet>

      <section className="pt-32 pb-24 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 relative sticky top-32">
              <div className="aspect-[3/4] bg-sand rounded-2xl relative overflow-hidden shadow-2xl">
                <img
                  src="/PHOTOS/about-nikolay-rusin.jpg"
                  alt="Николай Русин"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-7 pt-4">
              <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-8">Обо мне</h1>
              <p className="text-xl text-charcoal/60 mb-12 font-serif italic max-w-2xl leading-relaxed">
                Аттестованный экскурсовод, краевед, коллекционер старых фотографий, журналист. Родился и вырос в Алуште, изучает архитектуру Южного берега и рассказывает о городе через людей, дома, улицы и старые снимки.
              </p>

              <div className="space-y-8 text-charcoal/80 text-lg leading-relaxed max-w-2xl mb-16">
                <p>
                  Я родился и вырос в Алуште. Для меня это не просто курортный город, где летом много людей и солнца. Это место с характером, странностями, памятью и огромным количеством историй, которые не всегда видны с первого взгляда.
                </p>
                <p>
                  Я окончил географический факультет Таврического национального университета, изучал туристско-экскурсионную деятельность, много лет интересуюсь архитектурой Южного берега Крыма и собираю старые фотографии Алушты.
                </p>
                <p>
                  В какой-то момент стало понятно: всё это не хочется держать только в личном архиве. Так появились городские прогулки. Не классические экскурсии с заученным текстом, а живые маршруты, где можно задавать вопросы, рассматривать детали, спорить, смеяться и видеть город чуть внимательнее.
                </p>
                <p>
                  Мне важно, чтобы после прогулки человек уходил не просто с набором фактов. Хочется, чтобы он начал замечать Алушту. Дом, мимо которого раньше проходил. Старую фотографию, в которой вдруг узнаётся современная улица. Историю человека, которая делает место живым.
                </p>
              </div>

              <h2 className="text-4xl font-serif text-charcoal mb-8">Что важно в моих экскурсиях</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {[
                  { title: 'Не заученный текст', desc: 'Каждая группа разная. Хорошая экскурсия должна чувствовать людей.' },
                  { title: 'Говорить просто', desc: 'История не становится менее серьёзной, если объяснять её человеческим языком.' },
                  { title: 'Показывать детали', desc: 'Иногда город раскрывается через дверь, фонтан или старую открытку.' },
                  { title: 'Проверять факты', desc: 'Красивые легенды бывают приятными, но реальная история часто интереснее.' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl border border-sand/30 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-lg font-bold text-charcoal mb-3">{item.title}</h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-charcoal text-cream rounded-2xl p-12 relative overflow-hidden mb-16">
                <div className="relative z-10">
                  <Camera className="text-sand w-12 h-12 mb-6" />
                  <h2 className="text-4xl font-serif mb-6">Старые фотографии как часть маршрута</h2>
                  <p className="text-cream/70 leading-relaxed mb-0 max-w-xl">
                    Я собираю старые фотографии, открытки и предметы, связанные с Алуштой. На экскурсиях эти материалы помогают сравнить город прошлого и настоящего. Это не музей за стеклом. Фотографию можно рассмотреть, приложить к современному виду и увидеть, как место менялось со временем.
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 blur-xl">
                  <img src="/PHOTOS/about-vintage-photo.jpg" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="border-t border-sand/40 pt-16">
                <h2 className="text-4xl font-serif text-charcoal mb-6">Выберите прогулку по Алуште</h2>
                <p className="text-charcoal/70 leading-relaxed max-w-xl mb-8">
                  Если вы хотите увидеть город внимательнее, начните с маршрутов. А если не знаете, что выбрать, просто напишите. Я подскажу формат под вашу дату, состав группы и интересы.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/ekskursii" className="px-8 py-4 bg-marine text-cream rounded-2xl font-medium hover:bg-marine/90 transition-colors">
                    Смотреть экскурсии
                  </Link>
                  <Link to="/kontakty" className="px-8 py-4 border border-sand text-charcoal rounded-2xl font-medium hover:bg-sand/30 transition-colors">
                    Задать вопрос
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
