
import { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Server, Network, Code,
  Cpu, Globe, Lock, Terminal, Radio,
  Github, Linkedin, Mail, Languages,
  MemoryStick, ArrowUpDown, HardDrive,
  ExternalLink, ChevronDown, Send,
  Container, Wifi, Shield, Activity,
  Circle, FlaskConical, House
} from 'lucide-react';
import { translations } from './translations';
import { cn } from './lib/cn';

// ─── SKILL MARQUEE DATA ──────────────────────────────────────────────────────
const TECH_STACK = [
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/0ea5e9' },
  { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux/f8fafc' },
  { name: 'MikroTik', icon: 'https://cdn.simpleicons.org/mikrotik/e74c3c' },
  { name: 'Tailscale', icon: 'https://cdn.simpleicons.org/tailscale/6366f1' },
  { name: 'Cloudflare', icon: 'https://cdn.simpleicons.org/cloudflare/f38020' },
  { name: 'Grafana', icon: 'https://cdn.simpleicons.org/grafana/f46800' },
  { name: 'Prometheus', icon: 'https://cdn.simpleicons.org/prometheus/e6522c' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/4ade80' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/60a5fa' },
  { name: 'Nginx', icon: 'https://cdn.simpleicons.org/nginx/22c55e' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/f97316' },
  { name: 'Vaultwarden', icon: 'https://cdn.simpleicons.org/bitwarden/175EDC' },
];

// ─── SECTION IDs ─────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Skills', href: '#skills' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

// ─────────────────────────────────────────────────────────────────────────────

const App = () => {
  const [lang, setLang] = useState('pt');
  const [navOpen, setNavOpen] = useState(false);
  const t = translations[lang];

  // Smooth scroll with Lenis
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const toggleLanguage = () => setLang(prev => prev === 'pt' ? 'en' : 'pt');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 font-sans overflow-x-hidden">
      <Background />
      <CursorGlow />

      {/* ── Fixed Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-sm pointer-events-none">
        {/* Logo */}
        <div className="pointer-events-auto">
          <h1 className="text-xl font-bold tracking-tighter text-white">Thomas Jefersson Vaz</h1>
        </div>

        {/* Desktop nav */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="px-3 py-1.5 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/50 transition-all"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Language toggle */}
        <button
          onClick={toggleLanguage}
          aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
          className="pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 hover:bg-slate-800/50 border border-slate-700/50 transition-all text-sm font-medium backdrop-blur-md"
        >
          <Languages size={16} />
          {lang === 'pt' ? 'EN' : 'BR'}
        </button>
      </header>

      <main className="container mx-auto px-4 pt-32 pb-20 relative z-10 max-w-7xl">
        {/* ── Hero ── */}
        <HeroCard t={t} />

        {/* ── Skills ── */}
        <section id="skills" className="mt-8">
          <SkillsGrid t={t} />
        </section>

        {/* ── Tech Stack Marquee ── */}
        <section id="stack" className="mt-16">
          <SectionTitle icon={<Container className="text-sky-400" />} label={lang === 'pt' ? 'Tech Stack' : 'Tech Stack'} />
          <TechMarquee />
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="mt-16">
          <SectionTitle icon={<Code className="text-indigo-400" />} label={t.projects} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {t.projectList.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="mt-16">
          <ContactSection t={t} lang={lang} />
        </section>
      </main>

      <Footer t={t} />
    </div>
  );
};

// ─── HERO CARD ────────────────────────────────────────────────────────────────
const HeroCard = ({ t }) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">

        {/* Avatar + greeting row */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative shrink-0">
            <img
              src="https://github.com/Thomas-Jefersson-Vaz.png"
              alt="Thomas Jefersson Vaz"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-2 ring-indigo-500/50 ring-offset-2 ring-offset-slate-950"
            />
            {/* Online indicator dot */}
            <span className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-950" />
          </div>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm font-mono text-indigo-400 tracking-widest uppercase"
          >
            {t.greeting ?? '> Hello, World!'}
          </motion.p>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">
          {t.role.split('&').map((part, i) => (
            <span key={i}>
              {i > 0 && (
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
                  &amp; {part}
                </span>
              )}
              {i === 0 && part}
            </span>
          ))}
        </h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
          {t.about}
        </p>

        {/* Live status row */}
        <StatusRow />

        {/* Social buttons */}
        <div className="flex gap-4 mt-6 flex-wrap">
          <SocialButton icon={<Github />} href="https://github.com/Thomas-Jefersson-Vaz" label="GitHub" />
          <SocialButton icon={<Linkedin />} href="https://www.linkedin.com/in/thomas-jefersson-vaz/" label="LinkedIn" />
          <SocialButton icon={<Mail />} href="mailto:contato@thomasjeferssonvaz.dev.br" label="Email" />
        </div>

        {/* Scroll cue */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-6 right-8 hidden md:flex items-center gap-1 text-slate-600 text-xs"
        >
          <ChevronDown size={14} className="animate-bounce" />
          scroll
        </motion.div>
      </div>
    </motion.div>
  );
};

// ─── STATUS ROW ───────────────────────────────────────────────────────────────
const DOMAINS = [
  { label: 'mikrolabs.dev', url: 'https://mikrolabs.dev', icon: <FlaskConical size={12} /> },
  { label: 'thomasjeferssonvaz.dev.br', url: 'https://thomasjeferssonvaz.dev.br', icon: <House size={12} /> },
];

const StatusRow = () => (
  <div className="flex flex-wrap items-center gap-2 mt-5">
    <UptimeBadge />
    {/* divider */}
    <span className="w-px h-4 bg-slate-700 rounded-full" />
    {DOMAINS.map(d => <DomainPill key={d.label} {...d} />)}
  </div>
);

// HomeLab badge — from Uptime Kuma
const UptimeBadge = () => {
  const [status, setStatus] = useState(null);
  const [uptime, setUptime] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const [statusRes, uptimeRes] = await Promise.all([
          fetch('https://up.mikrolabs.dev/api/badge/1/status?style=flat'),
          fetch('https://up.mikrolabs.dev/api/badge/1/uptime?style=flat'),
        ]);
        const statusSvg = await statusRes.text();
        const uptimeSvg = await uptimeRes.text();
        setStatus(statusSvg.includes('Up') ? 'up' : 'down');
        const match = uptimeSvg.match(/>[\d.]+%</);
        if (match) setUptime(match[0].slice(1, -1));
      } catch {
        setStatus('unknown');
      }
    };
    fetchStatus();
    const interval = setInterval(fetchStatus, 60_000);
    return () => clearInterval(interval);
  }, []);

  const dot = status === 'up' ? 'bg-emerald-500' : status === 'down' ? 'bg-rose-500' : 'bg-slate-500';
  const label = status === 'up' ? 'HomeLab Online' : status === 'down' ? 'HomeLab Down' : 'Checking...';

  return (
    <a
      href="https://up.mikrolabs.dev/status/main"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="HomeLab status page"
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-700/50 hover:border-emerald-500/30 transition-all text-xs text-slate-300 hover:text-white"
    >
      <span className={`w-2 h-2 rounded-full ${dot} ${status === 'up' ? 'animate-pulse' : ''}`} />
      <span>{label}</span>
      {uptime && <span className="text-slate-500">· {uptime} uptime</span>}
      <ExternalLink size={10} className="text-slate-600" />
    </a>
  );
};

