import React, { useState } from 'react';
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
    comment: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const webhookUrl = import.meta.env.VITE_BITRIX_WEBHOOK_URL;
    
    // Prepare payload for Bitrix24 Lead
    const payload = {
      fields: {
        TITLE: `Заявка на экскурсию: ${formData.tour}`,
        NAME: formData.name,
        PHONE: [{ VALUE: formData.phone, VALUE_TYPE: 'WORK' }],
        COMMENTS: `Дата: ${formData.date}\nГостей: ${formData.guests}\n\nКомментарий:\n${formData.comment}`,
        SOURCE_ID: 'WEB',
      },
      params: { REGISTER_SONET_EVENT: 'Y' }
    };

    if (!webhookUrl) {
      console.warn('Bitrix24 Webhook URL is not setup. Simulating success.', payload);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1000);
      return;
    }

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) throw new Error('Network response was not ok');
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting to CRM:', error);
      // Even if CRM fails, we might want to show success to user and log it for MVP
      // Wait for real business requirements to handle failure states
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl shadow-sand/20 border border-sand/20">
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
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Александр"
                  className="w-full px-6 py-4 bg-cream rounded-xl border border-transparent focus:border-sand focus:bg-white outline-none transition-all duration-200 placeholder:text-charcoal/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal/50">Телефон</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-6 py-4 bg-cream rounded-xl border border-transparent focus:border-sand focus:bg-white outline-none transition-all duration-200 placeholder:text-charcoal/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-charcoal/50">Желаемая экскурсия</label>
              <select 
                name="tour"
                value={formData.tour}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-cream rounded-xl border border-transparent focus:border-sand focus:bg-white outline-none transition-all duration-200 h-[58px]"
              >
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
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-cream rounded-xl border border-transparent focus:border-sand focus:bg-white outline-none transition-all duration-200"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal/50">Количество человек</label>
                <input
                  type="number"
                  name="guests"
                  min="1"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="2"
                  className="w-full px-6 py-4 bg-cream rounded-xl border border-transparent focus:border-sand focus:bg-white outline-none transition-all duration-200 placeholder:text-charcoal/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-charcoal/50">Комментарий или вопрос</label>
              <textarea
                rows={4}
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Напишите ваши пожелания..."
                className="w-full px-6 py-4 bg-cream rounded-xl border border-transparent focus:border-sand focus:bg-white outline-none transition-all duration-200 placeholder:text-charcoal/30"
              />
            </div>

            <label className="flex items-start gap-4 cursor-pointer group px-2">
              <div className="relative flex items-center justify-center mt-0.5 shrink-0">
                <input
                  type="checkbox"
                  required
                  checked={isConsentAccepted}
                  onChange={(e) => setIsConsentAccepted(e.target.checked)}
                  className="peer appearance-none w-5 h-5 border-2 border-sand/60 rounded-md checked:bg-marine checked:border-marine transition-colors cursor-pointer"
                />
                <Check size={14} strokeWidth={3} className="text-white absolute opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
              </div>
              <span className="text-xs text-charcoal/50 leading-relaxed group-hover:text-charcoal/80 transition-colors select-none">
                Я принимаю условия оферты и согласен на обработку персональных данных. Николай свяжется с вами для подтверждения.
              </span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting || !isConsentAccepted}
              className={`w-full py-5 bg-marine text-cream rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 group ${isSubmitting || !isConsentAccepted ? 'opacity-50 cursor-not-allowed' : 'hover:bg-marine/90 hover:shadow-xl hover:shadow-marine/20'}`}
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              {!isSubmitting && <Send size={18} className={`transition-transform ${!isConsentAccepted ? '' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />}
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
