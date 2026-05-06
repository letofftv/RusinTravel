import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Phone, MessageSquare } from 'lucide-react';
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
            <h4 className="text-cream font-serif text-lg mb-6 tracking-wide">Связаться</h4>
            <div className="space-y-4 mb-8">
              <a href="tel:+79787051954" className="flex items-center gap-3 hover:text-turquoise transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-turquoise group-hover:text-charcoal transition-all">
                  <Phone size={14} />
                </div>
                <span className="text-sm font-medium">+7 (978) 705-19-54</span>
              </a>
              
              <div className="flex gap-3">
                <a href="https://t.me/nikolay_alushta" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#0088cc] hover:text-white transition-all" title="Telegram">
                  <Send size={20} />
                </a>
                <a href="https://vk.ru/rusin_alushta" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-[#0077FF] hover:text-white transition-all" title="Группа ВКонтакте">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.162 18.994c-6.028 0-9.47-4.128-9.613-10.994h3.018c.099 5.04 2.321 7.175 4.085 7.615v-7.615h2.839v4.351c1.737-.186 3.562-2.146 4.177-4.351h2.839c-.454 2.714-2.459 4.674-3.896 5.508 1.437.834 3.753 2.518 4.614 5.486h-3.111c-.672-2.1-2.355-3.722-4.614-3.946v3.946h-.338z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="space-y-1 text-[10px] opacity-30 font-sans uppercase tracking-widest">
              <p>Самозанятый Русин Н.Н.</p>
              <p>ИНН: 910101010101</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-30 font-sans">
          <span>© 2026 Николай Русин. Алушта, Крым</span>
          <span className="flex items-center gap-2">
            Сайт сделали в <a href="https://ailikeit.ru" className="hover:text-turquoise transition-colors">ailikeit.ru</a>
          </span>
        </div>
      </div>
    </footer>
  );
};
