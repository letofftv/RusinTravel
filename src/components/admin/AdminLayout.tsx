import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  Map, 
  FileText, 
  Settings, 
  LogOut,
  ChevronRight,
  User
} from 'lucide-react';
import { MonogramLogo } from '../MonogramLogo';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Дашборд', icon: LayoutDashboard, path: '/admin' },
    { name: 'События', icon: Calendar, path: '/admin/events' },
    { name: 'Экскурсии', icon: Map, path: '/admin/tours' },
    { name: 'Блог', icon: FileText, path: '/admin/blog' },
    { name: 'Настройки', icon: Settings, path: '/admin/settings' },
  ];

  const handleLogout = () => {
    // Logic for logout
    localStorage.removeItem('admin_session');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-charcoal text-cream flex flex-col sticky top-0 h-screen">
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <MonogramLogo variant="white" size={32} />
          <span className="text-xl font-serif">Админ-панель</span>
        </div>

        <nav className="flex-grow p-4 space-y-2 mt-4">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center justify-between p-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? 'bg-turquoise text-charcoal shadow-lg shadow-turquoise/20' 
                    : 'hover:bg-white/5 text-cream/70 hover:text-cream'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={20} />
                  <span className="font-medium text-sm">{item.name}</span>
                </div>
                {isActive && <ChevronRight size={16} />}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-500/10 text-red-400 transition-colors text-sm font-medium"
          >
            <LogOut size={20} />
            Выйти
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 h-20 flex items-center justify-between px-8 sticky top-0 z-10">
          <h1 className="text-xl font-bold text-slate-800">
            {menuItems.find(i => i.path === location.pathname)?.name || 'Панель управления'}
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="text-sm font-bold text-slate-800">Николай Русин</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400">Администратор</span>
            </div>
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
              <User size={20} />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
};
