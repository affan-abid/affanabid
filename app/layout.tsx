import type { Metadata } from 'next'
import { Bricolage_Grotesque, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

// ── Heading font: Bricolage Grotesque ─────────────────────────────────────────
// Expressive variable-width grotesque — wide at large sizes, feels editorial
// and technical at once. Perfect for a senior engineer's portfolio.
const bricolage = Bricolage_Grotesque({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-display',
})

// ── Body font: Plus Jakarta Sans ──────────────────────────────────────────────
// Refined, geometric humanist sans — highly readable, modern, warm.
const jakarta = Plus_Jakarta_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-body',
})

// ── Mono font: JetBrains Mono ─────────────────────────────────────────────────
// Developer-coded, sharp — great for labels, tags, nav items.
const jetbrainsMono = JetBrains_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Muhammad Affan Abid — Senior Full-Stack Engineer',
  description:
    'Backend-focused full-stack engineer with 5+ years building B2B SaaS in healthcare, fintech & education. 2M+ monthly API requests, <200ms latency, 90% faster deployments.',
  keywords: ['Full Stack Engineer', 'Node.js', 'React', 'Laravel', 'AWS', 'TypeScript', 'New York'],
  authors: [{ name: 'Muhammad Affan Abid' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${jakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
