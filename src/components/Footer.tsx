import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Phone } from 'lucide-react';
import { MonogramLogo } from './MonogramLogo';

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream/70 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <MonogramLogo variant="white" size={32} />
              <span className="text-2xl font-serif text-cream">Николай Русин</span>
            </div>
            <p className="text-sm leading-relaxed text-balance">
              Авторские прогулки по Алуште и Южному берегу Крыма с аттестованным экскурсоводом.
            </p>
          </div>

          <div>
            <h4 className="text-cream font-serif text-lg mb-6 tracking-wide">Навигация</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/ekskursii" className="hover:text-turquoise transition-colors">Экскурсии</Link></li>
              <li><Link to="/obo-mne" className="hover:text-turquoise transition-colors">Обо мне</Link></li>
              <li><Link to="/galereya" className="hover:text-turquoise transition-colors">Галерея</Link></li>
              <li><Link to="/events" className="hover:text-turquoise transition-colors">События</Link></li>
              <li><Link to="/blog" className="hover:text-turquoise transition-colors">Блог</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream font-serif text-lg mb-6 tracking-wide">Юридическая информация</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/legal/privacy" className="hover:text-turquoise transition-colors">Политика конфиденциальности</Link></li>
              <li><Link to="/legal/offer" className="hover:text-turquoise transition-colors">Публичная оферта</Link></li>
              <li><Link to="/legal/personal-data" className="hover:text-turquoise transition-colors">Обработка данных</Link></li>
              <li><Link to="/legal/booking-rules" className="hover:text-turquoise transition-colors">Правила бронирования</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream font-serif text-lg mb-6 tracking-wide">Контакты</h4>
            <div className="space-y-4 mb-8">
              <a href="tel:+79787051954" className="flex items-center gap-3 hover:text-turquoise transition-colors">
                <Phone size={16} className="text-turquoise" />
                <span className="text-sm font-medium">+7 (978) 705-19-54</span>
              </a>
              <div className="flex gap-4">
                <a href="https://vk.ru/rusin_alushta" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-cream/20 rounded-2xl flex items-center justify-center hover:bg-turquoise hover:text-charcoal hover:border-turquoise transition-all group" title="Группа ВКонтакте">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.98 12c0 4.41-3.59 8-8 8s-8-3.59-8-8 3.59-8 8-8 8 3.59 8 8zm-5.11-2.92c-.11-.37-.48-.58-.87-.58h-1.5c-.28 0-.5.22-.5.5s.22.5.5.5h.36c.21 0 .38.17.38.38 0 .1-.04.2-.11.27l-.63.63c-.11.11-.26.17-.42.17h-.3c-.28 0-.5.22-.5.5s.22.5.5.5h.5c.28 0 .5-.22.5-.5v-.12c0-.13.05-.26.15-.35l.85-.85c.37-.37.58-.88.58-1.41z"/>
                    <path d="M15.05 12c0 .35-.14.68-.38.92-.24.24-.57.38-.92.38h-.5c-.72 0-1.3.58-1.3 1.3v.5c0 .35-.14.68-.38.92-.24.24-.57.38-.92.38s-.68-.14-.92-.38c-.24-.24-.38-.57-.38-.92v-.5c0-.72-.58-1.3-1.3-1.3h-.5c-.35 0-.68-.14-.92-.38-.24-.24-.38-.57-.38-.92 0-.35.14-.68.38-.92.24-.24.57-.38.92-.38h.5c.72 0 1.3-.58 1.3-1.3v-.5c0-.35.14-.68.38-.92.24-.24.57-.38.92-.38s.68.14.92.38c.24.24.38.57.38.92v.5c0 .72.58 1.3 1.3 1.3h.5c.35 0 .68.14.92.38.24.24.38.57.38.92z"/>
                  </svg>
                </a>
                <a href="https://vk.ru/rusinick" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-cream/20 rounded-2xl flex items-center justify-center hover:bg-turquoise hover:text-charcoal hover:border-turquoise transition-all group" title="Личная страница ВКонтакте">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 4h2v7h-2z"/>
                  </svg>
                </a>
                <a href="https://t.me/nikolay_alushta" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-cream/20 rounded-2xl flex items-center justify-center hover:bg-turquoise hover:text-charcoal hover:border-turquoise transition-all">
                  <Send size={18} />
                </a>
              </div>
            </div>
            <div className="space-y-1 text-[11px] opacity-40 font-sans">
              <p>Самозанятый / НПД: данные уточняются</p>
              <p>Регистрационный номер бейджа: уточняется</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-30 font-sans">
          <span>© 2026 Николай Русин. Алушта, Крым</span>
          <span className="flex items-center gap-2">
            Сайт сделали в <a href="https://ailikeit.ru" className="hover:text-turquoise transition-colors">ailikeit.ru</a>
          </span>
        </div>
      </div>
    </footer>
  );
};
