import { GitBranch, Link2, Mail, Code2 } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#060010] border-t border-purple-900/30 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="text-white font-bold">Naveen<span className="gradient-text">Zaman</span></span>
          </div>



          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-purple-400 transition-colors">
              <GitBranch size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-purple-400 transition-colors">
              <Link2 size={18} />
            </a>
            <a href="mailto:support@iisol.pk" className="text-slate-500 hover:text-purple-400 transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-purple-950/50 text-center">
          <p className="text-slate-600 text-xs">
            © {year} Naveen Zaman Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
