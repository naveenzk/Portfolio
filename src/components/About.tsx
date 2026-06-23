import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Lightbulb, Layers, Zap, Users } from 'lucide-react';

const timeline = [
  { year: '2020', title: 'Started Programming Journey', desc: 'Began with PHP and web fundamentals, built my first dynamic web applications.' },
  { year: '2021', title: 'Mastered Laravel Framework', desc: 'Deep-dived into backend development, REST APIs, and MVC architecture.' },
  { year: '2022', title: 'Full-Stack Expansion', desc: 'Added React and TypeScript to my stack, started building complete SaaS products.' },
  { year: '2023', title: 'Enterprise Development', desc: 'Built production-grade ERP systems with complex business logic and scalable architecture.' },
  { year: '2024', title: 'AI Automation Specialist', desc: 'Integrated AI agents, n8n workflows, and machine learning into real-world applications.' },
  { year: '2025', title: 'Building & Scaling', desc: 'Delivering enterprise SaaS solutions and AI-powered automation systems for clients worldwide.' },
];

const values = [
  { icon: Lightbulb, title: 'Problem-First Thinking', desc: 'I start with the problem, not the technology. Solutions emerge from deep understanding.' },
  { icon: Layers, title: 'Scalable Architecture', desc: 'Every system I build is designed to grow — clean code, solid patterns, smart design.' },
  { icon: Zap, title: 'Continuous Learning', desc: 'Technology evolves fast. I stay ahead through constant exploration and hands-on building.' },
  { icon: Users, title: 'Client-Centric Approach', desc: 'I collaborate closely with stakeholders to ensure every deliverable creates real value.' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 bg-[#080212] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3 block">Who I Am</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A software developer driven by curiosity, precision, and the desire to build things that matter.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm a software developer specializing in <span className="text-purple-300 font-medium">Backend Development</span>, <span className="text-fuchsia-300 font-medium">AI Automation</span>, and <span className="text-violet-300 font-medium">Full-Stack SaaS Applications</span>. My journey started with a fascination for how software can transform business operations and solve complex real-world challenges.
              </p>
              <p>
                Over the years, I've evolved from writing simple PHP scripts to architecting enterprise-grade ERP systems, AI-powered workflows, and scalable APIs serving thousands of users. I thrive at the intersection of backend engineering and intelligent automation.
              </p>
              <p>
                My approach is methodical yet creative — I believe great software is born from deep understanding of the problem domain, clean architectural decisions, and relentless attention to quality and performance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="glass glass-hover rounded-xl p-4"
                >
                  <v.icon size={20} className="text-purple-400 mb-2" />
                  <div className="text-white font-semibold text-sm mb-1">{v.title}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{v.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Development Timeline</h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-fuchsia-500 to-violet-500" />
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="relative flex gap-6 pl-16"
                  >
                    <div className="absolute left-3.5 top-1.5 w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 border-2 border-[#080212] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    <div className="glass rounded-xl p-4 flex-1 glass-hover">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-purple-400 text-sm font-bold">{item.year}</span>
                        <span className="text-white font-semibold text-sm">{item.title}</span>
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
