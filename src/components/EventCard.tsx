import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, MapPin, Clock } from 'lucide-react';
import { EventItem } from '../types';
import { motion } from 'motion/react';

interface EventCardProps {
  event: EventItem;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const date = new Date(event.dateStart);
  const day = date.getDate();
  const month = date.toLocaleString('ru-RU', { month: 'short' });
  const time = date.toLocaleString('ru-RU', { hour: '2-digit', minute: '2-digit' });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden border border-sand/30 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col md:flex-row"
    >
      {/* Date Billboard */}
      <div className="bg-marine text-cream p-8 flex flex-col items-center justify-center min-w-[140px] text-center border-r border-cream/5">
        <span className="text-4xl font-serif font-bold mb-1">{day}</span>
        <span className="text-xs uppercase tracking-widest font-bold opacity-70 mb-4">{month}</span>
        <div className="h-px w-8 bg-cream/20 mb-4" />
        <span className="text-sm font-medium">{time}</span>
      </div>

      {/* Content */}
      <div className="p-8 flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {event.category.map(cat => (
            <span key={cat} className="px-2 py-0.5 bg-cream text-charcoal/60 text-[10px] font-bold uppercase tracking-wider rounded-md">
              {cat}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-serif text-charcoal mb-4 group-hover:text-turquoise transition-colors duration-300">
          {event.title}
        </h3>
        
        <p className="text-charcoal/60 text-sm mb-6 line-clamp-2">
          {event.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs text-charcoal/50">
            <Clock size={14} className="text-sand" />
            <span>{event.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-charcoal/50">
            <Users size={14} className="text-sand" />
            <span>{event.seatsAvailable} мест из {event.seatsTotal}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-charcoal/50">
            <MapPin size={14} className="text-sand" />
            <span className="truncate">{event.startPoint}</span>
          </div>
        </div>
      </div>

      {/* Price and CTA */}
      <div className="p-8 bg-cream/30 flex flex-col justify-center items-center md:min-w-[200px] border-t md:border-t-0 md:border-l border-sand/20">
        <span className="text-2xl font-serif text-charcoal mb-1">{event.price}</span>
        <span className="text-[10px] uppercase tracking-widest font-bold text-charcoal/30 mb-6">за человека</span>
        
        <Link 
          to={event.linkedTourId ? `/ekskursii/${event.linkedTourId}` : `/kontakty`}
          className="w-full py-3 bg-marine text-cream rounded-xl text-center text-xs font-bold uppercase tracking-widest hover:bg-turquoise transition-colors"
        >
          {event.paymentEnabled ? 'Купить билет' : 'Забронировать'}
        </Link>
      </div>
    </motion.div>
  );
};
