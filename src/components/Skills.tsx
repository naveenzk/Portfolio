import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Server, Monitor, Database, Bot, Wrench } from 'lucide-react';

const categories = [
  {
    icon: Server,
    title: 'Backend Development',
    color: 'from-purple-500 to-purple-700',
    glow: 'rgba(139,92,246,0.4)',
    skills: [
      { name: 'Laravel', level: 95 },
      { name: 'PHP', level: 92 },
      { name: 'Java', level: 75 },
      { name: 'REST APIs', level: 95 },
      { name: 'Auth & Authorization', level: 90 },
      { name: 'System Design', level: 80 },
    ],
  },
  {
    icon: Monitor,
    title: 'Frontend Development',
    color: 'from-fuchsia-500 to-fuchsia-700',
    glow: 'rgba(232,121,249,0.4)',
    skills: [
      { name: 'React', level: 88 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML & CSS', level: 95 },
    ],
  },
  {
    icon: Database,
    title: 'Databases',
    color: 'from-violet-500 to-violet-700',
    glow: 'rgba(167,139,250,0.4)',
    skills: [
      { name: 'MySQL', level: 92 },
      { name: 'SQL Server', level: 85 },
      { name: 'SQLite', level: 80 },
      { name: 'Database Design', level: 90 },
      { name: 'Query Optimization', level: 85 },
    ],
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    color: 'from-purple-600 to-fuchsia-600',
    glow: 'rgba(192,132,252,0.4)',
    skills: [
      { name: 'AI Agents', level: 82 },
      { name: 'Workflow Automation', level: 88 },
      { name: 'n8n', level: 85 },
      { name: 'ML Fundamentals', level: 70 },
      { name: 'API Integrations', level: 95 },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools & Technologies',
    color: 'from-pink-500 to-purple-600',
    glow: 'rgba(236,72,153,0.3)',
    skills: [
      { name: 'Git & GitHub', level: 95 },
      { name: 'Docker', level: 78 },
      { name: 'Postman', level: 90 },
      { name: 'Linux', level: 80 },
    ],
  },
];

function SkillBar({ name, level, delay, inView }: { name: string; level: number; delay: number; inView: boolean }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-xs sm:text-sm font-medium">{name}</span>
        <span className="text-slate-500 text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-400"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="skills" className="py-16 md:py-24 bg-[#0a0414] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-fuchsia-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block">What I Work With</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            A curated stack built through years of hands-on project experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="glass glass-hover rounded-2xl p-5 sm:p-6 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}
                  style={{ boxShadow: `0 0 20px ${cat.glow}` }}
                >
                  <cat.icon size={17} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-sm sm:text-base">{cat.title}</h3>
              </div>

              <div>
                {cat.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIdx * 0.1 + skillIdx * 0.08}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
