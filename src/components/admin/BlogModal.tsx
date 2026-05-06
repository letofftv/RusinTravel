import React, { useState } from 'react';
import { X, Save, Image as ImageIcon } from 'lucide-react';
import { BlogPost } from '../../types';

interface BlogModalProps {
  post?: BlogPost;
  onClose: () => void;
  onSave: (post: Partial<BlogPost>) => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose, onSave }) => {
  const [formData, setFormData] = useState<Partial<BlogPost>>(post || {
    title: '',
    slug: '',
    category: 'История',
    excerpt: '',
    imageUrl: '/PHOTOS/blog-pochemu-alushta-ne-stala-yaltoy.jpg',
    publishedAt: new Date().toISOString().split('T')[0],
    isPublished: true
  });

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[а-яё]/g, (char) => {
        const map: any = {
          'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh',
          'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
          'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts',
          'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ь': '', 'ы': 'y', 'ъ': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
        };
        return map[char] || char;
      })
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    if (post) {
      setFormData({ ...formData, title });
    } else {
      setFormData({ ...formData, title, slug: generateSlug(title) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-3xl rounded-[32px] overflow-hidden shadow-2xl animate-scale-in">
        <div className="p-8 border-b border-slate-50 flex justify-between items-center">
          <h3 className="text-2xl font-serif text-charcoal">{post ? 'Редактировать статью' : 'Новая статья'}</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Заголовок</label>
              <input 
                type="text" 
                required
                value={formData.title}
                onChange={handleTitleChange}
                className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 outline-none focus:border-turquoise/50 focus:bg-white transition-all font-serif text-lg"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Slug (URL)</label>
                <input 
                  type="text" 
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2 px-4 outline-none focus:border-turquoise/50 focus:bg-white transition-all text-sm text-slate-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Категория</label>
                <select 
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2 px-4 outline-none focus:border-turquoise/50 focus:bg-white transition-all text-sm"
                >
                  <option value="История">История</option>
                  <option value="Архитектура">Архитектура</option>
                  <option value="Личности">Личности</option>
                  <option value="Краеведение">Краеведение</option>
                  <option value="Архив">Архив</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Краткое описание (анонс)</label>
              <textarea 
                required
                rows={3}
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 outline-none focus:border-turquoise/50 focus:bg-white transition-all resize-none text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Обложка (путь к фото)</label>
              <div className="flex gap-4">
                <div className="w-32 h-20 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 shrink-0">
                  <img src={formData.imageUrl} className="w-full h-full object-cover" />
                </div>
                <input 
                  type="text" 
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="flex-grow bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 outline-none focus:border-turquoise/50 focus:bg-white transition-all text-xs"
                />
              </div>
            </div>

            <div className="flex items-center gap-6 p-4 bg-slate-50 rounded-2xl">
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="isPublished"
                  checked={formData.isPublished}
                  onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                  className="w-4 h-4 text-turquoise rounded border-slate-300 focus:ring-turquoise"
                />
                <label htmlFor="isPublished" className="text-sm font-medium text-slate-700 cursor-pointer">Опубликовано</label>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Дата публикации:</label>
                <input 
                  type="date" 
                  value={formData.publishedAt}
                  onChange={(e) => setFormData({ ...formData, publishedAt: e.target.value })}
                  className="bg-transparent border-none text-sm font-medium text-slate-700 outline-none"
                />
              </div>
            </div>
          </div>
        </form>

        <div className="p-8 bg-slate-50 flex justify-end gap-4">
          <button 
            type="button" 
            onClick={onClose}
            className="px-6 py-3 text-slate-500 font-bold hover:text-charcoal transition-colors"
          >
            Отмена
          </button>
          <button 
            onClick={handleSubmit}
            className="bg-turquoise text-charcoal px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-turquoise/80 transition-all shadow-lg shadow-turquoise/20"
          >
            <Save size={20} />
            Сохранить статью
          </button>
        </div>
      </div>
    </div>
  );
};
