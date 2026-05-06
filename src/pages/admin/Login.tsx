import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Lock, User, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { MonogramLogo } from '../../components/MonogramLogo';

export const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // For now, a very simple mock check
    // In production, this would be a Supabase auth call or an API call
    setTimeout(() => {
      if (password === 'admin123') { // Temporary mock password
        localStorage.setItem('admin_session', 'true');
        navigate('/admin');
      } else {
        setError('Неверный пароль');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center p-6 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="text-center mb-10">
          <div className="inline-block p-4 bg-white/5 rounded-3xl mb-6">
            <MonogramLogo variant="white" size={48} />
          </div>
          <h1 className="text-3xl font-serif text-cream mb-2">Вход в панель</h1>
          <p className="text-cream/50 text-sm">Введите данные для управления сайтом</p>
        </div>

        <div className="bg-white rounded-[32px] p-10 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">Логин</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                <input 
                  type="text" 
                  disabled
                  value="nikolay_rusin"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 outline-none text-slate-400 cursor-not-allowed"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">Пароль</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                <input 
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-12 outline-none focus:border-turquoise/50 focus:bg-white transition-all text-slate-800"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <motion.p 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-red-500 text-sm px-1 font-medium"
              >
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-charcoal text-cream rounded-2xl py-4 font-bold flex items-center justify-center gap-2 hover:bg-turquoise hover:text-charcoal transition-all duration-300 group shadow-lg shadow-charcoal/10"
            >
              {isLoading ? 'Проверка...' : 'Войти'}
              {!isLoading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="text-cream/30 text-sm hover:text-turquoise transition-colors">Вернуться на сайт</a>
        </div>
      </motion.div>
    </div>
  );
};
