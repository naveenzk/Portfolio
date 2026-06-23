import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const experiences = [
  {
    role: 'Full-Stack Developer',
    company: 'Freelance & Contract Work',
    period: '2024 – Present',
    type: 'Freelance',
    location: 'Remote',
    color: 'from-purple-500 to-fuchsia-600',
    description: 'Delivering end-to-end software solutions for clients across industries. Specializing in enterprise applications, AI automation, and SaaS development.',
    achievements: [
      'Built and deployed production ERP system (Regent Packages) serving enterprise clients',
      'Designed AI automation workflows reducing manual processes by 70%',
      'Developed RESTful APIs handling complex business logic and high traffic',
      'Maintained long-term client relationships with iterative product improvements',
    ],
  },
  {
    role: 'Backend Developer',
    company: 'Software Development Studio',
    period: '2022 – 2024',
    type: 'Full-time',
    location: 'On-site / Hybrid',
    color: 'from-fuchsia-500 to-violet-600',
    description: 'Led backend development for multiple client projects, focusing on Laravel-based systems and database architecture for B2B applications.',
    achievements: [
      'Architected multi-tenant SaaS platform with role-based access control',
      'Optimized database queries improving performance by 60%',
      'Implemented OAuth2 authentication and third-party API integrations',
      'Collaborated with cross-functional teams on product delivery',
    ],
  },
  {
    role: 'Junior Web Developer',
    company: 'Tech Solutions Agency',
    period: '2021 – 2022',
    type: 'Full-time',
    location: 'On-site',
    color: 'from-violet-500 to-purple-600',
    description: 'Started professional career building dynamic web applications and learning production development practices under senior mentorship.',
    achievements: [
      'Developed 10+ client websites and web applications from scratch',
      'Learned Laravel framework and MVC architecture in production environment',
      'Built custom CMS systems and e-commerce integrations',
      'Participated in code reviews and Agile sprint processes',
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-16 md:py-24 bg-[#0a0414] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(167,139,250,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-violet-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block">Work History</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            A track record of delivering scalable software across enterprise and startup environments.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line — only md+ */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-fuchsia-500 to-violet-500 hidden md:block" />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative md:pl-20"
              >
                {/* Dot — only md+ */}
                <div className={`absolute left-5 top-6 w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} border-2 border-[#0a0414] hidden md:flex items-center justify-center`}>
                  <Briefcase size={10} className="text-white" />
                </div>

                <div className="glass glass-hover rounded-2xl p-5 sm:p-7 border border-purple-800/20">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${exp.color}`} />
                        <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">{exp.type}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-purple-400 font-semibold text-sm sm:text-base">{exp.company}</p>
                    </div>
                    <div className="flex sm:flex-col gap-3 sm:gap-1 text-xs text-slate-500 sm:text-right">
                      <div className="flex items-center gap-1.5 sm:justify-end">
                        <Calendar size={12} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:justify-end">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="grid sm:grid-cols-2 gap-2">
                    {exp.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-start gap-2">
                        <CheckCircle size={13} className="text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-400 text-xs leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
