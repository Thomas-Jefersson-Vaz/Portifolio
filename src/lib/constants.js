export const ABOUT_ME = {
    en: {
        hero: {
            title: "Thomas Jefersson Vaz",
            role: "System Admin & Network Specialist",
            bio: "IT Specialist focused on System Administration, Networks, and DevOps practices.",
            tagline: "Building resilient infrastructure and modern web experiences."
        },
        skills: {
            infrastructure: {
                title: "Infrastructure & Servers",
                items: [
                    "Linux (Debian 12)",
                    "Docker & Docker Compose",
                    "Hardware Assembly & Maintenance",
                    "NVMe Storage Optimization"
                ]
            },
            networking: {
                title: "Networking & Connectivity",
                items: [
                    "MikroTik (Routing, Firewall, VLANs)",
                    "Tailscale/Headscale Mesh VPNs",
                    "Cloudflare Tunnels",
                    "Oracle Cloud VPS Integration"
                ]
            },
            dev: {
                title: "Development & Automation",
                items: [
                    "Discord Bots (Node.js)",
                    "Local LLMs (Ollama + Open WebUI)",
                    "Authentik Identity Management",
                    "SNMP Monitoring"
                ]
            }
        },
        projects: [
            {
                title: "Hybrid HomeLab",
                description: "Unified network integrating local physical servers with Oracle Cloud instances via Tailscale mesh VPN.",
                tech: ["Tailscale", "Oracle Cloud", "Docker"]
            },
            {
                title: "Personal Domain Infra",
                description: "Automated subdomains and SSL management for thomasjeferssonvaz.dev.br via Cloudflare.",
                tech: ["Cloudflare", "SSL", "DNS"]
            },
            {
                title: "MicroTech-RadioBot",
                description: "High-performance Discord music bot with focus on stability and audio quality.",
                tech: ["Node.js", "Discord.js", "Lavalink"]
            }
        ]
    },
    pt: {
        hero: {
            title: "Thomas Jefersson Vaz",
            role: "Administrador de Sistemas & Especialista em Redes",
            bio: "Especialista em TI focado em Administração de Sistemas, Redes e práticas DevOps.",
            tagline: "Construindo infraestrutura resiliente e experiências web modernas."
        },
        skills: {
            infrastructure: {
                title: "Infraestrutura e Servidores",
                items: [
                    "Linux (Debian 12)",
                    "Docker e Docker Compose",
                    "Montagem e Manutenção de Hardware",
                    "Otimização de Armazenamento NVMe"
                ]
            },
            networking: {
                title: "Redes e Conectividade",
                items: [
                    "MikroTik (Roteamento, Firewall, VLANs)",
                    "VPN Mesh (Tailscale/Headscale)",
                    "Cloudflare Tunnels",
                    "Integração Oracle Cloud VPS"
                ]
            },
            dev: {
                title: "Desenvolvimento e Automação",
                items: [
                    "Bots para Discord (Node.js)",
                    "LLMs Locais (Ollama + Open WebUI)",
                    "Gestão de Identidade com Authentik",
                    "Monitoramento SNMP"
                ]
            }
        },
        projects: [
            {
                title: "HomeLab Híbrido",
                description: "Rede unificada integrando servidores físicos locais com instâncias na Oracle Cloud via VPN Tailscale.",
                tech: ["Tailscale", "Oracle Cloud", "Docker"]
            },
            {
                title: "Infraestrutura de Domínio Pessoal",
                description: "Gestão automatizada de subdomínios e SSL para thomasjeferssonvaz.dev.br via Cloudflare.",
                tech: ["Cloudflare", "SSL", "DNS"]
            },
            {
                title: "MicroTech-RadioBot",
                description: "Bot de música para Discord de alta performance com foco em estabilidade e qualidade de áudio.",
                tech: ["Node.js", "Discord.js", "Lavalink"]
            }
        ]
    }
};
