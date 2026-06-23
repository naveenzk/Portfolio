import { GitBranch, Link2, Mail, Code2, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#020811] border-t border-slate-800/50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="text-white font-bold">Dev<span className="gradient-text">Portfolio</span></span>
          </div>

          <p className="text-slate-500 text-sm flex items-center gap-1">
            Built with <Heart size={12} className="text-rose-500 fill-rose-500" /> using React, TypeScript &amp; Tailwind CSS
          </p>

          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors">
              <GitBranch size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors">
              <Link2 size={18} />
            </a>
            <a href="mailto:support@iisol.pk" className="text-slate-500 hover:text-indigo-400 transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-800/30 text-center">
          <p className="text-slate-600 text-xs">
            © {year} Software Developer Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
