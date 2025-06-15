import React, { useEffect, useState } from 'react';
import { Code2, Database, Palette, Zap, Globe, Smartphone } from 'lucide-react';

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('tech-stack');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const techCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Design']
    },
    {
      icon: Globe,
      title: 'E-commerce / Shopify',
      technologies: ['Shopify', 'Shopify Plus', 'Liquid', 'Theme Customization', 'Checkout Customization', 'Shopify CLI', 'Private Apps', 'Metafields']
    },
    {
      icon: Database,
      title: 'Tools & APIs',
      technologies: ['Git', 'Chrome DevTools', 'Postman', 'REST APIs', 'GraphQL']
    },
    {
      icon: Palette,
      title: 'Design & UX',
      technologies: ['Figma', 'UX Collaboration', 'Performance Tuning', 'PageSpeed Optimization']
    },
    {
      icon: Zap,
      title: 'Optimization',
      technologies: ['A/B Testing', 'SEO', 'Lighthouse', 'Conversion Rate Optimization']
    },
    {
      icon: Smartphone,
      title: 'Mobile & Communication',
      technologies: ['Mobile-First Design', 'WhatsApp Integration', 'Client Communication']
    }
  ];

  return (
    <section id="tech-stack" className={`tech-stack ${isVisible ? 'fade-in' : ''}`}>
      <h2>Tech Stack</h2>
      <div className="stack-grid">
        {techCategories.map((category, index) => (
          <div key={index} className="stack-card">
            <category.icon size={32} />
            <h3>{category.title}</h3>
            <ul>
              {category.technologies.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
