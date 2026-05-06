import React from 'react';
import { Clock, Users, Tag, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col group h-full border border-sand/20"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={tour.imageUrl}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {tour.category.map((cat) => (
            <span key={cat} className="px-3 py-1.5 bg-cream/95 backdrop-blur-sm text-marine text-[11px] font-sans font-bold uppercase tracking-widest rounded-full shadow-sm border border-sand/10">
              {cat}
            </span>
          ))}
        </div>
        {tour.priceNote && (
          <div className="absolute bottom-4 right-4 bg-marine text-cream px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
            {tour.price}
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <Link to={`/ekskursii/${tour.slug}`} className="text-3xl font-serif text-charcoal mb-2 group-hover:text-marine transition-colors duration-300 inline-block leading-tight">
          {tour.title}
        </Link>
        <p className="text-charcoal/60 text-sm mb-6 line-clamp-2 mt-2">
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
          <Link to={`/ekskursii/${tour.slug}`} className="text-marine font-medium text-sm flex items-center gap-1 group/btn hover:gap-2 transition-all duration-300">
            Подробнее
            <ChevronRight size={16} className="transition-transform duration-300" />
          </Link>
          <Link to={`/kontakty?tour=${tour.slug}`} className="bg-sand hover:bg-marine hover:text-cream px-4 py-2 rounded-2xl text-charcoal text-sm font-medium transition-all duration-300 inline-block">
            Забронировать
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
