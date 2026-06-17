import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';
import { motion } from 'motion/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const aboutSlides = [
  { src: '/PHOTOS/about/01-portret.jpg', caption: 'Николай Русин' },
  { src: '/PHOTOS/about/02-na-marshrute.jpg', caption: 'На маршруте с группой' },
  { src: '/PHOTOS/about/03-s-gruppoy.jpg', caption: 'Исторический Алушта' },
  { src: '/PHOTOS/about/04-arhiv.jpg', caption: 'Архивные материалы' },
];

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
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  className="w-full h-full"
                >
                  {aboutSlides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={slide.src}
                        alt={slide.caption}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -30, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-sand/20 z-20 max-w-[280px]"
              >
                <p className="text-lg font-sans font-bold text-charcoal leading-tight">
                  "История — это не даты, а люди и их поступки."
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-7 pt-4">
              <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-8">Обо мне</h1>
              <p className="text-xl text-charcoal/60 mb-12 font-serif italic max-w-2xl leading-relaxed">
                Всем привет! Меня зовут Николай Русин. Я коренной алуштинец, гид-экскурсовод, краевед и человек, который искренне влюблён в свой родной край.
              </p>

              <div className="space-y-8 text-charcoal/80 text-lg leading-relaxed max-w-2xl mb-16">
                <p>
                  С 2020 года я провожу экскурсии и показываю гостям ту Алушту, которую невозможно найти в стандартных путеводителях. На маршрутах я делюсь тем, что собирал годами: редкими архивными фотографиями, удивительными краеведческими находками и малоизвестными фактами.
                </p>
                <p>
                  У меня высшее профильное образование — я окончил географический факультет ТНУ им. В. И. Вернадского — и официальная аттестация Министерства курортов и туризма Крыма (2024 г.).
                </p>
                <p>
                  Мой маршрут «неВыдуманные истории Алушты» получил приз зрительских симпатий на республиканском конкурсе, а работа отмечена наградами профильного Министерства и интервью в ведущих изданиях полуострова.
                </p>
                <p>
                  На этом сайте вы найдёте подробное описание всех моих маршрутов. Выбирайте то, что вам по душе, и бронируйте индивидуальную или групповую экскурсию. Готовы к настоящим открытиям? Я с удовольствием вам в этом помогу!
                </p>
              </div>

              <h2 className="text-4xl font-serif text-charcoal mb-8">Почему со мной интересно и комфортно</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {[
                  { title: 'Никаких скучных лекций', desc: 'Доношу информацию легко и увлекательно, без сухих дат и лишних цифр.' },
                  { title: 'Эксклюзивные материалы', desc: 'Редкие архивные фото, краеведческие находки и малоизвестные факты, собранные годами.' },
                  { title: '12 авторских маршрутов', desc: 'Гуляем не только по популярным улицам, но и открываем потрясающие окрестности Алушты.' },
                  { title: 'Признание и награды', desc: 'Профильное образование, аттестация Минкурортов Крыма (2024) и приз зрительских симпатий.' }
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
                  <img src="/PHOTOS/about/04-arhiv.jpg" className="w-full h-full object-cover" />
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