// Domain link pill (static)
const DomainPill = ({ label, url, icon }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-700/50 hover:border-sky-500/30 transition-all text-xs text-slate-300 hover:text-white font-mono"
  >
    <span className="text-slate-500">{icon}</span>
    {label}
    <ExternalLink size={10} className="text-slate-600" />
  </a>
);

// ─── SKILLS GRID ─────────────────────────────────────────────────────────────
const SkillsGrid = ({ t }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Infrastructure */}
    <Card title={t.skills.infra} icon={<Server className="text-blue-400" />} delay={0.1}>
      <ul className="space-y-2 text-sm text-slate-400 border border-slate-700/50 p-3 mb-3 rounded-2xl">
        <li className="font-semibold text-slate-300 pb-1">Homelab</li>
        <li className="flex items-center gap-2"><Terminal size={14} /> {t.items.os}</li>
        <li className="flex items-center gap-2"><Cpu size={14} /> {t.items.cpu}</li>
        <li className="flex items-center gap-2"><MemoryStick size={14} /> {t.items.ram}</li>
        <li className="flex items-center gap-2"><HardDrive size={14} /> {t.items.disk}</li>
        <li className="flex items-center gap-2"><ArrowUpDown size={14} /> {t.items.band}</li>
      </ul>
      <ul className="space-y-2 text-sm text-slate-400 border border-slate-700/50 p-3 rounded-2xl">
        <li className="font-semibold text-slate-300 pb-1">Oracle VPS</li>
        <li className="flex items-center gap-2"><Terminal size={14} /> {t.items.vps.os}</li>
        <li className="flex items-center gap-2"><Cpu size={14} /> {t.items.vps.cpu}</li>
        <li className="flex items-center gap-2"><MemoryStick size={14} /> {t.items.vps.ram}</li>
        <li className="flex items-center gap-2"><HardDrive size={14} /> {t.items.vps.disk}</li>
        <li className="flex items-center gap-2"><ArrowUpDown size={14} /> {t.items.vps.band}</li>
      </ul>
    </Card>

    {/* Networking */}
    <Card title={t.skills.network} icon={<Network className="text-emerald-400" />} delay={0.2}>
      <div className="grid grid-cols-1 gap-2">
        <SkillPill icon={<Globe size={14} />} text={t.items.mikrotik} />
        <SkillPill icon={<Lock size={14} />} text={t.items.vpn} />
        <SkillPill icon={<Radio size={14} />} text={t.items.tunnel} />
        <SkillPill icon={<Shield size={14} />} text={t.items.auth} />
        <SkillPill icon={<Activity size={14} />} text={t.items.snmp} />
      </div>
    </Card>
  </div>
);

