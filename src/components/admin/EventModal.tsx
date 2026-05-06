import React, { useState } from 'react';
import { X, Save, Image as ImageIcon } from 'lucide-react';
import { EventItem } from '../../types';

interface EventModalProps {
  event?: EventItem;
  onClose: () => void;
  onSave: (event: Partial<EventItem>) => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose, onSave }) => {
  const [formData, setFormData] = useState<Partial<EventItem>>(event || {
    title: '',
    category: ['Групповая'],
    dateStart: new Date().toISOString().slice(0, 16),
    price: '',
    seatsTotal: 15,
    seatsAvailable: 15,
    status: 'draft',
    description: '',
    imageUrl: '/PHOTOS/tour-znakomstvo-s-alushtoy.jpg'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-2xl rounded-[32px] overflow-hidden shadow-2xl animate-scale-in">
        <div className="p-8 border-b border-slate-50 flex justify-between items-center">
          <h3 className="text-2xl font-serif text-charcoal">{event ? 'Редактировать событие' : 'Новое событие'}</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Название</label>
              <input 
                type="text" 
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 outline-none focus:border-turquoise/50 focus:bg-white transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Категория (через запятую)</label>
              <input 
                type="text" 
                value={formData.category?.join(', ')}
                onChange={(e) => setFormData({ ...formData, category: e.target.value.split(',').map(s => s.trim()) })}
                className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 outline-none focus:border-turquoise/50 focus:bg-white transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Дата и время</label>
              <input 
                type="datetime-local" 
                required
                value={formData.dateStart?.slice(0, 16)}
                onChange={(e) => setFormData({ ...formData, dateStart: new Date(e.target.value).toISOString() })}
                className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 outline-none focus:border-turquoise/50 focus:bg-white transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Стоимость (строка)</label>
              <input 
                type="text" 
                required
                placeholder="1 500 ₽"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 outline-none focus:border-turquoise/50 focus:bg-white transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Всего мест</label>
              <input 
                type="number" 
                required
                value={formData.seatsTotal}
                onChange={(e) => setFormData({ ...formData, seatsTotal: Number(e.target.value) })}
                className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 outline-none focus:border-turquoise/50 focus:bg-white transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Доступно мест</label>
              <input 
                type="number" 
                required
                value={formData.seatsAvailable}
                onChange={(e) => setFormData({ ...formData, seatsAvailable: Number(e.target.value) })}
                className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 outline-none focus:border-turquoise/50 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Описание</label>
            <textarea 
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 outline-none focus:border-turquoise/50 focus:bg-white transition-all resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Путь к фото</label>
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 shrink-0">
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
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};
