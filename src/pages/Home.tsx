import { Music2, BookOpen, Award, ArrowRight } from 'lucide-react';
import { raviImage } from '../assets';
import { useEffect, useRef, useState } from 'react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);
  const cards = [
    {
      icon: Music2,
      iconBgColor: 'bg-amber-100',
      iconColor: 'text-amber-700',
      title: 'Musicology',
      description: 'Deep research into the ragas, talas, and traditions of Indian classical music, documenting centuries of musical heritage.',
      buttonText: 'Learn More',
      buttonLink: 'about'
    },
    {
      icon: BookOpen,
      iconBgColor: 'bg-orange-100',
      iconColor: 'text-orange-700',
      title: 'Published Works',
      description: 'Author of acclaimed books on Indian classical music theory, history, and practice, making complex concepts accessible to all.',
      buttonText: 'View Books',
      buttonLink: 'books'
    },
    {
      icon: Award,
      iconBgColor: 'bg-red-100',
      iconColor: 'text-red-700',
      title: 'Compositions',
      description: 'Original compositions blending classical forms with contemporary sensibilities, creating timeless pieces for modern audiences.',
      buttonText: 'Explore Music',
      buttonLink: 'music'
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
        </div>

        <div className="flex flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
         
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Ravi Menon
            </h1>
            <p className="text-2xl md:text-3xl text-amber-800 mb-8 font-light">
              Musicologist • Author • Composer
            </p>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
              Exploring the depths of Indian classical music through research, writing, and composition.
              Bridging tradition and contemporary understanding for music lovers worldwide.
            </p>
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center px-8 py-4 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-all transform hover:scale-105 shadow-lg text-lg font-medium"
            >
              Discover My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
           <img src={raviImage} alt="Ravi Menon" className="mx-auto mb-12 w-72 h-72 rounded-full object-cover shadow-lg" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col gap-12">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isEven = index % 2 === 0;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`flex ${isEven ? 'justify-start' : 'justify-end'} transition-all duration-700 ease-out ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : `opacity-0 ${isEven ? '-translate-x-20' : 'translate-x-20'}`
                }`}
              >
                <div className={`bg-orange-500 max-w-2xl py-8 px-12 shadow-xl ${
                  isEven ? 'rounded-t-full rounded-br-full' : 'rounded-t-full rounded-bl-full'
                }`}>
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-white leading-relaxed mb-6">
                    {card.description}
                  </p>
                  <button
                    onClick={() => onNavigate(card.buttonLink)}
                    className="text-white bg-amber-700 hover:bg-amber-800 font-medium px-4 py-2 rounded-lg inline-flex items-center transition-colors"
                  >
                    {card.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Preserving Heritage, Inspiring Future
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Through dedicated research and creative expression, I strive to keep the rich
            traditions of Indian classical music alive for generations to come.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all transform hover:scale-105 shadow-lg text-lg font-medium"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
