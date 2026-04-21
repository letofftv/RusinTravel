import React from 'react';
import { Camera, Mail, Phone, Instagram, Send } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream/70 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <Camera size={24} className="text-sand" />
            <span className="text-2xl font-serif text-cream">RusinTravel</span>
          </div>
          <p className="text-sm leading-relaxed text-balance">
            Авторские прогулки по Алуште и Южному берегу Крыма с аттестованным экскурсоводом Николаем Русиным.
          </p>
        </div>

        <div>
          <h4 className="text-cream font-serif text-lg mb-6">Навигация</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#tours" className="hover:text-sand transition-colors">Экскурсии</a></li>
            <li><a href="#about" className="hover:text-sand transition-colors">О Николае</a></li>
            <li><a href="#gallery" className="hover:text-sand transition-colors">Галерея</a></li>
            <li><a href="#blog" className="hover:text-sand transition-colors">Блог</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-cream font-serif text-lg mb-6">Контакты</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-sand" />
              <span>+7 (XXX) XXX-XX-XX</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-sand" />
              <span>info@rusintravel.ru</span>
            </li>
            <li className="flex items-center gap-3">
              <Send size={16} className="text-sand" />
              <span>Telegram: @nikolayalushta</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-cream font-serif text-lg mb-6">Соцсети</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 border border-cream/20 rounded-full flex items-center justify-center hover:bg-cream hover:text-charcoal transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 border border-cream/20 rounded-full flex items-center justify-center hover:bg-cream hover:text-charcoal transition-all">
              <Send size={20} />
            </a>
          </div>
          <p className="mt-8 text-xs opacity-50">
            © 2026 Николай Русин. <br />
            Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};
