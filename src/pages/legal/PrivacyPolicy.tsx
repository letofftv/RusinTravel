import React from 'react';

export const PrivacyPolicy = () => (
  <div className="pt-40 pb-24 max-w-4xl mx-auto px-6 font-sans">
    <h1 className="text-4xl font-serif mb-8">Политика конфиденциальности</h1>
    <div className="prose prose-charcoal max-w-none space-y-6 text-charcoal/70">
      <p>Ваша конфиденциальность важна для нас. В этом документе описано, какие данные мы собираем и как их используем.</p>
      <h2 className="text-2xl font-serif text-charcoal">1. Сбор информации</h2>
      <p>Мы собираем только те данные, которые вы добровольно оставляете в формах на сайте: имя, номер телефона, выбранная экскурсия.</p>
      <h2 className="text-2xl font-serif text-charcoal">2. Использование данных</h2>
      <p>Данные используются исключительно для связи с вами по поводу бронирования экскурсий и уточнения деталей маршрута.</p>
      <p>Мы не передаем ваши данные третьим лицам, за исключением случаев, предусмотренных законодательством РФ.</p>
    </div>
  </div>
);
