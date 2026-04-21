import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BLOG_POSTS } from '../constants';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Блог | Николай Русин</title>
        <meta name="description" content="Заметки об Алуште, старых фотографиях, людях, домах, мифах и маршрутах от экскурсовода Николая Русина." />
      </Helmet>

      <section className="pt-32 pb-16 bg-cream border-b border-sand/30">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-6">Истории Алушты</h1>
          <p className="text-xl text-charcoal/70 max-w-3xl leading-relaxed mb-12">
            Короткие заметки о городе, который часто кажется знакомым только потому, что мы редко смотрим на него внимательно. Старые фотографии, дома, люди, мифы, маршруты и детали, из которых складывается другая Алушта.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {['Все', 'Алушта, которую вы не замечали', 'Одна старая фотография', 'Правда или ложь', 'Заметки экскурсовода'].map((filter, i) => (
              <button 
                key={i} 
                className={`px-5 py-2 rounded-2xl text-sm font-medium transition-colors ${i === 0 ? 'bg-charcoal text-cream' : 'border border-sand text-charcoal hover:bg-sand'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BLOG_POSTS.map((post) => (
              <a key={post.id} href="#" className="group block">
                <div className="aspect-video rounded-xl overflow-hidden mb-6 relative">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-charcoal text-xs font-bold uppercase tracking-wider rounded-2xl shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-charcoal group-hover:text-marine transition-colors mb-3">
                  {post.title}
                </h3>
                <p className="text-charcoal/60 line-clamp-2 mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-charcoal/40 font-medium">
                    {new Date(post.publishedAt).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-marine">
                    Читать
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
