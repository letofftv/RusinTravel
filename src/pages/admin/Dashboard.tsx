import React, { useEffect, useState } from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import {
  Users,
  Calendar,
  Map,
  TrendingUp,
  ArrowUpRight,
  FileText,
  RefreshCw,
  AlertCircle,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface BitrixTask {
  id: string;
  title: string;
  status: string;
  createdDate: string;
  deadline: string;
  clientName: string;
  clientPhone: string;
  tour: string;
}

interface Stats {
  total: number;
  new: number;
  in_progress: number;
  done: number;
}

const statusLabels: Record<string, { label: string; color: string }> = {
  new:         { label: 'Новая',       color: 'bg-blue-100 text-blue-600' },
  pending:     { label: 'Ожидает',     color: 'bg-yellow-100 text-yellow-600' },
  in_progress: { label: 'В работе',    color: 'bg-purple-100 text-purple-600' },
  review:      { label: 'На контроле', color: 'bg-orange-100 text-orange-600' },
  done:        { label: 'Завершена',   color: 'bg-slate-100 text-slate-500' },
};

const StatCard = ({ title, value, icon: Icon, color }: any) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm"
  >
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl ${color}`}>
        <Icon size={24} />
      </div>
    </div>
    <h3 className="text-slate-400 text-sm font-medium mb-1">{title}</h3>
    <p className="text-2xl font-bold text-slate-800">{value ?? '—'}</p>
  </motion.div>
);

export const AdminDashboard = () => {
  const [tasks, setTasks] = useState<BitrixTask[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadTasks = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/bitrix/tasks.php', { credentials: 'include' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (data.success) {
        setTasks(data.tasks ?? []);
        setStats(data.stats ?? null);
      } else {
        throw new Error(data.message || 'Ошибка загрузки');
      }
    } catch (e: any) {
      setError(e.message || 'Не удалось загрузить заявки из Битрикс24');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadTasks(); }, []);

  const formatDate = (iso: string) => {
    if (!iso) return '—';
    try {
      return new Date(iso).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
    } catch { return iso; }
  };

  return (
    <AdminLayout>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Всего заявок"      value={stats?.total}       icon={Calendar} color="bg-blue-50 text-blue-500" />
        <StatCard title="Новые"             value={stats?.new}         icon={ArrowUpRight} color="bg-green-50 text-green-500" />
        <StatCard title="В работе"          value={stats?.in_progress} icon={TrendingUp} color="bg-purple-50 text-purple-500" />
        <StatCard title="Активных экскурсий" value={9}                 icon={Map} color="bg-turquoise/10 text-turquoise" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Заявки из Битрикса */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-slate-800">Заявки из Битрикс24</h2>
            <button
              onClick={loadTasks}
              className="text-turquoise text-sm font-bold flex items-center gap-1.5 hover:gap-2 transition-all"
            >
              <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
              Обновить
            </button>
          </div>

          {error && (
            <div className="flex items-start gap-3 bg-red-50 text-red-600 p-4 rounded-2xl mb-6 text-sm">
              <AlertCircle size={16} className="mt-0.5 shrink-0" />
              <div>
                <p className="font-bold mb-0.5">Ошибка загрузки</p>
                <p className="text-red-500">{error}</p>
              </div>
            </div>
          )}

          {loading && !error ? (
            <div className="py-12 text-center">
              <div className="animate-spin w-8 h-8 border-4 border-turquoise border-t-transparent rounded-full mx-auto mb-3" />
              <p className="text-slate-400 text-sm">Загрузка из Битрикс24...</p>
            </div>
          ) : tasks.length === 0 && !error ? (
            <div className="py-12 text-center">
              <p className="text-slate-400 font-serif italic">Заявок пока нет</p>
              <p className="text-slate-300 text-xs mt-2">Они появятся здесь после отправки формы на сайте</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-[10px] uppercase tracking-widest text-slate-400 border-b border-slate-50">
                    <th className="pb-4 font-bold">Клиент</th>
                    <th className="pb-4 font-bold">Экскурсия</th>
                    <th className="pb-4 font-bold">Дедлайн</th>
                    <th className="pb-4 font-bold">Статус</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {tasks.slice(0, 15).map((task) => {
                    const s = statusLabels[task.status] ?? statusLabels.new;
                    return (
                      <tr key={task.id} className="group hover:bg-slate-50/50 transition-colors">
                        <td className="py-4">
                          <p className="font-medium text-slate-800 text-sm">{task.clientName || task.title}</p>
                          {task.clientPhone && (
                            <p className="text-xs text-slate-400">{task.clientPhone}</p>
                          )}
                        </td>
                        <td className="py-4 text-slate-500 text-sm max-w-[160px] truncate">{task.tour || '—'}</td>
                        <td className="py-4 text-slate-500 text-sm">{formatDate(task.deadline)}</td>
                        <td className="py-4">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${s.color}`}>
                            {s.label}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Быстрые действия */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
          <h2 className="text-xl font-bold text-slate-800 mb-8">Быстрые действия</h2>
          <div className="space-y-4">
            <Link
              to="/admin/events"
              className="w-full p-4 bg-slate-50 hover:bg-turquoise hover:text-charcoal rounded-2xl text-left transition-all group flex items-center justify-between"
            >
              <div>
                <p className="font-bold text-sm">Добавить в афишу</p>
                <p className="text-xs text-slate-400 group-hover:text-charcoal/50">Создать новое мероприятие</p>
              </div>
              <Calendar size={20} className="text-slate-300 group-hover:text-charcoal" />
            </Link>
            <Link
              to="/admin/blog"
              className="w-full p-4 bg-slate-50 hover:bg-turquoise hover:text-charcoal rounded-2xl text-left transition-all group flex items-center justify-between"
            >
              <div>
                <p className="font-bold text-sm">Написать в блог</p>
                <p className="text-xs text-slate-400 group-hover:text-charcoal/50">Опубликовать заметку</p>
              </div>
              <FileText size={20} className="text-slate-300 group-hover:text-charcoal" />
            </Link>
            <a
              href={`https://b24-vwlq3l.bitrix24.ru/workgroups/group/`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-4 bg-slate-50 hover:bg-turquoise hover:text-charcoal rounded-2xl text-left transition-all group flex items-center justify-between"
            >
              <div>
                <p className="font-bold text-sm">Открыть Битрикс24</p>
                <p className="text-xs text-slate-400 group-hover:text-charcoal/50">Управление задачами</p>
              </div>
              <Users size={20} className="text-slate-300 group-hover:text-charcoal" />
            </a>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
