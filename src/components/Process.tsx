import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Search, Pencil, Code2, FlaskConical, Rocket, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Discover',
    desc: 'Deep-dive into requirements, stakeholder goals, and technical constraints to fully understand the problem space before writing a single line of code.',
    color: 'from-purple-500 to-purple-700',
    glow: 'rgba(139,92,246,0.45)',
  },
  {
    icon: Pencil,
    step: '02',
    title: 'Design',
    desc: 'Architect the system — database schema, API contracts, component structure, and data flow — ensuring scalability and maintainability from day one.',
    color: 'from-fuchsia-500 to-fuchsia-700',
    glow: 'rgba(232,121,249,0.4)',
  },
  {
    icon: Code2,
    step: '03',
    title: 'Develop',
    desc: 'Write clean, documented, reusable code following SOLID principles and framework best practices. Feature branches, meaningful commits, code reviews.',
    color: 'from-violet-500 to-violet-700',
    glow: 'rgba(167,139,250,0.4)',
  },
  {
    icon: FlaskConical,
    step: '04',
    title: 'Test',
    desc: 'Comprehensive testing — unit, integration, edge cases. Manual QA for UX. Performance profiling and security review before any release.',
    color: 'from-purple-600 to-fuchsia-600',
    glow: 'rgba(192,132,252,0.4)',
  },
  {
    icon: Rocket,
    step: '05',
    title: 'Deploy',
    desc: 'Smooth deployments with zero-downtime strategies, CI/CD pipelines, environment configuration, and rollback plans in place.',
    color: 'from-pink-500 to-purple-600',
    glow: 'rgba(236,72,153,0.35)',
  },
  {
    icon: TrendingUp,
    step: '06',
    title: 'Optimize',
    desc: 'Monitor performance, gather user feedback, optimize bottlenecks, and iterate continuously. Software is never done — it evolves.',
    color: 'from-violet-600 to-purple-800',
    glow: 'rgba(124,58,237,0.4)',
  },
];

export default function Process() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="process" className="py-24 bg-[#080212] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-fuchsia-400 text-sm font-semibold tracking-widest uppercase mb-3 block">How I Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Development <span className="gradient-text">Process</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every project follows a structured process that ensures quality, clarity, and on-time delivery.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-7 group relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-6xl font-black text-purple-950/60 select-none group-hover:text-purple-900/60 transition-colors">
                {step.step}
              </div>

              <div
                className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                style={{ boxShadow: `0 0 20px ${step.glow}` }}
              >
                <step.icon size={22} className="text-white" />
              </div>

              <h3 className="relative z-10 text-xl font-bold text-white mb-3 flex items-center gap-2">
                {step.title}
                <ArrowRight size={14} className="text-slate-600 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="relative z-10 text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
