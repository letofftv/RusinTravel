import React, { useState, useEffect } from 'react';
import { Menu, X, Camera, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Экскурсии', href: '#tours' },
    { name: 'О Николае', href: '#about' },
    { name: 'Галерея', href: '#gallery' },
    { name: 'Блог', href: '#blog' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-marine flex items-center justify-center rounded-full text-cream group-hover:bg-terracotta transition-colors">
            <Camera size={20} />
          </div>
          <span className="text-2xl font-serif tracking-tight text-marine">RusinTravel</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-charcoal/70 hover:text-marine hover:underline underline-offset-8 transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacts"
            className="px-5 py-2 bg-marine text-cream rounded-full text-sm font-medium hover:bg-marine/90 transition-colors"
          >
            Забронировать
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-charcoal" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-b border-sand overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-serif text-charcoal"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contacts"
                className="mt-4 w-full py-3 bg-marine text-cream text-center rounded-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Забронировать
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
