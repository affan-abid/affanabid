# Muhammad Affan Abid — Portfolio (Next.js 14)

Production-grade personal portfolio built with **Next.js 14 App Router**, **TypeScript**, and **CSS Modules**. Zero runtime dependencies beyond Next.js.

---

## 🚀 Quick Start

```bash
npm install
npm run dev        # → http://localhost:3000
npm run build      # production build
npm start          # serve production build
```

## 🌐 Deploy to Vercel (60 seconds)

```bash
# Option A: CLI
npm i -g vercel && vercel

# Option B: GitHub → vercel.com → Import Repo → Deploy
```

---

## 🗂 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Fonts (Syne, Instrument Serif, JetBrains Mono), metadata
│   ├── page.tsx            # "/" route — composes all sections
│   └── globals.css         # Design tokens, mesh gradient BG, dot grid, animations
│
├── components/
│   ├── Navbar.tsx/.css     # Fixed nav, frosted glass on scroll, active link highlight
│   ├── Hero.tsx/.css       # Full-viewport hero, stat card, entrance animations
│   ├── About.tsx/.css      # Bio, inline metric strip, education sidebar
│   ├── Skills.tsx/.css     # 6 skill category cards, hover accent line
│   ├── Experience.tsx/.css # Experience cards with metric chips + bullets
│   ├── Projects.tsx/.css   # 6 project cards, 3-col grid
│   ├── Publication.tsx/.css# Research publication card
│   ├── Contact.tsx/.css    # Dark contact section + controlled form
│   ├── Footer.tsx/.css     # Minimal footer
│   └── Section.module.css  # Shared section label/title styles
│
├── data/
│   └── index.ts            # ← ALL content here. Edit this to update portfolio.
│
├── hooks/
│   └── useReveal.ts        # IntersectionObserver scroll-reveal hook
```

---

## ✏️ Updating Content

**Everything lives in `data/index.ts`.** To update your portfolio:

```ts
// Change your name, email, etc.
export const person = { name: '...', email: '...' }

// Add/edit a project
export const projects = [
  { name: 'New Project', description: '...', stack: ['React'], ... }
]
```

No component files need touching.

---

## 🎨 Design System

| Token       | Value     | Purpose                       |
|-------------|-----------|-------------------------------|
| `--bg`      | `#0a0a0f` | Page background               |
| `--surface` | `#0f0f17` | Card backgrounds              |
| `--accent`  | `#e8613a` | Terracotta — CTAs, highlights |
| `--accent2` | `#56b3f4` | Blue — company names, links   |
| `--green`   | `#3ddc84` | Availability badge            |
| `--purple`  | `#a78bfa` | Gradient accents              |

**Fonts:**
- **Syne** (800w) — Display headings. Bold, geometric, tech-forward.
- **Instrument Serif** (italic) — Accent italic text. Elegant contrast.
- **JetBrains Mono** — Labels, tags, nav. Developer-coded feel.

**Background layers (globals.css):**
1. Mesh radial gradient blobs (warm amber, cool blue, soft purple)
2. Fine dot-grid pattern (28px × 28px)
3. Both via CSS `::before` / `::after` — no images, no JS

---

## 📧 Wiring Up the Contact Form

Currently shows success on submit. To send real emails with **Resend**:

```bash
npm install resend
```

Create `app/api/contact/route.ts`:
```ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, message } = await req.json()
  await resend.emails.send({
    from: 'portfolio@yourdomain.com',
    to: 'm.affanabid@gmail.com',
    subject: `Portfolio contact from ${name}`,
    text: `From: ${email}\n\n${message}`,
  })
  return Response.json({ ok: true })
}
```

Then in `Contact.tsx`, change `onSubmit` to:
```ts
const onSubmit = async () => {
  await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
  setSent(true)
}
```

Add `RESEND_API_KEY` to Vercel environment variables.

---

## ✅ Before Going Live

- [ ] Update `person.linkedin` in `data/index.ts` with your real LinkedIn URL
- [ ] Add profile photo (optional — place in `public/` and add to Hero)
- [ ] Wire up contact form (see above)
- [ ] Set custom domain in Vercel dashboard
- [ ] Update `metadata` in `layout.tsx` with your domain for OG tags
