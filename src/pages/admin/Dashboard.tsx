import React from 'react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { 
  Users, 
  Calendar, 
  Map, 
  TrendingUp,
  ArrowUpRight,
  FileText
} from 'lucide-react';
import { motion } from 'motion/react';

const StatCard = ({ title, value, icon: Icon, trend, color }: any) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm"
  >
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl ${color}`}>
        <Icon size={24} />
      </div>
      <div className="flex items-center gap-1 text-green-500 text-xs font-bold">
        {trend}
        <TrendingUp size={14} />
      </div>
    </div>
    <h3 className="text-slate-400 text-sm font-medium mb-1">{title}</h3>
    <p className="text-2xl font-bold text-slate-800">{value}</p>
  </motion.div>
);

export const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Всего броней" 
          value="124" 
          icon={Calendar} 
          trend="+12%" 
          color="bg-blue-50 text-blue-500" 
        />
        <StatCard 
          title="Активные экскурсии" 
          value="9" 
          icon={Map} 
          trend="+2" 
          color="bg-turquoise/10 text-turquoise" 
        />
        <StatCard 
          title="Посетителей (мес)" 
          value="1.2k" 
          icon={Users} 
          trend="+18%" 
          color="bg-purple-50 text-purple-500" 
        />
        <StatCard 
          title="Конверсия" 
          value="4.8%" 
          icon={TrendingUp} 
          trend="+0.4%" 
          color="bg-orange-50 text-orange-500" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-slate-800">Последние заявки</h2>
            <button className="text-turquoise text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
              Все заявки <ArrowUpRight size={16} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-[10px] uppercase tracking-widest text-slate-400 border-b border-slate-50">
                  <th className="pb-4 font-bold">Клиент</th>
                  <th className="pb-4 font-bold">Экскурсия</th>
                  <th className="pb-4 font-bold">Дата</th>
                  <th className="pb-4 font-bold">Статус</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[
                  { name: 'Анна К.', tour: 'Знакомство с Алуштой', date: '20 мая', status: 'Новая', sColor: 'bg-blue-100 text-blue-600' },
                  { name: 'Игорь М.', tour: 'Профессорский уголок', date: '18 мая', status: 'Подтверждена', sColor: 'bg-green-100 text-green-600' },
                  { name: 'Елена С.', tour: 'Рассветная набережная', date: '15 мая', status: 'Завершена', sColor: 'bg-slate-100 text-slate-600' },
                ].map((row, i) => (
                  <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 font-medium text-slate-800 text-sm">{row.name}</td>
                    <td className="py-4 text-slate-500 text-sm">{row.tour}</td>
                    <td className="py-4 text-slate-500 text-sm">{row.date}</td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${row.sColor}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
          <h2 className="text-xl font-bold text-slate-800 mb-8">Быстрые действия</h2>
          <div className="space-y-4">
            <button className="w-full p-4 bg-slate-50 hover:bg-turquoise hover:text-charcoal rounded-2xl text-left transition-all group flex items-center justify-between">
              <div>
                <p className="font-bold text-sm">Добавить событие</p>
                <p className="text-xs text-slate-400 group-hover:text-charcoal/50">Создать новую афишу</p>
              </div>
              <Calendar size={20} className="text-slate-300 group-hover:text-charcoal" />
            </button>
            <button className="w-full p-4 bg-slate-50 hover:bg-turquoise hover:text-charcoal rounded-2xl text-left transition-all group flex items-center justify-between">
              <div>
                <p className="font-bold text-sm">Написать в блог</p>
                <p className="text-xs text-slate-400 group-hover:text-charcoal/50">Опубликовать заметку</p>
              </div>
              <FileText size={20} className="text-slate-300 group-hover:text-charcoal" />
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
