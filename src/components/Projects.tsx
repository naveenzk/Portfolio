import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ExternalLink, GitBranch, BarChart3, Bot, Layers, ShoppingCart, ArrowRight } from 'lucide-react';

const projects = [
  {
    icon: Layers,
    badge: 'Enterprise SaaS',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    title: 'Regent Packages ERP',
    subtitle: 'Enterprise Resource Planning Platform',
    description: 'A comprehensive ERP system managing the full business lifecycle — from procurement and inventory to sales, production, and financial operations. Built to handle complex enterprise workflows with role-based access control and real-time analytics.',
    features: [
      'Procurement & Inventory Management',
      'Sales, Customer & Supplier Management',
      'Production Workflow Tracking',
      'Financial Operations & Reporting',
      'Role-Based Access Control',
      'REST API Architecture',
    ],
    tech: ['Laravel', 'React', 'TypeScript', 'MySQL', 'Tailwind CSS'],
    color: 'from-purple-600/20 to-purple-900/10',
    border: 'border-purple-500/20 hover:border-purple-500/50',
    glow: 'rgba(139,92,246,0.18)',
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    icon: Bot,
    badge: 'AI Automation',
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
    title: 'AI Workflow Automation Suite',
    subtitle: 'Intelligent Business Process Automation',
    description: 'End-to-end automation systems powered by AI agents and n8n workflows. Integrates with multiple business tools to automate repetitive processes, data extraction, reporting, and cross-platform communication.',
    features: [
      'AI Agent Orchestration',
      'n8n Workflow Pipelines',
      'Multi-platform API Integrations',
      'Automated Reporting & Alerts',
      'Data Extraction & Processing',
      'Real-time Process Monitoring',
    ],
    tech: ['n8n', 'AI Agents', 'REST APIs', 'Python', 'Webhooks'],
    color: 'from-fuchsia-600/20 to-fuchsia-900/10',
    border: 'border-fuchsia-500/20 hover:border-fuchsia-500/50',
    glow: 'rgba(232,121,249,0.18)',
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    icon: ShoppingCart,
    badge: 'Full-Stack',
    badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    title: 'Multi-Tenant SaaS Platform',
    subtitle: 'Scalable B2B Application',
    description: 'A multi-tenant SaaS application with isolated data environments, subscription management, and custom onboarding flows built for B2B clients.',
    features: [
      'Multi-tenant Architecture',
      'Subscription & Billing Management',
      'Custom Onboarding Flows',
      'Analytics Dashboard',
    ],
    tech: ['Laravel', 'Vue.js', 'MySQL', 'Stripe API'],
    color: 'from-violet-600/20 to-violet-900/10',
    border: 'border-violet-500/20 hover:border-violet-500/50',
    glow: 'rgba(167,139,250,0.18)',
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    icon: BarChart3,
    badge: 'Backend',
    badgeColor: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    title: 'Analytics & Reporting API',
    subtitle: 'High-Performance Data API',
    description: 'A RESTful analytics API with complex aggregation pipelines, caching layers, and export capabilities handling millions of data points.',
    features: [
      'Complex SQL Aggregations',
      'Redis Caching Layer',
      'PDF/Excel Export',
      'Rate Limiting & Auth',
    ],
    tech: ['Laravel', 'MySQL', 'Redis', 'PHP'],
    color: 'from-pink-600/20 to-pink-900/10',
    border: 'border-pink-500/20 hover:border-pink-500/50',
    glow: 'rgba(236,72,153,0.15)',
    github: '#',
    demo: '#',
    featured: false,
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="projects" className="py-24 bg-[#080212] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3 block">What I've Built</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real-world applications built with precision, scalability, and purpose.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {projects.filter(p => p.featured).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative glass rounded-2xl p-8 border ${project.border} transition-all duration-300 group overflow-hidden`}
              style={{ background: `linear-gradient(135deg, ${project.color})` }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ boxShadow: `inset 0 0 60px ${project.glow}` }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className={`inline-flex text-xs font-semibold px-3 py-1 rounded-full border ${project.badgeColor} mb-3`}>
                      {project.badge}
                    </span>
                    <div className="flex items-center gap-3">
                      <project.icon size={22} className="text-purple-300" />
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                    <p className="text-slate-500 text-sm mt-1">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-2">
                    <a href={project.github} className="p-2 glass rounded-lg hover:text-purple-300 text-slate-400 transition-colors">
                      <GitBranch size={16} />
                    </a>
                    <a href={project.demo} className="p-2 glass rounded-lg hover:text-purple-300 text-slate-400 transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-slate-400 text-xs">
                      <div className="w-1 h-1 rounded-full bg-purple-400 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md glass text-xs font-medium text-slate-300 border border-purple-700/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              className={`glass rounded-2xl p-6 border ${project.border} transition-all duration-300 group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className={`inline-flex text-xs font-semibold px-2.5 py-0.5 rounded-full border ${project.badgeColor} mb-2`}>
                    {project.badge}
                  </span>
                  <div className="flex items-center gap-2">
                    <project.icon size={18} className="text-slate-400" />
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href={project.github} className="text-slate-500 hover:text-white transition-colors"><GitBranch size={15} /></a>
                  <a href={project.demo} className="text-slate-500 hover:text-white transition-colors"><ExternalLink size={15} /></a>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

              <div className="space-y-1.5 mb-4">
                {project.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-slate-500 text-xs">
                    <ArrowRight size={10} className="text-purple-500" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-purple-950/50 text-xs font-medium text-slate-400 border border-purple-800/40">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
