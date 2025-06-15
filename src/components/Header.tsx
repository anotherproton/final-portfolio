
import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Home, User, Briefcase, MessageCircle, Star } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: User, label: 'About Me', href: '#about' },
    { icon: Code, label: 'Skills', href: '#skills' },
    { icon: Briefcase, label: 'Experience', href: '#experience' },
    { icon: Star, label: 'Projects', href: '#projects' },
    { icon: MessageCircle, label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-shadow ${isScrolled ? 'shadow-md bg-black/90' : ''}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Tanuj Rajput</h1>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-white hover:text-accent flex items-center gap-2"
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="block text-white w-full text-left"
            >
              <div className="flex items-center gap-2">
                <item.icon size={18} />
                {item.label}
              </div>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
