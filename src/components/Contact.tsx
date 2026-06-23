import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Mail, GitBranch, Link2, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'naveen.zkhan@gmail.com', href: 'mailto:naveen.zkhan@gmail.com' },
  { icon: GitBranch, label: 'GitHub', value: 'github.com/naveenzk', href: 'https://github.com/naveenzk' },
  { icon: Link2, label: 'LinkedIn', value: 'linkedin.com/in/naveenzamankhan', href: 'https://linkedin.com/in/naveenzamankhan' },
  { icon: MapPin, label: 'Location', value: 'Pakistan — Available Worldwide', href: null },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://formsubmit.co/ajax/naveen.zkhan@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          _captcha: 'false',
        }),
      });
      const data = await res.json();
      if (data.success === 'true' || data.success === true) {
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0a0414] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-purple-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Something <span className="gradient-text">Together</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Let's build software that solves real-world problems.
          </p>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6 lg:gap-10">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4 sm:gap-6"
          >
            <div className="glass rounded-2xl p-5 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Ready to collaborate?</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                Whether you need a complete backend system, AI automation, or a full-stack product built from scratch — I'm here to help you ship.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <item.icon size={14} className="text-purple-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-slate-500 text-xs">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel="noreferrer"
                          className="text-slate-200 text-xs sm:text-sm hover:text-purple-300 transition-colors truncate block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-slate-200 text-xs sm:text-sm truncate">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-4 sm:p-6 border border-emerald-500/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="text-emerald-400 font-semibold text-sm">Available for Work</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Currently open to freelance contracts, full-time remote roles, and exciting product collaborations. Response time: within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-5 sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4">
                    <CheckCircle size={28} className="text-purple-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-purple-400 hover:text-purple-300 text-sm transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-1.5 sm:mb-2">Your Name</label>
                      <input
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-purple-950/20 border border-purple-800/40 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs font-medium mb-1.5 sm:mb-2">Email Address</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-purple-950/20 border border-purple-800/40 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5 sm:mb-2">Subject</label>
                    <input
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry / Freelance work / Partnership"
                      className="w-full bg-purple-950/20 border border-purple-800/40 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs font-medium mb-1.5 sm:mb-2">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, and goals..."
                      className="w-full bg-purple-950/20 border border-purple-800/40 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold hover:from-purple-500 hover:to-fuchsia-500 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed glow text-sm sm:text-base"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
