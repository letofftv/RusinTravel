import React from 'react';
import { Helmet } from 'react-helmet-async';

export const EventDetail = () => {
  return (
    <>
      <Helmet>
        <title>Детали события | Николай Русин</title>
      </Helmet>
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl font-serif mb-8">Детали события</h1>
        <p className="text-xl text-charcoal/60">Раздел находится в разработке...</p>
      </section>
    </>
  );
};
