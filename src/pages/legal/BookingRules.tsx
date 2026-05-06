import React from 'react';

export const BookingRules = () => (
  <div className="pt-40 pb-24 max-w-4xl mx-auto px-6 font-sans">
    <h1 className="text-4xl font-serif mb-8">Правила бронирования и возврата</h1>
    <div className="prose prose-charcoal max-w-none space-y-6 text-charcoal/70">
      <p>Для бронирования экскурсии необходимо оставить заявку на сайте. Николай свяжется с вами для подтверждения даты и времени.</p>
      <h2 className="text-2xl font-serif text-charcoal">Отмена и перенос</h2>
      <p>Вы можете отменить или перенести экскурсию без штрафов за 24 часа до её начала. В случае более поздней отмены предоплата (если она была предусмотрена) не возвращается.</p>
    </div>
  </div>
);
