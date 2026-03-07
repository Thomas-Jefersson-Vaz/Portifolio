export const translations = {
    pt: {
        greeting: '> Olá, Mundo!',
        role: "Especialista em TI & Infraestrutura",
        about: "Foco em Administração de Sistemas, Redes e HomeLab. Entusiasta de orquestração via Docker e segurança com MikroTik.",
        skills: {
            infra: "Infraestrutura e Servidores",
            network: "Redes e Conectividade",
            dev: "Desenvolvimento e Automação",
            security: "Segurança e Monitoramento"
        },
        projects: "Projetos de Destaque",
        contact: "Entre em contato",
        toggleLang: "Switch to English",
        items: {
            os: "Debian 12",
            cpu: "I3-10100 4 Cores 8 Threads 4,30 GHz",
            ram: "16Gb",
            disk: "500Gb NVMe",
            band: "500Mbps",
            mikrotik: "MikroTik Rb750gr3",
            vpn: "Tailscale/Headscale",
            tunnel: "Cloudflare Tunnels",
            bots: "Discord Bots (JS/Node)",
            ai: "Local LLMs (Ollama)",
            auth: "Authentik (SSO)",
            snmp: "Monitoramento SNMP",
            vps: {
                os: "Oracle Ubuntu 24.04",
                cpu: "VM.Standard.A1.Flex 4OCUs",
                ram: "24Gb",
                disk: "120Gb",
                band: "4Gbps",

            }
        },
        projectList: [
            {
                title: "HomeLab Híbrido (Local + Cloud)",
                iconUrl: "https://www.svgrepo.com/show/529863/server-minimalistic.svg",
                href: "https://github.com/Thomas-Jefersson-Vaz",
                desc: "Infraestrutura híbrida integrando servidor i3-10100 local com Oracle Cloud via Tailscale Mesh, superando CGNAT para comunicação estável.",
                tags: ["Tailscale", "Oracle Cloud", "Hybrid", "CGNAT"]
            },
            {
                title: "Infraestrutura Pessoal",
                iconUrl: "https://www.svgrepo.com/show/532033/cloud.svg",
                href: "https://thomasjeferssonvaz.dev.br",
                desc: "Ecossistema auto-hospedado no domínio thomasjeferssonvaz.dev.br com Cloudflare Tunnels e SSL automatizado.",
                tags: ["Cloudflare", "Self-hosted", "SSL", "Tunnels"]
            },
            {
                title: "Media & Automation Stack",
                iconUrl: "https://www.svgrepo.com/show/448068/movies.svg",
                desc: "Pipeline de entretenimento com Jellyfin, *Arr Stack e qBittorrent/FlareSolverr para automação total de mídia.",
                tags: ["Jellyfin", "*Arr Stack", "Docker", "Automation"]
            },
            {
                title: "Security & Identity Management",
                iconUrl: "https://www.svgrepo.com/show/524086/lock-password.svg",
                desc: "Gestão centralizada com Authentik (SSO/LDAP), Vaultwarden para senhas e Portainer/pgAdmin para administração.",
                tags: ["Authentik", "SSO", "Security", "Vaultwarden"]
            },
            {
                title: "Monitoring & Observability",
                iconUrl: "https://www.svgrepo.com/show/445892/monitoring-health.svg",
                desc: "Monitoramento proativo com Prometheus, Grafana e Node-Exporter. Dashdot para visualização em tempo real.",
                tags: ["Prometheus", "Grafana", "Dashdot", "Monitoring"]
            },
            {
                title: "Collaboration & Productivity",
                iconUrl: "https://www.svgrepo.com/show/339083/collaboration.svg",
                desc: "Ferramentas como AFFiNE e automação via n8n/Evolution API, suportadas por MySQL e PostgreSQL 17.",
                tags: ["n8n", "PostgreSQL", "Redis", "Automation"]
            },
            {
                title: "MikroTech Radio Bot",
                iconUrl: "https://www.svgrepo.com/show/532711/music-note.svg",
                href: "https://mikrolabs.dev/invite",
                desc: "Bot do Discord para streaming de música sob demanda.",
                tags: ["Discord", "Radio", "Music", "Automation"]
            }
        ]
    },
    en: {
        greeting: '> Hello, World!',
        role: "IT Specialist & Infrastructure",
        about: "Focus on System Administration, Networks, and HomeLabs. Enthusiast of Docker orchestration and MikroTik security.",
        skills: {
            infra: "Infrastructure & Servers",
            network: "Networking & Connectivity",
            dev: "Development & Automation",
            security: "Security & Monitoring"
        },
        projects: "Featured Projects",
        contact: "Get in touch",
        toggleLang: "Mudar para Português",
        items: {
            os: "Debian 12",
            cpu: "I3-10100 4 Cores 8 Threads 4,30 GHz",
            ram: "16Gb",
            disk: "500Gb NVMe",
            band: "500Mbps",
            mikrotik: "MikroTik Rb750gr3",
            vpn: "Tailscale/Headscale",
            tunnel: "Cloudflare Tunnels",
            bots: "Discord Bots (JS/Node)",
            ai: "Local LLMs (Ollama)",
            auth: "Authentik (SSO)",
            snmp: "SNMP Monitoring",
            vps: {
                os: "Oracle Ubuntu 24.04",
                cpu: "VM.Standard.A1.Flex 4OCUs",
                ram: "24Gb",
                disk: "120Gb",
                band: "4Gbps",

            }
        },
        projectList: [
            {
                title: "Hybrid HomeLab (Local + Cloud)",
                iconUrl: "https://www.svgrepo.com/show/529863/server-minimalistic.svg",
                href: "https://github.com/Thomas-Jefersson-Vaz",
                desc: "Hybrid infrastructure integrating local i3-10100 server with Oracle Cloud via Tailscale Mesh, overcoming CGNAT.",
                tags: ["Tailscale", "Oracle Cloud", "Hybrid", "CGNAT"]
            },
            {
                title: "Personal Infrastructure",
                iconUrl: "https://www.svgrepo.com/show/532033/cloud.svg",
                href: "https://thomasjeferssonvaz.dev.br",
                desc: "Self-hosted ecosystem on thomasjeferssonvaz.dev.br with Cloudflare Tunnels and automated SSL.",
                tags: ["Cloudflare", "Self-hosted", "SSL", "Tunnels"]
            },
            {
                title: "Media & Automation Stack",
                iconUrl: "https://www.svgrepo.com/show/448068/movies.svg",
                desc: "Entertainment pipeline with Jellyfin, *Arr Stack, and qBittorrent/FlareSolverr for full media automation.",
                tags: ["Jellyfin", "*Arr Stack", "Docker", "Automation"]
            },
            {
                title: "Security & Identity Management",
                iconUrl: "https://www.svgrepo.com/show/524086/lock-password.svg",
                desc: "Centralized management with Authentik (SSO/LDAP), Vaultwarden, and Portainer/pgAdmin for administration.",
                tags: ["Authentik", "SSO", "Security", "Vaultwarden"]
            },
            {
                title: "Monitoring & Observability",
                iconUrl: "https://www.svgrepo.com/show/445892/monitoring-health.svg",
                desc: "Proactive monitoring with Prometheus, Grafana, and Node-Exporter. Dashdot for real-time visualization.",
                tags: ["Prometheus", "Grafana", "Dashdot", "Monitoring"]
            },
            {
                title: "Collaboration & Productivity",
                iconUrl: "https://www.svgrepo.com/show/339083/collaboration.svg",
                desc: "Tools like AFFiNE and automation via n8n/Evolution API, supported by MySQL and PostgreSQL 17.",
                tags: ["n8n", "PostgreSQL", "Redis", "Automation"]
            },
            {
                title: "MikroTech Radio Bot",
                iconUrl: "https://www.svgrepo.com/show/532711/music-note.svg",
                href: "https://mikrolabs.dev/invite",
                desc: "Discord bot for music streaming on demand",
                tags: ["Discord", "Radio", "Music", "Automation"]
            }
        ]
    }
};
