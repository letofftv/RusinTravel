import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft } from 'lucide-react';
import { useData } from '../context/DataContext';

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { blog, isLoading } = useData();
  const post = blog.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="pt-40 pb-24 text-center min-h-[60vh]">
        <div className="animate-spin w-10 h-10 border-4 border-marine border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-charcoal/50 font-serif">Загрузка статьи...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-40 text-center bg-cream min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-5xl font-serif mb-8 text-charcoal">Статья не найдена</h1>
        <Link to="/blog" className="px-6 py-2 bg-marine text-cream rounded-2xl font-medium">Ко всем статьям</Link>
      </div>
    );
  }

  const paragraphs = (post.content || post.excerpt || '').split('\n\n').filter(Boolean);

  return (
    <>
      <Helmet>
        <title>{post.title} | Николай Русин</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <article className="pt-32 pb-24 bg-white min-h-[60vh]">
        <div className="max-w-3xl mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/60 hover:text-marine mb-8 transition-colors">
            <ChevronLeft size={16} />
            Все статьи
          </Link>

          <span className="inline-block px-3 py-1 bg-marine/10 text-marine text-xs font-bold uppercase tracking-wider rounded-2xl mb-5">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-4 leading-tight">{post.title}</h1>
          <p className="text-sm text-charcoal/40 font-medium mb-10">
            {new Date(post.publishedAt).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          {post.imageUrl && (
            <div className="aspect-video rounded-2xl overflow-hidden mb-12 shadow-lg shadow-charcoal/10">
              <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-charcoal/80 leading-relaxed mb-6">{p}</p>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-sand/40 text-center">
            <p className="text-charcoal/60 mb-6 font-serif text-xl">Хотите услышать такие истории на прогулке?</p>
            <Link to="/ekskursii" className="inline-block px-8 py-4 bg-marine text-cream rounded-2xl font-medium hover:bg-turquoise transition-colors">
              Выбрать экскурсию
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};
