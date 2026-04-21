import React from 'react';
import { Clock, Users, Tag, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Tour } from '../types';

interface ExcursionCardProps {
  tour: Tour;
}

export const ExcursionCard: React.FC<ExcursionCardProps> = ({ tour }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group h-full border border-sand/30"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={tour.imageUrl}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {tour.category.map((cat) => (
            <span key={cat} className="px-3 py-1 bg-cream/90 backdrop-blur-sm text-marine text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
              {cat}
            </span>
          ))}
        </div>
        {tour.priceNote && (
          <div className="absolute bottom-4 right-4 bg-marine text-cream px-3 py-1 rounded-lg text-sm font-medium">
            {tour.price}
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-serif text-charcoal mb-2 group-hover:text-marine transition-colors">
          {tour.title}
        </h3>
        <p className="text-charcoal/60 text-sm mb-6 line-clamp-2">
          {tour.shortDescription}
        </p>

        <div className="space-y-3 mb-8 flex-grow">
          <div className="flex items-center gap-3 text-xs text-charcoal/70">
            <Clock size={14} className="text-sand" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-charcoal/70">
            <Users size={14} className="text-sand" />
            <span>{tour.groupSize}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-charcoal/70">
            <Tag size={14} className="text-sand" />
            <span>{tour.price} {tour.priceNote}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-sand/20">
          <button className="text-marine font-medium text-sm flex items-center gap-1 group/btn">
            Подробнее
            <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
          <button className="bg-sand hover:bg-brown hover:text-cream px-4 py-2 rounded-xl text-charcoal text-sm font-medium transition-all">
            Забронировать
          </button>
        </div>
      </div>
    </motion.div>
  );
};
