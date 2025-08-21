'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const StatItem = ({ value, label, suffix = '', prefix = '' }: StatItemProps) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (inView && !started) {
      setStarted(true);
    }
  }, [inView, started]);

  const { number } = useSpring({
    from: { number: 0 },
    number: started ? value : 0,
    config: { mass: 1, tension: 20, friction: 10 },
    delay: started ? Math.random() * 500 : 0,
  });

  return (
    <div
      ref={ref}
      className="text-center group hover:scale-105 transition-transform duration-300"
    >
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-btn/30 transition-all duration-300">
        <animated.div className="text-4xl md:text-5xl font-bold text-btn mb-2 font-industrial">
          {number.to(n => `${prefix}${Math.floor(n)}${suffix}`)}
        </animated.div>
        <p className="text-gray-300 font-professional text-lg">{label}</p>
      </div>
    </div>
  );
};

const AnimatedStats = () => {
  const stats = [
    { value: 500, label: 'Proyectos Completados', suffix: '+' },
    { value: 15, label: 'Años de Experiencia', suffix: '+' },
    { value: 98, label: 'Clientes Satisfechos', suffix: '%' },
    { value: 24, label: 'Atención al Cliente', suffix: 'h' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900/50 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-industrial">
            Nuestra Experiencia en Números
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-professional">
            Décadas de experiencia respaldan cada proyecto que realizamos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
