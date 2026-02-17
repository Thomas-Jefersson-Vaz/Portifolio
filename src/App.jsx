
import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Server, Network, Code, Shield,
  Cpu, Globe, Lock, Terminal, Radio,
  Github, Linkedin, Mail, Languages,
  MemoryStick, ArrowUpDown, HardDrive,
  Phone
} from 'lucide-react';
import { translations } from './translations';
import { cn } from './lib/cn';

const App = () => {
  // Configuração de idioma (padrão 'pt' = Português)
  // Edite o arquivo './translations.js' para alterar os textos
  const [lang, setLang] = useState('pt');
  const t = translations[lang];

  // Efeito de scroll suave 'Inertial' com Lenis
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const toggleLanguage = () => {
    setLang(prev => prev === 'pt' ? 'en' : 'pt');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 font-sans overflow-x-hidden">
      <Background />

      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-sm pointer-events-none">
        <div className="pointer-events-auto">
          <h1 className="text-xl font-bold tracking-tighter text-white">Thomas Jefersson Vaz</h1>
        </div>
        {/* Botão de Troca de Idioma */}
        <button
          onClick={toggleLanguage}
          className="pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 hover:bg-slate-800/50 border border-slate-700/50 transition-all text-sm font-medium backdrop-blur-md"
        >
          <Languages size={16} />
          {lang === 'pt' ? 'EN' : 'PT'}
        </button>
      </header>

      <main className="container mx-auto px-4 pt-32 pb-20 relative z-10 max-w-7xl">
        <BentoGrid t={t} />
      </main>
    </div>
  );
};

// Componente de Fundo com Parallax (Bolinhas coloridas que se mexem)
const Background = () => {
  const { scrollY } = useScroll();
  // Ajuste a velocidade do parallax mudando os valores finais [0, 200]
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]"
      />
    </div>
  );
};

