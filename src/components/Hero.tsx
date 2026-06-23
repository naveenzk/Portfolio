import { useEffect, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowDown, Download, Mail, GitBranch, Link2, Sparkles } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];
    const colors = ['rgba(139,92,246,', 'rgba(168,85,247,', 'rgba(232,121,249,', 'rgba(192,132,252,'];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Fewer particles on mobile for performance
    const count = window.innerWidth < 768 ? 40 : 80;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.6 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139,92,246,${0.15 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0414]"
    >
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-700/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-fuchsia-700/12 rounded-full blur-3xl pointer-events-none" />

      <ParticleCanvas />

      <div className="relative z-10 w-full px-8 sm:px-12 lg:px-20 py-16 lg:py-0 flex flex-col lg:flex-row items-center gap-6 lg:gap-16 max-h-screen overflow-y-auto">
        {/* Text content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex-1 text-center lg:text-left"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium mb-3 sm:mb-5">
            <Sparkles size={13} className="text-purple-400" />
            Available for Freelance Services &amp; Remote Roles
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-3">
            Building{' '}
            <span className="gradient-text">Scalable Software,</span>
            <br />
            <span className="gradient-text">AI Automation</span>{' '}
            &amp; Intelligent
            <br className="hidden sm:block" />
            {' '}Digital Solutions
          </motion.h1>

          <motion.p variants={fadeUp} className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-7 max-w-xl mx-auto lg:mx-0">
            I'm a Software Developer passionate about backend systems, AI-driven automation, and
            building scalable SaaS applications that solve real-world problems.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap items-center gap-3 justify-center lg:justify-start mb-5 sm:mb-7">
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold hover:from-purple-500 hover:to-fuchsia-500 transition-all duration-200 glow hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href="/resume.pdf"
              className="w-full sm:w-auto px-6 py-3 rounded-xl glass border border-purple-500/40 text-slate-200 font-semibold hover:border-purple-400 hover:text-white transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-slate-300 font-semibold hover:text-white transition-colors flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 text-sm sm:text-base"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-4 sm:gap-5 justify-center lg:justify-start">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-purple-400 transition-colors">
              <GitBranch size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-purple-400 transition-colors">
              <Link2 size={20} />
            </a>
            <a href="mailto:support@iisol.pk" className="text-slate-500 hover:text-purple-400 transition-colors">
              <Mail size={20} />
            </a>
            <div className="h-4 w-px bg-slate-700" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span className="text-slate-400 text-xs sm:text-sm">Open to opportunities</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Avatar — hidden on small mobile, shown from sm up */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="hidden sm:flex flex-shrink-0 justify-center"
        >
          <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80">
            {/* Spinning rings */}
            <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-4 rounded-full border border-fuchsia-500/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            <div className="absolute inset-8 rounded-full border border-purple-400/15 animate-spin" style={{ animationDuration: '25s' }} />

            {/* Avatar */}
            <div className="absolute inset-10 rounded-full bg-gradient-to-br from-purple-600 via-fuchsia-600 to-purple-800 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-[#0a0414] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl lg:text-6xl font-bold gradient-text">NZ</div>
                  <div className="text-xs text-slate-500 mt-1 hidden lg:block">Software Developer</div>
                </div>
              </div>
            </div>

            {/* Floating badges — only on lg to avoid overflow */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 -right-4 lg:-right-2 glass rounded-xl px-2.5 py-1.5 border border-purple-500/30 hidden md:block"
            >
              <div className="text-xs text-purple-300 font-semibold">Laravel</div>
              <div className="text-xs text-slate-500">Backend</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 -left-4 lg:-left-4 glass rounded-xl px-2.5 py-1.5 border border-fuchsia-500/30 hidden md:block"
            >
              <div className="text-xs text-fuchsia-300 font-semibold">AI Automation</div>
              <div className="text-xs text-slate-500">n8n · AI Agents</div>
            </motion.div>

            <motion.div
              animate={{ x: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/2 -translate-y-1/2 -left-10 lg:-left-8 glass rounded-xl px-2.5 py-1.5 border border-purple-400/30 hidden lg:block"
            >
              <div className="text-xs text-purple-300 font-semibold">React</div>
              <div className="text-xs text-slate-500">Frontend</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={14} className="text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
