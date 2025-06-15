import React, { useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('testimonials');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'Anjali Kapoor',
      role: 'Founder, Mahina.co',
      company: 'Luxury D2C Brand',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      rating: 5,
      text: 'Tanuj delivered a lightning-fast Shopify theme that matched our brand vision perfectly. Post-launch, our AOV increased by 28% and our support team reported a 40% drop in repetitive queries.',
      project: 'Custom Shopify Theme + UX Optimization',
      result: '+28% AOV, +40% CS efficiency'
    },
    {
      name: 'Ravi Mehta',
      role: 'CTO, WeMust',
      company: 'DTF Apparel Brand',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      rating: 5,
      text: 'Tanuj built a custom order calculator and checkout flow that completely simplified our operations. We saw a 20% uplift in checkout completions and 90% less manual invoicing.',
      project: 'DTF Live Pricing & Automation',
      result: '+20% Checkout Rate, -90% Manual Tasks'
    },
    {
      name: 'Sarah Johnson',
      role: 'CEO, Nicobar.com',
      company: 'Lifestyle Brand',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      rating: 5,
      text: 'He implemented advanced Liquid blocks and improved our site speed by over 40%. User engagement jumped thanks to smarter filtering and product discovery features.',
      project: 'Theme Speed Optimization + UX',
      result: '+42% Faster Load, +12% CTR'
    }
  ];

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Client Testimonials</h2>
        <p className="text-gray-600">Results that speak for themselves</p>
      </div>

      <div className="relative max-w-xl mx-auto bg-white shadow-md p-6 rounded-lg">
        <Quote className="absolute top-4 left-4 text-gray-300 w-6 h-6" />
        <p className="text-lg italic text-gray-800">"{testimonials[currentTestimonial].text}"</p>

        <div className="mt-6 flex items-center gap-4">
          <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} className="w-14 h-14 rounded-full object-cover" />
          <div>
            <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
            <p className="text-sm text-gray-600">{testimonials[currentTestimonial].role} – {testimonials[currentTestimonial].company}</p>
            <p className="text-xs text-green-600">{testimonials[currentTestimonial].project} • {testimonials[currentTestimonial].result}</p>
            <div className="flex gap-1 mt-1">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button onClick={handlePrev}><ChevronLeft /></button>
          <button onClick={handleNext}><ChevronRight /></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;