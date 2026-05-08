import React from 'react';
import { Hero } from '../components/Hero';
import { ExcursionCard } from '../components/ExcursionCard';
import { ContactForm } from '../components/ContactForm';
import { Quote, ChevronRight, MapPin, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { useData } from '../context/DataContext';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const childVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

export const Home = () => {
  const { tours, reviews, blog, isLoading } = useData();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-marine border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Авторские экскурсии по Алуште | Николай Русин</title>
        <meta name="description" content="Прогулки по Алуште и Южному берегу Крыма с аттестованным экскурсоводом Николаем Русиным. Истории домов, улиц, людей, старые фотографии и онлайн-бронирование." />
      </Helmet>
      
      <Hero />

      {/* Philosophy / Intro */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="order-2 md:order-1"
          >
            <div className="relative mb-12 lg:mb-0 lg:pr-8">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/PHOTOS/about-vintage-photo.jpg"
                  alt="Детали Алушты"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-8 -right-8 w-56 h-56 bg-cream rounded-full border-[10px] border-white flex items-center justify-center p-6 shadow-xl"
              >
                <p className="text-sm font-serif italic text-charcoal text-center leading-relaxed">
                  "Город становится интереснее, когда начинаешь замечать детали."
                </p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="order-1 md:order-2"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-charcoal mb-8 leading-tight">
              Алушта, которую обычно проходят мимо
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4 text-balance">
              На первый взгляд Алушта проста: пляж, набережная, горы на горизонте. Но у города есть второй слой. Его видно в старых дачах, неожиданных фамилиях, дореволюционной архитектуре, следах киногрупп, забытых фонтанах и улицах, где история не висит на табличке, а прячется в деталях.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-8 text-balance">
              На прогулках с Николаем Русиным город раскрывается не как набор достопримечательностей, а как живая история. Без заученного текста, без сухого перечисления дат, без беготни по пунктам.
            </p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-5"
            >
              {[
                { title: 'Истории вместо сухой лекции', desc: 'Николай рассказывает не только о датах и зданиях, а о людях, решениях, случайностях и городских деталях, которые обычно остаются за кадром.' },
                { title: 'Старые фото на маршруте', desc: 'Архивные снимки помогают увидеть, как менялась Алушта. Иногда достаточно одной фотографии, чтобы знакомое место стало совсем другим.' },
                { title: 'Взгляд местного жителя', desc: 'Николай родился и вырос в Алуште. Поэтому его маршруты не про «посмотрите направо», а про город, который он знает изнутри.' },
                { title: 'Спокойный темп', desc: 'Здесь не нужно бежать за группой. Можно рассматривать, задавать вопросы и замечать то, что обычно пропускают.' },
                { title: 'Для туристов и местных', desc: 'На этих прогулках интересно и тем, кто приехал впервые, и тем, кто живёт рядом, но хочет увидеть знакомые улицы внимательнее.' }
              ].map((item, i) => (
                <motion.div key={i} variants={childVariants} className="flex gap-4">
                  <div className="w-1.5 h-1.5 bg-marine rounded-full mt-2 shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-charcoal mb-1">{item.title}</h4>
                    <p className="text-sm text-charcoal/60 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              className="mt-10"
            >
              <Link to="/ekskursii" className="inline-block px-6 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream rounded-2xl text-sm font-medium transition-all duration-300">
                Узнать больше о прогулках
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[3/4] bg-sand rounded-2xl relative overflow-hidden group">
                <img
                  src="/PHOTOS/about-nikolay-rusin.jpg"
                  alt="Николай Русин"
                  className="w-full h-full object-cover grayscale brightness-110 contrast-110 group-hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-marine/10 mix-blend-multiply" />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-marine/15 rounded-full -z-10" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
              className="lg:col-span-7"
            >
              <span className="inline-block px-3 py-1 bg-marine/5 text-marine text-xs font-bold uppercase tracking-widest rounded-full mb-6">Ваш гид</span>
              <h2 className="text-5xl md:text-7xl font-serif text-charcoal mb-8">Обо мне</h2>
              <div className="space-y-6 text-charcoal/70 leading-relaxed text-lg max-w-2xl">
                <p>
                  Николай Русин родился и вырос в Алуште. Он окончил географический факультет Таврического национального университета, много лет изучает архитектуру Южного берега Крыма, собирает старые фотографии и городские истории.
                </p>
                <p>
                  В его маршрутах чувствуется опыт журналиста и краеведа: факты проверяются, сложные вещи объясняются простым языком, а история города раскрывается через людей, дома и живые детали.
                </p>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 mb-12 border-t border-sand/40 pt-12"
              >
                {[
                  { value: 'Аттестат', label: 'аккредитован' },
                  { value: 'География', label: 'образование' },
                  { value: 'Архив', label: 'фотоколлекция' },
                  { value: 'Журналист', label: 'исследователь' }
                ].map((stat, i) => (
                  <motion.div key={i} variants={childVariants} className="space-y-1">
                    <p className="text-2xl font-serif text-marine">{stat.value}</p>
                    <p className="text-xs uppercase font-bold text-charcoal/40">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              <Link to="/obo-mne" className="inline-block px-6 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream rounded-2xl text-sm font-medium transition-all duration-300">
                Подробнее обо мне
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-24 author-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
          >
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-serif text-charcoal mb-6">Выберите прогулку</h2>
              <p className="text-charcoal/60 text-lg">
                Можно начать с обзорной прогулки по исторической Алуште, уйти в атмосферу Профессорского уголка, встретить рассвет на набережной или выбрать интерактивный маршрут, где нужно отличать реальные факты от красивых выдумок.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/ekskursii" className="px-6 py-2 bg-charcoal text-cream rounded-2xl text-sm font-medium hover:bg-marine transition-colors duration-300">Все экскурсии</Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {tours.slice(0, 3).map((tour) => (
              <ExcursionCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-24 bg-charcoal text-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-serif mb-6">Город, фото и детали</h2>
              <p className="text-cream/50 max-w-lg">
                Галерея маршрутов, старой Алушты и маленьких городских находок, из которых складываются прогулки.
              </p>
            </div>
            <Link to="/galereya" className="px-8 py-3 border border-cream/20 rounded-2xl text-sm font-medium hover:bg-cream hover:text-charcoal transition-all duration-300">
              Смотреть всю галерею
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 h-[600px]"
          >
            <motion.div variants={childVariants} className="col-span-1 row-span-1 rounded-xl overflow-hidden group">
              <img src="/PHOTOS/tour-znakomstvo-s-alushtoy.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div variants={childVariants} className="col-span-1 row-span-2 rounded-xl overflow-hidden group">
              <img src="/PHOTOS/tour-professorskiy-ugolok.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div variants={childVariants} className="col-span-2 row-span-1 rounded-xl overflow-hidden group relative">
              <img src="/PHOTOS/about-vintage-photo.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-bold uppercase tracking-widest border border-white px-6 py-2">Старая Алушта</span>
              </div>
            </motion.div>
            <motion.div variants={childVariants} className="col-span-1 row-span-1 rounded-xl overflow-hidden group">
              <img src="/PHOTOS/tour-rassvetnaya-naberezhnaya.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div variants={childVariants} className="col-span-1 row-span-1 rounded-xl overflow-hidden group">
              <img src="/PHOTOS/tour-bezuezdnyy-gorod.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0" referrerPolicy="no-referrer" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl md:text-7xl font-serif text-charcoal mb-16 text-center">
              Что говорят гости
            </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {reviews.slice(0, 4).map((review) => (
              <motion.div key={review.id} variants={childVariants} className="bg-cream rounded-2xl p-10 relative overflow-hidden group">
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
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <a href="https://www.sputnik8.com/ru/alushta/guides/13597-nikolay" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-marine font-bold hover:underline hover:gap-3 transition-all duration-300">
              Смотреть все отзывы на Sputnik8
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section id="blog" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-serif text-charcoal mb-6">Истории Алушты</h2>
            <p className="text-charcoal/50">Заметки о городе, который мы редко смотрим внимательно.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {blog.slice(0, 2).map((post) => (
              <motion.div key={post.id} variants={childVariants}>
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="aspect-video rounded-xl overflow-hidden mb-6 relative">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-charcoal text-xs font-bold uppercase tracking-wider rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif text-charcoal group-hover:text-marine transition-colors duration-300 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-charcoal/60 line-clamp-2 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-marine">
                    Читать полностью
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="mt-16 text-center"
          >
            <Link to="/blog" className="inline-block px-6 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream rounded-2xl text-sm font-medium transition-all duration-300">
              Перейти в блог
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact / Booking */}
      <section id="contacts" className="py-32 bg-cream relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-marine/5 -skew-x-12 transform origin-bottom-right" />
        <div className="absolute top-20 left-10 w-24 h-24 border border-marine/10 rounded-full opacity-50" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <h2 className="text-5xl md:text-7xl font-serif text-charcoal mb-10 leading-tight">Хотите увидеть Алушту внимательнее?</h2>
            <p className="text-xl text-charcoal/70 mb-12 leading-relaxed">
              Напишите мне, и я подскажу, какая прогулка лучше подойдёт под вашу дату, состав группы и настроение.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-marine/10 flex items-center justify-center rounded-xl text-marine">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-charcoal mb-1">Точка встречи</h4>
                  <p className="text-sm text-charcoal/50">Зависит от маршрута, чаще всего — центр города у Кольца или памятник Грибоедову.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-marine/10 flex items-center justify-center rounded-xl text-marine">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-charcoal mb-1">Расписание</h4>
                  <p className="text-sm text-charcoal/50">Индивидуально, по договорённости. Рекомендую бронировать за 2-3 дня.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-marine/10 flex items-center justify-center rounded-xl text-marine">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-charcoal mb-1">Длительность</h4>
                  <p className="text-sm text-charcoal/50">Обычно 1.5 - 2.5 часа. Оптимальное время, чтобы не устать и всё увидеть.</p>
                </div>
              </div>

              <div className="pt-8">
                <Link to="/kontakty" className="inline-block px-6 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream rounded-2xl text-sm font-medium transition-all duration-300">
                  Все контакты
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
};
