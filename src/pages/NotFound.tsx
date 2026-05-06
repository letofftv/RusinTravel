import React from 'react';

export const NotFound = () => {
  return (
    <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto text-center">
      <h1 className="text-7xl font-serif mb-8">404</h1>
      <p className="text-2xl text-charcoal/60 mb-12">Страница не найдена</p>
      <a href="/" className="px-8 py-4 bg-marine text-cream rounded-2xl font-medium hover:bg-marine/90 transition-colors">
        Вернуться на главную
      </a>
    </section>
  );
};
