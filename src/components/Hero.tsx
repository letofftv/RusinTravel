import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sand/10 -skew-x-12 transform origin-top-right -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-marine" />
            <span className="text-sm font-semibold tracking-widest text-marine uppercase">Авторские прогулки в Алуште</span>
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
            <a
              href="#tours"
              className="px-8 py-4 bg-marine text-cream rounded-full font-medium hover:bg-marine/90 hover:shadow-lg transition-all"
            >
              Выбрать экскурсию
            </a>
            <a
              href="#contacts"
              className="px-8 py-4 border border-marine text-marine rounded-full font-medium hover:bg-marine/5 transition-all"
            >
              Задать вопрос
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8 grayscale opacity-50">
            <div className="flex flex-col">
              <span className="text-2xl font-serif text-charcoal">39 лет</span>
              <span className="text-[10px] uppercase tracking-wider">опыта и жизни в Алуште</span>
            </div>
            <div className="h-10 w-px bg-sand" />
            <div className="flex flex-col">
              <span className="text-2xl font-serif text-charcoal">10+</span>
              <span className="text-[10px] uppercase tracking-wider">авторских маршрутов</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src="https://picsum.photos/seed/alushtaguide/1200/1500"
              alt="Николай Русин"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Decorative floating card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl max-w-[240px] border border-sand/30"
          >
            <p className="text-sm font-serif italic text-charcoal mb-4">
              "Алушта раскрывается не как набор точек на карте, а как живая история."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-sand" />
              <div>
                <p className="text-xs font-bold">Николай Русин</p>
                <p className="text-[10px] text-charcoal/50">Ваш экскурсовод</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-sand" />
      </div>
    </section>
  );
};