// Grid Principal (Estilo Bento)
const BentoGrid = ({ t }) => {
  // Ajuste o layout responsivo nas classes: grid-cols-1 (mobile), md:grid-cols-4 (tablet), lg:grid-cols-6 (desktop)
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-[minmax(180px,auto)] gap-4">

      {/* Profile Card - Large */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="col-span-1 md:col-span-4 lg:col-span-4 row-span-2 glass-card rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">
            {t.role}
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            {t.about}
          </p>
          {/* Redes Sociais - Adicione/Remova links aqui */}
          <div className="flex gap-4 mt-8">
            <SocialButton icon={<Github />} href="https://github.com/Thomas-Jefersson-Vaz" />
            <SocialButton icon={<Linkedin />} href="https://www.linkedin.com/in/thomas-jefersson-vaz/" />
            <SocialButton icon={<Mail />} href="mailto:contato@thomasjeferssonvaz.dev.br" />
            <SocialButton icon={<Phone />} href="tel:+5542998256985" />
          </div>
        </div>
      </motion.div>

      {/* Habilidade: Infraestrutura */}
      {/* 'md:col-span-2' faz ocupar 2 colunas em telas médias+ */}
      <Card title={t.skills.infra} icon={<Server className="text-blue-400" />} delay={0.1} className="md:col-span-2">
        <ul className="space-y-2 text-sm text-slate-400 border border-slate-700/50 p-3 mb-4 rounded-3xl">
          <p>Homelab</p>
          <li className="flex items-center gap-2"><Terminal size={14} /> {t.items.os}</li>
          <li className="flex items-center gap-2"><Cpu size={14} /> {t.items.cpu}</li>
          <li className="flex items-center gap-2"><MemoryStick size={14} /> {t.items.ram}</li>
          <li className="flex items-center gap-2"><HardDrive size={14} /> {t.items.disk}</li>
          <li className="flex items-center gap-2"><ArrowUpDown size={14} /> {t.items.band}</li>
        </ul>
        <ul className="space-y-2 text-sm text-slate-400 border border-slate-700/50 p-3 mb-4 rounded-3xl">
          <p>Oracle VPS</p>
          <li className="flex items-center gap-2"><Terminal size={14} /> {t.items.vps.os}</li>
          <li className="flex items-center gap-2"><Cpu size={14} /> {t.items.vps.cpu}</li>
          <li className="flex items-center gap-2"><MemoryStick size={14} /> {t.items.vps.ram}</li>
          <li className="flex items-center gap-2"><HardDrive size={14} /> {t.items.vps.disk}</li>
          <li className="flex items-center gap-2"><ArrowUpDown size={14} /> {t.items.vps.band}</li>
        </ul>
      </Card>

      {/* Habilidade: Redes */}
      <Card title={t.skills.network} icon={<Network className="text-emerald-400" />} delay={0.2} className="md:col-span-2">
        <div className="grid grid-cols-1 gap-2">
          <SkillPill icon={<Globe size={14} />} text={t.items.mikrotik} />
          <SkillPill icon={<Lock size={14} />} text={t.items.vpn} />
          <SkillPill icon={<Radio size={14} />} text={t.items.tunnel} />
        </div>
      </Card>

      {/* Seção de Título de Projetos */}
      <div className="col-span-1 md:col-span-4 lg:col-span-6 row-span-auto mt-8 mb-4">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Code className="text-indigo-400" /> {t.projects}
        </h3>
      </div>

      {/* Lista de Projetos (Renderizada dinamicamente via map) */}
      {t.projectList.map((project, i) => (
        <ProjectCard key={i} project={project} index={i} />
      ))}

      {/* Habilidade: Dev */}
      {/* <Card title={t.skills.dev} icon={<Code className="text-amber-400" />} delay={0.3} className="md:col-span-3">
        <div className="flex flex-wrap gap-2">
          <SkillPill text={t.items.bots} />
          <SkillPill text={t.items.ai} />
        </div>
      </Card> */}

      {/* Habilidade: Segurança - Último Card */}
      {/* <Card title={t.skills.security} icon={<Shield className="text-rose-400" />} delay={0.4} className="md:col-span-3">
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 rounded bg-slate-800/30">
            <span className="text-sm">{t.items.auth}</span>
            <Lock size={14} className="text-rose-400" />
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-slate-800/30">
            <span className="text-sm">{t.items.snmp}</span>
            <Radio size={14} className="text-rose-400" />
          </div>
        </div>
      </Card> */}

    </div>
  );
};

// Componente Base do Cartão (Card Genérico)
const Card = ({ children, title, icon, className, delay = 0 }) => {
  return (
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
      <div className="flex-1">
        {children}
      </div>
    </motion.div>
  );
};

// Componente Específico para Projetos
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="col-span-1 md:col-span-2 glass-card rounded-3xl p-6 hover:translate-y-[-4px] transition-all duration-300 group cursor-pointer hover:border-indigo-500/30 flex flex-col gap-4"
    >
      <div className="flex justify-between items-start">
        <div className="p-3 rounded-2xl bg-slate-950/50 border border-slate-700/50">
          {project.iconUrl ? (
            <img src={project.iconUrl} alt={project.title} className="w-8 h-8 object-contain brightness-0 invert" />
          ) : (
            <div className="w-8 h-8 flex items-center justify-center text-slate-600">
              <Globe size={20} />
            </div>
          )}
        </div>
      </div>

      <div className="h-full flex flex-col">
        <h4 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h4>
        <p className="text-slate-400 text-sm mb-4 flex-1 leading-relaxed">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-slate-950/50 border border-slate-800 text-slate-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Componente de "Pílula" para listar habilidades menores
const SkillPill = ({ icon, text }) => (
  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/30 border border-slate-700/50 text-sm text-slate-300 hover:bg-slate-800/50 transition-colors">
    {icon}
    <span>{text}</span>
  </div>
);

// Botão para links sociais (Github, LinkedIn, etc)
const SocialButton = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
  >
    {icon}
  </a>
);

export default App;
