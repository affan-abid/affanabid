'use client'
import { useState } from 'react'
import { person } from '@/data'
import { useReveal } from '@/hooks/useReveal'
import sec from './Section.module.css'
import styles from './Contact.module.css'

const LinkIcons = {
  email: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  phone: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  research: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      <path d="M8 7h8"/>
      <path d="M8 11h8"/>
      <path d="M8 15h4"/>
    </svg>
  ),
}

const LINKS = [
  { tag: 'EMAIL',    href: `mailto:${person.email}`,  label: person.email, icon: 'email' as const },
  { tag: 'PHONE',    href: `tel:${person.phone}`,      label: person.phone, icon: 'phone' as const },
  { tag: 'LINKEDIN', href: person.linkedin,            label: 'Muhammad Affan Abid', icon: 'linkedin' as const },
  { tag: 'RESEARCH', href: 'https://ir.iba.edu.pk/research-projects-mscs/51/', label: 'Published Paper — IBA', icon: 'research' as const },
]

const STATUS_ITEMS = [
  {
    icon: '📍',
    tag: 'LOCATION',
    label: 'Hicksville, New York',
    sub: 'Open to Remote · Hybrid · Relocation',
    color: 'accent' as const,
  },
  {
    icon: '',
    iconSrc: 'https://flagcdn.com/w80/us.png',
    tag: 'WORK AUTH',
    label: 'Work Authorized',
    sub: 'OPT · Available Immediately',
    color: 'blue' as const,
  },
]

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    setSent(true)
  }

  return (
    <section id="contact" className={`${sec.section} ${styles.section}`} ref={ref}>
      <p className={sec.label}>06 — Contact</p>
      <h2 className={`${sec.title} ${styles.title}`}>
        Let&apos;s Build<br /><em className={sec.titleAccent}>Something.</em>
      </h2>

      <div className={styles.grid}>
        <div className={`${styles.left} reveal`}>
          <p className={styles.copy}>
            Open to senior engineering roles, technical leadership, and consulting opportunities.
            If you&apos;re building something ambitious in healthcare, fintech, or beyond — let&apos;s talk.
          </p>

          {/* Clickable contact links */}
          <div className={styles.links}>
            {LINKS.map(({ tag, href, label, icon }) => (
              <a key={tag} href={href} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <span className={styles.linkIcon}>{LinkIcons[icon]}</span>
                <span className={styles.linkTag}>{tag}</span>
                <span className={styles.linkLabel}>{label}</span>
              </a>
            ))}
          </div>

          {/* Non-link status items — location & work auth */}
          <div className={styles.statusGrid}>
            {STATUS_ITEMS.map(({ icon, iconSrc, tag, label, sub, color }) => (
              <div key={tag} className={`${styles.statusCard} ${styles[`statusCard__${color}`]}`}>
                <span className={styles.statusIcon}>
                  {iconSrc ? (
                    <img src={iconSrc} alt="USA" className={styles.statusIconImg} width={32} height={24} />
                  ) : (
                    icon
                  )}
                </span>
                <div className={styles.statusBody}>
                  <div className={styles.statusTag}>{tag}</div>
                  <div className={styles.statusLabel}>{label}</div>
                  <div className={styles.statusSub}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className={`${styles.right} reveal`}>
          {sent ? (
            <div className={styles.success}>
              <span className={styles.successIcon}>✓</span>
              Message received! I&apos;ll be in touch soon.
            </div>
          ) : (
            <>
              <input className={styles.input} type="text"  name="name"    placeholder="Your Name"    value={form.name}    onChange={onChange} />
              <input className={styles.input} type="email" name="email"   placeholder="Your Email"   value={form.email}   onChange={onChange} />
              <textarea className={`${styles.input} ${styles.textarea}`} name="message" placeholder="Your Message" value={form.message} onChange={onChange} />
              <button className={styles.submit} onClick={onSubmit}>Send Message →</button>
            </>
          )}
        </div> */}
      </div>
    </section>
  )
}
