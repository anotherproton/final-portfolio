
import React, { useEffect, useState } from 'react';
import { Coffee, MapPin, Calendar, Heart } from 'lucide-react';

const About = () => {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`${isVisible ? 'animate-fade-in-up' : ''} text-center mb-16`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I’m Tanuj Rajput, a Shopify Developer with 3+ years of experience crafting high-converting, fast-loading eCommerce stores for D2C and B2B brands. I specialize in building fully custom Shopify themes from Figma, integrating complex app logic, and optimizing for speed, SEO, and mobile-first UX.
              <br /><br />
              My work has helped brands like Mahina, Nicobar, Mum & You, and Matrix boost their conversions (up to 37%), reduce load times by 45%, and deliver seamless buying experiences across devices. Whether it's developing private apps, subscription flows, or dynamic pricing systems — I take projects from concept to scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
            <div>
              <Calendar className="mx-auto mb-2" size={32} />
              <h4 className="text-lg font-semibold">Experience</h4>
              <p className="text-gray-400">3+ Years</p>
            </div>
            <div>
              <MapPin className="mx-auto mb-2" size={32} />
              <h4 className="text-lg font-semibold">Based In</h4>
              <p className="text-gray-400">India, working globally</p>
            </div>
            <div>
              <Heart className="mx-auto mb-2" size={32} />
              <h4 className="text-lg font-semibold">Expert In</h4>
              <p className="text-gray-400">Liquid, JavaScript, UX, Shopify APIs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
