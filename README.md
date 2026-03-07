# 🖥️ Thomas Jefersson Vaz — Portfolio

Personal portfolio website built with **React + Vite**, featuring a dark glassmorphism Bento Grid layout, bilingual support (PT-BR / EN), live infrastructure status badges, and smooth animations.

**Live:** [thomasjeferssonvaz.dev.br](https://thomasjeferssonvaz.dev.br)

---

## ✨ Features

- **Bento Grid layout** — responsive 1 → 2 → 3 column grid
- **Bilingual** — PT-BR / EN toggle with full translation support
- **Live status row** — HomeLab uptime (via [Uptime Kuma](https://up.mikrolabs.dev/status/main)) + domain links
- **Tech Stack marquee** — animated horizontal ticker with tool logos
- **Project cards** — 7 self-hosted projects with icons, tags, and external links
- **Skills section** — HomeLab & Oracle VPS specs + networking tools
- **Contact section** — direct email CTA + LinkedIn
- **Cursor glow** — subtle radial gradient follows the cursor
- **Smooth scroll** — inertial scrolling via [Lenis](https://lenis.darkroom.engineering/)
- **Dockerized** — ready to self-host with a single command

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 7 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| Smooth Scroll | Lenis |
| Icons | Lucide React |
| Deployment | Docker + Docker Compose |

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## 🐳 Deploy with Docker

```bash
docker compose up -d
```

The site is served as a static build via Nginx on port **80**.

---

## 📁 Project Structure

```
src/
├── App.jsx          — All components (Hero, Skills, Projects, Contact, Footer)
├── translations.js  — All content in PT-BR and EN
├── index.css        — Global styles & Tailwind theme
└── lib/
    └── cn.js        — clsx + tailwind-merge helper
public/
├── icons/           — Local SVG project icons
└── og-image.png     — Open Graph social preview image
```

---

## ✏️ Customizing Content

All text, projects, and skills live in **`src/translations.js`** — edit that file to update any content without touching the component logic.

To add a new project:
```js
{
  title: "My Project",
  iconUrl: "/icons/my-icon.svg",  // or a URL
  href: "https://github.com/...", // optional — makes the card clickable
  desc: "Short description.",
  tags: ["Tag1", "Tag2"]
}
```

---

## 📄 License

MIT — feel free to fork and adapt for your own portfolio.
