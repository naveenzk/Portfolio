import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const stats = [
  { value: 10, suffix: '+', label: 'Projects Completed', color: 'from-purple-400 to-fuchsia-400' },
  { value: 15, suffix: '+', label: 'Technologies Mastered', color: 'from-fuchsia-400 to-violet-400' },
  { value: 50, suffix: '+', label: 'APIs Developed', color: 'from-violet-400 to-purple-400' },
  { value: 12, suffix: '+', label: 'Databases Designed', color: 'from-purple-400 to-pink-400' },
  { value: 3000, suffix: '+', label: 'Hours of Development', color: 'from-pink-400 to-fuchsia-400' },
];

function Counter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), value);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section className="py-16 md:py-20 bg-[#0a0414] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="text-purple-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block">By The Numbers</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Achievements &amp; <span className="gradient-text">Impact</span>
          </h2>
        </motion.div>

        {/* 2-col on mobile, 3-col on sm, 5-col on lg */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass glass-hover rounded-2xl p-4 sm:p-6 text-center group ${
                // Center the 5th card when it's alone on the last row in 2-col
                i === 4 ? 'col-span-2 sm:col-span-1' : ''
                }`}
            >
              <div className={`text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                <Counter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <p className="text-slate-400 text-xs sm:text-sm font-medium leading-tight">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