// ─── TECH MARQUEE ─────────────────────────────────────────────────────────────
const TechMarquee = () => {
  const doubled = [...TECH_STACK, ...TECH_STACK]; // duplicate for seamless loop

  return (
    <div className="relative mt-6 overflow-hidden">
      {/* fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-4"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map((tech, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center gap-3 px-5 py-3 glass-card rounded-2xl border border-slate-700/50 hover:border-indigo-500/40 transition-colors group"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-6 h-6 object-contain"
              loading="lazy"
            />
            <span className="text-sm text-slate-300 whitespace-nowrap group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// ─── PROJECT CARD ────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index }) => {
  const Wrapper = project.href ? 'a' : 'div';
  const wrapperProps = project.href
    ? { href: project.href, target: '_blank', rel: 'noopener noreferrer', 'aria-label': project.title }
    : {};

  // Map local icon filenames based on iconUrl
  const localIcon = project.iconUrl?.includes('529863') ? '/icons/server.svg'
    : project.iconUrl?.includes('532033') ? '/icons/cloud.svg'
      : project.iconUrl?.includes('448068') ? '/icons/movies.svg'
        : project.iconUrl?.includes('524086') ? '/icons/lock.svg'
          : project.iconUrl?.includes('445892') ? '/icons/monitoring.svg'
            : project.iconUrl?.includes('339083') ? '/icons/collab.svg'
              : project.iconUrl?.includes('532711') ? '/icons/music.svg'
                : project.iconUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <Wrapper
        {...wrapperProps}
        className="block glass-card rounded-3xl p-6 hover:translate-y-[-4px] transition-all duration-300 group hover:border-indigo-500/30 flex flex-col gap-4 h-full"
      >
        <div className="flex justify-between items-start">
          <div className="p-3 rounded-2xl bg-slate-950/50 border border-slate-700/50 group-hover:border-indigo-500/30 transition-colors">
            {localIcon ? (
              <img src={localIcon} alt="" aria-hidden="true" className="w-8 h-8 object-contain brightness-0 invert" />
            ) : (
              <div className="w-8 h-8 flex items-center justify-center text-slate-600">
                <Globe size={20} />
              </div>
            )}
          </div>
          {project.href && (
            <ExternalLink size={16} className="text-slate-600 group-hover:text-indigo-400 transition-colors mt-1" />
          )}
        </div>

        <div className="h-full flex flex-col">
          <h4 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h4>
          <p className="text-slate-400 text-sm mb-4 flex-1 leading-relaxed">
            {project.desc}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs px-2 py-1 rounded-full bg-slate-950/50 border border-slate-800 text-slate-400 group-hover:border-indigo-900/50 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
};

// ─── CONTACT SECTION ─────────────────────────────────────────────────────────
const ContactSection = ({ t, lang }) => {
  const label = lang === 'pt' ? 'Contato' : 'Contact';
  const subtitle = lang === 'pt'
    ? 'Tem um projeto em mente, uma oportunidade ou só quer trocar uma ideia? Chama!'
    : 'Have a project in mind, an opportunity, or just want to chat? Reach out!';
  const cta = lang === 'pt' ? 'Enviar email' : 'Send email';
  const linkedin = lang === 'pt' ? 'Ver LinkedIn' : 'View LinkedIn';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-xl bg-slate-950/50 border border-slate-700/50">
              <Send className="text-indigo-400" size={20} />
            </div>
            <h3 className="text-2xl font-bold text-white">{label}</h3>
          </div>
          <p className="text-slate-400 max-w-md leading-relaxed">{subtitle}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href="mailto:contato@thomasjeferssonvaz.dev.br"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20"
          >
            <Mail size={18} />
            {cta}
          </a>
          <a
            href="https://www.linkedin.com/in/thomas-jefersson-vaz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 text-slate-200 font-medium transition-all hover:scale-105"
          >
            <Linkedin size={18} />
            {linkedin}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// ─── FOOTER ──────────────────────────────────────────────────────────────────
const Footer = ({ t }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-slate-800/50 mt-4">
      <div className="container mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <span>
          © {year} <span className="text-slate-400">Thomas Jefersson Vaz</span> · thomasjeferssonvaz.dev.br
        </span>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Thomas-Jefersson-Vaz" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-slate-200 transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/thomas-jefersson-vaz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-slate-200 transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:contato@thomasjeferssonvaz.dev.br" aria-label="Email" className="hover:text-slate-200 transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

// ─── CURSOR GLOW ─────────────────────────────────────────────────────────────
const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    const move = (e) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-30 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)',
        transition: 'left 0.12s ease-out, top 0.12s ease-out',
      }}
    />
  );
};

// ─── BACKGROUND ──────────────────────────────────────────────────────────────
const Background = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div style={{ y: y1 }} className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[120px]" />
      <motion.div style={{ y: y2 }} className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]" />
    </div>
  );
};

// ─── REUSABLE COMPONENTS ─────────────────────────────────────────────────────

const SectionTitle = ({ icon, label }) => (
  <div className="flex items-center gap-3 mb-2">
    <div className="p-2 rounded-xl bg-slate-900/50 border border-slate-700/50">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white">{label}</h3>
  </div>
);

const Card = ({ children, title, icon, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className={cn(
      "glass-card rounded-3xl p-6 flex flex-col gap-4 hover:bg-slate-800/40 transition-colors group",
      className
    )}
  >
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 rounded-xl bg-slate-950/50 border border-slate-700/50 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-semibold text-slate-200">{title}</h3>
    </div>
    <div className="flex-1">{children}</div>
  </motion.div>
);

const SkillPill = ({ icon, text }) => (
  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/30 border border-slate-700/50 text-sm text-slate-300 hover:bg-slate-800/50 transition-colors">
    {icon}
    <span>{text}</span>
  </div>
);

const SocialButton = ({ icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="p-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
  >
    {icon}
  </a>
);

export default App;
