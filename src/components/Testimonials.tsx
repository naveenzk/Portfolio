import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed Al-Rashid',
    role: 'CEO, Regent Packages',
    avatar: 'AR',
    rating: 5,
    color: 'from-purple-500 to-fuchsia-600',
    text: 'The ERP system built for us completely transformed our operations. What used to take our team hours now runs automatically. The attention to detail and understanding of our business processes was exceptional.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Founder, AutomateFlow',
    avatar: 'SM',
    rating: 5,
    color: 'from-fuchsia-500 to-violet-600',
    text: "Working with this developer on our AI automation workflows was a game-changer. They didn't just write code — they understood our business logic and built intelligent systems that actually work in production.",
  },
  {
    name: 'Marcus Chen',
    role: 'CTO, TechVentures Ltd',
    avatar: 'MC',
    rating: 5,
    color: 'from-violet-500 to-purple-600',
    text: "Exceptional backend architecture and API design. The system handles our peak traffic without breaking a sweat. Code quality is top-notch — the kind you'd expect from a senior engineer.",
  },
  {
    name: 'Fatima Hassan',
    role: 'Product Manager, SaaS Startup',
    avatar: 'FH',
    rating: 5,
    color: 'from-purple-600 to-pink-600',
    text: 'Delivered the multi-tenant platform ahead of schedule with full test coverage. Communication was excellent throughout. Truly understood the product vision and made smart technical decisions independently.',
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#080212] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-violet-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block">Client Feedback</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Trusted by founders, CTOs, and teams to deliver software that works.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass glass-hover rounded-2xl p-5 sm:p-8 group"
            >
              <div className="flex items-start justify-between mb-5">
                <Quote size={24} className="text-purple-500/50" />
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} size={13} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 italic">"{t.text}"</p>

              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
