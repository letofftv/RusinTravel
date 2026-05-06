import React, { useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { useData } from '../../context/DataContext';
import { 
  Plus, 
  Search, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  Users,
  Download,
  AlertCircle
} from 'lucide-react';
import { EventModal } from '../../components/admin/EventModal';
import { EventItem } from '../../types';

export const AdminEvents = () => {
  const { events, tours, reviews, blog, isLoading, saveData } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | undefined>(undefined);
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

  const handleSaveEvent = async (eventData: Partial<EventItem>) => {
    let newEvents = [...events];
    if (selectedEvent) {
      newEvents = events.map(e => e.id === selectedEvent.id ? { ...e, ...eventData } as EventItem : e);
    } else {
      const newEvent = {
        ...eventData,
        id: 'e' + Date.now(),
        status: 'published'
      } as EventItem;
      newEvents.push(newEvent);
    }

    const success = await saveData({ tours, events: newEvents, reviews, blog });
    if (!success) {
      setShowExportInfo(true);
    }
    setIsModalOpen(false);
    setSelectedEvent(undefined);
  };

  const handleDeleteEvent = async (id: string) => {
    if (!window.confirm('Вы уверены, что хотите удалить это событие?')) return;
    const newEvents = events.filter(e => e.id !== id);
    const success = await saveData({ tours, events: newEvents, reviews, blog });
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

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.category.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-serif text-charcoal">Управление событиями</h2>
          <p className="text-sm text-slate-400">Добавление и редактирование афиши групповых прогулок</p>
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
            onClick={() => { setSelectedEvent(undefined); setIsModalOpen(true); }}
            className="bg-charcoal text-cream px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-turquoise hover:text-charcoal transition-all shadow-lg shadow-charcoal/10"
          >
            <Plus size={20} />
            Новое событие
          </button>
        </div>
      </div>

      {showExportInfo && (
        <div className="mb-8 p-6 bg-orange-50 border border-orange-100 rounded-[24px] flex gap-4 items-start">
          <AlertCircle className="text-orange-500 shrink-0 mt-1" size={24} />
          <div>
            <h4 className="font-bold text-orange-800 mb-1">Автоматическое сохранение не удалось</h4>
            <p className="text-sm text-orange-700 leading-relaxed mb-4">
              Это нормально для статического хостинга. Ваши изменения сохранены в памяти сайта, но чтобы они появились у всех пользователей, скачайте обновленный файл и замените им <code>public/data/content.json</code> на вашем хостинге.
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
              placeholder="Поиск по названию или категории..."
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
                <th className="px-8 py-4 font-bold">Событие</th>
                <th className="px-8 py-4 font-bold">Дата и время</th>
                <th className="px-8 py-4 font-bold">Места</th>
                <th className="px-8 py-4 font-bold">Стоимость</th>
                <th className="px-8 py-4 font-bold">Статус</th>
                <th className="px-8 py-4 font-bold">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredEvents.map((event) => {
                const date = new Date(event.dateStart);
                const formattedDate = date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
                const formattedTime = date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
                
                return (
                  <tr key={event.id} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                          <img src={event.imageUrl} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-sm">{event.title}</p>
                          <p className="text-[10px] text-slate-400 uppercase tracking-widest">{event.category.join(', ')}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm text-slate-500">
                      <div className="flex flex-col">
                        <span className="font-medium text-slate-700">{formattedDate}</span>
                        <span className="text-xs">{formattedTime}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Users size={14} className="text-slate-300" />
                        <span className="font-medium text-slate-700">{event.seatsAvailable}</span>
                        <span className="text-slate-300">/ {event.seatsTotal}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-serif text-lg text-slate-700">
                      {event.price}
                    </td>
                    <td className="px-8 py-6">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        event.status === 'published' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {event.status === 'published' ? 'Опубликовано' : 'Черновик'}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => { setSelectedEvent(event); setIsModalOpen(true); }}
                          className="p-2 text-slate-400 hover:text-turquoise hover:bg-turquoise/5 rounded-lg transition-all" 
                          title="Редактировать"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button 
                          onClick={() => handleDeleteEvent(event.id)}
                          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/5 rounded-lg transition-all" 
                          title="Удалить"
                        >
                          <Trash2 size={18} />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                          <MoreVertical size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <EventModal 
          event={selectedEvent}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveEvent}
        />
      )}
    </AdminLayout>
  );
};
