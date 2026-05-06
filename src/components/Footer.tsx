import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Send } from 'lucide-react';
import { MonogramLogo } from './MonogramLogo';

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream/70 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <MonogramLogo variant="white" className="w-8 h-8" />
              <span className="text-2xl font-serif text-cream">RusinTravel</span>
            </div>
            <p className="text-sm leading-relaxed text-balance">
              Авторские прогулки по Алуште и Южному берегу Крыма с аттестованным экскурсоводом Николаем Русиным.
            </p>
          </div>

          <div>
            <h4 className="text-cream font-serif text-lg mb-6">Навигация</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/ekskursii" className="hover:text-turquoise transition-colors">Экскурсии</Link></li>
              <li><Link to="/obo-mne" className="hover:text-turquoise transition-colors">Обо мне</Link></li>
              <li><Link to="/galereya" className="hover:text-turquoise transition-colors">Галерея</Link></li>
              <li><Link to="/events" className="hover:text-turquoise transition-colors">События</Link></li>
              <li><Link to="/blog" className="hover:text-turquoise transition-colors">Блог</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream font-serif text-lg mb-6">Юридическая информация</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/legal/privacy" className="hover:text-turquoise transition-colors">Политика конфиденциальности</Link></li>
              <li><Link to="/legal/offer" className="hover:text-turquoise transition-colors">Публичная оферта</Link></li>
              <li><Link to="/legal/personal-data" className="hover:text-turquoise transition-colors">Обработка данных</Link></li>
              <li><Link to="/legal/booking-rules" className="hover:text-turquoise transition-colors">Правила бронирования</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream font-serif text-lg mb-6">Соцсети</h4>
            <div className="flex gap-4">
              <a href="https://t.me/nikolay_alushta" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-cream/20 rounded-2xl flex items-center justify-center hover:bg-turquoise hover:text-charcoal hover:border-turquoise transition-all">
                <Send size={20} />
              </a>
              <a href="#" className="w-10 h-10 border border-cream/20 rounded-2xl flex items-center justify-center hover:bg-turquoise hover:text-charcoal hover:border-turquoise transition-all">
                <Instagram size={20} />
              </a>
            </div>
            <p className="mt-8 text-xs opacity-50">
              © 2026 Николай Русин. <br />
              Все права защищены.
            </p>
          </div>
        </div>
        
        <div className="border-t border-cream/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-30">
          <span>Алушта, Крым</span>
          <span className="flex items-center gap-2">
            Сайт собран <a href="https://antigravity.ai" className="hover:text-turquoise transition-colors">Antigravity AI</a>
          </span>
        </div>
      </div>
    </footer>
  );
};
