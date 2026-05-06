import React, { useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { useData } from '../../context/DataContext';
import { 
  Plus, 
  Search, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  Download,
  AlertCircle,
  Eye,
  FileText
} from 'lucide-react';
import { BlogModal } from '../../components/admin/BlogModal';
import { BlogPost } from '../../types';

export const AdminBlog = () => {
  const { events, tours, reviews, blog, isLoading, saveData } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | undefined>(undefined);
  const [showExportInfo, setShowExportInfo] = useState(false);

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin w-8 h-8 border-4 border-turquoise border-t-transparent rounded-full"></div>
        </div>
      </AdminLayout>
    );
  }

  const handleSavePost = async (postData: Partial<BlogPost>) => {
    let newBlog = [...blog];
    if (selectedPost) {
      newBlog = blog.map(p => p.id === selectedPost.id ? { ...p, ...postData } as BlogPost : p);
    } else {
      const newPost = {
        ...postData,
        id: 'b' + Date.now(),
      } as BlogPost;
      newBlog.unshift(newPost);
    }

    const success = await saveData({ tours, events, reviews, blog: newBlog });
    if (!success) {
      setShowExportInfo(true);
    }
    setIsModalOpen(false);
    setSelectedPost(undefined);
  };

  const handleDeletePost = async (id: string) => {
    if (!window.confirm('Вы уверены, что хотите удалить эту статью?')) return;
    const newBlog = blog.filter(p => p.id !== id);
    const success = await saveData({ tours, events, reviews, blog: newBlog });
    if (!success) setShowExportInfo(true);
  };

  const handleExport = () => {
    const data = { tours, events, reviews, blog };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'content.json';
    a.click();
    URL.revokeObjectURL(url);
    setShowExportInfo(false);
  };

  const filteredBlog = blog.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-serif text-charcoal">Управление блогом</h2>
          <p className="text-sm text-slate-400">Публикация заметок, архивных историй и краеведческих материалов</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={handleExport}
            className="px-6 py-3 border border-slate-200 text-slate-600 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all"
          >
            <Download size={20} />
            Экспорт JSON
          </button>
          <button 
            onClick={() => { setSelectedPost(undefined); setIsModalOpen(true); }}
            className="bg-charcoal text-cream px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-turquoise hover:text-charcoal transition-all shadow-lg shadow-charcoal/10"
          >
            <Plus size={20} />
            Новая статья
          </button>
        </div>
      </div>

      {showExportInfo && (
        <div className="mb-8 p-6 bg-orange-50 border border-orange-100 rounded-[24px] flex gap-4 items-start">
          <AlertCircle className="text-orange-500 shrink-0 mt-1" size={24} />
          <div>
            <h4 className="font-bold text-orange-800 mb-1">Требуется ручное обновление</h4>
            <p className="text-sm text-orange-700 leading-relaxed mb-4">
              Автоматическое сохранение не удалось. Чтобы применить изменения, скачайте обновленный файл и замените им <code>public/data/content.json</code> на вашем хостинге.
            </p>
            <button 
              onClick={handleExport}
              className="bg-orange-500 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-orange-600 transition-colors"
            >
              Скачать content.json
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex items-center gap-4">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
            <input 
              type="text" 
              placeholder="Поиск по заголовку или категории..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-turquoise/50 focus:bg-white transition-all text-sm"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-[10px] uppercase tracking-widest text-slate-400 border-b border-slate-50">
                <th className="px-8 py-4 font-bold">Статья</th>
                <th className="px-8 py-4 font-bold">Категория</th>
                <th className="px-8 py-4 font-bold">Дата публикации</th>
                <th className="px-8 py-4 font-bold">Статус</th>
                <th className="px-8 py-4 font-bold">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredBlog.map((post) => (
                <tr key={post.id} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0">
                        <img src={post.imageUrl} className="w-full h-full object-cover" />
                      </div>
                      <div className="max-w-xs">
                        <p className="font-bold text-slate-800 text-sm line-clamp-1">{post.title}</p>
                        <p className="text-[10px] text-slate-400 truncate">/{post.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-[10px] font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-sm text-slate-500">
                    {new Date(post.publishedAt).toLocaleDateString('ru-RU')}
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      post.isPublished ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {post.isPublished ? 'Опубликовано' : 'Черновик'}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <a 
                        href={`/blog/${post.slug}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-turquoise hover:bg-turquoise/5 rounded-lg transition-all"
                        title="Предпросмотр"
                      >
                        <Eye size={18} />
                      </a>
                      <button 
                        onClick={() => { setSelectedPost(post); setIsModalOpen(true); }}
                        className="p-2 text-slate-400 hover:text-turquoise hover:bg-turquoise/5 rounded-lg transition-all" 
                        title="Редактировать"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button 
                        onClick={() => handleDeletePost(post.id)}
                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/5 rounded-lg transition-all" 
                        title="Удалить"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <BlogModal 
          post={selectedPost}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSavePost}
        />
      )}
    </AdminLayout>
  );
};
