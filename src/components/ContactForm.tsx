import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to API or CRM
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-sand/20 border border-sand/30">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <h3 className="text-3xl font-serif text-charcoal mb-8">Забронировать прогулку</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal/50">Ваше имя</label>
                <input
                  type="text"
                  required
                  placeholder="Александр"
                  className="w-full px-6 py-4 bg-cream rounded-2xl border border-transparent focus:border-sand focus:bg-white outline-none transition-all placeholder:text-charcoal/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal/50">Телефон</label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-6 py-4 bg-cream rounded-2xl border border-transparent focus:border-sand focus:bg-white outline-none transition-all placeholder:text-charcoal/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-charcoal/50">Желаемая экскурсия</label>
              <select className="w-full px-6 py-4 bg-cream rounded-2xl border border-transparent focus:border-sand focus:bg-white outline-none transition-all h-[58px]">
                <option>Знакомство с Алуштой</option>
                <option>Истории Профессорского уголка</option>
                <option>неВыдуманные истории Алушты</option>
                <option>Рассветная набережная</option>
                <option>Другой формат / Лекция</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal/50">Дата</label>
                <input
                  type="date"
                  required
                  className="w-full px-6 py-4 bg-cream rounded-2xl border border-transparent focus:border-sand focus:bg-white outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal/50">Количество человек</label>
                <input
                  type="number"
                  min="1"
                  placeholder="2"
                  className="w-full px-6 py-4 bg-cream rounded-2xl border border-transparent focus:border-sand focus:bg-white outline-none transition-all placeholder:text-charcoal/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-charcoal/50">Комментарий или вопрос</label>
              <textarea
                rows={4}
                placeholder="Напишите ваши пожелания..."
                className="w-full px-6 py-4 bg-cream rounded-2xl border border-transparent focus:border-sand focus:bg-white outline-none transition-all placeholder:text-charcoal/30"
              />
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-marine text-cream rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-marine/90 hover:shadow-xl transition-all group"
            >
              Отправить заявку
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <p className="text-[10px] text-center text-charcoal/40 leading-relaxed px-8">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Николай свяжется с вами для подтверждения.
            </p>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
              <CheckCircle size={40} />
            </div>
            <h3 className="text-3xl font-serif text-charcoal mb-4">Спасибо! Заявка принята</h3>
            <p className="text-charcoal/60 leading-relaxed max-w-sm mb-12">
              Николай свяжется с вами в течение часа, чтобы уточнить детали и подтвердить возможность провести экскурсию.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-marine font-bold hover:underline"
            >
              Отправить ещё одну
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
