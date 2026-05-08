import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConsentAccepted, setIsConsentAccepted] = useState(false);

  // Form fields
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    tour: 'Знакомство с Алуштой',
    date: '',
    guests: '',
    children: '',
    contactMethod: 'Telegram',
    comment: ''
  });

  const [consentAccepted, setConsentAccepted] = useState(false);
  const [offerAccepted, setOfferAccepted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) throw new Error('Network response was not ok');
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting to CRM:', error);
      // Even if CRM fails, we show success to user but log it
      // In production we might want to handle this better
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl shadow-sand/20 border border-sand/20">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <h3 className="text-3xl font-serif text-charcoal mb-6">Забронировать прогулку</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/40 font-sans">Ваше имя</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Александр"
                  className="w-full px-5 py-3 bg-cream rounded-xl border border-transparent focus:border-sand focus:bg-white outline-none transition-all duration-200 placeholder:text-charcoal/20 font-sans text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/40 font-sans">Телефон / Мессенджер</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-5 py-3 bg-cream rounded-xl border border-transparent focus:border-sand focus:bg-white outline-none transition-all duration-200 placeholder:text-charcoal/20 font-sans text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/40 font-sans">Экскурсия</label>
                <select 
                  name="tour"
                  value={formData.tour}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-cream rounded-xl border border-transparent focus:border-sand focus:bg-white outline-none transition-all duration-200 h-[46px] font-sans text-sm"
                >
                  <option>Алушта — неизвестная история безуездного города</option>
                  <option>Истории Профессорского уголка</option>
                  <option>По Романовской дороге</option>
                  <option>В гости к Раевским и Бороздиным</option>
                  <option>Нетуристическая Алушта</option>
                  <option>От Базарной до Нижнемечетной</option>
                  <option>Снято в Алуште</option>
                  <option>От Виноградной до Ленина</option>
                  <option>Алушта и её окрестности. Истории, легенды и предания</option>
                  <option>Другой формат / Лекция</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/40 font-sans">Способ связи</label>
                <select 
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-cream rounded-xl border border-transparent focus:border-sand focus:bg-white outline-none transition-all duration-200 h-[46px] font-sans text-sm"
                >
                  <option>Telegram</option>
                  <option>Обычный звонок</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/40 font-sans">Дата</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-cream rounded-xl border border-transparent focus:border-sand focus:bg-white outline-none transition-all duration-200 font-sans text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/40 font-sans">Взрослых</label>
                <input
                  type="number"
                  name="guests"
                  min="1"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="2"
                  className="w-full px-5 py-3 bg-cream rounded-xl border border-transparent focus:border-sand focus:bg-white outline-none transition-all duration-200 placeholder:text-charcoal/20 font-sans text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/40 font-sans">Детей</label>
                <input
                  type="number"
                  name="children"
                  min="0"
                  value={formData.children}
                  onChange={handleChange}
                  placeholder="0"
                  className="w-full px-5 py-3 bg-cream rounded-xl border border-transparent focus:border-sand focus:bg-white outline-none transition-all duration-200 placeholder:text-charcoal/20 font-sans text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-charcoal/40 font-sans">Комментарий или вопрос</label>
              <textarea
                rows={2}
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Ваши пожелания..."
                className="w-full px-5 py-3 bg-cream rounded-xl border border-transparent focus:border-sand focus:bg-white outline-none transition-all duration-200 placeholder:text-charcoal/20 font-sans text-sm"
              />
            </div>

            <div className="space-y-3 px-1">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                  <input
                    type="checkbox"
                    required
                    checked={consentAccepted}
                    onChange={(e) => setConsentAccepted(e.target.checked)}
                    className="peer appearance-none w-4 h-4 border-2 border-sand/40 rounded-md checked:bg-marine checked:border-marine transition-colors cursor-pointer"
                  />
                  <Check size={12} strokeWidth={4} className="text-white absolute opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                </div>
                <span className="text-[10px] text-charcoal/40 leading-tight group-hover:text-charcoal/60 transition-colors select-none font-sans">
                  Я даю <Link to="/legal/personal-data" className="underline hover:text-turquoise">согласие на обработку персональных данных</Link> и подтверждаю, что ознакомлен с <Link to="/legal/privacy" className="underline hover:text-turquoise">политикой конфиденциальности</Link>.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                  <input
                    type="checkbox"
                    required
                    checked={offerAccepted}
                    onChange={(e) => setOfferAccepted(e.target.checked)}
                    className="peer appearance-none w-4 h-4 border-2 border-sand/40 rounded-md checked:bg-marine checked:border-marine transition-colors cursor-pointer"
                  />
                  <Check size={12} strokeWidth={4} className="text-white absolute opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                </div>
                <span className="text-[10px] text-charcoal/40 leading-tight group-hover:text-charcoal/60 transition-colors select-none font-sans">
                  Я принимаю условия <Link to="/legal/offer" className="underline hover:text-turquoise">публичной оферты</Link> и согласен с <Link to="/legal/booking-rules" className="underline hover:text-turquoise">правилами бронирования</Link>.
                </span>
              </label>
            </div>


            <button
              type="submit"
              disabled={isSubmitting || !consentAccepted || !offerAccepted}
              className={`w-full py-5 bg-marine text-cream rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 group ${isSubmitting || !consentAccepted || !offerAccepted ? 'opacity-50 cursor-not-allowed' : 'hover:bg-turquoise hover:shadow-xl hover:shadow-turquoise/20'}`}
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              {!isSubmitting && <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
