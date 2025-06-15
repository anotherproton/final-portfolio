import React, { useEffect, useState } from 'react';
import { Palette, Settings, Smartphone, ShoppingCart, Zap, Code2, Layers, Globe, Database, Headphones } from 'lucide-react';

const Services = () => {
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

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  
  const services = [
    {
      icon: Palette,
      title: 'Custom Shopify Themes',
      description: 'Pixel-perfect themes built from Figma, optimized for performance, mobile UX, and conversions.',
      features: ['Figma to Shopify', '95+ PageSpeed Score', 'Mobile-First UX', 'Custom Animations'],
      price: 'From $2,000'
    },
    {
      icon: Settings,
      title: 'Advanced Checkout & Cart Logic',
      description: 'Custom pricing calculators, subscription flows, and upsell/bundle integrations that drive revenue.',
      features: ['Live Pricing Calculator', 'Bundling/Upsell', 'One-Click Checkout', 'Subscription Models'],
      price: 'From $1,800'
    },
    {
      icon: Smartphone,
      title: 'App Integrations & Private Apps',
      description: 'Seamless integrations with 3rd party apps and private apps built for business automation.',
      features: ['WhatsApp, CRM, ERP', 'Invoice Automation', 'Inventory Sync', 'Private APIs'],
      price: 'From $1,500'
    },
    {
      icon: Zap,
      title: 'Performance & SEO Optimization',
      description: 'Reduce bounce rates, improve load times, and scale traffic through SEO and performance tuning.',
      features: ['Script Deferrals', 'Core Web Vitals', 'SEO URL Migrations', 'PageSpeed Optimization'],
      price: 'From $1,200'
    },
    {
      icon: Headphones,
      title: 'Store Management & Automation',
      description: 'Full-stack store configuration including shipping, automation, and support systems.',
      features: ['Shipping Rules', 'Email Workflows', 'WhatsApp Support', 'Product Management'],
      price: 'From $1,000'
    }
  ]

;

  return (
    <section id="services" className="section-padding bg-black">
      <div className="container mx-auto px-6">
        <div className={`${isVisible ? 'animate-fade-in-up' : ''} text-center mb-16`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive Shopify development services to help your business thrive in the digital marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`${isVisible ? `animate-fade-in-up delay-${index % 3 + 1}` : ''} card-hover bg-gray-900/50 p-8 rounded-2xl border border-gray-800 group`}
              >
                <div className="mb-6">
                  <div className="p-3 bg-gradient-shopify rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{service.description}</p>
                  <div className="text-green-500 font-bold text-lg mb-4">{service.price}</div>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 px-6 py-3 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:border-green-500 hover:text-green-500 transition-colors">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        <div className={`${isVisible ? 'animate-fade-in-up delay-3' : ''} text-center mt-16`}>
          <div className="bg-gradient-shopify p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Start Your Project?</h3>
            <p className="text-gray-200 mb-6">Let's discuss your requirements and create something amazing together.</p>
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;