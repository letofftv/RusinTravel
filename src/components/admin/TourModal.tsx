import React, { useState } from 'react';
import { X, Save, Plus, Trash2 } from 'lucide-react';
import { Tour } from '../../types';

interface TourModalProps {
  tour?: Tour;
  onClose: () => void;
  onSave: (tour: Partial<Tour>) => void;
}

export const TourModal: React.FC<TourModalProps> = ({ tour, onClose, onSave }) => {
  const [formData, setFormData] = useState<Partial<Tour>>(tour || {
    title: '',
    slug: '',
    subtitle: '',
    hook: '',
    shortDescription: '',
    fullDescription: '',
    format: 'individual',
    duration: '2 часа',
    groupSize: 'до 5 человек',
    price: '',
    priceNote: 'за экскурсию',
    startPoint: '',
    highlights: [],
    features: [],
    imageUrl: '/PHOTOS/tour-znakomstvo-s-alushtoy.jpg',
    category: ['Индивидуальные']
  });

  const [newHighlight, setNewHighlight] = useState('');
  const [newFeature, setNewFeature] = useState('');

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
    if (tour) {
      setFormData({ ...formData, title });
    } else {
      setFormData({ ...formData, title, slug: generateSlug(title) });
    }
  };

  const addItem = (field: 'highlights' | 'features', value: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
    if (!value.trim()) return;
    const current = (formData[field] as string[]) || [];
    setFormData({ ...formData, [field]: [...current, value.trim()] });
    setter('');
  };

  const removeItem = (field: 'highlights' | 'features', index: number) => {
    const current = (formData[field] as string[]) || [];
    setFormData({ ...formData, [field]: current.filter((_, i) => i !== index) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-4xl rounded-[32px] overflow-hidden shadow-2xl animate-scale-in">
        <div className="p-8 border-b border-slate-50 flex justify-between items-center">
          <h3 className="text-2xl font-serif text-charcoal">{tour ? 'Редактировать экскурсию' : 'Новая экскурсия'}</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Название</label>
                <input 
                  type="text" required value={formData.title} onChange={handleTitleChange}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 outline-none focus:border-turquoise/50 focus:bg-white transition-all font-serif text-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Slug (URL)</label>
                <input 
                  type="text" required value={formData.slug} onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2 px-4 outline-none focus:border-turquoise/50 focus:bg-white transition-all text-xs text-slate-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Подзаголовок (курсив на сайте)</label>
                <input 
                  type="text" value={formData.subtitle} onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2 px-4 outline-none focus:border-turquoise/50 focus:bg-white transition-all text-sm italic"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Хук (краткая фраза)</label>
                <input 
                  type="text" value={formData.hook} onChange={(e) => setFormData({ ...formData, hook: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2 px-4 outline-none focus:border-turquoise/50 focus:bg-white transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Длительность</label>
                  <input type="text" value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })} className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2 px-4 text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Группа</label>
                  <input type="text" value={formData.groupSize} onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })} className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2 px-4 text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Цена</label>
                  <input type="text" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2 px-4 text-sm font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Примечание к цене</label>
                  <input type="text" value={formData.priceNote} onChange={(e) => setFormData({ ...formData, priceNote: e.target.value })} className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2 px-4 text-sm" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Место старта</label>
                <input type="text" value={formData.startPoint} onChange={(e) => setFormData({ ...formData, startPoint: e.target.value })} className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2 px-4 text-sm" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Путь к фото</label>
                <input type="text" value={formData.imageUrl} onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })} className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2 px-4 text-xs" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Полное описание</label>
            <textarea 
              rows={4} value={formData.fullDescription} onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
              className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 outline-none focus:border-turquoise/50 focus:bg-white transition-all resize-none text-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 block">Что увидим (Highlights)</label>
              <div className="flex gap-2 mb-4">
                <input 
                  type="text" value={newHighlight} onChange={(e) => setNewHighlight(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addItem('highlights', newHighlight, setNewHighlight))}
                  className="flex-grow bg-slate-50 border border-slate-100 rounded-xl py-2 px-4 text-sm"
                />
                <button type="button" onClick={() => addItem('highlights', newHighlight, setNewHighlight)} className="p-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">
                  <Plus size={20} />
                </button>
              </div>
              <ul className="space-y-2">
                {formData.highlights?.map((h, i) => (
                  <li key={i} className="flex justify-between items-center p-2 bg-slate-50 rounded-lg text-sm">
                    <span>{h}</span>
                    <button type="button" onClick={() => removeItem('highlights', i)} className="text-red-400 hover:text-red-600">
                      <Trash2 size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 block">Особенности (Features)</label>
              <div className="flex gap-2 mb-4">
                <input 
                  type="text" value={newFeature} onChange={(e) => setNewFeature(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addItem('features', newFeature, setNewFeature))}
                  className="flex-grow bg-slate-50 border border-slate-100 rounded-xl py-2 px-4 text-sm"
                />
                <button type="button" onClick={() => addItem('features', newFeature, setNewFeature)} className="p-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">
                  <Plus size={20} />
                </button>
              </div>
              <ul className="space-y-2">
                {formData.features?.map((f, i) => (
                  <li key={i} className="flex justify-between items-center p-2 bg-slate-50 rounded-lg text-sm">
                    <span>{f}</span>
                    <button type="button" onClick={() => removeItem('features', i)} className="text-red-400 hover:text-red-600">
                      <Trash2 size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </form>

        <div className="p-8 bg-slate-50 flex justify-end gap-4">
          <button type="button" onClick={onClose} className="px-6 py-3 text-slate-500 font-bold hover:text-charcoal transition-colors">Отмена</button>
          <button onClick={handleSubmit} className="bg-turquoise text-charcoal px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-turquoise/80 transition-all shadow-lg shadow-turquoise/20">
            <Save size={20} />
            Сохранить экскурсию
          </button>
        </div>
      </div>
    </div>
  );
};
