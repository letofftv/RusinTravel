import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-cream">
      {/* Background Decor */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-0 right-0 w-1/2 h-full bg-sand/10 -skew-x-12 transform origin-top-right -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="h-px w-10 bg-marine origin-left"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm font-semibold tracking-widest text-marine uppercase"
            >
              Авторские прогулки в Алуште
            </motion.span>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif text-charcoal leading-[0.95] mb-8 text-balance">
            Алушта, <br />
            <span className="text-marine decoration-sand underline underline-offset-8">которую обычно</span> <br />
            проходят мимо
          </h1>

          <p className="text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-xl mb-12 text-balance">
            Посмотрите на город глазами местного жителя. Истории домов, людей, старые фотографии и детали, которые оживляют прошлое.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="/ekskursii"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-marine text-cream rounded-2xl font-medium hover:bg-marine/90 hover:shadow-lg hover:shadow-marine/20 transition-all"
            >
              Выбрать экскурсию
            </motion.a>
            <motion.a
              href="/kontakty"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 border border-marine text-marine rounded-2xl font-medium hover:bg-marine/5 transition-all"
            >
              Задать вопрос
            </motion.a>
          </div>

          <div className="mt-16 flex items-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col"
            >
              <span className="text-2xl font-serif text-charcoal">39 лет</span>
              <span className="text-xs uppercase tracking-wider text-charcoal/50">опыта и жизни в Алуште</span>
            </motion.div>
            <div className="h-10 w-px bg-sand" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-col"
            >
              <span className="text-2xl font-serif text-charcoal">10+</span>
              <span className="text-xs uppercase tracking-wider text-charcoal/50">авторских маршрутов</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-charcoal/15 bg-sand/20">
            <img
              src="/PHOTOS/hero-nikolay-rusin.jpg"
              alt="Николай Русин"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
          </div>

          {/* Decorative floating card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-10 -left-10 bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-[320px] border border-sand/20 z-20"
          >
            <p className="text-xl font-sans font-bold text-charcoal mb-6 leading-tight">
              "Алушта раскрывается не как набор точек на карте, а как живая история."
            </p>
            <div className="flex items-center gap-4 border-t border-sand/30 pt-6">
              <div className="w-10 h-10 rounded-full bg-marine flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-marine/20">НР</div>
              <div>
                <p className="text-sm font-bold text-charcoal">Николай Русин</p>
                <p className="text-xs text-charcoal/50 font-sans uppercase tracking-widest">Ваш экскурсовод</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20"
      >
        <ChevronDown size={24} className="text-sand" />
      </motion.div>
    </section>
  );
};
